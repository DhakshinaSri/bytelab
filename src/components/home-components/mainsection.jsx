import { motion } from "framer-motion";
import Button from "@/components/common-components/Button";

export default function MainSection() {
  return (
    <section className="w-full px-6 md:px-30 py-20 bg-white overflow-hidden">
      
      <div className="flex flex-col md:flex-row items-start gap-12">

        {/* Left Side - Title */}
        <div className="flex-1 space-y-6 text-left">

          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.3, once: true }}
            className="text-3xl sm:text-2xl md:text-3xl lg:text-5xl font-bold leading-tight"
          >
            A Premier Center of Excellence by {" "}
            <span className="text-[#3AA7C2]">
              ISHAI
            </span>
          </motion.h2>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "100px", opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="h-1.25 bg-[#3AA7C2] rounded"
          />
        </div>

        {/* Right Side - Description + Button */}
        <div className="flex-1 text-left">

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.3, once: true }}
            className="text-gray-600 text-base md:text-lg text-justify"
          >
            BYTE LAB is an industry-integrated Center of Excellence established in collaboration with the International Society for Healthcare & AI Innovators, designed to bring practical IT learning directly into academic institutions.<br /><br />
            Today’s students often graduate with theoretical knowledge but limited exposure to real-world technology environments. BYTE LAB addresses this gap by creating a space where students can learn, practice, and apply technology in ways that reflect actual industry scenarios.
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.3, once: true }}
            className="mt-6"
          >
            <Button text="Our Services" variant="gotobutton" to="/services" />
          </motion.div>

        </div>

      </div>

    </section>
  );
}