import {
  FaTools,
  FaChartLine,
  FaProjectDiagram,
  FaUserTie,
  FaUniversity,
  FaBriefcase
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function KeyFeatures() {

  const industries = [
    { name: "Practical, hands-on learning approach", icon: <FaTools /> },
    { name: "Continuous assessment and improvement", icon: <FaChartLine /> },
    { name: "Real-time assignments and projects", icon: <FaProjectDiagram /> },
    { name: "Guidance from experienced trainers", icon: <FaUserTie /> },
    { name: "Learning environment inside campus", icon: <FaUniversity /> },
    { name: "Focus on building job-ready skills", icon: <FaBriefcase /> },
  ];
  
  return (
    <section className="py-20 px-6 lg:px-20 bg-white">
      
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-5xl font-bold mb-2 text-black">
          Key Features
        </h2>
      </div>

      {/* Industry Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {industries.map((industry, index) => (
          <motion.div
            key={index}
            initial={{ scale: 1.2, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.6, 
              ease: "easeOut", 
              delay: index * 0.2 // smoother stagger
            }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-gray-100 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-md transition"
          >

            {/* Icon */}
            <div className="bg-[#348CD7] p-4 rounded-xl shadow-sm mb-4 text-3xl text-white">
              {industry.icon}
            </div>

            <h3 className="font-semibold text-gray-700 text-sm lg:text-lg leading-snug">
              {industry.name}
            </h3>

          </motion.div>
        ))}
      </div>

    </section>
  );
}