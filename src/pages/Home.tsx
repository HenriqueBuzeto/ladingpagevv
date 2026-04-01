import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Services from "@/components/sections/Services"
import Portfolio from "@/components/sections/Portfolio"
import WhyChoose from "@/components/sections/WhyChoose"
import Testimonials from "@/components/sections/Testimonials"
import Contact from "@/components/sections/Contact"
import ProblemsSolutions from "@/components/sections/ProblemsSolutions"
import WhatsAppButton from "@/components/ui/WhatsAppButton"

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <ProblemsSolutions />
        <Portfolio />
        <WhyChoose />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default Home
