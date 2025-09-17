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
        {/* Logo Header */}
      <LogoHeader />
      
      {/* Navbar global */}
      <MinimalNavbar />
      
      {/* Hero Section */}
      <ServiciosHeroSection />
      
      {/* Servicios Financieros Clásicos */}
      <ServiciosFinancierosSection />
      
      {/* Legal Tech y Tecnológicos */}
      <LegalTechSection />
      
      {/* Crypto y DeFi */}
      <CryptoDeFiSection />
      
      {/* Servicios Complementarios */}
      <ComplementariosSection />
    </div>
  );
}