'use client';

import React from 'react';
import Image from 'next/image';
import { Service } from '@/types/services';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = service.icon;

  const getCardStyles = (color: string) => {
    switch (color) {
      case 'primary': // Capital - Gris
        return {
          gradient: 'bg-[#29353B]',
          border: 'border-[#29353B]/50 hover:border-[#29353B]',
          iconBg: 'bg-gradient-to-br from-[#29353B] to-[#1F2729]',
          iconColor: 'text-white',
          hoverGlow: 'hover:shadow-[#29353B]',
          titleHover: 'group-hover:text-[#10B981]',
          contentBg: 'bg-gradient-to-b from-black/40 to-transparent'
        };
      case 'secondary': // Tech - Verde
        return {
          gradient: 'bg-[#1F3029]',
          border: 'border-[#1F3029]/50 hover:border-[#1F3029]',
          iconBg: 'bg-gradient-to-br from-[#1F3029] to-[#162821]',
          iconColor: 'text-white',
          hoverGlow: 'hover:shadow-[#1F3029]',
          titleHover: 'group-hover:text-[#84458C]',
          contentBg: 'bg-gradient-to-b from-black/40 to-transparent'
        };
      case 'tertiary': // Guardian - Azul
        return {
          gradient: 'bg-[#172232]',
          border: 'border-[#172232]/50 hover:border-[#172232]',
          iconBg: 'bg-gradient-to-br from-[#172232] to-[#111A27]',
          iconColor: 'text-white',
          hoverGlow: 'hover:shadow-[#172232]',
          titleHover: 'group-hover:text-[#B49269]',
          contentBg: 'bg-gradient-to-b from-black/40 to-transparent'
        };
      default:
        return {
          gradient: 'bg-gradient-to-b from-[#4C6670]/30 to-[#1A261E]/80',
          border: 'border-[#6A7C6F]/30',
          iconBg: 'bg-gradient-to-br from-[#6A7C6F] to-[#1A261E]',
          iconColor: 'text-white',
          hoverGlow: 'hover:shadow-xl',
          titleHover: 'group-hover:text-[#F2F2F2]',
          contentBg: 'bg-gradient-to-b from-[#1A261E]/90 to-[#4C6670]/20'
        };
    }
  };

  const cardStyles = getCardStyles(service.color);

  return (
    <article
      className={`group relative flex flex-col rounded-2xl transition-all duration-500 
                 hover:scale-[1.02] hover:shadow-2xl ${cardStyles.hoverGlow}
                 w-[320px] h-[380px] overflow-hidden border-2 ${cardStyles.border}
                 ${cardStyles.gradient} backdrop-blur-sm`}
      role="article"
      aria-labelledby={`service-title-${service.id}`}
    >
      {/* Overlay de hover sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Header con logo */}
      <div className="relative w-full flex items-center justify-center h-20 px-6 pt-6">
        <div className="relative overflow-hidden rounded-xl p-4 bg-gradient-to-r from-[#1A261E]/60 to-[#4C6670]/40 backdrop-blur-sm border border-[#6A7C6F]/20">
          <Image
            src="/images/logo.webp"
            alt="Fil-On Logo"
            width={80}
            height={36}
            className="object-contain transition-all duration-500 group-hover:scale-105"
            priority
          />
        </div>
      </div>

      {/* Contenido principal mejorado */}
      <div className={`flex-1 mx-4 mb-4 rounded-xl ${cardStyles.contentBg} backdrop-blur-sm border border-[#6A7C6F]/10`}>
        <div className="p-6 h-full flex flex-col">
          {/* Header del servicio */}
          <header className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3
                id={`service-title-${service.id}`}
                className={`text-xl font-bold text-[#F2F2F2] transition-colors duration-300 ${cardStyles.titleHover}`}
              >
                {service.name}
              </h3>
              <div className={`w-12 h-12 rounded-xl ${cardStyles.iconBg} flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                <Icon className={`w-6 h-6 ${cardStyles.iconColor}`} />
              </div>
            </div>
            <p className="text-sm text-[#F2F2F2]/70 leading-relaxed">
              {service.description}
            </p>
          </header>

          {/* Features mejoradas */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="space-y-3">
              {service.features.map((feature, featureIndex) => (
                <div
                  key={`${service.id}-feature-${featureIndex}`}
                  className="group/feature flex items-center p-3 rounded-lg bg-[#1A261E]/40 border border-[#6A7C6F]/10 transition-all duration-300 hover:bg-[#6A7C6F]/10 hover:border-[#6A7C6F]/30"
                >
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-2 h-2 rounded-full bg-[#10B981] group-hover/feature:bg-[#84458C] transition-colors duration-300 shadow-sm" />
                  </div>
                  <span className="text-[#F2F2F2]/80 text-sm font-medium group-hover/feature:text-[#F2F2F2] transition-colors duration-300">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;