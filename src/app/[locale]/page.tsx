import Hero from "@/components/Hero/Hero"
import Service from "@/components/Service/Service"
import Rewies from "@/components/Reviews/Reviews"
import Logo from "@/components/Logo/Logo"
import Furniture from "@/components/Furniture/Furniture"
import Faq from "@/components/Faq/Faq"
import Form from "@/components/Form/Form"
import Footer from "@/components/Footer/Footer"
import { Metadata } from "next"
import { getTranslations } from 'next-intl/server';
import PopapClientWrapper from "@/components/Popap/PopapClientWrapper"
// import WhyYou from "@/components/WhyYou/WhyYou"
// import TrustMe from "@/components/TrustMe/TrustMe"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seoHome' });

    const baseUrl = 'https://t-mebel.com.ua';
  const canonical = `${baseUrl}/${locale}`;

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
        alternates: {
      canonical,
      languages: {
        uk: `${baseUrl}`,
        en: `${baseUrl}/en`,
        ru: `${baseUrl}/ru`,
        'x-default': `${baseUrl}`,
      },
    },
  };
}


export default function page() {
  return (
    <div className="container">
      <Hero startIndex={0} home={true}/>
    <main>
      <PopapClientWrapper />
      {/* <WhyYou /> */}
      {/* <TrustMe /> */}
      <Service />
      <Rewies />
      <Logo />
      <Furniture home={true}/>
      <Faq />
      <Form />
    </main>
    <Footer />
    </div>
  )
}
