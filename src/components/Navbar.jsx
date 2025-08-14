import React, { useState, useEffect } from 'react'
import { BsArrowUpRightCircle } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Solution", href: "#solution" },
    { name: "Platform", href: "#platform" },
    { name: "Demo", href: "#demo" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`relative mx-auto w-[98vw] sm:w-[95vw] transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-lg border border-gray-100/20' 
            : 'bg-white/80 backdrop-blur-sm shadow-sm'
        } rounded-[3rem] sm:rounded-[5rem]`}
      >
        <div className='px-4 sm:px-6 lg:px-10'>
          <div className='flex justify-between items-center h-12 sm:h-14 lg:h-20'>
            
            {/* Logo */}
            <motion.div 
              className="flex-shrink-0 z-50"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src="/prep-urology-logo 1.png" 
                alt="PrepUrology" 
                className="h-8 w-auto"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 text-gray-700 hover:text-[#4A9B8E] transition-colors duration-300 font-medium text-sm xl:text-base group"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-[#4A9B8E] to-[#0E2124] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </motion.a>
              ))}
              
              {/* Request Demo Button */}
              <motion.a 
                href="#demo" 
                className='bg-gradient-to-r from-[#4A9B8E] to-[#0E2124] text-white px-4 py-2 rounded-full flex items-center gap-2 hover:shadow-lg hover:shadow-[#4A9B8E]/25 transition-all duration-300 font-medium text-sm xl:text-base ml-4'
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(74, 155, 142, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Request Demo 
                <BsArrowUpRightCircle className='w-4 h-4'/>
              </motion.a>
            </div>

            {/* Modern Mobile menu button */}
            <motion.button
              onClick={toggleMenu}
              className="lg:hidden relative z-120 w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200/50 flex items-center justify-center focus:outline-none shadow-sm hover:shadow-md transition-all duration-300"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-4 h-4 flex flex-col items-center justify-center relative">
                <motion.div
                  className="w-4 h-0.5 bg-gray-600 rounded-full absolute"
                  animate={{
                    rotate: isMenuOpen ? 45 : 0,
                    y: isMenuOpen ? 0 : -4,
                    opacity: isMenuOpen ? 1 : 1
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <motion.div
                  className="w-4 h-0.5 bg-gray-600 rounded-full absolute"
                  animate={{
                    opacity: isMenuOpen ? 0 : 1,
                    scale: isMenuOpen ? 0 : 1
                  }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                />
                <motion.div
                  className="w-4 h-0.5 bg-gray-600 rounded-full absolute"
                  animate={{
                    rotate: isMenuOpen ? -45 : 0,
                    y: isMenuOpen ? 0 : 4,
                    opacity: isMenuOpen ? 1 : 1
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation - Slides from Top */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={toggleMenu}
            />

            {/* Mobile Menu - Top Slide */}
            <motion.div
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 200,
                opacity: { duration: 0.2 }
              }}
              className="fixed top-0 left-0 right-0 bg-white z-50 lg:hidden shadow-2xl rounded-b-2xl sm:rounded-b-3xl border-b border-gray-100"
            >
              {/* Close Button */}
              <motion.button
                onClick={toggleMenu}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center focus:outline-none transition-all duration-300 shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
              >
                <IoClose className="w-4 h-4 text-gray-600" />
              </motion.button>
              
              <div className="px-4 sm:px-6 pt-20 sm:pt-24 pb-6 sm:pb-8">
                {/* Navigation Links */}
                <div className="space-y-1">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="block py-3 sm:py-4 px-4 sm:px-6 text-gray-700 hover:text-[#4A9B8E] hover:bg-gray-50 rounded-xl sm:rounded-2xl transition-all duration-300 font-medium text-base sm:text-lg group"
                      onClick={toggleMenu}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.1 }}
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex items-center justify-between">
                        {item.name}
                        <motion.div
                          initial={{ rotate: 0 }}
                          whileHover={{ rotate: 45 }}
                          transition={{ duration: 0.2 }}
                        >
                          <BsArrowUpRightCircle className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Mobile Demo Button */}
                <motion.a 
                  href="#demo" 
                  className='bg-gradient-to-r from-[#4A9B8E] to-[#0E2124] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl flex items-center justify-center gap-2 sm:gap-3 hover:shadow-lg hover:shadow-[#4A9B8E]/25 transition-all duration-300 font-medium text-base sm:text-lg mt-6 sm:mt-8 w-full'
                  onClick={toggleMenu}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Request Demo 
                  <BsArrowUpRightCircle className='w-4 h-4'/>
                </motion.a>

                {/* Decorative Element */}
                <motion.div
                  className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <p className="text-xs sm:text-sm text-gray-500 text-center">
                    © 2024 PrepUrology. All rights reserved.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
