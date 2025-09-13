'use client';

import Image from 'next/image';
import Container from '@/components/ui/Container';

const LogoHeader = () => {
  return (
    <div className="relative w-full">
      {/* Línea horizontal superior */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-white/30 transform -translate-y-1/2 z-0" />
      
      {/* Container para el logo */}
      <Container>
        <div className="flex justify-center py-8">
          <div className="bg-black/20 backdrop-blur-sm rounded-full p-4 relative z-10">
            <Image
              src="/images/logo.webp"
              alt="fil-On Tech"
              width={120}
              height={120}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </Container>
      
      {/* Línea horizontal inferior */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-white/30 transform -translate-y-1/2 z-0" />
    </div>
  );
};

export default LogoHeader;