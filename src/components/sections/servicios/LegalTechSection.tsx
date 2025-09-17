import FadeInUp from '@/components/ui/animations/FadeInUp';
import { Container } from '@/components/ui';

const legalTechServices = [
  {
    title: 'Legal Tech',
    description: 'Herramientas digitales avanzadas para garantizar seguridad jurídica en todas las operaciones mineras',
    features: [
      'Contratos inteligentes',
      'Automatización legal',
      'Compliance digital',
      'Auditoría jurídica'
    ],
    icon: '⚖️',
    gradient: 'from-[#2563EB] to-[#8B5CF6]'
  },
  {
    title: 'Procesamiento Digital',
    description: 'Comunicación en tiempo real y procesamiento de datos para operaciones eficientes',
    features: [
      'API en tiempo real',
      'Dashboard interactivo',
      'Notificaciones push',
      'Integración total'
    ],
    icon: '⚡',
    gradient: 'from-[#8B5CF6] to-[#2563EB]'
  },
  {
    title: 'Educación Financiera',
    description: 'Herramientas tecnológicas para capacitación y desarrollo del sector minero',
    features: [
      'Plataforma e-learning',
      'Simuladores financieros',
      'Certificaciones',
      'Mentoría digital'
    ],
    icon: '🎓',
    gradient: 'from-[#10B981] to-[#2563EB]'
  }
];

export default function LegalTechSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-[#111827] via-[#1A261E] to-[#111827] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2563EB] to-[#8B5CF6]" />
      
      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-[#8B5CF6]/10 to-[#2563EB]/10 rounded-full blur-2xl animate-pulse delay-500" />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-l from-[#2563EB]/10 to-[#8B5CF6]/10 rounded-full blur-2xl animate-pulse delay-1000" />
      
      <Container>
        <div className="relative z-10 max-w-7xl mx-auto">
          <FadeInUp>
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] bg-clip-text text-transparent">
                Legal & Tech Solutions
              </h2>
              <p className="max-w-4xl mx-auto text-xl text-[#D1D5DB] leading-relaxed">
                Tecnología jurídica avanzada y herramientas digitales para seguridad y eficiencia operacional
              </p>
            </div>
          </FadeInUp>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {legalTechServices.map((service, idx) => (
              <FadeInUp key={idx} delay={0.2 * (idx + 1)}>
                <div className="group p-8 rounded-3xl bg-gradient-to-br from-[#1A261E]/50 to-[#111827]/50 border border-[#2563EB]/20 hover:border-[#2563EB]/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/5 to-[#8B5CF6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  
                  <div className="relative z-10">
                    {/* Icon container */}
                    <div className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <span className="text-3xl">{service.icon}</span>
                    </div>
                    
                    {/* Title */}
                    <h3 className={`text-3xl font-bold mb-6 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-[#D1D5DB] leading-relaxed mb-8 group-hover:text-white transition-colors duration-300">
                      {service.description}
                    </p>
                    
                    {/* Features grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {service.features.map((feature, featureIdx) => (
                        <div key={featureIdx} className="p-3 rounded-xl bg-gradient-to-br from-[#0F1112]/50 to-[#1A261E]/50 border border-[#2563EB]/10 group-hover:border-[#2563EB]/30 transition-all duration-300">
                          <div className="text-[#9CA3AF] text-sm font-medium text-center group-hover:text-[#D1D5DB] transition-colors duration-300">
                            {feature}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Bottom accent */}
                    <div className={`mt-8 h-1 bg-gradient-to-r ${service.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
          
          {/* Technology showcase */}
          <FadeInUp delay={0.8}>
            <div className="relative p-12 rounded-3xl bg-gradient-to-br from-[#1A261E]/50 to-[#111827]/50 border border-[#2563EB]/20 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] rounded-t-3xl"></div>
              
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Tecnología de Vanguardia
                </h3>
                <p className="text-[#D1D5DB] text-lg">
                  Implementamos las últimas tecnologías para garantizar seguridad y eficiencia
                </p>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { tech: 'AI/ML', desc: 'Inteligencia Artificial', color: 'bg-[#2563EB]' },
                  { tech: 'Blockchain', desc: 'Seguridad total', color: 'bg-[#8B5CF6]' },
                  { tech: 'Cloud', desc: 'Escalabilidad', color: 'bg-[#10B981]' },
                  { tech: 'API REST', desc: 'Integración', color: 'bg-[#34D399]' }
                ].map((tech, idx) => (
                  <div key={idx} className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#0F1112]/50 to-[#1A261E]/50 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                    <div className={`w-12 h-12 ${tech.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                      <span className="text-white font-bold text-sm">{tech.tech}</span>
                    </div>
                    <div className="text-[#9CA3AF] text-sm">
                      {tech.desc}
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