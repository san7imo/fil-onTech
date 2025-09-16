'use client';

import Image from "next/image";
import FadeInUp from "@/components/ui/animations/FadeInUp";

const VanguardSection = () => {
  return (
    <div className="relative w-full flex justify-center -my-23 z-10">
      <FadeInUp>
        <div
          className="group relative overflow-hidden rounded-2xl max-w-6xl w-full 
                     transition-all duration-500 ease-in-out transform 
                     hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#84458C]/20
                     border border-[#333]/20 hover:border-[#84458C]/30"
        >
          {/* Imagen */}
          <div className="relative">
            <Image
              src="/images/Frame-18.webp"
              alt="Tecnología para el sector minero"
              width={1200}
              height={500}
              className="object-cover w-full h-full transition-all duration-500 ease-in-out group-hover:opacity-90"
              priority
            />
            {/* Overlay sutil */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
          </div>

          {/* Contenido mejorado */}
          <div className="absolute inset-0 flex items-center px-4 md:px-6 lg:px-8">
            <div className="max-w-sm md:max-w-md transition-all duration-500 group-hover:scale-105">
      
              <h2 className="text-base md:text-lg lg:text-xl font-bold text-white leading-tight mb-2">
                Tecnología de{" "}
                <span className="font-extrabold bg-gradient-to-r from-[#84458C] to-[#B49269] bg-clip-text text-transparent">
                  Vanguardia
                </span>{" "}
                para el sector minero.
              </h2>
              
              <p className="text-white/90 text-[10px] md:text-xs lg:text-sm leading-relaxed mb-3">
                Conectamos empresas del sector minero y entidades financieras
                con soluciones digitales de alto impacto, optimizando procesos
                y asegurando eficiencia.
              </p>
            </div>
          </div>
        </div>
      </FadeInUp>
    </div>
  );
};

export default VanguardSection;