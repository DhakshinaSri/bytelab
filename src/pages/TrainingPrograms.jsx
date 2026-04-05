import TrainingHeroSection from "@/components/training-components/herosection";
import ProgramSection from "@/components/training-components/ProgramSection";
import KeyFeatures from "@/components/training-components/KeyFeatures";

import Img1 from "@/assets/PImage1.png";
import Img2 from "@/assets/PImage2.png";
import Img3 from "@/assets/PImage3.png";
import Img4 from "@/assets/PImage4.png";
import Img5 from "@/assets/PImage5.png";

import {
  Code,
  Brain,
  Shield,
  BarChart,
  Cpu,
} from "lucide-react";

export default function TrainingPrograms() {
  return (
    <div className="pt-24">
      <TrainingHeroSection />
      {/* 1️⃣ Programming Fundamentals */}
      <ProgramSection
        title="Programming Fundamentals"
        icon={Code}
        image={Img1}
        description="This is where students begin their journey. The focus is on 
        building strong fundamentals, which are essential for all advanced learning."
        points={[
          "Basics of programming",
          "Logical thinking and problem-solving",
          "Writing simple programs in C and Python",
        ]}
      />

      {/* 2️⃣ Advanced Development */}
      <ProgramSection
        title="Advanced Development"
        icon={Brain}
        image={Img2}
        description="Once the basics are clear, students move to advanced topics. Students also start 
        working on mini projects, which help them understand how different concepts come together."
        points={[
          "Object-Oriented Programming",
          "Web development concepts",
          "Working with databases",
          "Building simple applications",
        ]}
      />

      {/* 3️⃣ Cyber Security */}
      <ProgramSection
        title="Cyber Security"
        icon={Shield}
        image={Img3}
        description="Introduction to digital security and safe practices. The aim 
        is to create awareness and provide a foundation for further specialization."
        points={[
          "Basic security concepts",
          "Common threats and vulnerabilities",
          "Safe practices in digital environments",
        ]}
      />

      {/* 4️⃣ Data Science & AI */}
      <ProgramSection
        title="Data Science & AI"
        icon={BarChart}
        image={Img4}
        description="Explore data and machine learning fundamentals. This 
        module helps students explore one of the fastest-growing areas in IT."
        points={[
          "Working with data using Python",
          "Basic data analysis",
          "Understanding patterns and insights",
          "Introductory machine learning concepts",
        ]}
      />

      {/* 5️⃣ Emerging Technologies */}
      <ProgramSection
        title="Emerging Technologies"
        icon={Cpu}
        image={Img5}
        description="Stay updated with latest industry trends. This 
        ensures they stay updated with current industry trends."
        points={[
          "Cloud computing basics",
          "Automation tools",
          "Modern development practices",
        ]}
      />
      <KeyFeatures />
    </div>
  );
}