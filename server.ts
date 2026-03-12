import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // API Route for sending emails
  app.post('/api/send-email', async (req, res) => {
    const { nome, email, telefone, mensagem } = req.body;

    // Validate input
    if (!nome || !email || !mensagem) {
      return res.status(400).json({ error: 'Campos obrigatórios faltando' });
    }

    // Configure the transporter
    // Note: In a real production app, you would use a service like SendGrid, Mailgun, or Gmail SMTP
    // with environment variables for security.
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"SkyMídia Contato" <${process.env.SMTP_USER}>`,
      to: 'diesel.087@gmail.com',
      replyTo: email,
      subject: `Novo Contato do Site: ${nome}`,
      text: `
        Nome: ${nome}
        E-mail: ${email}
        Telefone: ${telefone || 'Não informado'}
        
        Mensagem:
        ${mensagem}
      `,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #15F0DB; border-bottom: 2px solid #15F0DB; padding-bottom: 10px;">Novo Contato - SkyMídia</h2>
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>E-mail:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Telefone:</strong> ${telefone || 'Não informado'}</p>
          <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-radius: 5px;">
            <p><strong>Mensagem:</strong></p>
            <p style="white-space: pre-wrap;">${mensagem}</p>
          </div>
          <hr style="margin-top: 30px; border: 0; border-top: 1px solid #eee;" />
          <p style="font-size: 12px; color: #999; text-align: center;">Este é um e-mail automático enviado pelo formulário de contato do site SkyMídia.</p>
        </div>
      `,
    };

    try {
      if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
        console.warn('SMTP credentials not configured. Email not sent.');
        return res.status(200).json({ 
          success: true, 
          message: 'Simulação de envio (Credenciais SMTP não configuradas no .env)' 
        });
      }

      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: 'E-mail enviado com sucesso!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Erro ao enviar e-mail' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
