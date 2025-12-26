import Hero from "@/components/Hero/Hero";
// import Service from "@/components/Service/Service";
import Rewies from "@/components/Reviews/Reviews";
import Logo from "@/components/Logo/Logo";
import Furniture from "@/components/Furniture/Furniture";
import Faq from "@/components/Faq/Faq";
import Form from "@/components/Form/Form";
import Footer from "@/components/Footer/Footer";
import { Metadata } from "next";
import messages from '@/messages/uk.json';
import PopapClientWrapper from "@/components/Popap/PopapClientWrapper";
import WhyYou from "@/components/WhyYou/WhyYou";
import TrustMe from "@/components/TrustMe/TrustMe";
import CtaBlock from "@/components/CtaBlock/CtaBlock";
import ContactForm from "@/components/ContactForm/ContactForm";

export async function generateMetadata(): Promise<Metadata> {
  const t = (key: string) => messages.seoHome[key as keyof typeof messages.seoHome];
  const locale = "uk"; // Default locale for non-localized routes

  const baseUrl = "https://t-mebel.com.ua";

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: baseUrl + "/",
      siteName: "T-Mebel",
      locale,
    },
    alternates: {
      canonical: baseUrl + "/",
      languages: {
        uk: baseUrl + "/",
        en: baseUrl + "/en",
        ru: baseUrl + "/ru",
        "x-default": baseUrl + "/",
      },
    },
  };
}

export default function page() {
  return (
    <div className="container">
      <Hero startIndex={0} home={true} />
      <main>
        <PopapClientWrapper />
        <WhyYou />
        <TrustMe />
        {/* <Service /> */}
        <Furniture home={true} />
        <CtaBlock />
        <Logo />
        <Rewies />
        <ContactForm />
        <Faq />
        <Form />
      </main>
      <Footer />
    </div>
  );
}
