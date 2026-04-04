export default function ProgramSection({
  title,
  icon: Icon,
  description,
  image,
  points = [],
  modules = [],
}) {
  return (
    <section className="w-full bg-[#f8fafc] py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">

        {/* LEFT: TITLE + DESCRIPTION */}
        <div className="flex-1 max-w-md">

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#5ce1e6]/20 text-[#001919]">
              <Icon size={28} />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#001919]">
              {title}
            </h2>
          </div>

          <p className="mt-4 text-gray-600 text-base sm:text-lg text-justify">
            {description}
          </p>
        </div>

        {/* CENTER: IMAGE */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-[#5ce1e6]/10 rounded-2xl blur-2xl"></div>

            <img
              src={image}
              alt={title}
              className="relative z-10 w-full object-contain mix-blend-multiply"
            />
          </div>
        </div>

        {/* RIGHT: POINTS + MODULES */}
        <div className="flex-1 max-w-md space-y-10">

          {/* POINTS */}
          <div className="relative pl-6">
            <div className="absolute left-0 top-2 w-[3px] h-full bg-gradient-to-b from-[#5ce1e6] to-[#001919] rounded-full"></div>

            <h3 className="text-lg sm:text-xl font-semibold text-[#001919] mb-4">
              Key Learning:
            </h3>

            <ul className="space-y-3 text-gray-600 text-lg sm:text-base">
              {points.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>

          {/* MODULES */}
          {modules.length > 0 && (
            <div className="relative pl-6">
              <div className="absolute left-0 top-2 w-[3px] h-full bg-gradient-to-b from-[#5ce1e6] to-[#001919] rounded-full"></div>

              <h3 className="text-lg sm:text-xl font-semibold text-[#001919] mb-4">
                Includes:
              </h3>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600 text-lg sm:text-base">
                {modules.map(({ icon: MIcon, text }, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-[#5ce1e6]/20 text-[#001919]">
                      <MIcon size={16} />
                    </div>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}