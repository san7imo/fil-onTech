import Footer from '@/components/layout/Footer';

interface ConstruccionLayoutProps {
  children: React.ReactNode;
}

export default function ConstruccionLayout({
  children,
}: ConstruccionLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
