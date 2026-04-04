import { useState, useEffect } from "react";
import Target from "@/assets/target.png";

const goals = [
  "Help students transition smoothly from academics to industry",
  "Develop strong problem-solving and technical skills",
  "Encourage hands-on learning and independent thinking ",
  "Prepare students for real job roles, not just exams ",
  "Support long-term career growth in the IT field "
];

export default function GoalsCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % goals.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center py-10 bg-white p-6">
  <div className="w-full max-w-4xl bg-[#348CD7] rounded-2xl px-6 md:px-10 py-8 shadow-lg overflow-hidden">

    {/* LEFT CONTENT */}
    <div className="text-white w-full">

      {/* TITLE + IMAGE */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src={Target}
          alt="goal target"
          className="w-8 h-8 md:w-15 md:h-15 object-contain"
        />
        <h2 className="text-3xl md:text-5xl font-bold">Goals</h2>
      </div>

      {/* CAROUSEL TEXT */}
      <div className="relative h-[70px] md:h-[80px] overflow-hidden">
        {goals.map((goal, index) => (
          <p
            key={index}
            className={`absolute w-full text-sm md:text-2xl leading-snug transition-all duration-700 ease-in-out
            ${
              index === current
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {goal}
          </p>
        ))}
      </div>

      {/* DOTS */}
      <div className="flex gap-2 mt-4">
        {goals.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 w-9 cursor-pointer transition-all ${
              i === current ? "bg-white" : "bg-white/40"
            }`}
          ></span>
        ))}
      </div>

    </div>

  </div>
</div>
  );
}