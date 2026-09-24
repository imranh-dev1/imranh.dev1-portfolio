import AboutSection from "./(public)/About/AboutSection"; 
import ContactSection from "./(public)/Contact/ContactSection";
import ExperienceSection from "./(public)/Experience/ExperienceSection";
import Footer from "./(public)/Footer/Footer";
import HeroSection from "./(public)/Home/HeroSection";
import ProjectsSection from "./(public)/Projects/ProjectsSection";
import SkillsSection from "./(public)/Skills/SkillsSection";


export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer/>
    </main>
  )
}
