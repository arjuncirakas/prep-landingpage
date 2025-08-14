import React from 'react'
import { motion } from "framer-motion";
import { BsArrowUpRightCircle } from "react-icons/bs";

const Footer = () => {
  // Navigation items matching the navbar
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Solution", href: "#solution" },
    { name: "Platform", href: "#platform" },
    { name: "Demo", href: "#demo" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-black text-white py-12 px-4 sm:px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-12">
          {/* Left Side - Logo and Tagline */}
          <div className="flex-shrink-0 max-w-md">
            <motion.div 
              className="mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src="/footer logo.svg" 
                alt="PREP Footer Logo" 
                className="h-10 w-auto"
              />
            </motion.div>
            <p className="text-white/70 text-lg leading-relaxed">
              Revolutionizing patient care through intelligent follow-up management and preventive healthcare solutions
            </p>
          </div>

          {/* Right Side - Navigation Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-4">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-white/90 hover:text-[#4A9B8E] transition-colors duration-300 cursor-pointer text-lg font-medium group flex items-center gap-1"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                {item.name}
                <BsArrowUpRightCircle className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="pt-8 border-t border-white/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            {/* Legal Links */}
            <div className="flex items-center gap-8">
              <motion.a
                href="#privacy"
                className="text-white/60 hover:text-white/90 transition-colors duration-300 cursor-pointer"
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#terms"
                className="text-white/60 hover:text-white/90 transition-colors duration-300 cursor-pointer"
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2 }}
              >
                Terms of Service
              </motion.a>
            </div>
            
            {/* Copyright */}
            <p className="text-white/50 text-sm">
              © 2025 PREP. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
