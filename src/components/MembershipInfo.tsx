export function MembershipInfo() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:gap-12">
        <div className="relative flex items-center justify-center">
          <div className="absolute -z-10 h-72 w-72 rounded-full bg-white/70 blur-2xl" aria-hidden="true"></div>
          <img src="/Join the peptime membership.png" alt="Join the Peptide Membership" className="h-[500px] w-auto object-contain drop-shadow-xl" style={{ imageRendering: 'auto' }} />
          <div className="absolute right-10 top-6 rounded-full bg-[#87CEEB] px-4 py-3 text-center text-sm font-bold text-neutral-900 shadow-lg">
            $249/mo
            <div className="text-xs font-medium">Membership pricing</div>
          </div>
        </div>
        <div>
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-semibold leading-tight tracking-tight text-neutral-900">Precision Wellness Peptide Memberships</h2>
          <div className="mt-2 h-1 w-14 rounded" style={{backgroundColor: '#87CEEB'}} aria-hidden="true"></div>
          <p className="mt-4 max-w-xl text-lg text-neutral-800">
            Instant access to prescription‑strength peptides designed for men and women ready to build strength, reclaim metabolism, and feel alive again — under licensed medical supervision.
          </p>
          <ul className="mt-6 space-y-3 text-neutral-900">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-neutral-900" aria-hidden="true"></span>
              Doctor‑supervised, prescription‑only peptides
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-neutral-900" aria-hidden="true"></span>
              Tailored for men & women — strength, tone, vitality
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-neutral-900" aria-hidden="true"></span>
              Glucose monitor + smart scale included on select plans
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-neutral-900" aria-hidden="true"></span>
              Lab‑tested quality; medical oversight
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-neutral-900" aria-hidden="true"></span>
              Ongoing support from the Precision Wellness team
            </li>
          </ul>
          <div className="mt-6 rounded-2xl border border-black/10 bg-white/80 p-4 text-sm text-neutral-700">
            <div>
              <span className="font-semibold">Members Note:</span> Pricing is subject to change; limited spots available.
            </div>
          </div>
          <div className="mt-6">
            <a href="https://www.joinblvd.com/b/smilespawellness/widget#/visit-type" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 active:scale-[0.98] bg-[#87CEEB] text-neutral-900 hover:bg-[#79c9f0]">
              Visit Make Wellness
            </a>
            <a href="https://www.joinblvd.com/b/smilespawellness/widget#/visit-type" className="mt-4 ml-4 inline-block text-sm font-semibold underline decoration-2 underline-offset-4">
              Or, book a consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

