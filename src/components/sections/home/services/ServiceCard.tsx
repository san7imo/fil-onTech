'use client';

import React from 'react';
import Image from 'next/image';
import { Service } from '@/types/services';

// ✅ LogoHeader recibe el gradiente definido en servicesData
const LogoHeader = ({ bgGradient }: { bgColor?: string; bgGradient?: string }) => {
  return (
    <div
      className="relative w-full h-[130px] rounded-t-xl flex items-center justify-center"
      style={{
        background: bgGradient || undefined,
      }}
    >

      {/* Logo */}
      <div className="flex justify-center relative z-10">
        <Image
          src="/images/logo1.webp"
          alt="Fil-On Tech"
          width={255}
          height={55}
          className="object-contain filter brightness-0 invert"
          priority
        />
      </div>
    </div>
  );
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = service.icon;

  // 🎨 Colores de los íconos según el servicio
  const getIconColor = (color: string) => {
    switch (color) {
      case 'primary':     return 'text-blue-400';   // Capital
      case 'secondary':   return 'text-green-400';  // Tech
      case 'tertiary':    return 'text-purple-400'; // Guardian
      case 'quaternary':  return 'text-gray-300';   // LegalTech
      default:            return 'text-white';
    }
  };

  const iconColor = getIconColor(service.color);

  return (
<article
  className="relative flex flex-col rounded-xl transition-all duration-300 
             hover:scale-[1.02] hover:shadow-xl
             w-full max-w-[500px] h-full overflow-hidden
             bg-transparent border border-white/10 mx-auto"
  role="article"
  aria-labelledby={`service-title-${service.id}`}
>

      {/* Header con gradiente */}
      <LogoHeader bgGradient={service.backgroundGradient} />

      {/* Contenido principal */}
      <div className="flex-1 flex flex-col px-6 py-6 bg-transparent">
        {/* Header del servicio */}
        <div className="flex items-center justify-between mb-4">
          <h3
            id={`service-title-${service.id}`}
            className="text-xl font-bold text-white tracking-wide"
          >
            {service.name}
          </h3>
          <div className="p-2 bg-transparent rounded-lg">
            <Icon className={`w-7 h-7 ${iconColor}`} />
          </div>
        </div>

        {/* Descripción */}
        <p className="text-white/80 text-sm mb-5 leading-relaxed">
          {service.description}
        </p>

        {/* Features */}
        <div className="space-y-2 mt-auto">
          {service.features.map((feature, featureIndex) => (
            <div
              key={`${service.id}-feature-${featureIndex}`}
              className="flex items-start transition-all duration-200"
            >
              <div className="flex-shrink-0 mt-1.5 mr-2">
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
              </div>
              <span className="text-white/90 text-sm leading-relaxed font-normal">
                {feature.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
