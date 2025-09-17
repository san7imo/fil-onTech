'use client';

import { useRef, useState } from 'react';
import FadeInUp from '@/components/ui/animations/FadeInUp';
import { Container } from '@/components/ui';

export default function FormContacto() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    try {
      // 🚨 DEMO MODE: Simula un envío de email
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSuccess('✅ Tu mensaje fue enviado correctamente (demo, sin envío real).');
      formRef.current.reset();
    } catch {
      setSuccess('❌ Hubo un error al enviar el mensaje (demo).');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-6">
      <Container>
        <FadeInUp>
          <h2 className="text-4xl font-bold text-center mb-10 text-emerald-400">
            Escríbenos
          </h2>
        </FadeInUp>
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="max-w-2xl mx-auto grid gap-6"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Nombre"
            required
            className="px-4 py-3 rounded-lg bg-[#0F1112] border border-gray-700 focus:border-emerald-400 outline-none"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Correo electrónico"
            required
            className="px-4 py-3 rounded-lg bg-[#0F1112] border border-gray-700 focus:border-emerald-400 outline-none"
          />
          <input
            type="text"
            name="subject"
            placeholder="Asunto"
            className="px-4 py-3 rounded-lg bg-[#0F1112] border border-gray-700 focus:border-emerald-400 outline-none"
          />
          <textarea
            name="message"
            placeholder="Escribe tu mensaje..."
            rows={6}
            required
            className="px-4 py-3 rounded-lg bg-[#0F1112] border border-gray-700 focus:border-emerald-400 outline-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 transition-colors text-white font-semibold"
          >
            {loading ? 'Enviando...' : 'Enviar Mensaje'}
          </button>
          {success && (
            <p className="text-center text-sm text-gray-300 mt-4">{success}</p>
          )}
        </form>
      </Container>
    </section>
  );
}
