import {
  FaCode,
  FaGlobe,        // ✅ for Web
  FaShieldAlt,     // ✅ for Cyber Security
  FaDatabase,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function IndustriesSection() {

  const industries = [
    { name: "Programming and Software Development ", icon: <FaCode /> },
    { name: "Web and Application Development", icon: <FaGlobe /> },
    { name: "Cyber Security", icon: <FaShieldAlt /> },
    { name: "Data Science and AI ", icon: <FaDatabase /> },
  ];

  return (
    <section className="py-20 px-6 lg:px-20 bg-white">

      {/* Header */}
      <div className="mb-12">

        <h2 className="text-2xl font-bold mb-2 text-black">
          Our focus areas include:
        </h2>
      </div>

      {/* Industry Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {industries.map((industry, index) => (
          <motion.div
            key={index}
            initial={{ scale: 1.2, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-gray-100 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-md transition"
          >

            {/* Icon Container */}
            <div className="bg-[#3AA7C2] p-4 rounded-xl shadow-sm mb-4 text-2xl text-white">
              {industry.icon}
            </div>

            <h3 className="font-bold text-gray-700 text-sm lg:text-lg leading-snug">
              {industry.name}
            </h3>

          </motion.div>
        ))}

      </div>

      {/* Footer Text */}
      <p className="mt-10 text-black max-w-5xl text-2xl">
        What makes BYTE LAB different is our approach — we don’t treat training as a short-term course. Instead, we create a continuous learning journey, where students gradually build skills, confidence, and practical understanding.
      </p>

    </section>
  );
}