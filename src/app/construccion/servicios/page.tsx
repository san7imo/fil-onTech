'use client';

import MinimalNavbar from '@/components/layout/MinimalNavbar';
import LogoHeader from '@/components/sections/home/hero/LogoHeader';
import ServiciosHeroSection from '@/components/sections/servicios/ServiciosHeroSection';
import ServiciosFinancierosSection from '@/components/sections/servicios/ServiciosFinancierosSection';
import LegalTechSection from '@/components/sections/servicios/LegalTechSection';
import CryptoDeFiSection from '@/components/sections/servicios/CryptoDeFiSection';
import ComplementariosSection from '@/components/sections/servicios/ComplementariosSection';

export default function ServiciosPage() {
  return (
    <div className="bg-[#0F1112] text-white">
      {/* Sección superior con imagen de fondo */}
      <div className="relative">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
          style={{ 
            backgroundImage: "url('/images/servicios.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        {/* Overlay oscuro para legibilidad */}
        <div className="absolute inset-0 bg-black/70 z-10" />

        {/* Gradientes de fondo */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A261E]/70 via-[#0F1112]/70 to-[#111827]/70 z-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#10B981]/10 via-transparent to-[#8B5CF6]/10 z-30" />

        {/* Elementos decorativos animados */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-[#10B981]/10 to-[#34D399]/10 rounded-full blur-3xl animate-pulse z-40" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-[#8B5CF6]/10 to-[#2563EB]/10 rounded-full blur-3xl animate-pulse delay-1000 z-40" />

        {/* Contenido superpuesto */}
        <div className="relative z-50">
          {/* Logo Header */}
          <LogoHeader />
          
          {/* Navbar global */}
          <MinimalNavbar />
          
          {/* Hero Section */}
          <ServiciosHeroSection />
        </div>
      </div>
      
      {/* Resto de secciones con fondo normal */}
      <div className="bg-[#0F1112]">
        {/* Servicios Financieros Clásicos */}
        <ServiciosFinancierosSection />
        
        {/* Legal Tech y Tecnológicos */}
        <LegalTechSection />
        
        {/* Crypto y DeFi */}
        <CryptoDeFiSection />
        
        {/* Servicios Complementarios */}
        <ComplementariosSection />
      </div>
    </div>
  );
}