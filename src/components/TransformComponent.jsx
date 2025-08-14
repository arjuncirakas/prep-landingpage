import React from 'react'
import { BsArrowUpRightCircle } from "react-icons/bs";
import { motion } from "framer-motion";

const TransformComponent = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          
          {/* Main Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-6 sm:mb-8'
          >
            Ready to Transform Urology Care?
          </motion.h2>
          
          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className='text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12'
          >
            Discover how PREP can streamline your workflows, improve patient outcomes, and bring the future of healthcare to your institution.
          </motion.p>

          {/* Action buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          >
            <motion.a 
              href="#demo" 
              className='bg-gradient-to-r from-[#4A9B8E] to-[#3a8276] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center justify-center gap-2 hover:from-[#3a8276] hover:to-[#2d6b5f] hover:shadow-2xl hover:shadow-[#4A9B8E]/30 transition-all duration-300 text-sm sm:text-base font-medium w-full sm:w-auto min-w-[160px] group'
              whileHover={{ 
                scale: 1.05,
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
            >
              Request Demo 
              <motion.div
                whileHover={{ rotate: 45 }}
                transition={{ duration: 0.2 }}
              >
                <BsArrowUpRightCircle className='w-5 h-5'/>
              </motion.div>
            </motion.a>
            
            <motion.a 
              href="#watch" 
              className='border-2 border-[#4A9B8E] text-[#4A9B8E] bg-white px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center justify-center gap-2 hover:bg-[#4A9B8E] hover:text-white transition-all duration-300 text-sm sm:text-base font-medium w-full sm:w-auto min-w-[160px] group'
              whileHover={{ 
                scale: 1.05,
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
            >
              Watch Demo 
              <motion.div
                whileHover={{ rotate: 45 }}
                transition={{ duration: 0.2 }}
              >
                <BsArrowUpRightCircle className='w-5 h-5'/>
              </motion.div>
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default TransformComponent