import { NavItem, Service } from '@/types';

// Información de la empresa
export const COMPANY_INFO = {
  name: 'Fil-On Tech',
  tagline: 'Fintech Agrominera',
  description: 'Transformamos la industria minera a través de soluciones financieras innovadoras, uniendo tecnología de vanguardia con el poder de la cooperación.',
  mission: 'Crear productos especializados financieros y comerciales, que faciliten la comercialización, apertura de mercados, inversión y financiación del ecosistema empresarial de minerales preciosos en Latinoamérica.',
  email: 'contacto@fil-ontech.com ',
  website: 'www.fil-ontech.com',
  phone: '+57 318 329 37 59', // Placeholder - agregar número real
} as const;

// Navegación principal
export const NAVIGATION: NavItem[] = [
  { name: 'Inicio', href: '/' },
  { name: 'Quiénes somos', href: '/quienes-somos' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Contacto', href: '/contacto' },
] as const;

// Servicios principales
export const SERVICES: Service[] = [
  {
    id: 'capital',
    name: 'Capital',
    title: 'Fil-On Capital',
    description: 'Soluciones financieras especializadas para el sector minero',
    features: [
      'Créditos',
      'Microcréditos',
      'Factoring',
      'Leasing',
      'Confirming',
    ],
    color: 'capital',
    icon: 'dollar-sign',
  },
  {
    id: 'tech',
    name: 'Tech',
    title: 'Fil-On Tech',
    description: 'Herramientas tecnológicas y digitales avanzadas',
    features: [
      'Dispersión',
      'Pasarela de pagos',
      'Servicios digitales',
      'Fintech solutions',
    ],
    color: 'tech',
    icon: 'cpu',
  },
  {
    id: 'guardian',
    name: 'Guardian',
    title: 'Fil-On Guardian',
    description: 'Custodia y tokenización de activos minerales',
    features: [
      'Tarjeta de crédito',
      'Sistema de tarjeta de crédito para empresas',
      'Custodia de activos',
      'Tokenización',
    ],
    color: 'guardian',
    icon: 'shield',
  },
] as const;

// Estadísticas del sector minero (basado en los PDFs)
export const MINING_STATS = {
  colombiaWorldRank: 24,
  latinAmericaRank: 7,
  goldProduction2019: 1204881, // onzas
  marketSize: 2665, // USD billones anuales
  subsistenceMiners: 73000,
  ecosystemParticipants: 20000,
} as const;

// Colores del tema
export const THEME_COLORS = {
  primary: '#10B981', // Verde principal
  secondary: '#1F2937', // Gris oscuro
  accent: '#059669', // Verde más oscuro
  background: '#FFFFFF',
  text: '#111827',
  muted: '#6B7280',
} as const;

// Configuración de animaciones
export const ANIMATION_CONFIG = {
  duration: 0.6,
  stagger: 0.1,
  ease: 'easeOut',
} as const;

// Validaciones de formulario
export const FORM_VALIDATION = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[\+]?[1-9][\d]{0,15}$/,
  minNameLength: 2,
  minMessageLength: 10,
  maxMessageLength: 500,
} as const;