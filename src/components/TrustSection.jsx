import React from 'react';
import { motion } from 'framer-motion';

const TrustSection = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#4A9B8E] mb-6">
            Trust and Security by Design
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We built PREP on a foundation of security, compliance, and interoperability to earn your confidence and protect your most valuable asset: patient data.
          </p>
        </motion.div>

        {/* SVG Diagram Container */}
        <motion.div 
          className="flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative w-full max-w-6xl">
            {/* SVG Diagram */}
            <motion.div
              className="w-full h-auto flex justify-center items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <img 
                src="/trustsecurity.svg" 
                alt="Trust and Security by Design - PREP Platform Security Features"
                className="w-[55rem]"
              />
            </motion.div>

            {/* Overlay Animation Effects */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              viewport={{ once: true }}
            >
            </motion.div>
          </div>
        </motion.div>

       

        
      </div>
    </section>
  );
};

export default TrustSection;