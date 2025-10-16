import AboutSection from "../Components/About/AboutSection";
import Achievements from "../Components/About/Achievemente";
import ContactForm from "../Components/Contact/ContactForm";
import HeroSection from "../Components/HeroSection/HeroSection";
import FeaturedProjects from "../Components/Projects/FeaturedProjects";
import TechnicalSkills from "../Components/Skills/TechnicalSkills";


export default function Home() {
  return (
    <main>
      <HeroSection/>
        <AboutSection />
      <FeaturedProjects />
        <TechnicalSkills />
        <Achievements />
        <ContactForm />
    </main>
  )
}
