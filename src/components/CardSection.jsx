import React from 'react'
import { motion } from 'framer-motion'

const CardSection = () => {
  const cards = [
    {
      icon: '/tick-icon.svg',
      title: 'Enhanced Efficiency',
      description: 'Automate manual tasks and streamline patient pathways.'
    },
    {
      icon: '/group-icon.svg',
      title: 'Seamless Coordination',
      description: 'Unify care teams on a single, real-time platform.'
    },
    {
      icon: '/hand-icon.svg',
      title: 'Improved Outcomes',
      description: 'Leverage data to make proactive, informed decisions.'
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

  // Simple slide up animation
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
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {cards.map((card, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="bg-gray-100 rounded-lg p-6 sm:p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <img 
                  src={card.icon} 
                  alt={card.title}
                  className="w-12 h-12 text-teal-700"
                />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-teal-700 mb-3">
                {card.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg text-center mx-auto max-w-xs">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CardSection
