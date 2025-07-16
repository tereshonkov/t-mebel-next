import Hero from "@/components/Hero/Hero"
import Form from "@/components/Form/Form"
import Footer from "@/components/Footer/Footer"


export default function page() {
  return (
      <div className="container">
       <Hero startIndex={3}/>
        <main className="main-service">       

          <Form />
        </main>
        <Footer />
      </div>
  )
}