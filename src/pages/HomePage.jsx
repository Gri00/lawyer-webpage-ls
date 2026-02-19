import HeroSection from "../sections/HeroSection";
import AboutUsSection from "../sections/AboutUsSection";
import WorkFieldsSection from "../sections/WorkFieldsSection";
import TeamSection from "../sections/TeamSection";

export default function HomePage() {
  return (
    <div className="scroll-smooth">
      <HeroSection />
      <AboutUsSection />
      <WorkFieldsSection />
      <TeamSection />
    </div>
  );
}
