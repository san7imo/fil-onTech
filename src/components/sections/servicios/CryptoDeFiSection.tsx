import FadeInUp from '@/components/ui/animations/FadeInUp';
import { Container } from '@/components/ui';

const cryptoServices = [
  {
    title: 'Tokenización de Minerales',
    description: 'Convertimos minerales preciosos en tokens digitales para facilitar su comercialización',
    features: ['NFTs únicos', 'Certificación blockchain', 'Trazabilidad completa'],
    icon: '🪙',
    gradient: 'from-[#8B5CF6] to-[#2563EB]'
  },
  {
    title: 'E-Wallet Corporativa',
    description: 'Billetera digital empresarial para gestión de activos digitales y tradicionales',
    features: ['Multi-moneda', 'Seguridad avanzada', 'API integrada'],
    icon: '💎',
    gradient: 'from-[#2563EB] to-[#10B981]'
  },
  {
    title: 'Transacciones Seguras',
    description: 'Sistema de transacciones digitales con tecnología blockchain para máxima seguridad',
    features: ['Inmutabilidad', 'Transparencia total', 'Costos reducidos'],
    icon: '🔐',
    gradient: 'from-[#10B981] to-[#34D399]'
  },
  {
    title: 'Custodia Digital',
    description: 'Salvaguarda y custodia de activos físicos con respaldo digital',
    features: ['Bóvedas seguras', 'Seguro total', 'Acceso 24/7'],
    icon: '🏛️',
    gradient: 'from-[#34D399] to-[#8B5CF6]'
  },
  {
    title: 'Smart Contracts',
    description: 'Contratos inteligentes para automatización de procesos financieros',
    features: ['Ejecución automática', 'Sin intermediarios', 'Transparencia total'],
    icon: '📜',
    gradient: 'from-[#8B5CF6] to-[#34D399]'
  }
];

export default function CryptoDeFiSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-[#0F1112] via-[#1A261E] to-[#111827]">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8B5CF6] via-[#2563EB] to-[#10B981]" />
      
      {/* Crypto-themed floating elements */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#8B5CF6] rounded-full animate-ping"></div>
      <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-[#10B981] rounded-full animate-ping delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-[#2563EB] rounded-full animate-pulse delay-500"></div>
      
      <Container>
        <div className="relative z-10 max-w-7xl mx-auto">
          <FadeInUp>
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-[#8B5CF6] via-[#2563EB] to-[#10B981] bg-clip-text text-transparent">
                Crypto & DeFi
              </h2>
              <p className="max-w-4xl mx-auto text-xl text-[#D1D5DB] leading-relaxed">
                Revolucionamos las finanzas mineras con blockchain, tokenización y finanzas descentralizadas
              </p>
            </div>
          </FadeInUp>
          
          {/* Main crypto services */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {cryptoServices.slice(0, 3).map((service, idx) => (
              <FadeInUp key={idx} delay={0.2 * (idx + 1)}>
                <div className="group p-8 rounded-3xl bg-gradient-to-br from-[#1A261E]/50 to-[#111827]/50 border border-[#8B5CF6]/20 hover:border-[#8B5CF6]/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 to-[#2563EB]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  
                  <div className="relative z-10">
                    <div className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <span className="text-3xl">{service.icon}</span>
                    </div>
                    
                    <h3 className={`text-3xl font-bold mb-6 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      {service.title}
                    </h3>
                    
                    <p className="text-[#D1D5DB] leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3">
                      {service.features.map((feature, featureIdx) => (
                        <div key={featureIdx} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-[#8B5CF6] to-[#2563EB] rounded-full animate-pulse"></div>
                          <span className="text-[#9CA3AF] text-sm group-hover:text-[#D1D5DB] transition-colors duration-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <div className={`mt-8 h-1 bg-gradient-to-r ${service.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
          
          {/* Additional services */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {cryptoServices.slice(3).map((service, idx) => (
              <FadeInUp key={idx + 3} delay={0.2 * (idx + 4)}>
                <div className="group p-8 rounded-3xl bg-gradient-to-br from-[#1A261E]/50 to-[#111827]/50 border border-[#10B981]/20 hover:border-[#10B981]/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/5 to-[#34D399]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  
                  <div className="relative z-10 flex items-start gap-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0`}>
                      <span className="text-2xl">{service.icon}</span>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                        {service.title}
                      </h3>
                      
                      <p className="text-[#D1D5DB] leading-relaxed mb-4 group-hover:text-white transition-colors duration-300">
                        {service.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, featureIdx) => (
                          <span key={featureIdx} className="px-3 py-1 rounded-full bg-gradient-to-r from-[#8B5CF6]/10 to-[#2563EB]/10 border border-[#8B5CF6]/20 text-[#9CA3AF] text-xs group-hover:text-[#D1D5DB] group-hover:border-[#8B5CF6]/40 transition-all duration-300">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
          
          {/* DeFi Showcase */}
          <FadeInUp delay={1.2}>
            <div className="relative p-12 rounded-3xl bg-gradient-to-br from-[#1A261E]/50 to-[#111827]/50 border border-[#8B5CF6]/20 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8B5CF6] via-[#2563EB] to-[#10B981] rounded-t-3xl"></div>
              
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#8B5CF6] to-[#2563EB] bg-clip-text text-transparent">
                  Finanzas Descentralizadas (DeFi)
                </h3>
                <p className="text-[#D1D5DB] text-lg max-w-3xl mx-auto">
                  Eliminamos intermediarios tradicionales y democratizamos el acceso a servicios financieros
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { 
                    title: 'Yield Farming', 
                    desc: 'Genera rendimientos con tus tokens de minerales',
                    icon: '🌱',
                    color: 'from-[#10B981] to-[#34D399]'
                  },
                  { 
                    title: 'Liquidity Pools', 
                    desc: 'Participa en pools de liquidez y obtén recompensas',
                    icon: '💧',
                    color: 'from-[#2563EB] to-[#8B5CF6]'
                  },
                  { 
                    title: 'Staking Rewards', 
                    desc: 'Bloquea tokens y recibe recompensas automáticas',
                    icon: '🔒',
                    color: 'from-[#8B5CF6] to-[#34D399]'
                  }
                ].map((defi, idx) => (
                  <div key={idx} className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#0F1112]/50 to-[#1A261E]/50 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 group">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${defi.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{defi.icon}</span>
                    </div>
                    <h4 className={`text-xl font-bold mb-3 bg-gradient-to-r ${defi.color} bg-clip-text text-transparent`}>
                      {defi.title}
                    </h4>
                    <p className="text-[#9CA3AF] text-sm group-hover:text-[#D1D5DB] transition-colors duration-300">
                      {defi.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInUp>
        </div>
      </Container>
    </section>
  );
}