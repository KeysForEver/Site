import React from 'react';
import ProductGallery from './components/ProductGallery';
import ContactForm from './components/ContactForm';
import { Product, JournalArticle } from './types';

export const JOURNAL_ARTICLES: JournalArticle[] = [
    {
        id: 3,
        title: "Estruturas para Mídia OOH",
        date: "Outdoor Mídia",
        excerpt: "Engenharia e fabricação de estruturas robustas para publicidade externa de alto impacto.",
        image: "/estruturas_para_midia_ooh/00.jpg",
        icon: "/produtos/estruturas_para_midia_ooh.png",
        submenuIcon: "/icons/estruturas_para_midia_ooh.png",
        content: (
            <>
                <p className="mb-12 text-brand-text text-center max-w-2xl mx-auto text-xl">
                    A Mídia OUT OF HOME ( OOH ) ocupa cada vez mais espaço nos aeroportos, terminais rodoviários e urbanos, parques, shoppings e centros comerciais.
                </p>
                <p className="mb-12 text-brand-text text-center max-w-2xl mx-auto text-xl">
                    A evolução dos painéis de led, cada vez maiores e com formatos personalizados, exige construções confiáveis, estáveis e de alta qualidade.
                </p>
                <p className="mb-12 text-brand-text text-center max-w-2xl mx-auto text-xl">
                    Somos especialistas na construção e instalação de estruturas metálicas de grande porte com alta precisão e qualidade de acabamento e estamos prontos para atender com velocidade e capacidade técnica a sua empresa de OOH.
                </p>
                <ProductGallery
                    categories={[
                        {
                            title: 'MÍDIA OOH',
                            subtitle: 'Vídeos Wall | Painéis | Totens',
                            images: ['/estruturas_para_midia_ooh/01.jpg','/estruturas_para_midia_ooh/02.jpg','/estruturas_para_midia_ooh/03.jpg','/estruturas_para_midia_ooh/04.jpg','/estruturas_para_midia_ooh/05.jpg','/estruturas_para_midia_ooh/06.jpg','/estruturas_para_midia_ooh/07.jpg','/estruturas_para_midia_ooh/08.jpg','/estruturas_para_midia_ooh/09.jpg','/estruturas_para_midia_ooh/10.jpg','/estruturas_para_midia_ooh/11.jpg','/estruturas_para_midia_ooh/12.jpg','/estruturas_para_midia_ooh/13.jpg','/estruturas_para_midia_ooh/14.jpg','/estruturas_para_midia_ooh/15.jpg','/estruturas_para_midia_ooh/16.jpg','/estruturas_para_midia_ooh/17.jpg','/estruturas_para_midia_ooh/18.jpg','/estruturas_para_midia_ooh/19.jpg','/estruturas_para_midia_ooh/20.jpg','/estruturas_para_midia_ooh/21.jpg']
                        }
                    ]}
                />
            </>
        )
    },
    {
        id: 2,
        title: "Comunicação Visual",
        date: "Identidade & Sinalização",
        excerpt: "Projetos completos de sinalização e branding que destacam sua marca no mercado.",
        image: "/comunicacao_visual/00.jpg",
        icon: "/produtos/comunicacao_visual.png",
        submenuIcon: "/icons/comunicacao_visual.png",
        content: (
            <>
                <p className="mb-12 text-brand-text text-center max-w-2xl mx-auto text-xl">
                    Todas as formas, cores e reproduções da sua MARCA precisam seguir rigorosamente as características técnicas do seu Manual de Identidade Visual para que o resultado seja uma peça exclusiva e reconhecida por todos os públicos.
                    <br/><br/>
                    Para entregarmos projetos com resultado estético de alta qualidade contamos com pessoas muito bem treinadas e equipamentos de alta tecnologia e precisão alinhados à processos de produção cada dia mais eficientes para economizar tempo e matéria prima.
                </p>
                <ProductGallery categories={[{title:'PLACAS E LETREIROS',subtitle:'2D | 3D | Com Iluminação | Sem Iluminação',images:['/comunicacao_visual/placas_e_letreiros_01.jpg','/comunicacao_visual/placas_e_letreiros_02.jpg','/comunicacao_visual/placas_e_letreiros_03.jpg','/comunicacao_visual/placas_e_letreiros_04.jpg','/comunicacao_visual/placas_e_letreiros_05.jpg','/comunicacao_visual/placas_e_letreiros_06.jpg','/comunicacao_visual/placas_e_letreiros_07.jpg','/comunicacao_visual/placas_e_letreiros_08.jpg','/comunicacao_visual/placas_e_letreiros_09.jpg','/comunicacao_visual/placas_e_letreiros_10.jpg','/comunicacao_visual/placas_e_letreiros_11.jpg','/comunicacao_visual/placas_e_letreiros_12.jpg','/comunicacao_visual/placas_e_letreiros_13.jpg','/comunicacao_visual/placas_e_letreiros_14.jpg','/comunicacao_visual/placas_e_letreiros_15.jpg','/comunicacao_visual/placas_e_letreiros_16.jpg']},{title:'NEON',subtitle:'Tradicional | Led',images:['/comunicacao_visual/neon_01.jpeg','/comunicacao_visual/neon_02.jpg','/comunicacao_visual/neon_03.jpg','/comunicacao_visual/neon_04.jpg']},{title:'TOTENS',subtitle:'Sinalização | Institucionais | Promocionais',images:['/comunicacao_visual/totens_01.jpg','/comunicacao_visual/totens_02.jpeg','/comunicacao_visual/totens_03.jpg','/comunicacao_visual/totens_04.jpg']},{title:'SINALIZAÇÃO',subtitle:'Externa | Interna',images:['/comunicacao_visual/sinalizacao_01.jpg','/comunicacao_visual/sinalizacao_02.jpg','/comunicacao_visual/sinalizacao_03.jpg','/comunicacao_visual/sinalizacao_04.jpg','/comunicacao_visual/sinalizacao_05.jpg']},{title:'PLOTAGENS',subtitle:'Plotter de Recorte | Grandes Formatos',images:['/comunicacao_visual/plotagens_01.jpg','/comunicacao_visual/plotagens_02.jpg','/comunicacao_visual/plotagens_03.jpg','/comunicacao_visual/plotagens_04.jpg','/comunicacao_visual/plotagens_05.jpg','/comunicacao_visual/plotagens_06.jpg','/comunicacao_visual/plotagens_07.jpg','/comunicacao_visual/plotagens_08.jpg','/comunicacao_visual/plotagens_09.jpg']},{title:'PAINÉIS IMPRESSOS',subtitle:'Adesivo Acoplado | Lonas | Tecidos',images:['/comunicacao_visual/paineis_impressos_01.jpg','/comunicacao_visual/paineis_impressos_02.jpg','/comunicacao_visual/paineis_impressos_03.jpg','/comunicacao_visual/paineis_impressos_04.jpg']},{title:'PROJETOS ESPECIAIS',subtitle:'100% Personalizados',images:['/comunicacao_visual/projetos_especiais_01.jpg','/comunicacao_visual/projetos_especiais_02.jpg','/comunicacao_visual/projetos_especiais_03.jpg','/comunicacao_visual/projetos_especiais_04.jpg']}]}/>
            </>
        )
    },
    {
        id: 5,
        title: "Projetos Especiais de Arquitetura",
        date: "Arquitetura & Design",
        excerpt: "Execução de projetos arquitetônicos complexos e instalações artísticas sob medida.",
        image: "/projetos_para_arquitetura/00.jpg",
        icon: "/produtos/projetos_para_arquitetura.png",
        submenuIcon: "/icons/projetos_para_arquitetura.png",
        content: (
            <>
                <p className="mb-12 text-brand-text text-center max-w-2xl mx-auto text-xl">
                    Quando a Comunicação Visual, o Design e a Arquitetura se encontram, projetos incríveis saem do papel.
                </p>
                <p className="mb-12 text-brand-text text-center max-w-2xl mx-auto text-xl">
                    São construções que exigem uma estrutura muito especializada em serralheria técnica, pintura (eletrostática e automotiva) elétrica, eletrônica e montagem para transformar desenhos técnicos em peças de alto valor estético e conceitual.
                </p>
                <ProductGallery
                    categories={[
                        {
                        title: 'TUDO AQUI',
                        subtitle: 'Serralheria Técnica | Pinturas Especiais | Elétrica e Eletrônica | Montagem',
                        images:['/projetos_para_arquitetura/01.jpg','/projetos_para_arquitetura/02.jpg','/projetos_para_arquitetura/03.jpg','/projetos_para_arquitetura/04.jpg','/projetos_para_arquitetura/05.jpg','/projetos_para_arquitetura/06.jpg','/projetos_para_arquitetura/07.jpg','/projetos_para_arquitetura/08.jpg','/projetos_para_arquitetura/09.jpg']}
                    ]}
                />
            </>
        )
    },
    {
        id: 4,
        title: "Marcenaria",
        date: "Mobiliário Sob Medida",
        excerpt: "Mobiliário corporativo e comercial executado com precisão e acabamento superior.",
        image: "/marcenaria/00.jpg",
        icon: "/produtos/marcenaria.png",
        submenuIcon: "/icons/marcenaria.png",
        content: (
            <>
                <p className="mb-12 text-brand-text text-center max-w-2xl mx-auto text-xl">
                    Nossa marcenaria combina técnicas tradicionais com tecnologia CNC para criar peças exclusivas que otimizam espaços e reforçam a estética da sua marca.
                </p>
                <ProductGallery
                    categories={[
                        {
                            title: 'MARCENARIA',
                            subtitle: 'x1',
                            images: ['/marcenaria/00.jpg']
                        }
                    ]}
                />
            </>
        )
    },
    {
        id: 6,
        title: "Totens Digitais e Interativos",
        date: "Tecnologia & Interação",
        excerpt: "Hardware de ponta para sinalização digital e autoatendimento with design sofisticado.",
        image: "/totens_digitais_e_interativos/00.jpg",
        icon: "/produtos/totens_digitais_e_interativos.png",
        submenuIcon: "/icons/totens_digitais_e_interativos.png",
        content: (
            <>
                <p className="mb-12 text-brand-text text-center max-w-2xl mx-auto text-xl">
                    Pagar o estacionamento do shopping, comprar um sanduiche ou escolher um filme no cinema, de forma interativa, é uma realidade que, a cada dia, ganha mais espaço nos pontos de venda.
                </p>
                <p className="mb-12 text-brand-text text-center max-w-2xl mx-auto text-xl">
                    Nesse mesmo ponto de venda o espaço físico dos cartazes, banners e painéis que divulgam as mensagens promocionais e institucionais se multiplicou com o uso das telas e painéis de led. Sim, estamos falando dos Totens Digitais e Interativos!
                </p>
                <p className="mb-12 text-brand-text text-center max-w-2xl mx-auto text-xl">
                    Aqui na SKYMIDIA oferecemos a solução completa que parte do desenvolvimento técnico do projeto, construção e instalação no ponto veiculação. Uma solução 100% personalizada com a Identidade Visual da sua empresa.
                </p>
                <ProductGallery
                    categories={[
                        {
                            title: 'TOTENS',
                            subtitle: 'Autoatendimento | Digitais | Interativos',
                            images: ['/totens_digitais_e_interativos/01.jpeg','/totens_digitais_e_interativos/02.jpeg','/totens_digitais_e_interativos/03.jpeg','/totens_digitais_e_interativos/04.jpeg','/totens_digitais_e_interativos/05.jpeg','/totens_digitais_e_interativos/06.jpg']
                        }
                    ]}
                />
            </>
        )
    },
    {
        id: 1,
        title: "Carregadores de Celular",
        date: "Soluções de Energia",
        excerpt: "Estações de carregamento inteligentes e seguras para ambientes públicos e privados.",
        image: "/carregadores_de_celular/00.jpg",
        icon: "/produtos/carregadores_de_celular.png",
        submenuIcon: "/icons/carregadores_de_celular.png",
        content: (
            <>
                <p className="mb-12 text-brand-text text-center max-w-2xl mx-auto text-xl">
                    Sim, temos mais celulares do que habitantes no Brasil. 270 MILHÕES de aparelhos, segundo a Anatel em dezembro de 2025.
                </p>
                <p className="mb-12 text-brand-text text-center max-w-2xl mx-auto text-xl">
                    Esse número gigantesco se traduz em uma grande oportunidade comercial, afinal todos esses milhões de aparelhos são carregados diariamente, e isso está acontecendo cada vez mais fora de casa.
                </p>
                <p className="mb-12 text-brand-text text-center max-w-2xl mx-auto text-xl">
                    Imagine como um benefício simples e direto, como uma carga de celular, é capaz de fazer o consumidor ficar mais tempo no seu ponto de venda. Faz sentido? Se esse benefício é oferecido de forma mais inteligente, do que uma simples tomada - sim, faz todo sentido!
                </p>
                <ProductGallery
                    categories={[
                        {
                        title: 'SOB MEDIDA',
                        subtitle: 'Fotovoltaico | Indução | Por Cabo',
                        images: ['/carregadores_de_celular/01.jpg','/carregadores_de_celular/02.jpg','/carregadores_de_celular/03.jpg','/carregadores_de_celular/04.jpg','/carregadores_de_celular/05.jpg','/carregadores_de_celular/06.jpg','/carregadores_de_celular/07.jpg','/carregadores_de_celular/08.jpg','/carregadores_de_celular/09.jpg','/carregadores_de_celular/10.jpg','/carregadores_de_celular/11.jpg']
                        }
                    ]}
                />
            </>
        )
    },
    {
        id: 7,
        title: "LEGAL!",
        date: "Vamos Conversar?",
        excerpt: "Entre em contato com a nossa equipe e tire o seu projeto do papel.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000",
        content: (
            <div className="space-y-12">
                <p className="text-brand-text text-center max-w-2xl mx-auto text-xl leading-relaxed">
                    Agora que você conheceu um pouco do que somos capazes de fazer, transformado matérias-primas comuns em projetos exclusivos, vamos falar rapidamente sobre a nossa estrutura e como você pode entrar em contato com a gente para tirar o seu projeto do papel.
                </p>

                <div className="grid md:grid-cols-2 gap-12 items-center bg-brand-dark/5 p-8 md:p-12 rounded-sm border border-brand-hover/10">
                    <div className="space-y-6">
                        <p className="text-brand-text leading-relaxed">
                            Localizada no bairro Santo Antônio, nossa planta industrial possui mais de 1.000 m² de área de produção. O espaço é equipado com tecnologia de alta precisão e desempenho, incluindo estações de corte a laser, Router CNC, setores de montagem, serralheria técnica, cabine de pintura e laboratórios de elétrica e eletrônica. Além disso, contamos com uma equipe especializada em transporte e instalação de estruturas de grande porte, devidamente certificada conforme as normas de segurança vigentes.
                        </p>
                    </div>
                    <div className="aspect-video overflow-hidden rounded-sm">
                        <img
                            src="/galpao1.png"
                            alt="Planta Industrial Santo Antônio"
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center bg-brand-dark/5 p-8 md:p-12 rounded-sm border border-brand-hover/10">
                    <div className="aspect-video overflow-hidden rounded-sm order-2 md:order-1">
                        <img
                            src="/galpao2.png"
                            alt="Planta Industrial Nova Esperança"
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                        />
                    </div>
                    <div className="space-y-6 order-1 md:order-2">
                        <p className="text-brand-text leading-relaxed">
                            No bairro Nova Esperança, mantemos outra planta industrial com mais de 500 m² de área de produção. Nessa unidade, são realizados serviços de solda, serralheria, pintura e montagem, garantindo a qualidade e a eficiência na fabricação de nossas estruturas.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-12 pt-12">
                    <div className="text-center space-y-3 max-w-xl mx-auto">
                        <p className="text-2xl md:text-3xl font-serif text-brand-text leading-tight">
                            Pelo <span className="text-brand-hover font-bold">WhatsApp</span> é mais <span className="italic font-bold text-brand-hover">RÁPIDO</span>!
                        </p>
                        <p className="text-xs uppercase tracking-[0.2em] text-brand-text/40 font-medium">
                            Mas, fique à vontade para ligar ou enviar um e-mail, ok?
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 w-full">
                        <div className="bg-brand-dark/5 p-8 rounded-sm border border-brand-hover/10 flex flex-col items-center text-center space-y-4">
                            <span className="text-[10px] uppercase tracking-[0.2em] text-brand-hover font-bold">Comercial</span>
                            <h4 className="text-xl font-serif text-brand-text">RODRIGO DOMUSCI</h4>
                            <div className="space-y-2 pt-4 w-full">
                                <a
                                    href="https://wa.me/5531983315015"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 text-sm hover:text-brand-hover transition-colors text-brand-text"
                                >
                                    <span className="opacity-40 uppercase tracking-widest text-[10px]">WhatsApp:</span>
                                    <span className="font-medium">+55 (31) 9 8331.5015</span>
                                </a>
                                <a
                                    href="mailto:rodrigo@skymidia.com.br"
                                    className="flex items-center justify-center gap-2 text-sm hover:text-brand-hover transition-colors text-brand-text"
                                >
                                    <span className="opacity-40 uppercase tracking-widest text-[10px]">E-mail:</span>
                                    <span className="font-medium">rodrigo@skymidia.com.br</span>
                                </a>
                            </div>
                        </div>

                        <div className="bg-brand-dark/5 p-8 rounded-sm border border-brand-hover/10 flex flex-col items-center text-center space-y-4">
                            <span className="text-[10px] uppercase tracking-[0.2em] text-brand-hover font-bold">Comercial - Arquitetura</span>
                            <h4 className="text-xl font-serif text-brand-text">FERNANDO RIBALDO</h4>
                            <div className="space-y-2 pt-4 w-full">
                                <a
                                    href="https://wa.me/5531985869051"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 text-sm hover:text-brand-hover transition-colors text-brand-text"
                                >
                                    <span className="opacity-40 uppercase tracking-widest text-[10px]">WhatsApp:</span>
                                    <span className="font-medium">+55 (31) 9 8586.9051</span>
                                </a>
                                <a
                                    href="mailto:fernando@skymidia.com.br"
                                    className="flex items-center justify-center gap-2 text-sm hover:text-brand-hover transition-colors text-brand-text"
                                >
                                    <span className="opacity-40 uppercase tracking-widest text-[10px]">E-mail:</span>
                                    <span className="font-medium">fernando@skymidia.com.br</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <ContactForm />
            </div>
        )
    }
];

export const BRAND_NAME = 'SKYMÍDIA';
export const PRIMARY_COLOR = '#727377';
export const ACCENT_COLOR = '#15F0DB';
export const TEXT_COLOR = '#E6E7E9';