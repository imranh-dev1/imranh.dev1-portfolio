import AboutSection from "./(public)/About/AboutSection";
import HeroSection from "./(public)/Home/HeroSection";
import SkillsSection from "./(public)/Skills/SkillsSection";


export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
    </main>
  )
}
