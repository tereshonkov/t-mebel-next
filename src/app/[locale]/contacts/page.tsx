import Hero from "@/components/Hero/Hero"
import Form from "@/components/Form/Form"
import Footer from "@/components/Footer/Footer"
import Faq from "@/components/Faq/Faq"
import Contacts from "@/components/Contacts/Contact"


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