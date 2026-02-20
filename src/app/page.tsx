import Image from 'next/image';
import Link from 'next/link';

export default function LandingConstruccionPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0F1112] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.22),transparent_48%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_80%,rgba(132,69,140,0.22),transparent_42%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-16 text-center">
        <Image
          src="/images/logo.webp"
          alt="Fil-On Tech"
          width={180}
          height={180}
          className="mb-8 h-auto w-auto drop-shadow-[0_0_30px_rgba(16,185,129,0.32)]"
          priority
        />

        <p className="mb-4 inline-flex rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-1 text-sm font-medium tracking-wide text-emerald-200">
          Sitio en construcción
        </p>

        <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl">
          Estamos construyendo algo grande
        </h1>

        <p className="max-w-3xl text-lg leading-relaxed text-gray-200 sm:text-xl">
          Transformamos la minería y la agroindustria con soluciones financieras
          y tecnológicas innovadoras, promoviendo la inclusión y construyendo un
          futuro sostenible para los mercados emergentes.
        </p>

      </div>
    </section>
  );
}
