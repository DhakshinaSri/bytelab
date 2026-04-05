import trainingImg from "@/assets/training.jpg";

export default function TrainingHeroSection() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8 lg:px-16 flex justify-center">
      
      {/* CURVED IMAGE CONTAINER */}
      <div className="relative w-full max-w-6xl mx-auto overflow-hidden">

        {/* IMAGE */}
        <img
          src={trainingImg}
          alt="Training Programs"
          className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
        />

        {/* OPTIONAL OVERLAY (improves text visibility) */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* TEXT OVER IMAGE */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold text-center">
            Training Programs
          </h2>
        </div>

        {/* TOP CURVE */}
        <div className="absolute top-0 left-0 w-full h-24 sm:h-28 bg-white rounded-b-[100%]"></div>

        {/* BOTTOM CURVE */}
        <div className="absolute bottom-0 left-0 w-full h-24 sm:h-28 bg-white rounded-t-[100%]"></div>

      </div>

    </section>
  );
}