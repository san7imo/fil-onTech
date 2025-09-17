import HeroContacto from '@/components/sections/contacto/HeroContacto';
import RedesContacto from '@/components/sections/contacto/RedesContacto';
import FormContacto from '@/components/sections/contacto/FormContacto';
import MinimalNavbar from '@/components/layout/MinimalNavbar';
import LogoHeader from '@/components/sections/home/hero/LogoHeader';

export default function ContactoPage() {
  return (
    <div className="bg-[#0F1112] text-white">
           {/* Logo Header */}
      <LogoHeader />

      {/* Navbar global */}
      <MinimalNavbar />
      <HeroContacto />
      <FormContacto />
      <RedesContacto />

    </div>
  );
}
