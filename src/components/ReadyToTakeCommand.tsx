import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ReadyToTakeCommand() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Ready to take command section */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="mx-auto max-w-3xl text-[clamp(1.75rem,4vw,3rem)] leading-tight text-neutral-900 font-semibold px-4">
            Ready to take command of your health?
          </h2>
        </div>

        {/* Two cards */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-16">
          <div className="group relative overflow-hidden rounded-3xl bg-[#dfeff5] p-6 sm:p-8 md:p-12 text-center">
            <div className="bg-[#dfeff5] rounded-xl inline-block p-3 sm:p-4">
              <img 
                src={`${import.meta.env.BASE_URL}Join the peptime membership.png`}
                alt="Assorted treatment bottles" 
                className="mx-auto h-36 sm:h-48 w-auto object-contain md:h-56 select-none pointer-events-none"
                style={{ imageRendering: 'auto' }}
              />
            </div>
            <h3 className="mt-6 sm:mt-8 text-[clamp(1.25rem,2vw,1.8rem)] font-semibold tracking-tight text-neutral-900">Join the Peptide Membership</h3>
            <p className="mx-auto mt-2 max-w-md text-sm sm:text-base text-neutral-700 px-4">
              Join our doctor‑guided program for prescription‑strength support designed to build strength, improve metabolism, and help you feel your best.
            </p>
            <Link 
              to="/pricing" 
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 active:scale-[0.98] mt-4 sm:mt-6 bg-[#87CEEB] text-neutral-900 hover:bg-[#79c9f0]"
            >
              Join Now
            </Link>
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-24 translate-y-6 bg-gradient-to-t from-black/5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"></div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl bg-neutral-100 p-6 sm:p-8 md:p-12 text-center">
            <img 
              src={`${import.meta.env.BASE_URL}Not sure which membership is best.png`}
              alt="Telehealth consultation on phone" 
              className="mx-auto h-36 sm:h-48 w-auto object-contain md:h-56 select-none pointer-events-none rounded-xl"
              style={{ imageRendering: 'auto' }}
            />
            <h3 className="mt-6 sm:mt-8 text-[clamp(1.25rem,2vw,1.8rem)] font-semibold tracking-tight text-neutral-900">Not sure which membership is best?</h3>
            <p className="mx-auto mt-2 text-xs sm:text-sm text-neutral-700 px-4">
              Book a consultation to get a personalized peptide plan tailored to your goals.
            </p>
            <button className="inline-flex items-center justify-center rounded-full px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 active:scale-[0.98] mt-4 sm:mt-6 bg-[#87CEEB] text-neutral-900 hover:bg-[#79c9f0]">
              Book a Consultation
            </button>
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-24 translate-y-6 bg-gradient-to-t from-black/5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

