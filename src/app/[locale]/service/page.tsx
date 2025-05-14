import HeaderServer from "@/components/Header/Header-server"
import Footer from "@/components/Footer/Footer"
import ServiceHeader from "@/components/ServiceHeader/ServiceHeader"

export default function page() {
  return (
    <div className="container">
      <HeaderServer />
    <main className="main-service">
    <ServiceHeader />
    </main>
    <Footer />
    </div>
  )
}