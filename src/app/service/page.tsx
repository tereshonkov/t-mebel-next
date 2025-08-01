import Hero from "@/components/Hero/Hero"
import Furniture from "@/components/Furniture/Furniture"
import Form from "@/components/Form/Form"
import Footer from "@/components/Footer/Footer"
import { Metadata } from "next"
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const locale = 'uk';
  const t = await getTranslations({ locale, namespace: 'seoPortfolio' });

  const baseUrl = 'https://t-mebel.com.ua';
  const path = '/service';

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: baseUrl + path,
      siteName: 'T-Mebel',
      locale,
    },
    alternates: {
      canonical: `${baseUrl}${path}`,
      languages: {
        uk: `${baseUrl}${path}`,
        en: `${baseUrl}/en${path}`,
        ru: `${baseUrl}/ru${path}`,
        'x-default': `${baseUrl}${path}`,
      },
    },
  };
}



export default function page() {
  return (
    <div className="container">
      <Hero startIndex={1} />
      <main className="main-service">
        <Furniture />
        <Form />
      </main>
      <Footer />
    </div>
  )
}