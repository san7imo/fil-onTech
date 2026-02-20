'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Users, Briefcase, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import Container from '@/components/ui/Container';

// Definimos las rutas
const NAVIGATION = [
  { name: 'Inicio', href: '/construccion' },
  { name: 'Quiénes Somos', href: '/construccion/quienes-somos' },
  { name: 'Servicios', href: '/construccion/servicios' },
  { name: 'Contacto', href: '/construccion/contacto' },
];

const MinimalNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Cierra el menú al cambiar de ruta
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navIcons = {
    '/construccion': Home,
    '/construccion/quienes-somos': Users,
    '/construccion/servicios': Briefcase,
    '/construccion/contacto': Mail,
  };

  const isActive = (href: string): boolean =>
    href === '/construccion'
      ? pathname === '/construccion'
      : pathname.startsWith(href);

  return (
    <nav className="relative z-40">
      <Container>
        <div className="flex items-center justify-center py-4">
          {/* Desktop */}
          <div className="hidden md:flex">
            <div className="bg-black/20 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
              <div className="flex items-center space-x-8">
                {NAVIGATION.map((item) => {
                  const Icon = navIcons[item.href as keyof typeof navIcons];
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        'flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative',
                        active
                          ? 'text-white bg-[#84458C]'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      )}
                    >
                      {Icon && <Icon size={16} />}
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Botón menú móvil */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden bg-black/20 backdrop-blur-md rounded-full p-3 border border-white/20 text-white hover:bg-white/10 transition-colors duration-200"
            aria-label="Abrir menú"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      {/* Menú móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 z-50"
          >
            <Container>
              <div className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/20 p-4 mt-4">
                <div className="space-y-2">
                  {NAVIGATION.map((item) => {
                    const Icon = navIcons[item.href as keyof typeof navIcons];
                    const active = isActive(item.href);
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          'flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-colors duration-200 w-full',
                          active
                            ? 'text-white bg-[#84458C]'
                            : 'text-white/80 hover:text-white hover:bg-white/10'
                        )}
                      >
                        {Icon && <Icon size={18} />}
                        <span>{item.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MinimalNavbar;
