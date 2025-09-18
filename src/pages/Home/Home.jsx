import About from "./About/About"
import Hero from "./Hero/Hero"
import Marque from "./Marque/Marque"
import Projects from "./Projects/Projects"
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
     <LogoMarquee></LogoMarquee>
     <Testimonial2></Testimonial2>
     <Map></Map>
     <Contact></Contact>
     
     
    </>
  )
}

export default Home
