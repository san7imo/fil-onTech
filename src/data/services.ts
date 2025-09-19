import { ServicesSection, ServiceColors } from '@/types/services';
import { DollarSign, Cpu, CreditCard, Scale } from 'lucide-react'; // 👈 usé Scale como icono de LegalTech

export const servicesData: ServicesSection = {
  title: "Sé parte de la revolución tecnológica minera",
  subtitle: "Impulsamos tu crecimiento con capital, pagos inteligentes y tarjetas corporativas de alto impacto.",
  services: [
    {
      id: 'capital',
      name: 'Capital',
      title: 'Capital',
      description: 'Gestión inteligente de capital y liquidez para el sector agrominero y cripto.',
      icon: DollarSign,
      color: ServiceColors.PRIMARY,
      backgroundGradient: 'linear-gradient(135deg, #1a2b4d 0%, #2d4a7a 100%)', // 🔵 azul
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
      description: 'Soluciones de tecnología financiera y de gestión para optimizar y potenciar el crecimiento del sector agrominero.',
      icon: Cpu,
      color: ServiceColors.SECONDARY,
      backgroundGradient: 'linear-gradient(135deg, #2d5a3d 0%, #4a8b6b 100%)', // 🟢 verde
      features: [
        { title: 'Dispersión' },
        { title: 'Pasarela de pagos' }
      ]
    },
    {
      id: 'guardian',
      name: 'Guardian',
      title: 'Guardian',
      description: 'Lab de innovación que integra minería, agroindustria, cripto y tecnología para desarrollar soluciones que transforman el sector.',
      icon: CreditCard,
      color: ServiceColors.TERTIARY,
      backgroundGradient: 'linear-gradient(135deg, #5a2d82 0%, #9b59b6 100%)', // 🟣 morado
      features: [
        { title: 'Tarjetas de crédito' },
        { title: 'Sistema de tarjeta de crédito para empresas' }
      ]
    },
    {
      id: 'legaltech',
      name: 'LegalTech',
      title: 'LegalTech',
      description: 'Cumplimiento inteligente que anticipa escenarios y asegura la viabilidad de la innovación.',
      icon: Scale,
      color: ServiceColors.QUATERNARY,
      backgroundGradient: 'linear-gradient(135deg, #4a4a4a 0%, #7d7d7d 100%)', // ⚪ gris
      features: [
        { title: 'Compliance digital' },
        { title: 'Contratos inteligentes' },
        { title: 'Prevención de riesgos legales' }
      ]
    }
  ]
};
