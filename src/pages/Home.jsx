import Mainsection from "@/components/home-components/mainsection";
import Mainsection2 from "@/components/home-components/mainsection2";
import HighlightSection from "@/components/home-components/HighlightSection";
import AboutSection from "@/components/home-components/AboutSection";
import BenifitDivider from "@/components/home-components/BenifitDivider";
import Benefits from "@/components/home-components/Benefits";
import CareerSupport from "@/components/placement-components/careersupport";
import EndCard from "@/components/home-components/EndCard";

export default function Home() {
  return (
    <div className="pt-20">
        <Mainsection />
        <BenifitDivider />
        <Mainsection2 />
        <HighlightSection />
        <AboutSection />
        <Benefits />
        <CareerSupport />
        <EndCard />
    </div>
  );
}