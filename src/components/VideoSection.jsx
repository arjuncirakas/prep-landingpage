import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { BsPlayCircle, BsPauseCircle, BsVolumeUp, BsVolumeMute } from 'react-icons/bs';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoClick = () => {
    handlePlayPause();
  };

  const handleMouseEnter = () => {
    setShowControls(true);
  };

  const handleMouseLeave = () => {
    if (isPlaying) {
      setShowControls(false);
    }
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-10 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div 
          className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[1.5rem] sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#4A9B8E] mb-4 sm:mb-6 px-2">
            See PREP in Action
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Watch how PREP transforms urology care with intelligent monitoring, real-time collaboration, and seamless patient engagement.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div 
          className="flex justify-center px-2 sm:px-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl">
            {/* Video Player */}
            <div 
              className="relative bg-black rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl lg:shadow-2xl shadow-[#4A9B8E]/20 group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Video Element */}
              <video
                ref={videoRef}
                className="w-full h-auto cursor-pointer"
                onClick={handleVideoClick}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                muted={isMuted}
                poster="/DeWatermark.ai_1755162285088.jpeg"
              >
                <source src="/AI Test Sample Video - PREP.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Overlay Controls */}
              <motion.div
                className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 ${
                  showControls ? 'opacity-100' : 'opacity-0'
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: showControls ? 1 : 0 }}
              >
                {/* Play/Pause Button */}
                <motion.button
                  onClick={handlePlayPause}
                  className="bg-white/90 backdrop-blur-sm rounded-full p-3 sm:p-4 md:p-6 hover:bg-white transition-all duration-300 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isPlaying ? (
                    <BsPauseCircle className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-[#4A9B8E]" />
                  ) : (
                    <BsPlayCircle className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-[#4A9B8E]" />
                  )}
                </motion.button>
              </motion.div>

              {/* Bottom Controls Bar */}
              <motion.div
                className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4 md:p-6 transition-opacity duration-300 ${
                  showControls ? 'opacity-100' : 'opacity-0'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: showControls ? 1 : 0, y: showControls ? 0 : 20 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <motion.button
                      onClick={handlePlayPause}
                      className="text-white hover:text-[#4A9B8E] transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isPlaying ? (
                        <BsPauseCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                      ) : (
                        <BsPlayCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                      )}
                    </motion.button>
                    
                    <motion.button
                      onClick={handleMuteToggle}
                      className="text-white hover:text-[#4A9B8E] transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isMuted ? (
                        <BsVolumeMute className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                      ) : (
                        <BsVolumeUp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                      )}
                    </motion.button>
                  </div>
                  
                  <div className="text-white text-xs sm:text-sm md:text-base font-medium">
                    PREP Platform Demo
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4">
                <div className="bg-[#4A9B8E]/90 backdrop-blur-sm text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full font-medium">
                  LIVE DEMO
                </div>
              </div>
            </div>

            {/* Floating Info Cards - Hidden on mobile, visible on larger screens */}
            <motion.div
              className="hidden sm:block absolute -top-4 -right-4 sm:-right-6 md:-right-8 lg:-right-12 bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 shadow-lg border border-[#4A9B8E]/20"
              initial={{ opacity: 0, x: 30, y: -30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <div className="text-xs sm:text-sm md:text-base font-semibold text-[#4A9B8E]">Real-time</div>
                  <div className="text-xs sm:text-sm text-gray-600">Data Processing</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="hidden sm:block absolute -bottom-4 -left-4 sm:-left-6 md:-left-8 lg:-left-12 bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 shadow-lg border border-[#4A9B8E]/20"
              initial={{ opacity: 0, x: -30, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <div>
                  <div className="text-xs sm:text-sm md:text-base font-semibold text-[#4A9B8E]">AI-Powered</div>
                  <div className="text-xs sm:text-sm text-gray-600">Analytics</div>
                </div>
              </div>
            </motion.div>

            {/* Mobile Info Cards - Visible only on mobile */}
            <div className="sm:hidden mt-4 space-y-3">
              <motion.div
                className="bg-white rounded-lg p-3 shadow-md border border-[#4A9B8E]/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <div className="text-sm font-semibold text-[#4A9B8E]">Real-time</div>
                    <div className="text-xs text-gray-600">Data Processing</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-lg p-3 shadow-md border border-[#4A9B8E]/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <div>
                    <div className="text-sm font-semibold text-[#4A9B8E]">AI-Powered</div>
                    <div className="text-xs text-gray-600">Analytics</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        
      </div>
    </section>
  );
};

export default VideoSection;