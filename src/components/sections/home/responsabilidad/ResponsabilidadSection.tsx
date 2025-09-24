'use client';

import React, { useEffect, useState } from 'react';
import { Container } from '@/components/ui';
import FadeInUp from '@/components/ui/animations/FadeInUp';
import Image from 'next/image';

const images = [
  '/images/responsabilidad.webp',
  '/images/responsabilidad1.webp',
  '/images/responsabilidad2.webp',
  '/images/responsabilidad3.webp',
];

const ResponsabilidadSocialSection: React.FC = () => {
  const beneficios = [
    { texto: 'Educación.' },
    { texto: 'Herramientas Financieras.' },
    { texto: 'Herramientas Tecnológicas' },
    { texto: 'Comercio electrónico' },
    { texto: 'Emprendimiento.' },
  ];

  const [current, setCurrent] = useState(0);

  // Rotar imágenes cada 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden pt-32 pb-20 px-4">
      {/* Fondo armonizado */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1112] via-[#0F1112] to-[#0F1112]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(132,69,140,0.06)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(180,146,105,0.05)_0%,transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <Container>
        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Columna izquierda - Stack de imágenes */}
            <FadeInUp delay={0.2}>
              <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0">
                <div className="relative w-full h-full">
                  {images.map((src, index) => {
                    // calcular desplazamiento detrás de la principal
                    const offset = (index - current + images.length) % images.length;
                    return (
                      <div
                        key={index}
                        className={`absolute inset-0 rounded-2xl overflow-hidden transition-all duration-700`}
                        style={{
                          transform: `translate(${offset * 12}px, ${offset * 12}px) scale(${
                            offset === 0 ? 1 : 0.95
                          })`,
                          opacity: offset > 2 ? 0 : 1,
                          zIndex: images.length - offset,
                        }}
                      >
                        <Image
                          src={src}
                          alt={`Responsabilidad social ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1A261E]/20 to-transparent" />
                      </div>
                    );
                  })}
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
                    llevamos educación, inclusión financiera y prácticas responsables a las
                    comunidades rurales para que crezcan de manera justa y sostenible.
                  </p>
                </div>
              </FadeInUp>

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
