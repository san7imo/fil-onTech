'use client';

import Image from 'next/image';
import LogoHeader from './LogoHeader';
import MinimalNavbar from '../../layout/MinimalNavbar';
import HeroSection from './HeroSection';
import FadeInUp from '@/components/ui/animations/FadeInUp';

const HeaderLayout = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/banerhead.webp"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Overlay para mejorar legibilidad */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Contenido */}
      <div className="relative z-10">
        {/* Logo con líneas */}
        <FadeInUp delay={0.1}>
          <LogoHeader />
        </FadeInUp>
        
        {/* Navbar minimalista */}
        <FadeInUp delay={0.3}>
          <MinimalNavbar />
        </FadeInUp>
        
        {/* Hero Section */}
        <FadeInUp delay={0.5}>
          <HeroSection />
        </FadeInUp>
      </div>
    </div>
  );
};

export default HeaderLayout;
