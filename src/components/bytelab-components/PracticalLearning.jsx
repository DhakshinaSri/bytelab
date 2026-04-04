const activities = [
  "Writing programs and solving coding problems",
  "Building small applications step by step",
  "Working on guided projects",
  "Understanding debugging and error handling",
  "Learning how to approach real technical challenges",
];

export default function PracticalLearning() {
  return (
    <section className="w-full py-24 px-6 bg-[#f0f6fb] flex justify-center">

      <div className="max-w-6xl w-full">

        {/* HEADER */}
        <div className="mb-12">

          <p className="text-[#3AA7C2] text-sm tracking-[0.3em] mb-4">
            🔹 PRACTICAL LEARNING EXPERIENCE
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-[#1e3a5f] leading-tight">
            Students actively engage in:
          </h2>

          {/* LINE */}
          <div className="flex items-center gap-4 mt-6">
            <div className="w-16 h-[2px] bg-gradient-to-r from-[#3AA7C2] to-[#348CD7]" />
            <div className="w-16 h-[2px] bg-gradient-to-l from-[#3AA7C2] to-transparent" />
          </div>

        </div>

        {/* CARDS GRID */}
        <div className="grid md:grid-cols-2 gap-6">

          {activities.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 px-6 py-5 rounded-xl bg-white/80 border border-[#348CD7]/20 shadow-sm backdrop-blur-md hover:translate-x-1 hover:shadow-md transition-all"
            >
              <div className="mt-2 w-2 h-2 bg-[#348CD7] rounded-full"></div>

              <p className="text-[#1e3a5f]/80 text-base md:text-lg leading-relaxed font-medium">
                {item}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}