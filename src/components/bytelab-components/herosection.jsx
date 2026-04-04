import AnimatedBackground from "@/components/common-components/AnimatedBackground";

const capabilities = [
  "Write & Test Code",
  "Build Applications",
  "Collaborate on Projects",
  "Learn Industry Tools",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

      {/* BACKGROUND */}
      <AnimatedBackground />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">

        {/* FLEX CONTAINER */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">

          {/* LEFT SIDE */}
          <div className="max-w-xl">

            {/* BADGE */}
            <div className="inline-flex items-center gap-3 px-6 py-2 border border-[#3AA7C2]/30 rounded-full bg-[#3AA7C2]/10 backdrop-blur-md mb-10">
              <span className="w-2 h-2 bg-[#3AA7C2] rounded-full"></span>
              <span className="text-[#3AA7C2] text-xs tracking-[0.25em] font-semibold">
                CENTER OF EXCELLENCE MODEL
              </span>
            </div>

            {/* SUB TITLE */}
            <p className="text-[#3AA7C2]/70 tracking-[0.3em] text-sm mb-6">
              💻 LEARNING INSIDE A REAL IT ENVIRONMENT
            </p>

            {/* TITLE */}
            <h1 className="text-[48px] md:text-[90px] font-extrabold leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#3AA7C2] to-[#348CD7]">
              BYTE LAB
            </h1>

            <h2 className="text-lg md:text-2xl tracking-[0.5em] text-[#1e3a5f] mt-2">
              CENTER OF EXCELLENCE
            </h2>

            {/* LINE */}
            <div className="flex items-center gap-4 mt-6 mb-6">
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#3AA7C2] to-[#348CD7]" />
              <p className="text-xs tracking-[0.3em] text-[#1e3a5f]/60">
                REAL INDUSTRY · REAL TOOLS · REAL SKILLS
              </p>
              <div className="w-16 h-[2px] bg-gradient-to-l from-[#3AA7C2] to-transparent" />
            </div>

            {/* DESCRIPTION */}
            <p className="text-[#1e3a5f]/70 text-base md:text-lg leading-relaxed">
              BYTE LAB is set up within institutions as a <strong>dedicated space</strong> where students can practice and experiment freely.
            </p>

          </div>

          {/* RIGHT SIDE (CAPABILITIES) */}
          <div className="space-y-4 w-full max-w-md">
            <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">
              The lab environment is designed to reflect how IT teams work, allowing students to:
            </h3>

            {capabilities.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 px-5 py-4 rounded-xl bg-white/80 border border-[#348CD7]/20 shadow-sm backdrop-blur-md hover:translate-x-1 transition-all"
              >
                <div className="w-2 h-2 bg-[#348CD7] rounded-full"></div>
                <p className="text-[#1e3a5f]/80 font-medium">{item}</p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}