import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PresentationCardPage from '@/components/contact/PresentationCardPage';
import {
  CONTACT_PROFILES,
  getContactProfileBySlug,
} from '@/data/contactProfiles';
import { COMPANY_INFO } from '@/lib/constants';

interface ProfilePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return CONTACT_PROFILES.map((profile) => ({
    slug: profile.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProfilePageProps): Promise<Metadata> {
  const { slug } = await params;
  const profile = getContactProfileBySlug(slug);

  if (!profile) {
    return {
      title: 'Perfil no encontrado',
    };
  }

  const title = `${profile.name} - ${profile.role}`;
  const description = `Contacto directo de ${profile.name}, ${profile.role} en ${profile.company}.`;
  const canonicalUrl = `https://${COMPANY_INFO.website}/${profile.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: COMPANY_INFO.name,
      type: 'profile',
      locale: 'es_CO',
      images: [
        {
          url: '/images/logo-nuevo.webp',
          width: 1200,
          height: 1200,
          alt: `Logo de ${COMPANY_INFO.name}`,
        },
      ],
    },
  };
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { slug } = await params;
  const profile = getContactProfileBySlug(slug);

  if (!profile) {
    notFound();
  }

  return <PresentationCardPage profile={profile} />;
}
