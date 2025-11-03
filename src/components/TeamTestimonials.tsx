export function TeamTestimonials() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-neutral-900">
          Recommended by top performers and nutrition <span className="accent-serif italic">experts</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-neutral-600">
          No. 1 choice for the world's top health, nutrition and human performance experts
        </p>
        <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 justify-items-center">
          <figure className="overflow-hidden rounded-3xl bg-white ring-1 ring-neutral-200 w-full max-w-sm">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src="/ray.png"
                alt="Ray Mills"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 25%', imageRendering: 'auto' }}
                loading="lazy"
              />
            </div>
            <blockquote className="px-4 sm:px-6 pb-4 pt-4 sm:pt-5 text-sm sm:text-base text-neutral-800">
              "What you put into your body really matters. Our goal is simple: sustainable, science‑backed wellness that fits real life."
            </blockquote>
            <figcaption className="flex items-start gap-2 px-4 sm:px-6 pb-4 sm:pb-6">
              <div>
                <div className="flex items-center gap-2 text-sm sm:text-base font-semibold text-neutral-900">
                  Ray Mills
                  <span aria-hidden="true" className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-400 flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 1a2 2 0 0 1 4 0c.3.37.8.56 1.28.43A2 2 0 0 1 14.53 3.17c.03.55.36 1.07.86 1.27A2 2 0 0 1 16.73 7.8c-.3.47-.3 1.06 0 1.53a2 2 0 0 1-1.34 3l-.2 3.05A2 2 0 0 1 12.07 16.3c-.48.13-.98-.06-1.27-.43A2 2 0 0 1 7 17a2 2 0 0 1-3.03-1.47c-.03-.55-.36-1.07-.86-1.27A2 2 0 0 1 .31 9.92c.3-.47.3-1.06 0-1.53A2 2 0 0 1 1.26 4.9c.5-.2.83-.72.86-1.27A2 2 0 0 1 4.97 1.38C5.45 1.5 5.95 1.32 6.23.92Z"
                        fill="#00C8FD"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.88 6.68c.28.3.26.78-.06 1.06L8.38 11.9c-.3.28-.76.28-1.04 0L4.66 9.21a.75.75 0 1 1 1.06-1.06l1.16 1.16 3.93-3.67a.75.75 0 0 1 1.06.04Z"
                        fill="#fff"
                      ></path>
                    </svg>
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600">Medical Director, Precision Wellness</p>
              </div>
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-3xl bg-white ring-1 ring-neutral-200 w-full max-w-sm">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src="/jude.png"
                alt="Jude Marino"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 5%', imageRendering: 'auto' }}
                loading="lazy"
              />
            </div>
            <blockquote className="px-4 sm:px-6 pb-4 pt-4 sm:pt-5 text-sm sm:text-base text-neutral-800">
              "Consistency wins. Small, daily choices add up to big changes in how you look, feel, and perform."
            </blockquote>
            <figcaption className="flex items-start gap-2 px-4 sm:px-6 pb-4 sm:pb-6">
              <div>
                <div className="flex items-center gap-2 text-sm sm:text-base font-semibold text-neutral-900">
                  Jude Marino
                  <span aria-hidden="true" className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-400 flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 1a2 2 0 0 1 4 0c.3.37.8.56 1.28.43A2 2 0 0 1 14.53 3.17c.03.55.36 1.07.86 1.27A2 2 0 0 1 16.73 7.8c-.3.47-.3 1.06 0 1.53a2 2 0 0 1-1.34 3l-.2 3.05A2 2 0 0 1 12.07 16.3c-.48.13-.98-.06-1.27-.43A2 2 0 0 1 7 17a2 2 0 0 1-3.03-1.47c-.03-.55-.36-1.07-.86-1.27A2 2 0 0 1 .31 9.92c.3-.47.3-1.06 0-1.53A2 2 0 0 1 1.26 4.9c.5-.2.83-.72.86-1.27A2 2 0 0 1 4.97 1.38C5.45 1.5 5.95 1.32 6.23.92Z"
                        fill="#00C8FD"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.88 6.68c.28.3.26.78-.06 1.06L8.38 11.9c-.3.28-.76.28-1.04 0L4.66 9.21a.75.75 0 1 1 1.06-1.06l1.16 1.16 3.93-3.67a.75.75 0 0 1 1.06.04Z"
                        fill="#fff"
                      ></path>
                    </svg>
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600">Performance Coach</p>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

