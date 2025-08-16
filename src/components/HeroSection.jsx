import React from 'react'
import { BsArrowUpRightCircle } from "react-icons/bs";
import { motion } from "framer-motion";
import Navbar from './Navbar';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: 'url(/bg-image.png)' }}>
      
      {/* Background Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>
      
      {/* Navbar - Scrolls with content */}
      <div className="relative z-10 pt-2 sm:pt-4">
        <Navbar />
      </div>
      
      {/* Content container */}
      <div className="relative z-5 flex items-center justify-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center w-full py-8 sm:py-12 md:py-16 lg:py-20">
            
            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className='text-[4.5rem] text-white font-semibold leading-tight mb-4 sm:mb-6 md:mb-8 lg:mb-10 px-2'
            >
              Transforming Urology Care,{" "}
              <span className="block sm:inline">
                Together.
              </span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className='text-white/90 text-[1.5rem] leading-none max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto font-light mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4'
            >
              PREP is the groundbreaking Patient Referral and Engagement Platform designed to unify care pathways, enhance collaboration, and deliver superior patient outcomes.
            </motion.p>

            {/* Action buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col xs:flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center mb-8 sm:mb-12 lg:mb-16 px-4"
            >
              <motion.a 
                href="#demo" 
                className='bg-gradient-to-r from-[#4A9B8E] to-[#3a8276] text-white px-4 sm:px-5 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-full flex items-center justify-between hover:from-[#3a8276] hover:to-[#2d6b5f] hover:shadow-2xl hover:shadow-[#4A9B8E]/30 transition-all duration-300 text-sm sm:text-base md:text-lg font-medium w-full xs:w-64 sm:w-56 md:w-60 lg:w-64 max-w-xs group'
                whileHover={{ 
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Request Demo</span>
                <motion.div
                  whileHover={{ rotate: 45 }}
                  transition={{ duration: 0.2 }}
                >
                  <BsArrowUpRightCircle className='w-4 h-4 sm:w-5 sm:h-5'/>
                </motion.div>
              </motion.a>
              
              <motion.a 
                href="#watch" 
                className='border-2 border-white/80 text-white px-4 sm:px-5 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-full flex items-center justify-between hover:bg-white hover:text-gray-900 hover:border-white transition-all duration-300 text-sm sm:text-base md:text-lg font-medium w-full xs:w-64 sm:w-56 md:w-60 lg:w-64 max-w-xs backdrop-blur-sm group'
                whileHover={{ 
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Watch Demo</span>
                <motion.div
                  whileHover={{ rotate: 45 }}
                  transition={{ duration: 0.2 }}
                >
                  <BsArrowUpRightCircle className='w-4 h-4 sm:w-5 sm:h-5'/>
                </motion.div>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
