import { motion } from "framer-motion";

export default function GuidanceSection() {
  const items = [
    "Resume preparation",
    "Interview techniques",
    "Communication skills",
    "Understanding job roles in IT",
  ];

  // Parent container (controls stagger)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25, // delay between each circle
      },
    },
  };

  // Each circle animation
  const itemVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
      },
    },
  };

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8 lg:px-16 flex justify-center">
      
      <div className="max-w-6xl w-full text-center">
        
        {/* TITLE */}
        <h3 className="text-2xl sm:text-3xl font-medium text-gray-800 mb-12">
          Students receive guidance in
        </h3>

        {/* CIRCLES */}
        <motion.div
          className="flex flex-wrap justify-center gap-10 md:gap-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }} // animate only once on scroll
        >
          {items.map((text, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-[#4887E0] flex items-center justify-center text-center px-4 shadow-md"
            >
              <p className="text-white text-base sm:text-lg font-medium leading-snug">
                {text}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}