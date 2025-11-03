import { Check } from 'lucide-react';

const memberships = [
  {
    name: 'Performance',
    subtitle: 'Muscle Strengthening & Recovery',
    description: 'Boost performance and enhance recovery with annual nurse consults, monthly recovery meds, body composition tracking, and personalized training plans.',
    price: 249,
    popular: false,
    features: [
      'Annual nurse practitioner consultations',
      'Monthly recovery medications',
      'Regular body scans & composition tracking',
      'Personalized training plans'
    ]
  },
  {
    name: 'Transformation',
    subtitle: 'Weight Loss Package',
    description: 'Metabolic reset with GLP‑1, body scans, 2‑week Lingo CGM, and personalized training & food plans — guided by our nurse practitioners.',
    price: 399,
    popular: true,
    features: [
      'Annual nurse practitioner consultations',
      'Monthly GLP‑1 medications',
      'Regular body composition scans',
      '2‑week Lingo CGM monitoring',
      'Personalized training & nutrition plans'
    ]
  },
  {
    name: 'Wellness',
    subtitle: 'Package',
    description: 'Rebuild, repair, and revitalize with bi‑annual nurse visits, monthly peptide medications, training & food plans, and regular body scans.',
    price: 299,
    popular: false,
    features: [
      'Bi‑annual nurse visits',
      'Monthly peptide medications',
      'Personalized training & food plan',
      'Regular body scans & tracking'
    ]
  }
];

export function MembershipCards() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-semibold leading-tight tracking-tight text-neutral-900 mb-4">
            Unlock your brand's potential
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Get started for free and watch your business grow. Need enterprise-level procurement support? We've got you covered!
          </p>
        </div>


        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {memberships.map((membership) => (
            <div
              key={membership.name}
              className={`relative rounded-2xl p-8 ${
                membership.popular
                  ? 'bg-gray-900 text-white shadow-2xl'
                  : 'bg-gray-50 text-gray-900 shadow-lg border border-gray-200'
              } transition-all hover:scale-105 hover:shadow-2xl`}
            >
              {membership.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-700 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-3">{membership.name}</h3>
                <p className={`text-lg mb-4 ${membership.popular ? 'text-gray-300' : 'text-gray-700'}`}>
                  {membership.subtitle}
                </p>
                <p className={`text-base mb-6 leading-relaxed ${membership.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                  {membership.description}
                </p>
              </div>

              <div className="mb-6">
                <span className="text-5xl font-bold">${membership.price}/mo</span>
                <p className={`text-base mt-2 ${membership.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                  billed monthly
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {membership.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check
                      size={24}
                      className={`flex-shrink-0 mt-0.5 ${
                        membership.popular ? 'text-white' : 'text-gray-900'
                      }`}
                    />
                    <span className="text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-lg font-semibold transition-all ${
                  membership.popular
                    ? 'bg-white text-gray-900 hover:bg-gray-100'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                {membership.name === 'Performance' && 'Start Membership'}
                {membership.name === 'Transformation' && 'Start Transformation'}
                {membership.name === 'Wellness' && 'Start Wellness'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
