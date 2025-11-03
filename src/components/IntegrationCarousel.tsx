import { Link } from 'react-router-dom';

export function IntegrationCarousel() {
  const categories = [
    'Weight Management',
    'Fitness & Performance',
    'Tissue Repair & Recovery',
    'Oral Peptides',
    'Organ/System Support',
    'Health & Anti-Aging',
    'Aesthetics & Skincare'
  ];

  return (
    <section className="py-12 bg-white">
      <div className="relative overflow-hidden">
        {/* Left gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none"></div>
        {/* Right gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none"></div>
        
        {/* Marquee container */}
        <div className="marquee-wrapper flex">
          <div className="marquee-content flex gap-4 px-8 flex-shrink-0 items-center">
            {categories.map((category, index) => (
              <Link key={`first-${index}`} to="/products" className="chat-integration-items flex flex-row items-center gap-3 flex-shrink-0 px-5 py-3 rounded-full hover:opacity-90 transition-opacity" style={{ backgroundColor: '#87CEEB' }}>
                <div className="text-base font-medium text-neutral-900 whitespace-nowrap">{category}</div>
              </Link>
            ))}
            {/* Duplicate for seamless loop */}
            {categories.map((category, index) => (
              <Link key={`second-${index}`} to="/products" className="chat-integration-items flex flex-row items-center gap-3 flex-shrink-0 px-5 py-3 rounded-full hover:opacity-90 transition-opacity" style={{ backgroundColor: '#87CEEB' }}>
                <div className="text-base font-medium text-neutral-900 whitespace-nowrap">{category}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .marquee-wrapper {
          width: 100%;
        }
        
        .marquee-content {
          display: flex;
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
}

