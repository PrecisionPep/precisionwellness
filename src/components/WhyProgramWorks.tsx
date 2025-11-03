export function WhyProgramWorks() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-[clamp(2rem,5vw,3rem)] font-semibold leading-tight tracking-tight text-neutral-900">
          Why this program works
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-neutral-50 p-6 ring-1 ring-black/5">
            <h3 className="text-lg font-semibold text-neutral-900">Metabolic support</h3>
            <p className="mt-2 text-neutral-700">
              Nutrients selected to help improve insulin sensitivity and fat oxidation while keeping energy steady throughout the day.
            </p>
          </div>
          <div className="rounded-3xl bg-neutral-50 p-6 ring-1 ring-black/5">
            <h3 className="text-lg font-semibold text-neutral-900">Appetite control</h3>
            <p className="mt-2 text-neutral-700">
              Gentle actives that help you feel satisfied faster so portions shrink naturally without strict rules.
            </p>
          </div>
          <div className="rounded-3xl bg-neutral-50 p-6 ring-1 ring-black/5">
            <h3 className="text-lg font-semibold text-neutral-900">Consistency built in</h3>
            <p className="mt-2 text-neutral-700">
              A simple once‑daily routine, reminders and progress tracking keep you on course even when life gets busy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

