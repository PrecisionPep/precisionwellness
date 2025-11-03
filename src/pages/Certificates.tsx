export function Certificates() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Certificates & Credentials
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence and compliance
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-12 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Medical Licenses</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            All of our clinicians are licensed medical professionals with active certifications in their respective states.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our medical director and nurse practitioners maintain current licenses and are held to the highest standards of care.
          </p>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-12 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Pharmacy Certifications</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            All medications are sourced from licensed, certified compounding pharmacies that meet strict quality standards.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Every batch is tested for purity, potency, and sterility before delivery to our members.
          </p>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Compliance & Safety</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We operate in full compliance with FDA regulations and state medical board requirements.
          </p>
          <p className="text-gray-700 leading-relaxed">
            All telehealth consultations are conducted through HIPAA-compliant platforms, ensuring your privacy and data security.
          </p>
        </div>
      </div>
    </div>
  );
}

