import ProgramSection from "@/components/training-components/ProgramSection";
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
      {/* 1️⃣ Programming Fundamentals */}
      <ProgramSection
        title="Programming Fundamentals"
        icon={Code}
        image={Img1}
        description="This is where students begin their journey."
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
        description="Once the basics are clear, students move to advanced topics."
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
        description="Introduction to digital security and safe practices."
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
        description="Explore data and machine learning fundamentals."
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
        description="Stay updated with latest industry trends."
        points={[
          "Cloud computing basics",
          "Automation tools",
          "Modern development practices",
        ]}
      />
    </div>
  );
}