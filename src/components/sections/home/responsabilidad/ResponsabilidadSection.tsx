'use client';

import React from 'react';
import { Container } from '@/components/ui';
import FadeInUp from '@/components/ui/animations/FadeInUp';
import Image from 'next/image';

const ResponsabilidadSocialSection: React.FC = () => {
  const beneficios = [
    { texto: "Capacitación de proveedores en legalidad, finanzas y tecnología." },
    { texto: "Bancarización de zonas rurales." },
    { texto: "Formalización del efectivo." },
    { texto: "Formación en buenas prácticas mineras." }
  ];

  return (
    <section className="relative overflow-hidden pt-32 pb-20 px-4">
      {/* Fondo armonizado y coherente */}
      <div className="absolute inset-0 z-0">
        {/* Gradiente base oscuro */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1112] via-[#0F1112] to-[#0F1112]" />
        {/* Overlays sutiles para profundidad */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(132,69,140,0.06)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(180,146,105,0.05)_0%,transparent_70%)]" />
        {/* Textura sutil tipo grid */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <Container>
        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Columna izquierda - Imagen */}
            <FadeInUp delay={0.2}>
              <div className="relative">
                <div
                  className="relative w-full aspect-square max-w-md mx-auto lg:mx-0 
                             overflow-hidden rounded-2xl transition-all duration-500 
                             hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#6A7C6F]/30
                             ring-1 ring-[#6A7C6F]/20 hover:ring-[#84458C]/30"
                >
                  <Image
                    src="/images/responsabilidad.png"
                    alt="Mujer sonriente representando responsabilidad social"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Overlay decorativo FO mejorado */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

                  </div>
                  {/* Overlay sutil para mejor integración */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A261E]/20 to-transparent" />
                </div>
              </div>
            </FadeInUp>

            {/* Columna derecha - Contenido */}
            <div className="space-y-8">
              <FadeInUp delay={0.3}>
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                    Responsabilidad <span className="text-[#84458C]">social</span>
                  </h2>
                  <p className="text-lg text-gray-300 leading-relaxed mb-8 font-medium">
                    Creemos en las personas como motor de transformación. Por eso, en{' '}
                    <span className="font-bold text-white">FIL-ON</span>{' '}
                    llevamos educación, inclusión financiera y prácticas responsables a las comunidades rurales para que crezcan de manera justa y sostenible.
                  </p>
                </div>
              </FadeInUp>

              {/* Lista de beneficios mejorada */}
              <FadeInUp delay={0.4}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {beneficios.map((beneficio, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 rounded-lg transition-all duration-300 
                               hover:translate-x-1 hover:bg-white/5 hover:shadow-sm
                               group cursor-pointer"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-[#84458C] group-hover:bg-[#10B981] transition-colors duration-300" />
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed font-medium">
                        {beneficio.texto}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeInUp>

              {/* CTA adicional para coherencia */}
              <FadeInUp delay={0.5}>
                <div className="pt-4">
                  <button
                    type="button"
                    className="inline-flex items-center px-6 py-3 bg-[#10B981] hover:bg-[#84458C] 
                             text-white font-semibold rounded-full transition-all duration-500 
                             transform hover:scale-105 focus:outline-none focus:ring-4 
                             focus:ring-[#10B981]/30 shadow-lg hover:shadow-xl 
                             hover:shadow-[#84458C]/25 text-sm"
                  >
                    <span>Conocer impacto</span>
                    <svg
                      className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ResponsabilidadSocialSection;