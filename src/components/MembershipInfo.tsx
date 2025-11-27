export function MembershipInfo() {
  return (
    <section className="bg-gray-100 py-12 sm:py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 sm:gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-12">
        <div className="relative flex items-center justify-center">
          <div className="absolute -z-10 h-48 w-48 sm:h-72 sm:w-72 rounded-full bg-white/70 blur-2xl" aria-hidden="true"></div>
          <img src="/Join the peptime membership.png" alt="Join the Peptide Membership" className="h-[300px] sm:h-[400px] md:h-[500px] w-auto object-contain drop-shadow-xl" style={{ imageRendering: 'auto' }} />
          <div className="absolute right-4 sm:right-10 top-4 sm:top-6 rounded-full bg-[#87CEEB] px-3 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm font-bold text-neutral-900 shadow-lg">
            $249/mo
            <div className="text-[10px] sm:text-xs font-medium">Membership pricing</div>
          </div>
        </div>
        <div className="px-2 sm:px-0">
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-neutral-900">Precision Wellness Peptide Memberships</h2>
          <div className="mt-2 h-1 w-14 rounded" style={{backgroundColor: '#87CEEB'}} aria-hidden="true"></div>
          <p className="mt-4 max-w-xl text-base sm:text-lg text-neutral-800">
            Instant access to prescription‑strength peptides designed for men and women ready to build strength, reclaim metabolism, and feel alive again — under licensed medical supervision.
          </p>
          <ul className="mt-6 space-y-2 sm:space-y-3 text-sm sm:text-base text-neutral-900">
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="mt-1.5 sm:mt-1 h-2 w-2 rounded-full bg-neutral-900 flex-shrink-0" aria-hidden="true"></span>
              <span>Doctor‑supervised, prescription‑only peptides</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="mt-1.5 sm:mt-1 h-2 w-2 rounded-full bg-neutral-900 flex-shrink-0" aria-hidden="true"></span>
              <span>Tailored for men & women — strength, tone, vitality</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="mt-1.5 sm:mt-1 h-2 w-2 rounded-full bg-neutral-900 flex-shrink-0" aria-hidden="true"></span>
              <span>Glucose monitor + smart scale included on select plans</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="mt-1.5 sm:mt-1 h-2 w-2 rounded-full bg-neutral-900 flex-shrink-0" aria-hidden="true"></span>
              <span>Lab‑tested quality; medical oversight</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="mt-1.5 sm:mt-1 h-2 w-2 rounded-full bg-neutral-900 flex-shrink-0" aria-hidden="true"></span>
              <span>Ongoing support from the Precision Wellness team</span>
            </li>
          </ul>
          <div className="mt-6 rounded-2xl border border-black/10 bg-white/80 p-3 sm:p-4 text-xs sm:text-sm text-neutral-700">
            <div>
              <span className="font-semibold">Members Note:</span> Pricing is subject to change; limited spots available.
            </div>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0">
            <a href="https://blvd.app/66ea81b2-251f-42e2-8545-38200e8f97e7/login" className="inline-flex items-center justify-center rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 active:scale-[0.98] bg-[#87CEEB] text-neutral-900 hover:bg-[#79c9f0]">
              Visit Make Wellness
            </a>
            <a href="https://blvd.app/66ea81b2-251f-42e2-8545-38200e8f97e7/login" className="sm:mt-4 sm:ml-4 inline-block text-xs sm:text-sm font-semibold underline decoration-2 underline-offset-4 text-center sm:text-left">
              Or, book a consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

