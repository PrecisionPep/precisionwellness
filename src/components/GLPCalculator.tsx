import { useState } from 'react';

export function GLPCalculator() {
  const [weight, setWeight] = useState(161);

  const calculateLoss = (currentWeight: number) => {
    // 14.9% average weight loss
    return Math.round(currentWeight * 0.149);
  };

  const percentage = ((weight - 100) / (400 - 100)) * 100;

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 sm:px-6 md:grid-cols-2">
        <div className="text-center md:text-left">
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] leading-tight font-semibold tracking-tight text-neutral-900">
            There's a reason why <br className="hidden sm:block" /> everyone is talking about <br className="hidden sm:block" /> GLP-1s. It works.
          </h2>
          <p className="mt-4 max-w-xl mx-auto md:mx-0 text-base sm:text-lg text-neutral-700">
            On average, people on Semaglutide lose <span className="font-semibold">14.9%</span> of their weight in a year<span aria-hidden="true">*</span>.
          </p>
        </div>
        <div className="flex flex-col items-center px-4 sm:px-0">
          <div className="text-base sm:text-lg font-semibold text-blue-900">Your current weight:</div>
          <div className="mt-2 rounded-full bg-blue-900 px-5 sm:px-6 py-2.5 sm:py-3 text-xl sm:text-2xl font-semibold text-white shadow-md">
            {weight}
          </div>
          <div className="relative mt-6 w-full max-w-xl">
            <div
              className="absolute left-0 right-0 top-1/2 -translate-y-1/2 rounded-full bg-blue-100"
              style={{ height: '6px' }}
              aria-hidden="true"
            ></div>
            <div
              className="absolute top-1/2 -translate-y-1/2 h-12 w-12 sm:h-14 sm:w-14 -translate-x-1/2 rounded-full bg-blue-900 shadow-md"
              style={{ left: `calc(${percentage}%)` }}
              aria-hidden="true"
            ></div>
            <input
              type="range"
              min="100"
              max="400"
              className="relative z-10 h-10 w-full cursor-pointer appearance-none bg-transparent"
              aria-label="Weight in pounds"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
            />
          </div>
          <div className="mt-6 sm:mt-8 w-full max-w-xl rounded-[2.5rem] bg-blue-100 px-6 sm:px-8 py-5 sm:py-6 text-blue-900">
            <div className="text-center text-lg sm:text-xl font-semibold">You could easily lose:</div>
            <div className="mt-2 text-center text-3xl sm:text-4xl md:text-[48px] font-extrabold" aria-live="polite">
              {calculateLoss(weight)} <span className="text-2xl sm:text-3xl font-semibold">lbs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
