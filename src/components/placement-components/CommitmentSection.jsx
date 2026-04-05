import commitmentImg from "@/assets/commitment.jpg"; // update path

export default function CommitmentSection() {
  return (
    <section className="w-full bg-white">

      {/* TOP SECTION */}
      <div className="flex flex-col md:flex-row items-center">

        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2 px-6 sm:px-10 lg:px-16 py-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-wide">
            Our Commitment
          </h2>

          <p className="mt-6 text-gray-700 text-lg sm:text-xl leading-relaxed max-w-md">
            We are committed to helping students take their first step into the professional world with confidence.
          </p>

          {/* underline */}
          <div className="mt-6 w-20 h-[4px] bg-teal-500"></div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2">
          <img
            src={commitmentImg}
            alt="Our Commitment"
            className="w-full h-full object-cover"
          />
        </div>

      </div>

      {/* BOTTOM TEXT */}
      <div className="px-6 sm:px-10 lg:px-20 py-12 text-center">
        <p className="text-xl sm:text-3xl text-gray-900 leading-relaxed max-w-4xl mx-auto font-semibold">
          <span className="font-semibold">BYTE LAB</span> focuses on building not just skills, but also the mindset needed to grow in a competitive industry.
        </p>
      </div>

    </section>
  );
}