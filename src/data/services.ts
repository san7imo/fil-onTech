import { ServicesSection, ServiceColors } from '@/types/services';
import { DollarSign, Cpu, CreditCard } from 'lucide-react';

export const servicesData: ServicesSection = {
  title: "Sé parte de la revolución tecnológica minera",
  subtitle: "Impulsamos tu crecimiento con capital, pagos inteligentes y tarjetas corporativas de alto impacto.",
  services: [
    {
      id: 'capital',
      name: 'Capital',
      title: 'Capital',
      description: 'Financiamiento especializado para el sector minero',
      icon: DollarSign, // ✅ ahora es un componente Lucide
      color: ServiceColors.PRIMARY,
      backgroundGradient: 'linear-gradient(135deg, #1a4d3a 0%, #2d8a5f 100%)',
      features: [
        { title: 'Créditos' },
        { title: 'Microcréditos' },
        { title: 'Factoring' }
      ]
    },
    {
      id: 'tech',
      name: 'Tech',
      title: 'Tech',
      description: 'Soluciones tecnológicas para pagos y gestión',
      icon: Cpu,
      color: ServiceColors.SECONDARY,
      backgroundGradient: 'linear-gradient(135deg, #2d5a3d 0%, #4a8b6b 100%)',
      features: [
        { title: 'Dispersión' },
        { title: 'Pasarela de pagos' }
      ]
    },
    {
      id: 'guardian',
      name: 'Guardian',
      title: 'Guardian',
      description: 'Tarjetas corporativas y servicios empresariales',
      icon: CreditCard,
      color: ServiceColors.TERTIARY,
      backgroundGradient: 'linear-gradient(135deg, #1a2b4d 0%, #2d4a7a 100%)',
      features: [
        { title: 'Tarjetas de crédito' },
        { title: 'Sistema de tarjeta de crédito para empresas' }
      ]
    }
  ]
};
