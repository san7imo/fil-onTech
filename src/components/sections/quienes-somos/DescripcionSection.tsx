import FadeInUp from '@/components/ui/animations/FadeInUp';
import { Container } from '@/components/ui';

export default function DescripcionSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-br from-[#0F1112] to-[#111827]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#10B981] rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-[#8B5CF6] rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-[#2563EB] rounded-full animate-pulse"></div>
      </div>
      
      <Container>
        <div className="relative z-10 max-w-6xl mx-auto">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-5xl lg:text-6xl font-bold mb-12 bg-gradient-to-r from-[#FFFFFF] via-[#D1D5DB] to-[#9CA3AF] bg-clip-text text-transparent">
                Qué es Fil-On Tech
              </h2>
            </div>
          </FadeInUp>
          
          <FadeInUp delay={0.2}>
            <div className="relative p-12 rounded-3xl bg-gradient-to-br from-[#1A261E]/50 to-[#111827]/50 border border-[#10B981]/20 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#10B981] via-[#2563EB] to-[#8B5CF6] rounded-t-3xl"></div>
              <p className="text-xl text-[#D1D5DB] leading-relaxed text-center mb-12">
                Fil-On Tech es una empresa global e innovadora que conecta el
                sector minero con el mundo financiero digital. Ofrecemos <span className="text-[#10B981] font-semibold">créditos,
                microcréditos, factoring, leasing, pólizas y legal tech</span> a través
                de soluciones tecnológicas seguras.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="p-8 rounded-2xl bg-gradient-to-br from-[#10B981]/10 to-[#34D399]/5 border border-[#10B981]/20 hover:border-[#10B981]/40 transition-all duration-300 hover:-translate-y-2 group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#10B981] to-[#34D399] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-xl">73K+</span>
                    </div>
                    <div>
                      <h3 className="text-[#10B981] font-bold text-lg">Mineros de Subsistencia</h3>
                      <p className="text-[#9CA3AF] text-sm">Inclusión financiera garantizada</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 rounded-2xl bg-gradient-to-br from-[#8B5CF6]/10 to-[#2563EB]/5 border border-[#8B5CF6]/20 hover:border-[#8B5CF6]/40 transition-all duration-300 hover:-translate-y-2 group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#2563EB] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-xl">20K+</span>
                    </div>
                    <div>
                      <h3 className="text-[#8B5CF6] font-bold text-lg">Empresas Mineras</h3>
                      <p className="text-[#9CA3AF] text-sm">Mediana y pequeña minería</p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </FadeInUp>
        </div>
      </Container>
    </section>
  );
}