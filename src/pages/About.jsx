import AboutHero from "@/components/about-components/AboutHero";
import FocusArea from "@/components/about-components/FocusArea";
import Differ from "@/components/about-components/Differ";
import VisionMission from "@/components/about-components/VisionMission";
import Benefits from "@/components/home-components/Benefits";
import GoalsCarousel from "@/components/about-components/GoalsCarousel";
import IndustryLearning from "@/components/about-components/IndustryLearning";

export default function About() {
  return (
    <div className="pt-20">
      <AboutHero />
      <FocusArea />
      <Differ />
      <VisionMission />
      <GoalsCarousel />
      <Benefits />
      <IndustryLearning />
    </div>
  );
}