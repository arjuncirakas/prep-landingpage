import React, { useState } from 'react'

const ConnectUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <section className="relative py-16 border-b border-black overflow-hidden" style={{
      backgroundImage: `url('/Rectangle 34624183.svg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:20px_20px] pointer-events-none"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left side - Text */}
          <div className="flex-1 lg:max-w-lg">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-4">
              Connect With Us
            </h2>
            <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-6">
              Ready to transform your urology practice? Get in touch with our team of experts.
            </p>
            <div className="flex items-center space-x-4 text-gray-300">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#4A9E9E] rounded-full"></div>
                <span className="text-base sm:text-lg">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#4A9E9E] rounded-full"></div>
                <span className="text-base sm:text-lg">Expert Consultation</span>
              </div>
            </div>
          </div>
          
          {/* Right side - Form */}
          <div className="flex-1 w-full max-w-md">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-white text-[1.5rem] font-medium mb-6">Get Started Today</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-3">
                  <label htmlFor="firstName" className="block text-gray-200 text-base sm:text-[1rem] font-medium">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg text-white text-base sm:text-lg py-3 px-4 focus:outline-none focus:border-[#4A9E9E] focus:ring-2 focus:ring-[#4A9E9E]/20 transition-all duration-300 placeholder-gray-400"
                    placeholder="Enter your first name"
                  />
                </div>
                
                <div className="space-y-3">
                  <label htmlFor="email" className="block text-gray-200 text-base sm:text-[1rem] font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg text-white text-base sm:text-lg py-3 px-4 focus:outline-none focus:border-[#4A9E9E] focus:ring-2 focus:ring-[#4A9E9E]/20 transition-all duration-300 placeholder-gray-400"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="w-full bg-[#4A9E9E] hover:bg-[#3A8E8E] text-white py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 font-medium"
                  >
                    <span className="mr-2">Get Started</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConnectUs