import HeaderServer from "@/components/Header/Header-server"
import Hero from "@/components/Hero/Hero"
import Service from "@/components/Service/Service"
import Rewies from "@/components/Reviews/Reviews"
import Logo from "@/components/Logo/Logo"
import Slider from "@/components/Slider/Slider"
import Faq from "@/components/Faq/Faq"
import Form from "@/components/Form/Form"
import Footer from "@/components/Footer/Footer"

export default function page() {
  return (
    <div className="container">
      <HeaderServer />
    <main>
      <Hero />
      <Service />
      <Rewies />
      <Logo />
      <Slider />
      <Faq />
      <Form />
    </main>
    <Footer />
    </div>
  )
}
