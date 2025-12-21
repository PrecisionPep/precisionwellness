import { getAssetPath } from '../utils/paths';

export function WellnessSolutionsGrid() {
  const solutions = [
    {
      title: 'Weight Management',
      image: getAssetPath('weightmanagement.png'),
      alt: 'Weight Management'
    },
    {
      title: 'Fitness & Performance',
      image: getAssetPath('fitness.png'),
      alt: 'Fitness & Performance'
    },
    {
      title: 'Tissue Repair & Recovery',
      image: getAssetPath('tissue.png'),
      alt: 'Tissue Repair & Recovery'
    },
    {
      title: 'Oral Peptides',
      image: getAssetPath('oral.png'),
      alt: 'Oral Peptides'
    },
    {
      title: 'Organ/System Support',
      image: getAssetPath('box.png'),
      alt: 'Organ/System Support'
    },
    {
      title: 'Health & Anti-Aging',
      image: getAssetPath('weight.png'),
      alt: 'Health & Anti-Aging'
    }
  ];

  return (
    <section className="bg-white py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-neutral-900 mb-8 sm:mb-10">
          Wellness Solutions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {solutions.map((solution, index) => (
            <a
              key={index}
              href="https://blvd.app/66ea81b2-251f-42e2-8545-38200e8f97e7/login"
              className="group relative overflow-hidden rounded-2xl bg-[#EAE7DC] min-h-[280px] sm:min-h-[320px] md:min-h-[340px] flex transition-transform hover:scale-[1.02]"
            >
              <div className="absolute inset-0">
                <img
                  src={solution.image}
                  alt={solution.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{ imageRendering: 'auto' }}
                  aria-hidden="true"
                />
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/40 to-transparent"
              ></div>
              <div className="relative z-10 mt-auto w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between">
                <h3 className="text-white text-base sm:text-lg md:text-xl font-bold leading-tight pr-2">{solution.title}</h3>
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/95 text-neutral-900 shadow-sm transition-transform group-hover:translate-x-1 flex-shrink-0">
                  <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

