import placementImg from "@/assets/placement.png";

export default function PlacementSection() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8 lg:px-16 flex justify-center">
      
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* LEFT CONTENT WITH GRID */}
        <div className="flex-1 relative text-center md:text-left overflow-hidden">
          
          {/* GRID BACKGROUND */}
<div
  className="absolute inset-0 pointer-events-none opacity-70
    [background-image:linear-gradient(#00000020_1.5px,transparent_1px),linear-gradient(90deg,#00000020_1px,transparent_1px)]
    [background-size:40px_40px]
    [mask-image:radial-gradient(circle_at_center,black_40%,transparent_80%)]
    [mask-repeat:no-repeat]"
></div>

          {/* CONTENT */}
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-5xl font-semibold text-gray-900">
              Placement Support
            </h2>

            <p className="mt-4 text-gray-800 text-xl md:text-2xl leading-relaxed max-w-md mx-auto md:mx-0">
              BYTE LAB supports students not only in learning but also in preparing for their careers.
            </p>

            {/* underline */}
            <div className="mt-6 w-28 h-[4px] bg-teal-500 mx-auto md:mx-0"></div>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">
          <img
            src={placementImg}
            alt="Placement Support"
            className="w-full max-w-md object-contain"
          />
        </div>

      </div>
    </section>
  );
}