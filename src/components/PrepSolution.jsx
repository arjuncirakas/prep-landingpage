import React from 'react'
import { motion } from 'framer-motion'

const PrepSolution = () => {
  const pillars = [
    {
      svg: '/Patient Tracking.svg',
      title: 'Patient Tracking'
    },
    {
      svg: '/care coordination.svg',
      title: 'Care Coordination'
    },
    {
      svg: '/treatment pathways.svg',
      title: 'Treatment Pathways'
    }
  ]

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  // Card animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#4A9B8E] mb-3 sm:mb-4 animate-slide-up">
          What Ideal Urology Care Should Look Like
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto">
          A truly effective urology care model integrates prevention, early diagnosis, seamless coordination between providers, and patient-centered support
          </p>
        </motion.div>

        {/* Three Pillars Flex - Using SVGs as cards */}
        <motion.div 
          className="flex flex-col lg:flex-row justify-center items-center gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {pillars.map((pillar, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="flex justify-center"
            >
              <img 
                src={pillar.svg} 
                alt={pillar.title}
                className="w-[20rem]"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default PrepSolution