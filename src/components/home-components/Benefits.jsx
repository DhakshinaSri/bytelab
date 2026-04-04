import { useState, useEffect } from "react";

export default function Benefits() {
  const goals = [
    {
      title: "Engineering Students",
      points: [
        "Students from Computer Science, IT, AI, Cyber Security, and related branches can strengthen their technical and development skills.",
      ],
    },
    {
      title: "Arts & Science Students",
      points: [
        "Programs are well-suited for B.Sc Computer Science, BCA, MCA, and other technology-oriented courses.",
      ],
    },
    {
      title: "Diploma Students",
      points: [
        "Students pursuing polytechnic or diploma programs in IT and computer-related fields can gain practical exposure.",
      ],
    },
    {
      title: "Beginners & Foundation Learners",
      points: [
        "Even students with little or no programming background can start with basics and gradually build their skills.",
      ],
    },
  ];

  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  // ✅ RESPONSIVE CARDS COUNT
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateCards();
    window.addEventListener("resize", updateCards);

    return () => window.removeEventListener("resize", updateCards);
  }, []);

  // ✅ AUTO SLIDE FIXED
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        const maxIndex = goals.length - visibleCards;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [visibleCards, goals.length]);

  return (
    <section className="w-full bg-white py-20 px-6 overflow-hidden">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-14">
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3AA7C2]">
            Who can Benefit
          </h2>
        </div>

        <p className="text-gray-700 text-lg md:text-xl font-bold max-w-2xl">
          BYTE LAB is designed for students from diverse academic backgrounds 
          who are interested in building a career in IT.
        </p>
      </div>

      {/* CAROUSEL */}
      <div className="max-w-7xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${index * (100 / visibleCards)}%)`,
          }}
        >
          {goals.map((goal, i) => {
            const isDark = i % 2 === 0;

            return (
  <div
    key={i}
    className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
  >
    <div
      className={`
        shadow-lg
        p-8
        w-full
        h-[280px] md:h-[350px]
        flex flex-col
        overflow-hidden
        ${isDark ? "bg-[#348CD7]" : "bg-white"}
      `}
    >
      {/* Number */}
      <h3
        className={`text-4xl md:text-6xl font-bold mb-4 ${
          isDark ? "text-white" : "text-[#348CD7]"
        }`}
      >
        {String(i + 1).padStart(2, "0")}
      </h3>

      {/* Title ✅ FIXED */}
      <h4
        className={`font-semibold text-2xl mb-3 leading-snug ${
          isDark ? "text-white" : "text-[#348CD7]"
        }`}
      >
        {goal.title}
      </h4>

      {/* Divider */}
      <div
        className={`w-35 h-[3px] mb-4 ${
          isDark ? "bg-white" : "bg-[#348CD7]"
        }`}
      />

      {/* Points */}
      <ul
        className={`space-y-2 text-sm md:text-lg leading-relaxed overflow-hidden ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        {goal.points.map((point, idx) => (
          <li key={idx} className="line-clamp-3">
            {point}
          </li>
        ))}
      </ul>
    </div>
  </div>
);
          })}
        </div>
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-2 mt-10">
        {Array.from({ length: goals.length - visibleCards + 1 }).map(
          (_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                i === index ? "bg-[#348CD7]" : "bg-gray-300"
              }`}
            />
          )
        )}
      </div>
    </section>
  );
}