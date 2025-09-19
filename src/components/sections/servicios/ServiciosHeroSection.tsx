import FadeInUp from '@/components/ui/animations/FadeInUp';
import { Container } from '@/components/ui';

export default function ServiciosHeroSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#1A261E] via-[#0F1112] to-[#111827]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#10B981]/5 via-transparent to-[#8B5CF6]/5" />
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-[#10B981]/10 to-[#34D399]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-[#8B5CF6]/10 to-[#2563EB]/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <Container>
        <div className="relative z-10 max-w-6xl mx-auto">
          <FadeInUp>
            <div className="text-center mb-12">
              <h1 className="text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-[#D1D5DB] to-[#9CA3AF] bg-clip-text text-transparent">
                Nuestros Servicios
              </h1>
              <p className="max-w-4xl mx-auto text-xl text-[#D1D5DB] leading-relaxed">
                Soluciones financieras y tecnológicas especializadas para el sector minero, desde productos tradicionales hasta innovación blockchain y DeFi
              </p>
            </div>
          </FadeInUp>
          
          <FadeInUp delay={0.3}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {[
                { 
                  icon: '💰', 
                  label: 'Capital', 
                  count: '6+', 
                  color: 'from-[#2563EB] to-[#1D4ED8]' 
                },
                { 
                  icon: '⚡', 
                  label: 'Tech', 
                  count: '3+', 
                  color: 'from-[#10B981] to-[#34D399]' 
                },
                { 
                  icon: '⚖️', 
                  label: 'LegalTech', 
                  count: '5+', 
                  color: 'from-[#6B7280] to-[#9CA3AF]' 
                },
                { 
                  icon: '🛡️', 
                  label: 'Guardian', 
                  count: '3+', 
                  color: 'from-[#8B5CF6] to-[#A855F7]' 
                }
              ].map((service, idx) => (
                <div key={idx} className={`p-6 rounded-2xl bg-gradient-to-br ${service.color.replace('from-', 'from-').replace(' to-', '/10 to-').replace(']', '/5]')} border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 group`}>
                  <div className="text-center">
                    <div className="text-4xl mb-3">{service.icon}</div>
                    <div className={`text-2xl font-bold mb-2 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                      {service.count}
                    </div>
                    <div className="text-[#D1D5DB] text-sm font-medium group-hover:text-white transition-colors duration-300">
                      {service.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </Container>
    </section>
  );
}