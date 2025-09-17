import FadeInUp from '@/components/ui/animations/FadeInUp';
import Image from 'next/image';
import { Container } from '@/components/ui';

export default function MisionSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F1112] to-[#1A261E]" />
      <div className="absolute top-0 left-0 w-full h-1" />
      
      <Container>
        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <FadeInUp>
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 bg-gradient-to-r from-[#10B981] to-[#34D399] rounded-full"></div>
                  <span className="text-[#34D399] font-semibold text-sm tracking-wide uppercase">
                    Nuestra Misión
                  </span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-[#10B981] to-[#34D399] bg-clip-text text-transparent">
                  Transformamos el sector minero
                </h2>
              </div>
              <div className="relative">
                <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-[#10B981] to-transparent rounded-full"></div>
                <p className="text-[#D1D5DB] text-lg leading-relaxed pl-2">
                  Crear productos financieros y comerciales especializados que
                  faciliten la comercialización, apertura de mercados, inversión
                  y financiación en el ecosistema de minerales preciosos en
                  Latinoamérica.
                </p>
              </div>
              <div className="flex gap-4 pt-4">
                <div className="flex-1 p-4 bg-gradient-to-r from-[#10B981]/10 to-[#34D399]/10 border border-[#10B981]/20 rounded-xl hover:border-[#10B981]/40 transition-all duration-300">
                  <div className="text-[#34D399] font-semibold text-sm mb-1">Comercialización</div>
                  <div className="text-[#9CA3AF] text-xs">Facilitamos el acceso a mercados</div>
                </div>
                <div className="flex-1 p-4 bg-gradient-to-r from-[#2563EB]/10 to-[#8B5CF6]/10 border border-[#2563EB]/20 rounded-xl hover:border-[#2563EB]/40 transition-all duration-300">
                  <div className="text-[#8B5CF6] font-semibold text-sm mb-1">Financiación</div>
                  <div className="text-[#9CA3AF] text-xs">Soluciones crediticias adaptadas</div>
                </div>
              </div>
            </div>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#10B981]/20 to-[#34D399]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative w-full h-80 rounded-3xl overflow-hidden border border-[#10B981]/20 group-hover:border-[#10B981]/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/5 to-[#34D399]/5"></div>
                <Image
                  src="/images/mision.jpg"
                  alt="Nuestra Misión"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1112]/50 via-transparent to-transparent"></div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </Container>
    </section>
  );
}