import HeroSection from "@/components/bytelab-components/herosection";
import PracticalLearning from "@/components/bytelab-components/PracticalLearning";
import Outcome from "@/components/bytelab-components/outcome";

export default function Bytelab() {
  return (
    <div className="pt-25">
      <HeroSection />
      <PracticalLearning />
      <Outcome />
    </div>
  );
}