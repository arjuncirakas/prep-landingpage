import React, { useState, useEffect, useRef } from 'react';

const Timelinesec = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const timelineRef = useRef(null);

  const timelineItems = [
    {
      id: 1,
      title: "Delayed Referrals",
      description: "Long waits for specialist appointments delay diagnosis and treatment for patients.",
      icon: "/Delivery Time.svg",
      side: "left"
    },
    {
      id: 2,
      title: "Fragmented Data",
      description: "Disjointed patient data across systems creates incomplete medical histories for providers.",
      icon: "/Document.svg",
      side: "right"
    },
    {
      id: 3,
      title: "Poor Patient Engagement",
      description: "When doctors don't communicate well or have enough resources, patients get confused.",
      icon: "/Profile.svg",
      side: "left"
    },
    {
      id: 4,
      title: "Suboptimal Outcomes",
      description: "Poor patient care leads to more health problems.",
      icon: "/Error.svg",
      side: "right"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = parseInt(entry.target.dataset.itemId);
            setVisibleItems(prev => [...new Set([...prev, itemId])]);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => observer.observe(item));

    return () => {
      timelineItems.forEach(item => observer.unobserve(item));
    };
  }, []);

  return (
    <div className="w-[90%] sm:w-[75%] mx-auto bg-white mt-10 sm:mt-20" ref={timelineRef}>
      {/* Title Section with animation */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#4A9B8E] mb-3 sm:mb-4 animate-slide-up">
          The Fragmentation in Urology Care
        </h1>
        <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 animate-slide-up-delay">
          Navigating the current healthcare landscape presents significant challenges for patients and providers alike. PREP is designed to solve these universal problems.
        </p>
      </div>

      <div className="relative">
        {/* Central timeline line with animation */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-800 h-full animate-timeline-grow"></div>
        
        {timelineItems.map((item, index) => (
          <div 
            key={item.id} 
            className={`timeline-item relative mb-10 transition-all duration-1000 ease-out ${
              visibleItems.includes(item.id) 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-8'
            }`}
            data-item-id={item.id}
            style={{
              transitionDelay: `${index * 200}ms`
            }}
          >
            {/* Content card */}
            <div className={`
              w-full md:w-5/12 lg:w-5/12 xl:w-5/12
              ${item.side === 'left' 
                ? 'md:mr-auto md:pr-12 lg:pr-12 xl:pr-12' 
                : 'md:ml-auto md:pl-12 lg:pl-12 xl:pl-12'
              }
            `}>
              <div className="bg-white rounded-lg shadow-md border border-gray-900 p-4 sm:p-6 relative">
                {/* SVG Connector with animation */}
                <div className={`hidden md:block absolute top-6 z-10 transition-all duration-500 ease-out ${
                  item.side === 'left' 
                    ? 'right-0 transform translate-x-full' 
                    : 'left-0 transform -translate-x-full'
                } ${visibleItems.includes(item.id) ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                  <img 
                    src="/timeline-connector.svg" 
                    alt="timeline connector"
                    className={`h-6 lg:h-8 xl:h-8 ${
                      item.side === 'left' 
                        ? '' 
                        : 'transform scale-x-[-1]'
                    }`}
                  />
                </div>
                
                {/* Header with icon and title */}
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-teal-500 to-gray-900 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-sm">
                    <img 
                      src={item.icon} 
                      alt={item.title}
                      className="w-4 h-4 sm:w-6 sm:h-6"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 leading-tight">
                    {item.title}
                  </h3>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUpDelay {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          50% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes timelineGrow {
          from {
            height: 0;
          }
          to {
            height: 100%;
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out;
        }

        .animate-slide-up-delay {
          animation: slideUpDelay 1.2s ease-out;
        }

        .animate-timeline-grow {
          animation: timelineGrow 2s ease-out;
        }

        .timeline-item {
          will-change: transform, opacity;
        }
      `}</style>
    </div>
  );
};

export default Timelinesec;