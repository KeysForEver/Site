import React from 'react';

export interface JournalArticle {
  id: number;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  icon?: string;
  submenuIcon?: string;
  content: React.ReactNode;
}
