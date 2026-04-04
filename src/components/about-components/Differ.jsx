import {
  FaUserTie,
  FaLayerGroup,
  FaCogs,
  FaShieldAlt,
  FaHeartbeat
} from "react-icons/fa";

export default function Differ() {

  const strengths = [
  {
    icon: <FaUserTie />,
    title: "Learning by Doing",
    desc: "Students spend more time coding, building, and experimenting than just listening.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Industry Exposure",
    desc: "Training reflects actual workflows followed in IT companies.",
  },
  {
    icon: <FaCogs />,
    title: "Structured Progression",
    desc: "From basics to advanced levels, learning is carefully guided.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Mentor Support",
    desc: "Students are guided by professionals who understand industry expectations.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Career Focus",
    desc: "Every module is aligned with job roles and employability.",
  },
];

  return (
    <section className="py-20 px-6 lg:px-20 bg-[#F6F6F6]">

      {/* Top Layout */}
      <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 items-start">

        {/* LEFT SIDE TEXT */}
        <div className="max-w-lg">
          <h2 className="text-5xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            What Makes{" "} <br />
            <span className="text-[#3AA7C2]">
              BYTE LAB {" "}
            </span>
            Different
          </h2>

          {/* Orange underline */}
          <div className="w-20 h-1 bg-[#3AA7C2] rounded mt-4 mb-6"></div>
          <p className="text-gray-600 leading-relaxed text-lg">
            At BYTE LAB, everything is designed with real outcomes in mind.
          </p>
        </div>

        {/* RIGHT SIDE CARDS */}
        <div className="flex flex-col gap-5 max-w-xl mx-auto lg:mx-0">

          {strengths.map((item, index) => (
            <div
              key={index}
              className="bg-white px-6 py-5 rounded-xl shadow-lg hover:shadow-xl transition flex items-center gap-4"
            >
              {/* Icon */}
              <div className="text-2xl text-[#3AA7C2]">
                {item.icon}
              </div>
              {/* Title */}
              <div className="flex flex-col">
  {/* Title */}
  <h3 className="font-semibold text-gray-800 leading-snug">
    {item.title}
  </h3>

  {/* Description */}
  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
    {item.desc}
  </p>
</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Statement */}
      <div className="mt-16 max-w-3xl mx-auto text-center">
        <p className="text-gray-700 font-medium text-xl lg:text-2xl leading-relaxed">
          We believe that skills are best developed through practice, consistency, and real-world relevance.
        </p>
        <div className="w-24 h-1 bg-[#3AA7C2] rounded mt-6 mx-auto"></div>
      </div>

    </section>
  );
}