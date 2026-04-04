export default function VisionMission() {
  return (
    <section className="w-full px-6 md:px-20 lg:px-32 pt-15 pb-10">
      <div className="flex flex-col md:flex-row gap-12">

        {/* Mission */}
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight pb-6">
            Our
            <span className="text-[#3AA7C2]"> Mission</span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg text-justify">
            To provide meaningful, practical IT education that helps students build strong 
            technical foundations and develop the confidence to succeed in real-world careers.
          </p>
        </div>

        {/* Vision */}
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight pb-6">
            Our
            <span className="text-[#3AA7C2]"> Vision</span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg text-justify">
            To create a network of institutions where students can access high-quality, 
            industry-relevant IT training within their own campus environment.
          </p>
        </div>
      </div>
    </section>
  );
}