import React from 'react'

const CertificateSection = () => {
  const certificates = [
    {
      title: "HIPAA Compliant",
      description: "Ensures patient data protection and privacy compliance"
    },
    {
      title: "GDPR Ready", 
      description: "Meets European data protection and privacy standards"
    },
    {
      title: "SOC 2 Certified",
      description: "Validates security, availability, and processing integrity"
    }
  ]

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-teal-800 to-teal-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Security & Compliance
          </h2>
          <p className="text-teal-200 text-lg max-w-2xl mx-auto">
            Your data security is our top priority. We maintain the highest standards 
            of compliance and protection for healthcare information.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center mb-4">
                <img 
                  src="/defender.svg" 
                  alt="Security Shield" 
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-teal-200 text-sm">
            All certifications are regularly audited and maintained to ensure ongoing compliance
          </p>
        </div>
      </div>
    </section>
  )
}

export default CertificateSection