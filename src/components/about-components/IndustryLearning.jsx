import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import checkIcon from "@/assets/checkbox.png";

const policies = [
  "Real-time coding exercises",
  "Mini projects and assignments",
  "Application-based problem solving",
  "Simulated industry scenarios",
];

export default function IndustryLearning() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.25 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      className="w-full px-6 md:px-16 lg:px-24 py-20 bg-white"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">

        {/* LEFT SIDE */}
        <div className="flex-1 space-y-5">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#3AA7C2]"
          >
            Industry-Oriented <span className="text-black">Learning</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "80px", opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-[3px] bg-[#3AA7C2] rounded"
          />

          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-lg">
            One of the key strengths of BYTE LAB is its focus on practical exposure.
            Students are not limited to textbooks — they work on:
          </p>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          className="flex-1 space-y-5"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {policies.map((policy, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-3"
              variants={itemVariants}
            >
              <img
                src={checkIcon}
                alt="check"
                className="w-6 h-6 mt-1 shrink-0"
              />

              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                {policy}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* BOTTOM TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto mt-16 text-center"
      >
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 leading-relaxed">
          This helps students understand how concepts are applied in real situations, making learning more meaningful and effective.
        </p>
      </motion.div>
    </section>
  );
}