import HeaderServer from "@/components/Header/Header-server"
import Hero from "@/components/Hero/Hero"
import Service from "@/components/Service/Service"
import Rewies from "@/components/Reviews/Reviews"
import Logo from "@/components/Logo/Logo"
import Slider from "@/components/Slider/Slider"

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
    </main>
    </div>
  )
}
