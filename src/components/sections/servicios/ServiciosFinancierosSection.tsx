import FadeInUp from '@/components/ui/animations/FadeInUp';
import { Container } from '@/components/ui';

const serviciosFinancieros = [
  {
    title: 'Créditos',
    description: 'Financiación rápida y personalizada para empresas del sector minero',
    range: '10 a 500 millones',
    features: ['Proceso rápido', 'Tasas preferenciales', 'Flexible'],
    icon: '💰',
    gradient: 'from-[#10B981] to-[#34D399]'
  },
  {
    title: 'Microcréditos',
    description: 'Soluciones de inclusión financiera para mineros de subsistencia',
    range: '500.000 a 2 millones',
    features: ['Comunidades étnicas', 'Sin garantías', 'Proceso simple'],
    icon: '🏦',
    gradient: 'from-[#34D399] to-[#10B981]'
  },
  {
    title: 'Factoring Electrónico',
    description: 'Adelanto de cartera con tecnología digital y endoso de factura',
    range: '100 a 1000 millones',
    features: ['100% digital', 'Endoso electrónico', 'Liquidez inmediata'],
    icon: '📋',
    gradient: 'from-[#2563EB] to-[#10B981]'
  },
  {
    title: 'Leasing y Renting',
    description: 'Arrendamiento financiero de maquinaria y equipos mineros',
    range: 'Según necesidad',
    features: ['Maquinaria especializada', 'Mantenimiento incluido', 'Opción de compra'],
    icon: '🚛',
    gradient: 'from-[#8B5CF6] to-[#2563EB]'
  },
  {
    title: 'Confirming',
    description: 'Gestión de pagos a proveedores con financiación opcional',
    range: 'Sin límite',
    features: ['Gestión automática', 'Financiación proveedores', 'Mejor flujo de caja'],
    icon: '✅',
    gradient: 'from-[#2563EB] to-[#8B5CF6]'
  },
  {
    title: 'Pólizas',
    description: 'Seguros especializados para operaciones mineras',
    range: 'Cobertura total',
    features: ['Todo riesgo', 'Cobertura especializada', 'Respaldo total'],
    icon: '🛡️',
    gradient: 'from-[#34D399] to-[#2563EB]'
  }
];

export default function ServiciosFinancierosSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-br from-[#0F1112] to-[#1A261E]">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#10B981] to-[#34D399]" />
      
      <Container>
        <div className="relative z-10 max-w-7xl mx-auto">
          <FadeInUp>
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-[#10B981] to-[#34D399] bg-clip-text text-transparent">
                Productos Financieros
              </h2>
              <p className="max-w-4xl mx-auto text-xl text-[#D1D5DB] leading-relaxed">
                Desde microcréditos para mineros de subsistencia hasta financiación corporativa de gran escala
              </p>
            </div>
          </FadeInUp>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {serviciosFinancieros.map((servicio, idx) => (
              <FadeInUp key={idx} delay={0.2 * (idx + 1)}>
                <div className="group p-8 rounded-3xl bg-gradient-to-br from-[#1A261E]/50 to-[#111827]/50 border border-[#10B981]/20 hover:border-[#10B981]/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/5 to-[#34D399]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  
                  <div className="relative z-10">
                    {/* Icon and title */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${servicio.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <span className="text-2xl">{servicio.icon}</span>
                      </div>
                      <div>
                        <h3 className={`text-2xl font-bold bg-gradient-to-r ${servicio.gradient} bg-clip-text text-transparent`}>
                          {servicio.title}
                        </h3>
                        <div className="text-[#34D399] text-sm font-semibold">
                          {servicio.range}
                        </div>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-[#D1D5DB] leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                      {servicio.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-3">
                      {servicio.features.map((feature, featureIdx) => (
                        <div key={featureIdx} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-[#10B981] to-[#34D399] rounded-full"></div>
                          <span className="text-[#9CA3AF] text-sm group-hover:text-[#D1D5DB] transition-colors duration-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Bottom accent */}
                    <div className={`mt-8 h-1 bg-gradient-to-r ${servicio.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}