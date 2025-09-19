'use client';

import LogoHeader from './LogoHeader';
import HeroSection from './HeroSection';
import FadeInUp from '@/components/ui/animations/FadeInUp';
import MinimalNavbar from '@/components/layout/MinimalNavbar';
import InteractiveHeroBackground from './InteractiveBackground';

const HeaderLayout = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Fondo interactivo de cuadros */}
  <InteractiveHeroBackground holdTime={500} cellSize={70} />


      {/* Contenido */}
      <div className="relative z-10">
        <FadeInUp delay={0.1}>
          <LogoHeader />
        </FadeInUp>

        <MinimalNavbar />

        <FadeInUp delay={0.5}>
          <HeroSection />
        </FadeInUp>
      </div>
    </div>
  );
};

export default HeaderLayout;
