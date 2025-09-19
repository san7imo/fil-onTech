import { LucideIcon } from 'lucide-react';

export interface ServiceFeature {
  title: string;
  description?: string;
}

export interface Service {
  id: string;
  name: string;
  title: string;
  description: string;
  icon: LucideIcon; // ✅ acepta un componente de Lucide
  color: 'primary' | 'secondary' | 'tertiary' | 'quaternary'; // 👈 añadimos quaternary
  features: ServiceFeature[];
  backgroundGradient: string;
}

export interface ServicesSection {
  title: string;
  subtitle: string;
  services: Service[];
}

// Enum para los colores de los servicios
export enum ServiceColors {
  PRIMARY = 'primary',     // Capital - Gris
  SECONDARY = 'secondary', // Tech - Verde
  TERTIARY = 'tertiary',   // Guardian - Azul
  QUATERNARY = 'quaternary' // LegalTech - Morado
}
