import Hero from "@/components/Hero/Hero"
import Form from "@/components/Form/Form"
import Footer from "@/components/Footer/Footer"
import About from "@/components/About/About"
import Reviews from "@/components/Reviews/Reviews"


export default function page() {
  return (
      <div className="container">
       <Hero startIndex={3}/>
        <main className="main-service">       
        <About />
        <Reviews />
          <Form />
        </main>
        <Footer />
      </div>
  )
}