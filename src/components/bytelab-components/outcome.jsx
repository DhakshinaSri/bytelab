import { useState, useEffect } from "react";

const goals = [
  "Gain confidence in their technical abilities",
  "Build a portfolio of projects",
  "Understand real-world workflows",
  "Improve problem-solving and logical thinking",
  "Become ready to take up entry-level IT roles"
];

export default function Outcome() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % goals.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center py-10 bg-white p-6">
  <div className="w-full max-w-4xl bg-[#3AA7C2] rounded-2xl px-6 md:px-10 py-8 shadow-lg overflow-hidden">

    {/* LEFT CONTENT */}
    <div className="text-white w-full">

      {/* TITLE + IMAGE */}
      <div className="flex items-center gap-3 mb-4">
        <h2 className="text-3xl md:text-5xl font-bold">Outcome</h2>
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