import FadeInUp from '@/components/ui/animations/FadeInUp';
import { Container } from '@/components/ui';

const valores = [
  {
    title: 'Innovación',
    desc: 'Creamos soluciones financieras digitales adaptadas a las necesidades específicas del sector minero.',
    gradient: 'from-[#10B981] to-[#34D399]',
    bgGradient: 'from-[#10B981]/10 to-[#34D399]/5',
    borderColor: 'border-[#10B981]/20 hover:border-[#10B981]/40',
    icon: '🚀'
  },
  {
    title: 'Inclusión',
    desc: 'Promovemos el acceso equitativo de comunidades mineras a servicios financieros justos y transparentes.',
    gradient: 'from-[#2563EB] to-[#8B5CF6]',
    bgGradient: 'from-[#2563EB]/10 to-[#8B5CF6]/5',
    borderColor: 'border-[#2563EB]/20 hover:border-[#2563EB]/40',
    icon: '🤝'
  },
  {
    title: 'Seguridad',
    desc: 'Implementamos tecnología blockchain y herramientas legales avanzadas para operaciones completamente confiables.',
    gradient: 'from-[#8B5CF6] to-[#2563EB]',
    bgGradient: 'from-[#8B5CF6]/10 to-[#2563EB]/5',
    borderColor: 'border-[#8B5CF6]/20 hover:border-[#8B5CF6]/40',
    icon: '🔒'
  },
];

export default function ValoresSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#1A261E] via-[#0F1112] to-[#111827] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 " />
      
      {/* Floating background elements */}
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-r from-[#10B981]/5 to-[#34D399]/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-l from-[#8B5CF6]/5 to-[#2563EB]/5 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <Container>
        <div className="relative z-10 max-w-7xl mx-auto">
          <FadeInUp>
            <div className="text-center mb-20">
    
              <h2 className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-[#10B981] via-[#34D399] to-[#2563EB] bg-clip-text text-transparent">
                Nuestros Valores
              </h2>
              <p className="max-w-3xl mx-auto text-xl text-[#D1D5DB] leading-relaxed">
                Los pilares que guían cada decisión y acción en Fil-On Tech
              </p>
            </div>
          </FadeInUp>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {valores.map((item, idx) => (
              <FadeInUp key={idx} delay={0.2 * (idx + 1)}>
                <div className={`group p-8 rounded-3xl bg-gradient-to-br ${item.bgGradient} border ${item.borderColor} transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl backdrop-blur-sm relative overflow-hidden`}>
                  {/* Hover gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
                  
                  <div className="relative z-10">
                    {/* Icon container */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    
                    {/* Title */}
                    <h3 className={`text-2xl lg:text-3xl font-bold mb-6 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                      {item.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-[#D1D5DB] leading-relaxed text-base group-hover:text-white transition-colors duration-300">
                      {item.desc}
                    </p>
                    
                    {/* Bottom accent line */}
                    <div className={`mt-6 h-1 bg-gradient-to-r ${item.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
          
          {/* Additional stats section */}
          <FadeInUp delay={0.8}>
            <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: '100%', label: 'Digital', color: 'text-[#10B981]' },
                { number: '24/7', label: 'Soporte', color: 'text-[#2563EB]' },
                { number: '256bit', label: 'Seguridad', color: 'text-[#8B5CF6]' },
                { number: '∞', label: 'Innovación', color: 'text-[#34D399]' }
              ].map((stat, idx) => (
                <div key={idx} className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#1A261E]/50 to-[#111827]/50 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-[#9CA3AF] text-sm font-medium">
                    {stat.label}
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