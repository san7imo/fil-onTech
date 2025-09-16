'use client';

import Image from 'next/image';
import LogoHeader from './LogoHeader';
import HeroSection from './HeroSection';
import FadeInUp from '@/components/ui/animations/FadeInUp';
import MinimalNavbar from '@/components/layout/MinimalNavbar';

const HeaderLayout = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/agrominera.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={75}
        />
        {/* Overlay base con tonos azulados */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f2d]/40 via-[#1a1f2d]/45 to-[#111827]/60" />
        {/* Overlay para mejorar contraste de texto */}
        <div className="absolute inset-0 bg-black/20" />
        {/* Overlay adicional para profundidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/20 via-transparent to-[#111827]/20" />
        {/* Overlay para asegurar legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/40 via-[#111827]/20 to-transparent" />
      </div>

      {/* Contenido */}
      <div className="relative z-10">
        {/* Logo con líneas */}
        <FadeInUp delay={0.1}>
          <LogoHeader />
        </FadeInUp>
        {/* Navbar global */}
          <MinimalNavbar />
        {/* Hero Section */}
        <FadeInUp delay={0.5}>
          <HeroSection />
        </FadeInUp>
      </div>
    </div>
  );
};

export default HeaderLayout;