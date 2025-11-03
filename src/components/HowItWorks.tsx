import { useState, useEffect } from 'react';
import { Target, FileText, Repeat, TrendingUp, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const steps = [
  {
    icon: Target,
    title: 'Identify Your Goals',
    description: 'Start with a personalized consultation to understand your unique health objectives and determine the best peptide approach for you.'
  },
  {
    icon: FileText,
    title: 'Select Your Formula',
    description: 'Choose from our curated selection of physician-supervised peptide protocols tailored to your specific wellness goals.'
  },
  {
    icon: Repeat,
    title: 'Stay Consistent',
    description: 'Receive ongoing support and adjustments from our medical team to ensure optimal results through your wellness journey.'
  },
  {
    icon: TrendingUp,
    title: 'Track Your Results',
    description: 'Monitor your progress with regular check-ins, body composition analysis, and data-driven insights for continuous improvement.'
  }
];

export function HowItWorks() {
  const [currentStep, setCurrentStep] = useState(0);

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const goToStep = (index: number) => {
    setCurrentStep(index);
  };

  const Icon = steps[currentStep].icon;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold text-neutral-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Your personalized journey to optimal wellness, simplified
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Card */}
            <div className="bg-gradient-to-br from-neutral-50 to-white rounded-3xl shadow-xl p-12 min-h-[400px] flex flex-col items-center justify-center text-center relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#87CEEB]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#87CEEB]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

              {/* Content */}
              <div className="relative z-10 w-full">
                {/* Step Number Badge */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#87CEEB] text-white font-bold text-2xl mb-6 shadow-lg">
                  {currentStep + 1}
                </div>

                {/* Icon */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white border-4 border-[#87CEEB]/20 flex items-center justify-center shadow-lg">
                  <Icon className="w-10 h-10 text-[#87CEEB]" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                  {steps[currentStep].title}
                </h3>

                {/* Description */}
                <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                  {steps[currentStep].description}
                </p>

                {/* Navigation Buttons */}
                <button
                  onClick={prevStep}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all border border-gray-100 hover:border-[#87CEEB] group z-20"
                  aria-label="Previous step"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-[#87CEEB]" />
                </button>
                <button
                  onClick={nextStep}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all border border-gray-100 hover:border-[#87CEEB] group z-20"
                  aria-label="Next step"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-[#87CEEB]" />
                </button>
              </div>
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center items-center gap-3 mt-8">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToStep(index)}
                  className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentStep
                      ? 'bg-[#87CEEB] w-12'
                      : 'bg-gray-300 hover:bg-[#87CEEB]/50'
                  }`}
                  aria-label={`Go to step ${index + 1}`}
                >
                  {index === currentStep && (
                    <span className="absolute inset-0 rounded-full bg-[#87CEEB] animate-ping opacity-75"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Step Indicators Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {steps.map((step, index) => {
                const StepIcon = step.icon;
                return (
                  <button
                    key={index}
                    onClick={() => goToStep(index)}
                    className={`text-center p-4 rounded-xl transition-all duration-300 ${
                      index === currentStep
                        ? 'bg-[#87CEEB]/10 border-2 border-[#87CEEB]'
                        : 'bg-white border-2 border-transparent hover:border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex justify-center mb-2">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                          index === currentStep
                            ? 'bg-[#87CEEB] text-white'
                            : 'bg-gray-100 text-gray-400'
                        }`}
                      >
                        <StepIcon className="w-5 h-5" strokeWidth={2} />
                      </div>
                    </div>
                    <span className={`text-xs font-semibold block ${
                      index === currentStep ? 'text-[#87CEEB]' : 'text-gray-600'
                    }`}>
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
