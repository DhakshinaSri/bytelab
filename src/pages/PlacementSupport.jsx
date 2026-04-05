import PlacementSection from "@/components/placement-components/placementhero";
import GuidanceSection from "@/components/placement-components/GuidanceSection";
import CareerSupport from "@/components/placement-components/careersupport";
import CommitmentSection from "@/components/placement-components/CommitmentSection";
import OurGoal from "@/components/placement-components/OurGoal";

export default function PlacementSupport() {
  return (
    <div className="pt-20">
        <PlacementSection />
        <GuidanceSection />
        <CareerSupport />
        <CommitmentSection />
        <OurGoal />
    </div>
  );
}