export default function BenifitDivider() {
  const services = [
    "Engineering Students",
    "Arts & Science Students",
    "Diploma Students",
    "Beginners & Foundation Learners",
  ];

  const looped = [...services, ...services];

  return (
    <section className="w-full overflow-hidden py-6">
      
      <div className="bg-black py-3 transform -rotate-[1.62deg]">
        
        <div className="relative whitespace-nowrap">
          <div className="flex items-center animate-marquee">
            
            {looped.map((service, index) => (
              <div key={index} className="flex items-center">
                
                {/* Text */}
                <span className="mx-6 text-white text-sm sm:text-base md:text-xl uppercase font-semibold tracking-wide">
                  {service}
                </span>

                {/* Dot (only if not last) */}
                {index !== looped.length - 1 && (
                  <span className="mx-4 text-white">•</span>
                )}
              </div>
            ))}

          </div>
        </div>

      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 20s linear infinite;
          }
        `}
      </style>
    </section>
  );
}