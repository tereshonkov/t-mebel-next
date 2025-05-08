import HeaderServer from "@/components/Header/Header-server"
import Hero from "@/components/Hero/Hero"
import Service from "@/components/Service/Service"

export default function page() {
  return (
    <div className="container">
      <HeaderServer />
      <Hero />
      <Service />
    </div>
  )
}
