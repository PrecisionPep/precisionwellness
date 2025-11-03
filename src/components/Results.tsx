export function Results() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-teal-900 via-blue-900 to-teal-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Clinically guided. Transparent results.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div className="text-center">
            <div className="text-5xl sm:text-6xl font-bold text-teal-300 mb-3 sm:mb-4">14.9%</div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed px-4">
              Average body‑weight loss reported in a year with GLP‑1 therapy when paired with lifestyle changes.*
            </p>
          </div>

          <div className="text-center">
            <div className="text-5xl sm:text-6xl font-bold text-teal-300 mb-3 sm:mb-4">92%</div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed px-4">
              Members who reported a positive change after starting their plan.*
            </p>
          </div>

          <div className="text-center">
            <div className="text-5xl sm:text-6xl font-bold text-teal-300 mb-3 sm:mb-4">Zero</div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed px-4">
              Stimulants or harsh laxatives. Just thoughtful, doctor‑guided support.
            </p>
          </div>
        </div>

        <div className="bg-white/10 rounded-xl p-6 sm:p-8 max-w-3xl mx-auto">
          <p className="text-center text-sm sm:text-base text-gray-300 italic">
            *Individual results vary. Our program is designed to support healthy habits and should be used with diet and exercise guidance from your clinician.
          </p>
        </div>
      </div>
    </section>
  );
}

