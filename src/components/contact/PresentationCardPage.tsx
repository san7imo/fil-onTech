import Image from 'next/image';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import Container from '@/components/ui/Container';
import {
  ContactProfile,
  buildPhoneHref,
  buildWhatsAppHref,
  formatPhoneNumber,
} from '@/data/contactProfiles';
import { cn } from '@/lib/utils';

interface PresentationCardPageProps {
  profile: ContactProfile;
}

const actionClassName =
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-semibold transition-all duration-200';

export default function PresentationCardPage({
  profile,
}: PresentationCardPageProps) {
  const actions = [
    {
      label: 'WhatsApp',
      href: buildWhatsAppHref(profile),
      icon: MessageCircle,
      className:
        'border-emerald-400/40 bg-emerald-500 text-white hover:border-emerald-300 hover:bg-emerald-400',
    },
    {
      label: 'Llamar',
      href: buildPhoneHref(profile.phone),
      icon: Phone,
      className:
        'border-white/15 bg-white/8 text-white hover:border-emerald-400/40 hover:bg-white/12',
    },
    {
      label: 'Correo',
      href: `mailto:${profile.email}`,
      icon: Mail,
      className:
        'border-white/15 bg-white/8 text-white hover:border-[#B49269]/60 hover:bg-white/12',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0F1112] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_42%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(132,69,140,0.2),transparent_38%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,17,18,0.94)_0%,rgba(15,17,18,1)_100%)]" />

      <Container className="relative flex min-h-screen items-center py-12 sm:py-16">
        <div className="w-full overflow-hidden rounded-lg border border-white/10 bg-white/6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <div className="grid lg:grid-cols-[0.88fr_1.12fr]">
            <div className="flex items-center justify-center border-b border-white/10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.03)_45%,rgba(0,0,0,0.08)_100%)] p-6 sm:p-10 lg:border-r lg:border-b-0">
                  <Image
                    src="/images/logo-nuevo.webp"
                    alt="Logo de Fil-On Tech"
                    width={320}
                    height={320}
                    priority
                    className="h-auto w-52 sm:w-64"
                  />
            </div>

            <div className="p-6 sm:p-10">
              <div className="mx-auto flex max-w-2xl flex-col gap-8">
                <div className="space-y-4">
                  <div className="space-y-2 text-center sm:text-left">
                    <h1 className="whitespace-nowrap text-[clamp(1.05rem,6.1vw,1.7rem)] font-semibold leading-tight text-white sm:text-4xl">
                      {profile.name}
                    </h1>
                    <p className="text-xl text-emerald-300 sm:text-2xl">
                      {profile.role}
                    </p>
                  </div>
                </div>

                <div className="grid gap-4">
                  <a
                    href={buildPhoneHref(profile.phone)}
                    className="flex items-center gap-4 rounded-lg border border-white/10 bg-black/20 px-5 py-4 transition-colors duration-200 hover:border-emerald-400/35 hover:bg-black/25"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-300">
                      <Phone size={20} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-[0.24em] text-white/48">
                        Celular
                      </span>
                      <span className="block text-lg font-medium text-white">
                        {formatPhoneNumber(profile.phone)}
                      </span>
                    </span>
                  </a>

                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-4 rounded-lg border border-white/10 bg-black/20 px-5 py-4 transition-colors duration-200 hover:border-[#B49269]/40 hover:bg-black/25"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#B49269]/15 text-[#E4C9A1]">
                      <Mail size={20} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-[0.24em] text-white/48">
                        Correo
                      </span>
                      <span className="block break-all text-lg font-medium text-white">
                        {profile.email}
                      </span>
                    </span>
                  </a>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {actions.map(({ label, href, icon: Icon, className }) => (
                    <a
                      key={label}
                      href={href}
                      target={label === 'Llamar' ? undefined : '_blank'}
                      rel={label === 'Llamar' ? undefined : 'noreferrer'}
                      className={cn(actionClassName, className)}
                    >
                      <Icon size={18} />
                      <span>{label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
