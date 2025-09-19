import React from 'react';
import Image from 'next/image';

const ComplianceSection: React.FC = () => {
  return (
    <section className="relative w-full h-[200px] sm:h-[240px] lg:h-[280px] overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/seccion2.webp"
          alt="Mineros trabajando - Cumplimiento y control"
          fill
          priority
          className="object-cover object-center w-full scale-[1.02] transform brightness-[1.02] contrast-[1.02]"
          sizes="100vw"
          quality={90}
        />
      </div>

      {/* Contenido */}
      <div className="absolute inset-0 z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="w-full max-w-7xl mx-auto space-y-5">
          {/* Título */}
          <div className="flex justify-center">
            <div className="backdrop-blur-[3px] bg-gradient-to-b from-white/5 to-transparent px-5 py-2.5 rounded-lg shadow-sm">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white drop-shadow text-center">
                Cumplimiento y Trazabilidad.
              </h2>
            </div>
          </div>
          
          {/* Subtítulo */}
          <div className="flex justify-center">
            <div className="backdrop-blur-[3px] bg-gradient-to-b from-white/5 to-transparent px-4 py-2 rounded-lg shadow-sm max-w-2xl">
              <p className="text-sm sm:text-base text-white/90 leading-relaxed text-center">
                Trabajamos para que cada cliente proveedor y aliado crezcan con seguridad y transparencia
              </p>
            </div>
          </div>

          {/* Grid de características */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {/* Bancarización */}
            <div className="text-center group">
              <div className="backdrop-blur-[3px] bg-gradient-to-b from-white/5 to-transparent px-3 py-3 rounded-lg hover:from-white/8 hover:to-white/2 transition-all duration-300 shadow-sm">
                <div className="w-2.5 h-2.5 bg-green-400/90 rounded-full mx-auto mb-2 group-hover:scale-125 transition-transform duration-300" />
                <h3 className="text-xs sm:text-sm font-medium text-white/90 leading-tight">
                  Bancarización de zonas rurales.
                </h3>
              </div>
            </div>

            {/* Formalización */}
            <div className="text-center group">
              <div className="backdrop-blur-[3px] bg-gradient-to-b from-white/5 to-transparent px-3 py-3 rounded-lg hover:from-white/8 hover:to-white/2 transition-all duration-300 shadow-sm">
                <div className="w-2.5 h-2.5 bg-green-400/90 rounded-full mx-auto mb-2 group-hover:scale-125 transition-transform duration-300" />
                <h3 className="text-xs sm:text-sm font-medium text-white/90 leading-tight">
                  Formalización del efectivo.
                </h3>
              </div>
            </div>

            {/* Capacitación */}
            <div className="text-center group">
              <div className="backdrop-blur-[3px] bg-gradient-to-b from-white/5 to-transparent px-3 py-3 rounded-lg hover:from-white/8 hover:to-white/2 transition-all duration-300 shadow-sm">
                <div className="w-2.5 h-2.5 bg-green-400/90 rounded-full mx-auto mb-2 group-hover:scale-125 transition-transform duration-300" />
                <h3 className="text-xs sm:text-sm font-medium text-white/90 leading-tight">
                  Capacitación de proveedores en legalidad, finanzas y tecnología.
                </h3>
              </div>
            </div>

            {/* Formación */}
            <div className="text-center group">
              <div className="backdrop-blur-[3px] bg-gradient-to-b from-white/5 to-transparent px-3 py-3 rounded-lg hover:from-white/8 hover:to-white/2 transition-all duration-300 shadow-sm">
                <div className="w-2.5 h-2.5 bg-green-400/90 rounded-full mx-auto mb-2 group-hover:scale-125 transition-transform duration-300" />
                <h3 className="text-xs sm:text-sm font-medium text-white/90 leading-tight">
                  Formación en buenas prácticas mineras.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;