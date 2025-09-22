'use client';

import Image from 'next/image';
import Container from '@/components/ui/Container';

const LogoHeader = () => {
  return (
    <div className="relative w-full">
{/* Línea izquierda */}
<div className="absolute left-0 top-[34.5%] h-[5px] bg-white w-1/2 z-10" />

{/* Línea derecha */}
<div className="absolute right-0 top-[22.5%] h-[5px] bg-white w-51/100 z-10" />


      {/* Container para el logo */}
      <Container>
        <div className="flex justify-center py-8 relative z-0">
          <Image
            src="/images/logo.webp"
            alt="Fil-On Tech"
            width={170}
            height={170}
            className="object-contain"
            priority
          />
        </div>
      </Container>
    </div>
  );
};

export default LogoHeader;
