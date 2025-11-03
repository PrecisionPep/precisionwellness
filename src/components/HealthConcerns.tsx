import { useEffect, useRef } from 'react';

export function HealthConcerns() {
  const concerns = ['Fatigue', 'Muscle loss', 'Brain fog', 'Weight gain', 'Menopause'];
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    // Calculate the height of one set of concerns
    const firstItem = list.querySelector('li');
    if (!firstItem) return;
    
    const itemHeight = firstItem.offsetHeight;
    const gap = 16; // space-y-4 = 1rem = 16px
    const setHeight = concerns.length * (itemHeight + gap);
    
    // Create enough duplicates for smooth infinite scroll
    let position = 0;
    
    const animate = () => {
      position += 0.5; // Adjust speed here (lower = slower)
      
      // Reset position when we've scrolled one full set
      if (position >= setHeight) {
        position = 0;
      }
      
      list.style.transform = `translateY(-${position}px)`;
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="bg-[#fcfaf8] py-12 md:py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 px-6 md:grid-cols-2">
        <div className="pt-2">
          <h2 className="text-[clamp(2rem,5vw,3rem)] leading-tight font-semibold text-neutral-900 [text-wrap:balance]">
            Most healthcare waits for something to go wrong
          </h2>
          <p className="mt-3 max-w-md text-neutral-600">
            Designed to meet you where you are - this is your health journey, we're just here to support it
          </p>
          <a 
            href="https://www.joinblvd.com/b/smilespawellness/widget#/visit-type" 
            className="mt-4 inline-flex items-center justify-center rounded-full bg-[#87CEEB] px-6 py-3 text-base font-semibold text-black hover:bg-[#79c9f0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#87CEEB]/60"
          >
            Explore treatments
          </a>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20 md:h-24 bg-gradient-to-b from-[#fcfaf8] via-[#fcfaf8] to-transparent"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 md:h-24 bg-gradient-to-t from-[#fcfaf8] via-[#fcfaf8] to-transparent"></div>
          <div className="relative max-h-[400px] md:max-h-[500px] overflow-hidden pr-1 touch-none">
            <ul 
              ref={listRef}
              className="space-y-4 will-change-transform" 
              aria-label="Common concerns list"
              style={{ transition: 'transform 0s linear' }}
            >
              {[...concerns, ...concerns, ...concerns].map((concern, index) => (
                <li 
                  key={`${concern}-${index}`}
                  className="flex items-center rounded-2xl border border-zinc-100 bg-white px-6 py-5 shadow-[0_1px_0_rgba(0,0,0,0.04)]"
                >
                  <span 
                    className="mr-3 inline-flex h-2.5 w-2.5 items-center justify-center rounded-full" 
                    style={{backgroundColor: '#87CEEB', boxShadow: '0 0 0 4px rgba(135,206,235,0.25)'}}
                    aria-hidden="true"
                  ></span>
                  <span className="text-xl font-medium leading-none text-zinc-800">{concern}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

