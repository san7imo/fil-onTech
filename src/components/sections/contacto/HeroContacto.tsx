'use client';

import FadeInUp from '@/components/ui/animations/FadeInUp';
import { Container } from '@/components/ui';

export default function HeroContacto() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0F1112] via-[#1A261E]/80 to-[#10B981]/20" />
      <Container>
        <FadeInUp>
          <h1 className="text-5xl lg:text-6xl font-bold text-center mb-6">
            Contáctanos
          </h1>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <p className="max-w-3xl mx-auto text-center text-gray-300 text-lg leading-relaxed">
            En <span className="text-emerald-400">Fil-On Tech</span> queremos escucharte. 
            Si tienes preguntas, propuestas o deseas ser parte de nuestra visión, no dudes en ponerte en contacto.
          </p>
        </FadeInUp>
      </Container>
    </section>
  );
}
