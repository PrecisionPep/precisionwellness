import { useState } from 'react';

const conditions = ['Fatigue', 'Muscle loss', 'Brain fog', 'Weight gain', 'Menopause'];

const solutions = [
  {
    category: 'Weight Management',
    description: 'Targeted peptide therapies to support healthy weight management and metabolic function.'
  },
  {
    category: 'Fitness & Performance',
    description: 'Enhance recovery, build strength, and optimize performance with evidence-based peptides.'
  },
  {
    category: 'Tissue Repair & Recovery',
    description: 'Accelerate healing and reduce recovery time with specialized regenerative peptides.'
  },
  {
    category: 'Oral Peptides',
    description: 'Convenient oral formulations for systemic health and longevity support.'
  },
  {
    category: 'Organ/System Support',
    description: 'Targeted support for specific organ systems and overall physiological optimization.'
  },
  {
    category: 'Health & Anti-Aging',
    description: 'Comprehensive anti-aging protocols designed to support longevity and vitality.'
  }
];

export function WellnessSolutions() {
  const [selectedCondition, setSelectedCondition] = useState<string | null>(null);

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">
            Most healthcare waits for something to go wrong
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-8">
            Designed to meet you where you are - this is your health journey, we're just here to support it
          </p>
          <div className="text-center mb-12">
            <button className="text-gray-700 hover:text-gray-900 font-semibold">
              Explore treatments
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {conditions.map((condition) => (
            <button
              key={condition}
              onClick={() => setSelectedCondition(selectedCondition === condition ? null : condition)}
              className={`px-6 py-3 rounded-full transition-all ${
                selectedCondition === condition
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {condition}
            </button>
          ))}
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Wellness Solutions</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="text-center p-6"
              >
                <h4 className="text-lg font-semibold text-gray-900">{solution.category}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
