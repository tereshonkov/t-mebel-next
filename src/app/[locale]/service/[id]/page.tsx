import Footer from "@/components/Footer/Footer";
import Form from "@/components/Form/Form";
import FullPage from "@/components/FullPageCard/FullPage";
import Hero from "@/components/Hero/Hero";
import { use } from 'react';
import { Metadata } from "next"
import { getTranslations } from 'next-intl/server';


export async function generateMetadata({ params }: { params: Promise<{ locale: string, id: string }> }): Promise<Metadata> {
  const { locale, id } = await params;
  const t = await getTranslations({ locale, namespace: `data_${id}` });

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


export default function FurniturePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params) as { id: string };
  
  return (
    <>
      <Hero startIndex={2} page={true} />
      <main>
        <FullPage id={id} />
        <Form />
      </main>
      <Footer />
    </>
  );
}