// Tipos principales de la aplicación Fil-On Tech

export interface NavItem {
  name: string;
  href: string;
  icon?: string;
}

export interface Service {
  id: string;
  name: string;
  title: string;
  description: string;
  features: string[];
  color: 'capital' | 'tech' | 'guardian';
  icon: string;
}

export interface TeamMember {
  name: string;
  position: string;
  image?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

export interface SectionProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
}

// Colores del tema según el diseño
export type ThemeColor = {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
};

// Estados de la aplicación
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export interface ApiResponse<T> {
  data: T;
  message: string;
  status: 'success' | 'error';
}