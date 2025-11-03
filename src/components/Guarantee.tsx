export function Guarantee() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-[#87CEEB]/10 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#87CEEB]/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#87CEEB]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-xs sm:text-sm font-semibold text-[#87CEEB]">Money-Back Guarantee</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-[clamp(2rem,4vw,4rem)] font-bold text-neutral-900 mb-4 sm:mb-6 leading-tight px-4">
              30-day money-back guarantee
            </h2>

            {/* Subheading */}
            <p className="text-lg sm:text-xl md:text-2xl text-neutral-700 max-w-3xl mx-auto mb-4 sm:mb-6 font-medium px-4">
              Try it for yourself — feel the difference in weeks
            </p>

            {/* Description */}
            <div className="relative inline-block">
              <p className="text-base sm:text-lg text-neutral-600 max-w-3xl mx-auto mb-6 sm:mb-10 leading-relaxed px-4">
                Start today with no risk. If you don't love your results in the first 30 days, we'll refund you. No hoops. Just honest support for your goals.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col items-center gap-3 sm:gap-4 px-4">
              <button className="bg-[#87CEEB] text-neutral-900 px-8 py-4 sm:px-10 sm:py-5 rounded-full hover:bg-[#79c9f0] transition-all text-base sm:text-lg font-bold shadow-lg hover:shadow-xl hover:scale-105 transform w-full sm:w-auto">
                Get started now
              </button>
              <p className="text-xs sm:text-sm text-neutral-500 italic max-w-2xl">
                Results vary. Always consult your clinician for medical advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
