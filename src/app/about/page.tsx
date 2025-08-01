import Hero from "@/components/Hero/Hero"
import Form from "@/components/Form/Form"
import Footer from "@/components/Footer/Footer"
import About from "@/components/About/About"
import Reviews from "@/components/Reviews/Reviews"
import { Metadata } from "next"
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const locale = 'uk';
  const t = await getTranslations({ locale, namespace: 'seoAbout' });

  const baseUrl = 'https://t-mebel.com.ua';
  const path = '/about';
//   const canonical = `${baseUrl}/${locale}${path}`;

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
      <Hero startIndex={3} />
      <main className="main-service">
        <About />
        <Reviews />
        <Form />
      </main>
      <Footer />
    </div>
  )
}