import { getAssetPath } from '../utils/paths';

export function Hero() {
  return (
    <>
      {/* Full-width hero background */}
      <div 
        className="relative w-full pt-16 pb-12 sm:pt-20 md:pt-28 md:pb-20"
        style={{
          backgroundImage: `url(${getAssetPath('images/PrecisionWellness.png')})`,
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
          <div className="text-center p-4 sm:p-8 md:p-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 sm:mb-8 drop-shadow-lg px-2">
              Clinician‑guided peptide memberships for strength, metabolism, and longevity
            </h1>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-4">
              <button className="px-5 py-3 sm:px-6 sm:py-3.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/30 text-white text-sm sm:text-base font-semibold active:bg-white/20 active:scale-95 transition-all shadow-lg min-h-[44px]">
                Memberships
              </button>
              <button className="px-5 py-3 sm:px-6 sm:py-3.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/30 text-white text-sm sm:text-base font-semibold active:bg-white/20 active:scale-95 transition-all shadow-lg min-h-[44px]">
                Weight Management
              </button>
              <button className="px-5 py-3 sm:px-6 sm:py-3.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/30 text-white text-sm sm:text-base font-semibold active:bg-white/20 active:scale-95 transition-all shadow-lg min-h-[44px]">
                Recovery & Performance
              </button>
              <button className="px-5 py-3 sm:px-6 sm:py-3.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/30 text-white text-sm sm:text-base font-semibold active:bg-white/20 active:scale-95 transition-all shadow-lg min-h-[44px]">
                Consultations
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
