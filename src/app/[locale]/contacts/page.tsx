import Hero from "@/components/Hero/Hero"
import Form from "@/components/Form/Form"
import Footer from "@/components/Footer/Footer"
import Faq from "@/components/Faq/Faq"
import Contacts from "@/components/Contacts/Contact"
import { Metadata } from "next"
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seoContact' });

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
       <Hero startIndex={4}/>
        <main className="main-service">     
          <Contacts />  
          <Faq />
          <Form />
        </main>
        <Footer />
      </div>
  )
}