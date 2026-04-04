export default function HighlightSection() {
  return (
    <section className="w-full flex justify-center px-6 md:px-20 py-16 bg-[#3AA7C215]">
      
      <div
        className="
          w-full max-w-[1370px]
          rounded-xl
          px-6 md:px-16 py-10 md:py-14
          text-center
          shadow-xl
        "
        style={{
          background:
            "conic-gradient(from 180deg at 50% 50%, rgba(97, 178, 229, 0.35) 0deg, #FFFFFF 160deg, rgba(138, 56, 245, 0.25) 300deg, rgba(97, 178, 229, 0.35) 360deg)",
        }}
      >
        <p className="text-lg md:text-xl lg:text-2xl font-medium text-black leading-relaxed max-w-3xl mx-auto">
          We aim to shape confident professionals who are ready to contribute from their very first day at work.
        </p>
      </div>

    </section>
  );
}