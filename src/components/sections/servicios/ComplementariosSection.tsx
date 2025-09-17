import FadeInUp from '@/components/ui/animations/FadeInUp';
import { Container } from '@/components/ui';

const serviciosComplementarios = [
  {
    title: 'Fil-On Market',
    subtitle: 'Marketplace Digital',
    description: 'Plataforma que conecta vendedores y compradores de minerales preciosos en un ecosistema seguro y transparente',
    features: [
      'Catálogo digital completo',
      'Verificación de autenticidad',
      'Precios en tiempo real',
      'Logística integrada'
    ],
    icon: '🛒',
    gradient: 'from-[#10B981] to-[#34D399]'
  },
  {
    title: 'NFTs de Minerales',
    subtitle: 'Activos Únicos Digitales',
    description: 'Creamos NFTs únicos de minerales preciosos y maquinaria, certificando autenticidad y propiedad',
    features: [
      'Certificación blockchain',
      'Propiedad verificable',
      'Coleccionables únicos',
      'Mercado secundario'
    ],
    icon: '💎',
    gradient: 'from-[#8B5CF6] to-[#2563EB]'
  },
  {
    title: 'Diversificación de Portafolio',
    subtitle: 'Gestión de Inversiones',
    description: 'Servicios de diversificación inteligente en minerales, NFTs, maquinaria y activos digitales',
    features: [
      'Análisis de riesgo',
      'Rebalanceo automático',
      'Múltiples asset classes',
      'Rentabilidad optimizada'
    ],
    icon: '📊',
    gradient: 'from-[#2563EB] to-[#34D399]'
  }
];

export default function ComplementariosSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-[#111827] via-[#0F1112] to-[#1A261E] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#34D399] via-[#10B981] to-[#8B5CF6]" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#10B981] rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-[#8B5CF6] rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-[#2563EB] rounded-full animate-pulse"></div>
      </div>
      
      <Container>
        <div className="relative z-10 max-w-7xl mx-auto">
          <FadeInUp>
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-[#34D399] via-[#10B981] to-[#8B5CF6] bg-clip-text text-transparent">
                Ecosistema Completo
              </h2>
              <p className="max-w-4xl mx-auto text-xl text-[#D1D5DB] leading-relaxed">
                Servicios adicionales que complementan nuestra oferta financiera y tecnológica
              </p>
            </div>
          </FadeInUp>
          
          {/* Main services */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {serviciosComplementarios.map((servicio, idx) => (
              <FadeInUp key={idx} delay={0.2 * (idx + 1)}>
                <div className="group h-full p-8 rounded-3xl bg-gradient-to-br from-[#1A261E]/50 to-[#111827]/50 border border-[#10B981]/20 hover:border-[#10B981]/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/5 to-[#34D399]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Header */}
                    <div className="mb-8">
                      <div className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${servicio.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <span className="text-3xl">{servicio.icon}</span>
                      </div>
                      
                      <h3 className={`text-3xl font-bold mb-2 bg-gradient-to-r ${servicio.gradient} bg-clip-text text-transparent`}>
                        {servicio.title}
                      </h3>
                      
                      <div className="text-[#9CA3AF] font-semibold text-sm mb-4 group-hover:text-[#D1D5DB] transition-colors duration-300">
                        {servicio.subtitle}
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-[#D1D5DB] leading-relaxed mb-8 group-hover:text-white transition-colors duration-300 flex-grow">
                      {servicio.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-3">
                      {servicio.features.map((feature, featureIdx) => (
                        <div key={featureIdx} className="flex items-center gap-3">
                          <div className={`w-2 h-2 bg-gradient-to-r ${servicio.gradient} rounded-full`}></div>
                          <span className="text-[#9CA3AF] text-sm group-hover:text-[#D1D5DB] transition-colors duration-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Bottom accent */}
                    <div className={`mt-8 h-1 bg-gradient-to-r ${servicio.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
          
          {/* Marketplace showcase */}
          <FadeInUp delay={0.8}>
            <div className="relative p-12 rounded-3xl bg-gradient-to-br from-[#1A261E]/50 to-[#111827]/50 border border-[#10B981]/20 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#10B981] to-[#34D399] rounded-t-3xl"></div>
              
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#10B981] to-[#34D399] bg-clip-text text-transparent">
                  Fil-On Market en Números
                </h3>
                <p className="text-[#D1D5DB] text-lg max-w-3xl mx-auto">
                  El marketplace líder en comercialización de minerales preciosos en Latinoamérica
                </p>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { number: '1,000+', label: 'Vendedores Activos', color: 'from-[#10B981] to-[#34D399]' },
                  { number: '5,000+', label: 'Compradores Registrados', color: 'from-[#34D399] to-[#10B981]' },
                  { number: '50+', label: 'Tipos de Minerales', color: 'from-[#2563EB] to-[#8B5CF6]' },
                  { number: '99.9%', label: 'Satisfacción Cliente', color: 'from-[#8B5CF6] to-[#2563EB]' }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#0F1112]/50 to-[#1A261E]/50 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 group">
                    <div className={`text-4xl font-bold mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                      {stat.number}
                    </div>
                    <div className="text-[#9CA3AF] text-sm font-medium group-hover:text-[#D1D5DB] transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Additional features */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: '🔍', title: 'Búsqueda Avanzada', desc: 'Filtros inteligentes por tipo, calidad y región' },
                  { icon: '📱', title: 'App Móvil', desc: 'Acceso completo desde cualquier dispositivo' },
                  { icon: '🚚', title: 'Logística Integrada', desc: 'Envío seguro y rastreo en tiempo real' }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-[#10B981]/10 to-[#34D399]/10 border border-[#10B981]/20 hover:border-[#10B981]/40 transition-all duration-300">
                    <div className="text-2xl">{feature.icon}</div>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1">{feature.title}</h4>
                      <p className="text-[#9CA3AF] text-xs">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInUp>
        </div>
      </Container>
    </section>
  );
}