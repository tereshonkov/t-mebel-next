import HeaderServer from "@/components/Header/Header-server"
import Footer from "@/components/Footer/Footer"
import ServiceHeader from "@/components/ServiceHeader/ServiceHeader"
import Portfolio from "@/components/Portfolio/Portfolio"

export default function page() {
  return (
    <div className="container">
      <HeaderServer />
    <main className="main-service">
    <ServiceHeader />
    {/* <HeroService /> */}
    <Portfolio />
    </main>
    <Footer />
    </div>
  )
}