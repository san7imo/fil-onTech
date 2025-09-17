'use client';

import MinimalNavbar from '@/components/layout/MinimalNavbar';
import LogoHeader from '@/components/sections/home/hero/LogoHeader';
import HeroSection from '@/components/sections/quienes-somos/HeroSection';
import MisionSection from '@/components/sections/quienes-somos/MisionSection';
import VisionSection from '@/components/sections/quienes-somos/VisionSection';
import DescripcionSection from '@/components/sections/quienes-somos/DescripcionSection';
import ValoresSection from '@/components/sections/quienes-somos/ValoresSection';
import EquipoSection from '@/components/sections/quienes-somos/EquipoSection';

export default function QuienesSomosPage() {
  return (
    <div className="bg-[#0F1112] text-white">
     {/* Logo Header */}
      <LogoHeader />

      {/* Navbar global */}
      <MinimalNavbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      
      {/* Misión */}
      <MisionSection />
      
      {/* Visión */}
      <VisionSection />
      
      {/* Descripción detallada */}
      <DescripcionSection />
      
      {/* Valores */}
      <ValoresSection />
      
      {/* Equipo */}
      <EquipoSection />
    </div>
  );
}