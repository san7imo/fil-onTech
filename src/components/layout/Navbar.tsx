'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Users, Briefcase, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAVIGATION } from '@/lib/constants';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Detectar scroll para cambiar el estilo del navbar
  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navIcons = {
    '/': Home,
    '/quienes-somos': Users,
    '/servicios': Briefcase,
    '/contacto': Mail,
  };

  const isActive = (href: string): boolean => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-transparent'
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex flex-col">
              <span className={cn(
                'text-2xl font-bold transition-colors duration-300',
                isScrolled ? 'text-gray-900' : 'text-white'
              )}>
                fil-On
              </span>
              <span className={cn(
                'text-sm font-medium -mt-1 transition-colors duration-300',
                isScrolled ? 'text-emerald-600' : 'text-emerald-400'
              )}>
                Tech
              </span>
            </div>
          </Link>

          {/* Navegación Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAVIGATION.map((item) => {
              const Icon = navIcons[item.href as keyof typeof navIcons];
              const active = isActive(item.href);
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative',
                    active
                      ? isScrolled 
                        ? 'text-emerald-600 bg-emerald-50' 
                        : 'text-emerald-400 bg-white/10'
                      : isScrolled
                        ? 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
                        : 'text-white hover:text-emerald-400 hover:bg-white/10'
                  )}
                >
                  {Icon && <Icon size={16} />}
                  <span>{item.name}</span>
                  {active && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-emerald-600/10 rounded-lg -z-10"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden lg:block">
            <Button 
              href="/contacto"
              variant={isScrolled ? 'primary' : 'outline'}
              size="md"
            >
              Contactar
            </Button>
          </div>

          {/* Botón menú móvil */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              'lg:hidden p-2 rounded-lg transition-colors duration-200',
              isScrolled 
                ? 'text-gray-900 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            )}
            aria-label="Abrir menú"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Menú móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <Container>
              <div className="py-4 space-y-2">
                {NAVIGATION.map((item) => {
                  const Icon = navIcons[item.href as keyof typeof navIcons];
                  const active = isActive(item.href);
                  
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        'flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200',
                        active
                          ? 'text-emerald-600 bg-emerald-50'
                          : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
                      )}
                    >
                      {Icon && <Icon size={20} />}
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
                
                {/* CTA Button móvil */}
                <div className="pt-4 border-t border-gray-200">
                  <Button 
                    href="/contacto"
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    Contactar
                  </Button>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;