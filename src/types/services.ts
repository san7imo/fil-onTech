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
  icon: LucideIcon; // ✅ ahora acepta un componente de Lucide
  color: 'primary' | 'secondary' | 'tertiary';
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
  PRIMARY = 'primary',    // Capital - Verde
  SECONDARY = 'secondary', // Tech - Verde más claro
  TERTIARY = 'tertiary'   // Guardian - Azul oscuro
}
