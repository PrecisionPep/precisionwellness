export function Hero() {
  return (
    <>
      {/* Full-width hero background */}
      <div 
        className="relative w-full pt-48 pb-20"
        style={{
          backgroundImage: 'url(/images/PrecisionWellness.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          imageRendering: 'auto'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        
        {/* Centered content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center p-8 md:p-12">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 drop-shadow-lg">
              Clinician‑guided peptide memberships for strength, metabolism, and longevity
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <button className="px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-white/20 hover:scale-110 transition-all shadow-lg">
                Memberships
              </button>
              <button className="px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-white/20 hover:scale-110 transition-all shadow-lg">
                Weight Management
              </button>
              <button className="px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-white/20 hover:scale-110 transition-all shadow-lg">
                Recovery & Performance
              </button>
              <button className="px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-white/20 hover:scale-110 transition-all shadow-lg">
                Consultations
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
