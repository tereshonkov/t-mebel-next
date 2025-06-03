import Hero from "@/components/Hero/Hero"
import Furniture from "@/components/Furniture/Furniture"
import Form from "@/components/Form/Form"
import Footer from "@/components/Footer/Footer"





export default function page() {
  return (
      <div className="container">
       <Hero startIndex={1}/>
        <main className="main-service">
          <Furniture />
          <Form />
        </main>
        <Footer />
      </div>
  )
}