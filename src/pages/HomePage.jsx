import HeroSection from "../sections/HeroSection";
import AboutUsSection from "../sections/AboutUsSection";
import WorkFieldsSection from "../sections/WorkFieldsSection";
import TeamSection from "../sections/TeamSection";
import QuestionSection from "../sections/QuestionSection";

export default function HomePage() {
  return (
    <div className="scroll-smooth">
      <div id="hero">
        <HeroSection />
      </div>
      <div id="about-us">
        <AboutUsSection />
      </div>
      <div id="work-fields">
        <WorkFieldsSection />
      </div>
      <div id="team">
        <TeamSection />
      </div>
      <div id="questions">
        <QuestionSection />
      </div>
    </div>
  );
}
