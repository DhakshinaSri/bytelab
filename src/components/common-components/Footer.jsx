import { Link } from "react-router-dom";
import Logo from "@/assets/bytelablogo.png";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-gray-700 py-12">

      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* ================= TOP SECTION ================= */}
        {/* ================= TOP SECTION ================= */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 md:gap-20">

  {/* Brand */}
  <div className="space-y-4">
    <img src={Logo} alt="KK Technologies Logo" className="h-13 w-auto" />

    <h2 className="text-[#348CD7] text-xl font-semibold">
      Byte Lab
    </h2>

    <p className="max-w-lg text-base leading-relaxed text-gray-600 text-justify">
      We aim to shape confident professionals who are ready to 
      contribute from their very first day at work.
    </p>
  </div>

  {/* Quick Links */}
  <div className="space-y-4 mt-6 md:mt-10">
    <h3 className="text-[#348CD7] text-lg font-bold">
      Quick Links
    </h3>

    <div className="flex flex-col space-y-2 text-base">
      <Link to="/">› Home</Link>
      <Link to="/about">› About Us</Link>
      <Link to="/bytelab">› Byte Lab</Link>
      <Link to="/training-programs">› Training Programs</Link>
      <Link to="/placement-support">› Placement Support</Link>
      <Link to="/contact">› Contact Us</Link>
    </div>
  </div>

  {/* Training Programs */}
  <div className="space-y-4 mt-6 md:mt-10">
    <h3 className="text-[#348CD7] text-lg font-bold">
      Training Programs
    </h3>

    <div className="flex flex-col space-y-2 text-base">
      <Link to="/training-programs">Programming Fundamentals</Link>
      <Link to="/training-programs">Advanced Development</Link>
      <Link to="/training-programs">Cyber Security</Link>
      <Link to="/training-programs">Data Science & AI</Link>
      <Link to="/training-programs">Emerging Technologies</Link>
    </div>
  </div>

  {/* ✅ NEW COLUMN */}
  <div className="space-y-4 mt-6 md:mt-10">
    <h3 className="text-[#348CD7] text-lg font-bold">
      Career Opportunities
    </h3>

    <div className="flex flex-col space-y-2 text-base">
      <Link to="/placement-support">Software Developer</Link>
      <Link to="/placement-support">Web Developer</Link>
      <Link to="/placement-support">Python Developer</Link>
      <Link to="/placement-support">Data Analyst</Link>
      <Link to="/placement-support">Cyber Security Analyst</Link>
      <Link to="/placement-support">IT Support Executive</Link>
    </div>
  </div>

</div>

        {/* ================= DIVIDER ================= */}
        <div className="mt-12 border-t border-gray-200"></div>

        {/* ================= CONTACT STRIP ================= */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-base">

          {/* Reach Us */}
          <div className="space-y-2">
            <h4 className="text-[#348CD7] font-bold">Reach Us</h4>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#348CD7]" />
              <span>+91 XXXXX XXXXX</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#348CD7]" />
              <span>info@bytelab.in</span>
            </div>
          </div>

          {/* Our Presence */}
          <div className="space-y-2">
            <h4 className="text-[#348CD7] font-bold">Our Presence</h4>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#348CD7] mt-1 flex-shrink-0" />
                  <p className="text-gray-600 leading-relaxed">
                    Address
                  </p>
              </div>
          </div>

          {/* Our Office */}
          <div className="space-y-2">
            <h4 className="text-[#348CD7] font-bold">Business Hours</h4>

            <div className="flex items-start gap-3">
              <FaClock className="text-[#348CD7] mt-1" />
              <span className="text-gray-600">
                Monday – Saturday: 9:00 AM – 7:00 PM <br />
                Sunday: Closed
              </span>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="border-t border-gray-200 pt-6 text-center text-base text-gray-500">
          © {new Date().getFullYear()} Byte Lab. All rights reserved.
        </div>

      </div>
    </footer>
  );
}