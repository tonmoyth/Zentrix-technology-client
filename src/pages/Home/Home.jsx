import About from "./About/About"
import Footer2 from "./Footer/Footer"
import Hero from "./Hero/Hero"
import Marque from "./Marque/Marque"
import Projects from "./Projects/Projects"
import WhyChoose from "./WhyChoose/WhyChoose"
import Testimonial2 from "./Testomonial/Testomonial"
import Contact from "./Contact/Contact"
import LogoMarquee from "../../components/LogoMarquee/LogoMarquee"
import Map from "./Map/Map"

function Home() {

  return (
    <>
     
      <Hero></Hero>
      <Marque></Marque>
      <About></About>
     <Projects></Projects>
     <WhyChoose></WhyChoose>
     <LogoMarquee></LogoMarquee>
     <Testimonial2></Testimonial2>
     <Map></Map>
     <Contact></Contact>
      <Footer2></Footer2>
     
    </>
  )
}

export default Home
