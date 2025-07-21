import Hero from "@/components/Hero/Hero"
import Furniture from "@/components/Furniture/Furniture"
import Form from "@/components/Form/Form"
import Footer from "@/components/Footer/Footer"
import { Metadata } from "next"
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seoPortfolio' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `https://t-mebel.com.ua/${locale}`,
      siteName: 'T-Mebel',
      locale,
    },
  };
}



export default function page() {
  return (
      <div className="container">
       <Hero startIndex={1}/>
        <main className="main-service">
          <Furniture />
          <Form />
        </main>
        <Footer />
      </div>
  )
}