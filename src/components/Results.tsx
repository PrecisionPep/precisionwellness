export function Results() {
  return (
    <section className="py-20 bg-gradient-to-br from-teal-900 via-blue-900 to-teal-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Clinically guided. Transparent results.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="text-center">
            <div className="text-6xl font-bold text-teal-300 mb-4">14.9%</div>
            <p className="text-xl text-gray-300 leading-relaxed">
              Average body‑weight loss reported in a year with GLP‑1 therapy when paired with lifestyle changes.*
            </p>
          </div>

          <div className="text-center">
            <div className="text-6xl font-bold text-teal-300 mb-4">92%</div>
            <p className="text-xl text-gray-300 leading-relaxed">
              Members who reported a positive change after starting their plan.*
            </p>
          </div>

          <div className="text-center">
            <div className="text-6xl font-bold text-teal-300 mb-4">Zero</div>
            <p className="text-xl text-gray-300 leading-relaxed">
              Stimulants or harsh laxatives. Just thoughtful, doctor‑guided support.
            </p>
          </div>
        </div>

        <div className="bg-white/10 rounded-xl p-8 max-w-3xl mx-auto">
          <p className="text-center text-gray-300 italic">
            *Individual results vary. Our program is designed to support healthy habits and should be used with diet and exercise guidance from your clinician.
          </p>
        </div>
      </div>
    </section>
  );
}

