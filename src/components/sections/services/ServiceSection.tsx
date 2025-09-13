'use client';

import React from 'react';
import { Container } from '@/components/ui';
import ServiceCard from '@/components/sections/services/ServiceCard';
import { servicesData } from '@/data/services';
import { Service } from '@/types/services';
import FadeInUp from '@/components/ui/animations/FadeInUp';

const ServicesSection: React.FC = () => {
  return (
    <section
      className="relative overflow-hidden py-20 px-4"
      aria-labelledby="services-section-title"
    >
      {/* Fondo degradado continuo con el header */}
      <div className="absolute inset-0 z-0">
        {/* Degradado suave de arriba (oscuro) hacia abajo */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-slate-900" />

        {/* Overlay radial sutil en el centro */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08)_0%,transparent_70%)]" />
      </div>

      {/* Contenido */}
      <Container>
        <div className="relative z-10">
          {/* Header */}
          <header className="text-center mb-16">
            <FadeInUp delay={0.1}>
              <h2
                id="services-section-title"
                className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
              >
                {servicesData.title}
              </h2>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                {servicesData.subtitle}
              </p>
            </FadeInUp>
          </header>

          {/* Cards */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {servicesData.services.map((service: Service, index: number) => (
                <FadeInUp key={service.id} delay={0.2 * index}>
                  <ServiceCard service={service} index={index} />
                </FadeInUp>
              ))}
            </div>
          </div>

          {/* CTA */}
          <FadeInUp delay={0.6}>
            <div className="text-center mt-16">
              <button
                type="button"
                className="inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-500/50 text-sm"
                aria-label="Conocer más sobre nuestros servicios"
              >
                <span>Conoce más</span>
                <svg
                  className="ml-2 w-4 h-4"
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
      </Container>
    </section>
  );
};

export default ServicesSection;
