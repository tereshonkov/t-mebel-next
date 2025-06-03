import Hero from "@/components/Hero/Hero"
import Service from "@/components/Service/Service"
import Rewies from "@/components/Reviews/Reviews"
import Logo from "@/components/Logo/Logo"
import Furniture from "@/components/Furniture/Furniture"
import Faq from "@/components/Faq/Faq"
import Form from "@/components/Form/Form"
import Footer from "@/components/Footer/Footer"

export default function page() {
  return (
    <div className="container">
      <Hero startIndex={0} home={true}/>
    <main>
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
