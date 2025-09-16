'use client';

import React from 'react';
import { Container } from '@/components/ui';
import ServiceCard from '@/components/sections/home/services/ServiceCard';
import { servicesData } from '@/data/services';
import { Service } from '@/types/services';
import FadeInUp from '@/components/ui/animations/FadeInUp';

const ServicesSection: React.FC = () => {
  return (
    <section
      className="relative overflow-hidden pt-20 pb-32 px-4"
      aria-labelledby="services-section-title"
    >
      {/* Fondo armonizado mejorado */}
      <div className="absolute inset-0 z-0">
        {/* Gradiente base con toque morado */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1112] via-[#1A1523] to-[#0F1112]" />
        {/* Overlays radiales sutiles */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(132,69,140,0.08)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(132,69,140,0.05)_0%,transparent_80%)]" />
        {/* Textura muy sutil */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#2a1f2d_1px,transparent_1px),linear-gradient(to_bottom,#2a1f2d_1px,transparent_1px)] bg-[size:44px_44px]" />
      </div>

      <Container>
        <div className="relative z-10">
          {/* Header */}
          <header className="text-center mb-16">
            <FadeInUp delay={0.1}>
              <h2
                id="services-section-title"
                className="text-4xl md:text-5xl font-bold text-[#F2F2F2] mb-4 leading-tight"
              >
                {servicesData.title}
              </h2>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <p className="text-lg md:text-xl text-[#F2F2F2]/80 max-w-3xl mx-auto leading-relaxed">
                {servicesData.subtitle}
              </p>
            </FadeInUp>
          </header>

          {/* Cards */}
          <div className="flex justify-center mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {servicesData.services.map((service: Service, index: number) => (
                <FadeInUp key={service.id} delay={0.2 * index}>
                  <ServiceCard service={service} index={index} />
                </FadeInUp>
              ))}
            </div>
          </div>

          {/* CTA mejorado */}
          <FadeInUp delay={0.6}>
            <div className="text-center mt-16">
              <button
                type="button"
                className="inline-flex items-center px-8 py-4 bg-[#84458C] hover:bg-[#10B981] text-white font-semibold rounded-full transition-all duration-500 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#84458C]/30 shadow-lg hover:shadow-xl hover:shadow-[#84458C]/25 text-base"
                aria-label="Conocer más sobre nuestros servicios"
              >
                <span>Conoce más</span>
                <svg
                  className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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