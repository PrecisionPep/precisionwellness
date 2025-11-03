import { useState } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'What are peptides?',
    answer: 'Peptides are small proteins that help your body communicate, repair, and regulate itself.'
  },
  {
    question: 'How do they work?',
    answer: 'Certain peptides encourage your body to naturally produce growth hormone — supporting fat metabolism, recovery, and lean mass.'
  },
  {
    question: 'Are peptides safe?',
    answer: 'Our peptides are prescription-grade, lab-tested, and administered under licensed medical supervision for your safety.'
  },
  {
    question: 'How long until I see results?',
    answer: 'Most members notice improvements in energy and recovery within 2-4 weeks, with significant body composition changes in 8-12 weeks.'
  },
  {
    question: 'Do I need a prescription?',
    answer: 'Yes. All our peptides are prescription-only and require a consultation with our licensed clinicians.'
  },
  {
    question: 'What if I want to cancel?',
    answer: 'Cancel anytime with no penalties. Your 30-day money-back guarantee protects your initial membership investment.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 sm:py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-neutral-900 text-center mb-8 sm:mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden transition-all hover:border-gray-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-base sm:text-lg font-semibold text-neutral-900 pr-3 sm:pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-neutral-600 transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-4 sm:px-6 pb-3 sm:pb-4">
                  <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center px-4">
          <p className="text-sm sm:text-base text-neutral-600 mb-4">
            Want to learn more about peptides?
          </p>
          <Link 
            to="/peptides"
            className="inline-flex items-center text-[#87CEEB] font-semibold hover:text-[#79c9f0] transition-colors text-sm sm:text-base"
          >
            Read Our Complete Guide
            <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

