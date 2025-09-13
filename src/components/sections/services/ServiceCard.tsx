'use client';

import React from 'react';
import Image from 'next/image';
import { Service } from '@/types/services';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const Icon = service.icon;

  const getCardBorder = (color: string): string => {
    switch (color) {
      case 'primary':
        return 'border-slate-600';
      case 'secondary':
        return 'border-emerald-600';
      case 'tertiary':
        return 'border-blue-600';
      default:
        return 'border-slate-600';
    }
  };

  return (
    <article
      className={`relative flex flex-col rounded-xl border ${getCardBorder(
        service.color,
      )} bg-slate-900/80 backdrop-blur-sm text-white transition-all duration-300 hover:scale-105 hover:shadow-xl w-[320px] h-[320px]`}
      role="article"
      aria-labelledby={`service-title-${service.id}`}
    >
      {/* Imagen superior */}
<div className="relative w-full aspect-[1920/711] overflow-hidden rounded-t-xl">
  <Image
    src={`/images/${service.id}.webp`}
    alt={service.title}
    fill
    className="object-cover" // ahora sí ocupa todo sin deformarse
    priority={index === 0}
  />
</div>


      {/* Contenido principal */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <header className="mb-4">
          <div className="flex items-center justify-between">
            <h3
              id={`service-title-${service.id}`}
              className="text-lg font-semibold"
            >
              {service.name}
            </h3>
            <Icon className="w-6 h-6 text-white opacity-70" />
          </div>
          <p className="text-sm text-white/70 mt-1">{service.description}</p>
        </header>

        {/* Features */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          {service.features.map((feature, featureIndex) => (
            <div
              key={`${service.id}-feature-${featureIndex}`}
              className="flex items-center text-sm"
            >
              <span className="text-emerald-400 mr-2">•</span>
              <span className="text-white/80 text-xs">{feature.title}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
