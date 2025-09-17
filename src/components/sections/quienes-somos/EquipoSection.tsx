import FadeInUp from '@/components/ui/animations/FadeInUp';
import { Container } from '@/components/ui';

const teamAreas = [
  {
    area: 'Tecnología',
    desc: 'Expertos en blockchain, fintech y desarrollo de soluciones digitales',
    gradient: 'from-[#10B981] to-[#34D399]',
    bgGradient: 'from-[#10B981]/10 to-[#34D399]/5',
    borderColor: 'border-[#10B981]/20 hover:border-[#10B981]/40',
    icon: '💻'
  },
  {
    area: 'Finanzas',
    desc: 'Especialistas en productos financieros y gestión de riesgos',
    gradient: 'from-[#2563EB] to-[#8B5CF6]',
    bgGradient: 'from-[#2563EB]/10 to-[#8B5CF6]/5',
    borderColor: 'border-[#2563EB]/20 hover:border-[#2563EB]/40',
    icon: '📊'
  },
  {
    area: 'Minería & Legal',
    desc: 'Conocimiento profundo del sector minero y marco regulatorio',
    gradient: 'from-[#23c58c] to-[#ffffff]',
    bgGradient: 'from-[#8B5CF6]/10 to-[#2563EB]/5',
    borderColor: 'border-[#8B5CF6]/20 hover:border-[#8B5CF6]/40',
    icon: '⚖️'
  },
];

export default function EquipoSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-[#0F1112] via-[#1A261E] to-[#111827] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/6 w-4 h-4 bg-[#10B981] rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/6 w-3 h-3 bg-[#8B5CF6] rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#2563EB] rounded-full animate-pulse delay-1000"></div>
      </div>
      
      <Container>
        <div className="relative z-10 max-w-6xl mx-auto">
          <FadeInUp>
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-[#FFFFFF] via-[#D1D5DB] to-[#9CA3AF] bg-clip-text text-transparent">
                Nuestro Equipo
              </h2>
              <p className="max-w-4xl mx-auto text-xl text-[#D1D5DB] leading-relaxed">
                Fil-On Tech está conformada por un equipo multidisciplinario de
                expertos comprometidos en transformar el sector minero desde la innovación
              </p>
            </div>
          </FadeInUp>
          
          {/* Team areas grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {teamAreas.map((area, idx) => (
              <FadeInUp key={idx} delay={0.2 * (idx + 1)}>
                <div className={`group p-8 rounded-3xl bg-gradient-to-br ${area.bgGradient} border ${area.borderColor} transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl backdrop-blur-sm relative overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${area.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${area.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <span className="text-2xl">{area.icon}</span>
                    </div>
                    
                    <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${area.gradient} bg-clip-text text-transparent`}>
                      {area.area}
                    </h3>
                    
                    <p className="text-[#D1D5DB] leading-relaxed group-hover:text-white transition-colors duration-300">
                      {area.desc}
                    </p>
                    
                    <div className={`mt-6 h-1 bg-gradient-to-r ${area.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
          
          {/* Team composition showcase */}
          <FadeInUp delay={0.8}>
            <div className="relative p-12 rounded-3xl bg-gradient-to-br from-[#1A261E]/50 to-[#111827]/50 border border-[#10B981]/20 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#10B981] via-[#2563EB] to-[#8B5CF6] rounded-t-3xl"></div>
              
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Un equipo, múltiples expertises
                </h3>
                <p className="text-[#D1D5DB] text-lg max-w-3xl mx-auto">
                  Combinamos conocimiento técnico, experiencia financiera y comprensión profunda del sector minero
                </p>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { skill: 'Blockchain', level: '95%', color: 'bg-[#10B981]' },
                  { skill: 'Fintech', level: '92%', color: 'bg-[#2563EB]' },
                  { skill: 'Minería', level: '88%', color: 'bg-[#8B5CF6]' },
                  { skill: 'Legal Tech', level: '90%', color: 'bg-[#34D399]' }
                ].map((skill, idx) => (
                  <div key={idx} className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#0F1112]/50 to-[#1A261E]/50 border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="text-white font-bold text-lg mb-2">
                      {skill.skill}
                    </div>
                    <div className="w-full bg-[#111827] rounded-full h-2 mb-2">
                      <div className={`${skill.color} h-2 rounded-full transition-all duration-1000`} style={{width: skill.level}}></div>
                    </div>
                    <div className="text-[#9CA3AF] text-sm">
                      {skill.level}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">

              </div>
            </div>
          </FadeInUp>
        </div>
      </Container>
    </section>
  );
}