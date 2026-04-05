import { motion } from "framer-motion";
import Button from "@/components/common-components/Button";
import heroImage from "@/assets/HeroImg1.png"; // replace with your image

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-30 py-20 bg-white overflow-hidden">
      
      {/* Left side - Text content */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        
        {/* Title */}
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.3, once: true }}
          className="text-3xl sm:text-2xl md:text-3xl lg:text-5xl font-bold leading-tight text-[#3AA7C2]"
        >
          Career-Focused
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.3, once: true }}
          className="text-gray-600 text-base md:text-lg max-w-lg text-justify"
        >
          Instead of focusing only on concepts, we emphasize hands-on learning, problem-solving, 
          and real-time application development. Students work on practical tasks, guided by 
          industry experts, gaining the kind of experience that employers truly value. <br/> <br/> 
          At BYTE LAB, learning is not confined to classrooms — it is interactive, project-driven, 
          and career-focused.

        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.3, once: true }}
        >
          <Button text="View Opportunities" variant="gotobutton" to="/placement-support" />
        </motion.div>
      </div>

      {/* Right side - Image and decorations */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
        viewport={{ amount: 0.3, once: true }}
        className="flex-1 flex justify-center mt-12 md:mt-0 relative"
      >
        <img
          src={heroImage}
          alt="AI Innovator"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
}
