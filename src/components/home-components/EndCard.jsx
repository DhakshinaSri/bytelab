import { motion } from "framer-motion";
import Button from "@/components/common-components/Button";

export default function EndCard() {
  return (
    <motion.section
      className="w-full px-6 md:px-20 lg:px-32 py-20 bg-white flex justify-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ amount: 0.2, once: true }}
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
        <div className="flex-1 flex flex-col items-start text-left">
            <h2 className="text-[#348CD7] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center md:text-left">
                Our Goal
            </h2>
            {/* Decorative Line */}
            <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "80px", opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="h-[5px] bg-[#348CD7] rounded mt-4 mx-auto md:mx-0"
            />

          {/* BUTTON */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <Button
              text="View Programs"
              variant="gotobutton"
              to="/training-programs"
            />
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 flex items-center md:items-end">
          <p className="text-[#348CD7] text-lg md:text-xl lg:text-2xl leading-relaxed max-w-xl text-center md:text-right">
            Our goal is simple — to help students learn better, perform better, and build meaningful careers in IT.
          </p>
        </div>

      </div>
    </motion.section>
  );
}