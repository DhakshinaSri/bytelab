import { motion } from "framer-motion";
import BgImage from "@/assets/handshake.jpg"; 

export default function AboutHero() {
  return (
    <section
      className="w-full relative bg-fixed bg-center bg-cover border-b-5 border-[#94BAC3]"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative flex items-center justify-center px-6 md:px-20 lg:px-32 py-28">
        <div className="flex flex-col items-center text-center max-w-3xl">

          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.3, once: true }}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-white pb-6"
          >
            About Us
          </motion.h2>

          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.3, once: true }}
            className="text-white text-base md:text-lg text-center pb-8"
          >
            BYTE LAB is a dedicated IT training and innovation ecosystem created 
            to support students in building strong technical careers. <br />
            We work closely with educational institutions to set up on-campus Centers 
            of Excellence, where students can access structured training, modern tools, 
            and continuous mentorship.
          </motion.p>

        </div>
      </div>
    </section>
  );
}