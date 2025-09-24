import FadeInUp from '@/components/ui/animations/FadeInUp';
import { Container } from '@/components/ui';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/agrominera.jpg"
          alt="Fondo agrominera"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Overlay oscuro para legibilidad */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />

      {/* Background gradients adicionales */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#10B981]/10 via-transparent to-[#8B5CF6]/10" />

      {/* Elementos decorativos */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-[#10B981]/20 to-[#34D399]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-[#8B5CF6]/20 to-[#2563EB]/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <Container>
        <div className="relative z-10 max-w-5xl mx-auto">
          <FadeInUp>
            <div className="text-center mb-8">
              <h1 className="text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#D1D5DB] to-[#9CA3AF] bg-clip-text text-transparent drop-shadow-lg">
                ¿Quiénes Somos?
              </h1>
            </div>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="max-w-4xl mx-auto text-xl text-[#E5E7EB] text-center leading-relaxed drop-shadow-md">
              En{' '}
              <span className="font-semibold bg-gradient-to-r from-[#10B981] to-[#34D399] bg-clip-text text-transparent">
                Fil-On Tech
              </span>{' '}
              somos una fintech que está revolucionando el sector minero y
              energético en Latinoamérica, combinando innovación tecnológica,
              inclusión financiera y sostenibilidad.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.4}>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <div className="px-8 py-4 bg-gradient-to-r from-[#10B981] to-[#34D399] rounded-xl shadow-lg shadow-[#10B981]/25 hover:shadow-[#10B981]/40 transition-all duration-300 hover:-translate-y-1">
                <span className="text-white font-semibold">73,000+ Mineros</span>
              </div>
              <div className="px-8 py-4 bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] rounded-xl shadow-lg shadow-[#2563EB]/25 hover:shadow-[#2563EB]/40 transition-all duration-300 hover:-translate-y-1">
                <span className="text-white font-semibold">20,000+ Empresas</span>
              </div>
            </div>
          </FadeInUp>
        </div>
      </Container>
    </section>
  );
}
