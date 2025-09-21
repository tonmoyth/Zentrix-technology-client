import About from "./About/About"
import Hero from "./Hero/Hero"
import Marque from "./Marque/Marque"
import Projects from "./Projects/Projects"
import Testimonial2 from "./Testomonial/Testomonial"
import Contact from "./Contact/Contact"
import LogoMarquee from "../../components/LogoMarquee/LogoMarquee"
import { Helmet } from "react-helmet-async"
// import Map from "./Map/Map"

function Home() {

  return (
    <>
     <Helmet>
        <title>Home</title>
      </Helmet>
      <Hero></Hero>
      <About></About>
     <Projects></Projects>
     <LogoMarquee></LogoMarquee>
     
     {/* <Map></Map> */}
     <Contact></Contact>
     <Testimonial2></Testimonial2>
      <Marque></Marque>
     
     
    </>
  )
}

export default Home
