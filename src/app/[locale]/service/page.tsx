import HeaderServer from "@/components/Header/Header-server"
import Footer from "@/components/Footer/Footer"
import ServiceHeader from "@/components/ServiceHeader/ServiceHeader"
import BlockService from "@/components/BlockService/BlockService"




export default function page() {
  return (
    <>


      <div className="container">
        <HeaderServer />
        <main className="main-service">
          <ServiceHeader />
          <BlockService />
        </main>
        <Footer />
      </div>
    </>
  )
}