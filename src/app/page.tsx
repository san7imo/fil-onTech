import { Button, Container } from '@/components/ui';
import HeaderLayout from '@/components/sections/hero/HeaderLayout';
import ServicesSection from '@/components/sections/services/ServiceSection';
import Footer from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header principal con fondo de imagen */}
      <HeaderLayout />
      
      {/* Nueva sección de servicios */}
      <ServicesSection />
      
      {/* Sección de características adicionales */}
      <div className="bg-white">
        <Container>
          <div className="text-center py-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir Fil-On Tech?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Somos la evolución de la industria minera desde la tecnología
            </p>
            
            <div className="space-x-4 mb-12">
              <Button variant="primary" size="lg">
                Comenzar Ahora
              </Button>
              <Button variant="outline" size="lg">
                Más Información
              </Button>
            </div>
            
            {/* Sección de características */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100">
                <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Inclusión Financiera</h3>
                <p className="text-gray-600">
                  Facilitamos el acceso a servicios financieros especializados para 73.000 mineros de subsistencia en Latinoamérica.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tecnología Segura</h3>
                <p className="text-gray-600">
                  Utilizamos blockchain y tecnologías financieras avanzadas para garantizar la seguridad en cada transacción.
                </p>
              </div>
              
              <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100">
                <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ecosistema Completo</h3>
                <p className="text-gray-600">
                  Desde servicios financieros hasta tokenización de minerales preciosos y marketplace digital.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      
      {/* Sección de estadísticas actualizadas */}
      <div className="bg-gray-900 py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transformando el Sector Minero
            </h2>
            <p className="text-xl text-gray-300">
              Nuestro impacto en números
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-4xl font-bold text-emerald-400 mb-2">73K+</div>
              <p className="text-gray-300">Mineros de Subsistencia</p>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold text-emerald-400 mb-2">20K+</div>
              <p className="text-gray-300">Participantes Ecosistema</p>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold text-emerald-400 mb-2">$2.6B</div>
              <p className="text-gray-300">Volumen Anual Sector</p>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold text-emerald-400 mb-2">15%</div>
              <p className="text-gray-300">Crecimiento Esperado</p>
            </div>
          </div>
        </Container>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}