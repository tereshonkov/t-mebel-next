import Footer from "@/components/Footer/Footer";
import Form from "@/components/Form/Form";
import FullPage from "@/components/FullPageCard/FullPage";
import Hero from "@/components/Hero/Hero";
import { use } from 'react';


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