'use client';

import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-28">
      <Container>
        <div className="max-w-3xl">
          {/* Título principal */}
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              FINTECH{' '}
              <span className="text-emerald-400">
                AGROMINERA
              </span>
            </h1>
          </div>

          {/* Descripción */}
          <p className="text-base md:text-lg text-white mb-8 max-w-xl leading-relaxed font-medium">
Promovemos la inclusión del sector minero en el sistema financiero, ofreciendo soluciones innovadoras que impulsan el crecimiento, fortalecen la seguridad y fomentan la cooperación para un futuro sostenible.
          </p>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              variant="primary"
              size="lg"
              href="/servicios"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full text-sm md:text-base"
            >
              Conocer servicios
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              href="/contacto"
              className="border-white/30 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-full text-sm md:text-base"
            >
              Contactar
            </Button>
          </div>

          {/* Valores clave */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['CRECIMIENTO', 'SEGURIDAD', 'COOPERACIÓN'].map((value, i) => (
              <div key={i} className="text-center md:text-left">
                <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-1">
                  {value}
                </h3>
                <div className="w-8 h-px bg-emerald-400 mx-auto md:mx-0"></div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
