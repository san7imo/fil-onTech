import Link from 'next/link';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { COMPANY_INFO, NAVIGATION, SERVICES } from '@/lib/constants';
import Container from '@/components/ui/Container';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Información de la empresa */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <Link href="/construccion" className="flex items-center space-x-2">
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-white">
                      fil-On
                    </span>
                    <span className="text-lg font-medium -mt-1 text-emerald-400">
                      Tech
                    </span>
                  </div>
                </Link>
              </div>
              
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                {COMPANY_INFO.description}
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail size={18} className="text-emerald-400" />
                  <a 
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="hover:text-emerald-400 transition-colors duration-200"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone size={18} className="text-emerald-400" />
                  <a 
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="hover:text-emerald-400 transition-colors duration-200"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin size={18} className="text-emerald-400" />
                  <span>Medellín, Antioquia, Colombia</span>
                </div>

                <div className="flex items-center space-x-3 text-gray-300">
                  <ExternalLink size={18} className="text-emerald-400" />
                  <a 
                    href={`https://${COMPANY_INFO.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors duration-200"
                  >
                    {COMPANY_INFO.website}
                  </a>
                </div>
              </div>
            </div>

            {/* Enlaces rápidos */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">
                Enlaces rápidos
              </h3>
              <ul className="space-y-3">
                {NAVIGATION.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 flex items-center space-x-2"
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Servicios */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">
                Servicios
              </h3>
              <ul className="space-y-3">
                {SERVICES.map((service) => (
                  <li key={service.id}>
                    <Link
                      href={`/construccion/servicios#${service.id}`}
                      className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* CTA adicional */}
              <div className="mt-8 p-4 bg-emerald-600/10 border border-emerald-600/20 rounded-lg">
                <h4 className="font-semibold text-emerald-400 mb-2">
                  ¿Listo para transformar tu negocio?
                </h4>
                <p className="text-sm text-gray-300 mb-3">
                  Únete a la revolución tecnológica agrominera cripto.
                </p>
                <Link
                  href="/construccion/contacto"
                  className="inline-flex items-center space-x-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
                >
                  <span>Contactar ahora</span>
                  <ExternalLink size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-800"></div>

        {/* Copyright y enlaces legales */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} {COMPANY_INFO.name}. Todos los derechos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Fintech Agrominera - Transformando la industria minera
              </p>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="/privacidad"
                className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
              >
                Privacidad
              </Link>
              <Link
                href="/terminos"
                className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
              >
                Términos
              </Link>
              <Link
                href="/cookies"
                className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </Container>

      {/* Nota de confidencialidad */}
      <div className="bg-gray-950 border-t border-gray-800">
        <Container>
          <div className="py-4">
            <p className="text-xs text-gray-500 text-center leading-relaxed">
              La información mostrada es confidencial y se acoge a todo privilegio y derecho de 
              confidencialidad y privacidad de acuerdo con las leyes colombianas e internacionales vigentes.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
