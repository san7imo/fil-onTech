import React from 'react';
import Image from 'next/image';

const ComplianceSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[320px] sm:min-h-[400px] lg:min-h-[480px] overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/seccion2.webp"
          alt="Mineros trabajando - Cumplimiento y control"
          fill
          priority
          className="object-cover object-center w-full h-full brightness-[0.85] contrast-[1.05]"
          sizes="100vw"
          quality={90}
        />
        {/* Overlay para legibilidad */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center space-y-6">
        {/* Título */}
        <div className="backdrop-blur-[3px] bg-gradient-to-b from-white/10 to-transparent px-6 py-3 rounded-lg shadow-sm">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white drop-shadow text-center">
            Cumplimiento y Trazabilidad.
          </h2>
        </div>
        
        {/* Subtítulo */}
        <div className="backdrop-blur-[3px] bg-gradient-to-b from-white/10 to-transparent px-5 py-3 rounded-lg shadow-sm max-w-2xl">
          <p className="text-sm sm:text-base text-white/90 leading-relaxed text-center">
            En FIL-ON TECH S.A.S protegemos la integridad de cada operación mediante estrictos protocolos de cumplimiento y control en LA/FT/FPADM/CO/S. Nuestro compromiso con la transparencia y la trazabilidad nos convierte en un aliado confiable para clientes, socios y autoridades, fortaleciendo relaciones basadas en ética y seguridad.
          </p>
        </div>

        {/* Grid de características */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 w-full max-w-5xl">
          {[
            "Bancarización de zonas rurales.",
            "Formalización del efectivo.",
            "Capacitación de proveedores en legalidad, finanzas y tecnología.",
            "Formación en buenas prácticas mineras."
          ].map((text, i) => (
            <div key={i} className="text-center group">
              <div className="backdrop-blur-[3px] bg-gradient-to-b from-white/5 to-transparent px-4 py-4 rounded-lg hover:from-white/10 hover:to-white/5 transition-all duration-300 shadow-sm">
                <div className="w-3 h-3 bg-green-400/90 rounded-full mx-auto mb-2 group-hover:scale-125 transition-transform duration-300" />
                <h3 className="text-xs sm:text-sm font-medium text-white/90 leading-snug">
                  {text}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
