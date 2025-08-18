import React from 'react'
import { motion } from 'framer-motion'

const Importance = () => {
  const importanceItems = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 9v3a3 3 0 006 0V9m-3 9v-3m0 0a3 3 0 01-3-3V8a3 3 0 016 0v1" />
        </svg>
      ),
      title: 'Early Detection Saves Lives',
      description: 'Many serious conditions, including prostate and kidney diseases, can be caught early through proper urological care.',
      color: '#4a90e2'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
        </svg>
      ),
      title: 'Quality of Life',
      description: 'Bladder and urinary conditions affect daily comfort, sleep, and confidence—timely care restores normalcy.',
      color: '#56c596'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v.01M17.657 16.657A8 8 0 014.343 5.343m13.314 11.314A8 8 0 175.343 4.343" />
        </svg>
      ),
      title: 'Preventing Complications',
      description: 'Ignoring recurrent symptoms can lead to chronic issues, invasive procedures, and costly hospitalizations.',
      color: '#4696e2'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
          <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
        </svg>
      ),
      title: 'Supporting Healthy Aging',
      description: 'As people live longer, maintaining urological health is key to independence and dignity.',
      color: '#71b280'
    }
  ]

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  // Card animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-10 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#4A9B8E] mb-3 sm:mb-4">
            The Importance of Urology Care
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
            Urological health impacts not only comfort, but also early disease detection, long-term wellbeing, and overall quality of life. Ignoring it can have serious consequences.
          </p>
        </motion.div>

        {/* Cards Grid */}

<div className="img-sec w-full flex justify-center items-center">
<img src="/importance.svg" className='w-[90%] sm:w-[60%]' alt="" />
</div>


        {/* <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {importanceItems.map((item, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="bg-gray-100 rounded-lg p-6 sm:p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <div style={{ color: item.color }}>
                  {item.icon}
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#4A9B8E] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-base text-center">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  )
}

export default Importance
