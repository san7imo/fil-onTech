'use client';

import { Container } from '@/components/ui';
import FadeInUp from '@/components/ui/animations/FadeInUp';
import { Linkedin, Twitter, Facebook, Mail } from 'lucide-react';

const redes = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/filontech', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/filontech', icon: Twitter },
  { name: 'Facebook', href: 'https://facebook.com/filontech', icon: Facebook },
  { name: 'Email', href: 'mailto:contacto@filontech.com', icon: Mail },
];

export default function RedesContacto() {
  return (
    <section className="py-20 px-6 bg-[#111827]">
      <Container>
        <FadeInUp>
          <h2 className="text-4xl font-bold text-center mb-10 text-emerald-400">
            Conéctate con Nosotros
          </h2>
        </FadeInUp>
        <div className="flex justify-center gap-8">
          {redes.map((red, idx) => {
            const Icon = red.icon;
            return (
              <FadeInUp key={red.name} delay={0.2 * idx}>
                <a
                  href={red.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  <div className="p-4 rounded-full bg-[#0F1112] border border-gray-700 hover:border-emerald-400 transition">
                    <Icon size={28} />
                  </div>
                  <span className="mt-2 text-sm">{red.name}</span>
                </a>
              </FadeInUp>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
