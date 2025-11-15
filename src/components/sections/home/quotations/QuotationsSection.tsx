'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui';
import FadeInUp from '@/components/ui/animations/FadeInUp';
import CotizationChart from './CotizationChart';
import { commoditiesByCategory } from '@/data/quotations';

const QuotationsSection: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('precious-metals');

  const categories = [
    commoditiesByCategory['precious-metals'],
    commoditiesByCategory['gemstones'],
    commoditiesByCategory['industrial-metals'],
    commoditiesByCategory['agricultural'],
    commoditiesByCategory['financial'],
  ];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  // Iconos SVG por categoría
  const categoryIcons = {
    'precious-metals': (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
      </svg>
    ),
    'gemstones': (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    'industrial-metals': (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4-13H8v8h8V7z" />
      </svg>
    ),
    'agricultural': (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    'financial': (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11z" />
      </svg>
    ),
  };

  const categoryColors = {
    'precious-metals': 'from-[#D4AF37]/20 to-[#B49269]/10',
    'gemstones': 'from-[#50C878]/20 to-[#10B981]/10',
    'industrial-metals': 'from-[#8B4513]/20 to-[#6B7280]/10',
    'agricultural': 'from-[#6F4E37]/20 to-[#8B4513]/10',
    'financial': 'from-[#F7931A]/20 to-[#1E40AF]/10',
  };

  const categoryIconColors = {
    'precious-metals': 'text-[#D4AF37]',
    'gemstones': 'text-[#50C878]',
    'industrial-metals': 'text-[#B87333]',
    'agricultural': 'text-[#6F4E37]',
    'financial': 'text-[#F7931A]',
  };

  return (
    <section className="relative overflow-hidden py-16 px-4" aria-labelledby="quotations-title">
      {/* Fondo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1112] via-[#1A261E]/20 to-[#0F1112]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(16,185,129,0.08)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,rgba(132,69,140,0.05)_0%,transparent_70%)]" />
      </div>

      <Container>
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <FadeInUp delay={0.1}>
              <h2
                id="quotations-title"
                className="text-4xl lg:text-6xl font-bold text-[#F2F2F2] mb-4 leading-tight"
              >
                Cotizaciones en{' '}
                <span className="bg-gradient-to-r from-[#10B981] to-[#84458C] bg-clip-text text-transparent">
                  Vivo
                </span>
              </h2>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <p className="text-base lg:text-lg text-[#F2F2F2]/70 max-w-2xl mx-auto leading-relaxed">
                Monitorea en tiempo real los precios de commodities mineros, agrícolas, criptomonedas e índices bursátiles.
              </p>
            </FadeInUp>
          </div>

          {/* Categorías - Acordeones */}
          <div className="space-y-3">
            {categories.map((category, categoryIndex) => {
              const isExpanded = expandedCategory === category.id;
              return (
                <FadeInUp key={category.id} delay={0.3 + categoryIndex * 0.1}>
                  <div className="space-y-0">
                    {/* Botón desplegable de categoría */}
                    <button
                      onClick={() => toggleCategory(category.id)}
                      className={`group relative w-full overflow-hidden rounded-xl bg-gradient-to-r ${categoryColors[category.id as keyof typeof categoryColors]} 
                                  border border-[#6A7C6F]/30 px-5 py-4 transition-all duration-300 hover:shadow-lg active:scale-[0.99]`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative z-10 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2 rounded-lg bg-gradient-to-br from-[#1A261E] to-[#0F1112] 
                                        border border-[#6A7C6F]/20 ${categoryIconColors[category.id as keyof typeof categoryIconColors]} 
                                        group-hover:scale-110 transition-transform duration-300`}
                          >
                            {categoryIcons[category.id as keyof typeof categoryIcons]}
                          </div>

                          <div className="text-left">
                            <h3 className="text-lg font-bold text-[#F2F2F2] group-hover:text-[#10B981] transition-colors duration-300">
                              {category.title}
                            </h3>
                            <p className="text-[#F2F2F2]/50 text-xs leading-tight hidden sm:block">
                              {category.description}
                            </p>
                          </div>
                        </div>

                        {/* Icono chevron animado */}
                        <svg
                          className={`w-5 h-5 text-[#F2F2F2] transition-transform duration-300 flex-shrink-0 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </svg>
                      </div>
                    </button>

                    {/* Grid de commodities - Desplegable */}
                    {isExpanded && (
                      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 px-1 pb-2 animate-in fade-in slide-in-from-top-2 duration-300">
                        {category.commodities.map((commodity, index) => (
                          <FadeInUp key={commodity.id} delay={0.05 + index * 0.03}>
                            <CotizationChart commodity={commodity} />
                          </FadeInUp>
                        ))}
                      </div>
                    )}
                  </div>
                </FadeInUp>
              );
            })}
          </div>

          {/* Footer con info adicional - Más compacto */}
          <FadeInUp delay={0.8}>
            <div className="mt-12 pt-8 border-t border-[#6A7C6F]/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <h4 className="text-xs font-semibold text-[#10B981] uppercase tracking-widest mb-1">
                    Datos en Vivo
                  </h4>
                  <p className="text-xs text-[#F2F2F2]/60">
                    Actualización cada minuto
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#84458C] uppercase tracking-widest mb-1">
                    Histórico
                  </h4>
                  <p className="text-xs text-[#F2F2F2]/60">
                    Últimos 7 días de tendencias
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#6A7C6F] uppercase tracking-widest mb-1">
                    4 Categorías
                  </h4>
                  <p className="text-xs text-[#F2F2F2]/60">
                    Minería, Agricultura, Crypto y Finanzas
                  </p>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </Container>
    </section>
  );
};

export default QuotationsSection;
