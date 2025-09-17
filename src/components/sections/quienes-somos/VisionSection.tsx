import FadeInUp from '@/components/ui/animations/FadeInUp';
import Image from 'next/image';
import { Container } from '@/components/ui';

export default function VisionSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-[#111827] via-[#1A261E] to-[#111827] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 " />
      
      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-[#8B5CF6]/10 to-[#2563EB]/10 rounded-full blur-2xl animate-pulse delay-500" />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-l from-[#10B981]/10 to-[#34D399]/10 rounded-full blur-2xl animate-pulse delay-1000" />
      
      <Container>
        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <FadeInUp delay={0.2}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/20 to-[#2563EB]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative w-full h-80 rounded-3xl overflow-hidden border border-[#8B5CF6]/20 group-hover:border-[#8B5CF6]/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 to-[#2563EB]/5"></div>
                <Image
                  src="/images/vision.png"
                  alt="Nuestra Visión"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/50 via-transparent to-transparent"></div>
              </div>
            </div>
          </FadeInUp>
          <FadeInUp>
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 bg-gradient-to-r from-[#8B5CF6] to-[#2563EB] rounded-full"></div>
                  <span className="text-[#8B5CF6] font-semibold text-sm tracking-wide uppercase">
                    Nuestra Visión
                  </span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-[#8B5CF6] to-[#2563EB] bg-clip-text text-transparent">
                  El futuro digital minero
                </h2>
              </div>
              <div className="relative">
                <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-[#8B5CF6] to-transparent rounded-full"></div>
                <p className="text-[#D1D5DB] text-lg leading-relaxed pl-2">
                  Ser el referente tecnológico y financiero del sector minero en
                  Latinoamérica, promoviendo la inclusión social, la
                  sostenibilidad y el crecimiento económico responsable,
                  impulsando la transición hacia un ecosistema digital
                  transparente y seguro.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-gradient-to-br from-[#8B5CF6]/10 to-[#2563EB]/10 border border-[#8B5CF6]/20 rounded-xl hover:border-[#8B5CF6]/40 transition-all duration-300 hover:-translate-y-1">
                  <div className="text-[#8B5CF6] font-semibold text-sm mb-1">Transparencia</div>
                  <div className="text-[#9CA3AF] text-xs">Tecnología blockchain</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-[#2563EB]/10 to-[#8B5CF6]/10 border border-[#2563EB]/20 rounded-xl hover:border-[#2563EB]/40 transition-all duration-300 hover:-translate-y-1">
                  <div className="text-[#2563EB] font-semibold text-sm mb-1">Seguridad</div>
                  <div className="text-[#9CA3AF] text-xs">Ecosistema confiable</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-[#10B981]/10 to-[#34D399]/10 border border-[#10B981]/20 rounded-xl hover:border-[#10B981]/40 transition-all duration-300 hover:-translate-y-1">
                  <div className="text-[#34D399] font-semibold text-sm mb-1">Sostenibilidad</div>
                  <div className="text-[#9CA3AF] text-xs">Crecimiento responsable</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-[#34D399]/10 to-[#10B981]/10 border border-[#34D399]/20 rounded-xl hover:border-[#34D399]/40 transition-all duration-300 hover:-translate-y-1">
                  <div className="text-[#10B981] font-semibold text-sm mb-1">Inclusión</div>
                  <div className="text-[#9CA3AF] text-xs">Acceso equitativo</div>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </Container>
    </section>
  );
}