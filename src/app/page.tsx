'use client';

import { Container } from '@/components/ui';
import HeaderLayout from '@/components/sections/home/hero/HeaderLayout';
import ServicesSection from '@/components/sections/home/services/ServiceSection';
import ResponsabilidadSocialSection from '@/components/sections/home/responsabilidad/ResponsabilidadSection';
import ComplianceSection from '@/components/sections/home/cumplimiento/CompilanceSection';

import VanguardSection from '@/components/sections/home/services/VanguardSection';
/* Lines 2-8 omitted */

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0F1112]">
      {/* Header principal con fondo de imagen */}
      <HeaderLayout />
      
      {/* Sección de servicios */}
      <ServicesSection />

      {/* Sección de Vanguardia */}
      <VanguardSection />
      
      {/* Sección de Responsabilidad Social */}
      <ResponsabilidadSocialSection />
      
      {/* Sección de características adicionales - Rediseñada */}
      <div className="relative overflow-hidden py-20 px-4">
        {/* Fondo oscuro con gradientes */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A261E] via-[#4C6670]/30 to-[#1A261E]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(132,69,140,0.08)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(180,146,105,0.05)_0%,transparent_65%)]" />
        </div>

        <Container>
  <div className="relative z-10">
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-5xl font-bold text-[#F2F2F2] mb-6 leading-tight">
        ¿Por qué elegir <span className="text-[#84458C]">Fil-On Tech</span>?
      </h2>
      <p className="text-xl text-[#F2F2F2]/70 mb-12 max-w-3xl mx-auto leading-relaxed">
        Somos la reinvención de la industria, porque creemos que la innovación no solo transforma procesos, sino también la vida de las personas y el futuro de nuestras comunidades.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
        <button className="inline-flex items-center px-8 py-4 bg-[#10B981] hover:bg-[#84458C] text-white font-semibold rounded-full transition-all duration-500 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#10B981]/30 shadow-lg hover:shadow-xl text-base">
          <span>Comenzar Ahora</span>
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
        <button className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-[#6A7C6F] hover:border-[#84458C] hover:bg-[#84458C]/10 text-[#F2F2F2] font-semibold rounded-full transition-all duration-500 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#6A7C6F]/30 text-base">
          <span>Más Información</span>
        </button>
      </div>
    </div>
    
    {/* Sección de características rediseñada */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Card 1 - Inclusión Financiera */}
      <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#4C6670]/20 to-[#1A261E]/60 border border-[#6A7C6F]/20 p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#10B981]/20 hover:border-[#10B981]/40">
        <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10">
          <div className="w-16 h-16 bg-gradient-to-br from-[#10B981] to-[#10B981]/80 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:shadow-[#10B981]/30 transition-all duration-500">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-[#F2F2F2] mb-4 group-hover:text-[#10B981] transition-colors duration-300">Inclusión Financiera</h3>
          <p className="text-[#F2F2F2]/70 leading-relaxed">
            Facilitamos el acceso a servicios financieros especializados para 73.000 mineros de subsistencia en Latinoamérica.
          </p>
        </div>
      </div>
      
      {/* Card 2 - Tecnología Segura */}
      <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#4C6670]/20 to-[#1A261E]/60 border border-[#6A7C6F]/20 p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#84458C]/20 hover:border-[#84458C]/40">
        <div className="absolute inset-0 bg-gradient-to-br from-[#84458C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10">
          <div className="w-16 h-16 bg-gradient-to-br from-[#84458C] to-[#84458C]/80 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:shadow-[#84458C]/30 transition-all duration-500">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-[#F2F2F2] mb-4 group-hover:text-[#84458C] transition-colors duration-300">Tecnología Segura</h3>
          <p className="text-[#F2F2F2]/70 leading-relaxed">
            Utilizamos blockchain y tecnologías financieras avanzadas para garantizar la seguridad en cada transacción.
          </p>
        </div>
      </div>
      
      {/* Card 3 - Ecosistema Completo */}
      <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#4C6670]/20 to-[#1A261E]/60 border border-[#6A7C6F]/20 p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#6A7C6F]/20 hover:border-[#6A7C6F]/40">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6A7C6F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10">
          <div className="w-16 h-16 bg-gradient-to-br from-[#6A7C6F] to-[#6A7C6F]/80 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:shadow-[#6A7C6F]/30 transition-all duration-500">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-[#F2F2F2] mb-4 group-hover:text-[#6A7C6F] transition-colors duration-300">Ecosistema Completo</h3>
          <p className="text-[#F2F2F2]/70 leading-relaxed">
            Desde servicios financieros hasta tokenización de minerales preciosos y marketplace digital.
          </p>
        </div>
      </div>

      {/* Card 4 - Sostenibilidad y Futuro */}
      <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#4C6670]/20 to-[#1A261E]/60 border border-[#4CAF50]/20 p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#4CAF50]/20 hover:border-[#4CAF50]/40">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10">
          <div className="w-16 h-16 bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:shadow-[#4CAF50]/30 transition-all duration-500">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-[#F2F2F2] mb-4 group-hover:text-[#4CAF50] transition-colors duration-300">Sostenibilidad y Futuro</h3>
          <p className="text-[#F2F2F2]/70 leading-relaxed">
            Promovemos prácticas responsables y sostenibles para una minería con impacto positivo en comunidades y medio ambiente.
          </p>
        </div>
      </div>
    </div>
  </div>
</Container>

      </div>
      
      {/* Sección de estadísticas rediseñada */}
      <div className="relative overflow-hidden py-20 px-4">
        {/* Fondo más oscuro y sofisticado */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A261E]/95 via-[#4C6670]/20 to-[#1A261E]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(132,69,140,0.1)_0%,transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,rgba(16,185,129,0.08)_0%,transparent_70%)]" />
          {/* Textura sutil */}
          <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%221%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
        </div>

        <Container>
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#F2F2F2] mb-6 leading-tight">
                Transformando el <span className="text-[#10B981]">Sector Minero</span>
              </h2>
              <p className="text-xl text-[#F2F2F2]/70 max-w-2xl mx-auto">
                Nuestro impacto en números
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "73K+", label: "Mineros de Subsistencia", color: "text-[#10B981]" },
                { number: "20K+", label: "Participantes Ecosistema", color: "text-[#84458C]" },
                { number: "$2.6B", label: "Volumen Anual Sector", color: "text-[#6A7C6F]" },
                { number: "15%", label: "Crecimiento Esperado", color: "text-[#B49269]" }
              ].map((stat, index) => (
                <div key={index} className="group text-center p-6 rounded-2xl bg-gradient-to-b from-[#4C6670]/10 to-[#1A261E]/40 border border-[#6A7C6F]/20 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:border-[#84458C]/40">
                  <div className={`text-5xl lg:text-6xl font-bold ${stat.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <p className="text-[#F2F2F2]/80 font-medium leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
      
      {/*Cumplimiento y control*/}
      <ComplianceSection />
    </div>
  );
}