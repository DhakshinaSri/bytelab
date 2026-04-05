import {
  FaCode,
  FaLaptopCode,
  FaPython,
  FaChartBar,
  FaShieldAlt,
  FaHeadset
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function CareerSupport() {

  const industries = [
    { name: "Software Developer", icon: <FaCode /> },
    { name: "Web Developer", icon: <FaLaptopCode /> },
    { name: "Python Developer", icon: <FaPython /> },
    { name: "Data Analyst", icon: <FaChartBar /> },
    { name: "Cyber Security Analyst", icon: <FaShieldAlt /> },
    { name: "IT Support Executive", icon: <FaHeadset /> },
  ];

  return (
    <section className="py-20 px-6 lg:px-20 bg-[#012367]">
      
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-5xl font-bold mb-2 text-white">
          Career Opportunities
        </h2>
        <p className="text-gray-300 text-lg mt-5">
          After completing the training, students can explore roles such as
        </p>
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