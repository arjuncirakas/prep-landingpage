import React from 'react';

const Timelinesec = () => {
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

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 bg-white min-h-screen">
      {/* Title Section */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
          The Fragmentation in Urology Care
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
          Navigating the current healthcare landscape presents significant challenges for patients and providers alike. PREP is designed to solve these universal problems.
        </p>
      </div>

      <div className="relative">
        {/* Central timeline line - hidden on mobile, visible on larger screens */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-800 h-full"></div>
        
        {timelineItems.map((item, index) => (
          <div key={item.id} className="relative mb-8 sm:mb-12 lg:mb-16">
            {/* Content card */}
            <div className={`
              w-full md:w-5/12 lg:w-96 xl:w-120
              ${item.side === 'left' 
                ? 'md:mr-auto md:pr-8 lg:pr-12 xl:pr-16' 
                : 'md:ml-auto md:pl-8 lg:pl-12 xl:pl-16'
              }
            `}>
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 sm:p-6 relative">
                {/* SVG Connector - hidden on mobile, visible on larger screens */}
                <div className={`hidden md:block absolute top-6 z-0 ${
                  item.side === 'left' 
                    ? '-right-0 transform translate-x-full' 
                    : '-left-0 transform -translate-x-full'
                }`}>
                  <img 
                    src="/timeline-connector.svg" 
                    alt="timeline connector"
                    className={`h-6 lg:h-8 ${
                      item.side === 'left' 
                        ? '' 
                        : 'transform scale-x-[-1]'
                    }`}
                  />
                </div>
                
                {/* Header with icon and title */}
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-teal-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-sm border border-white">
                    <img 
                      src={item.icon} 
                      alt={item.title}
                      className="w-4 h-4 sm:w-5 sm:h-5"
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
    </div>
  );
};

export default Timelinesec;







// import React, { useEffect, useRef } from 'react';

// const Timelineter = () => {
//   const timelineItems = [
//     {
//       id: 1,
//       title: "Delayed Referrals",
//       description: "Long waits for specialist appointments delay diagnosis and treatment for patients.",
//       icon: "/Delivery Time.svg",
//       side: "left"
//     },
//     {
//       id: 2,
//       title: "Fragmented Data",
//       description: "Disjointed patient data across systems creates incomplete medical histories for providers.",
//       icon: "/Document.svg",
//       side: "right"
//     },
//     {
//       id: 3,
//       title: "Poor Patient Engagement",
//       description: "When doctors don't communicate well or have enough resources, patients get confused.",
//       icon: "/Profile.svg",
//       side: "left"
//     },
//     {
//       id: 4,
//       title: "Suboptimal Outcomes",
//       description: "Poor patient care leads to more health problems.",
//       icon: "/Error.svg",
//       side: "right"
//     }
//   ];

//   const desktopRef = useRef(null);
//   const mobileItemsRef = useRef([]);

//   useEffect(() => {
//     const observerOptions = {
//       threshold: 0.1,
//       rootMargin: '0px 0px -50px 0px'
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate-in');
//         }
//       });
//     }, observerOptions);

//     // Observe desktop timeline
//     if (desktopRef.current) {
//       observer.observe(desktopRef.current);
//     }

//     // Observe mobile timeline items
//     mobileItemsRef.current.forEach((item) => {
//       if (item) {
//         observer.observe(item);
//       }
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 bg-white min-h-screen">
//       {/* Title Section */}
//       <div className="text-center mb-8 sm:mb-12 lg:mb-16">
//         <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
//           The Fragmentation in Urology Care
//         </h1>
//         <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
//           Navigating the current healthcare landscape presents significant challenges for patients and providers alike. PREP is designed to solve these universal problems.
//         </p>
//       </div>

//       {/* Desktop Timeline - hidden on mobile, visible on larger screens */}
//       <div 
//         ref={desktopRef}
//         className="hidden md:block w-full opacity-0 translate-y-8 transition-all duration-1000 ease-out"
//         style={{
//           '--animate-in': 'opacity-1 translate-y-0'
//         }}
//       >
//         <img 
//           src="/timeline.svg" 
//           alt="Timeline showing healthcare fragmentation challenges"
//           className="w-full h-auto"
//         />
//       </div>

//       {/* Mobile Timeline - visible on mobile, hidden on larger screens */}
//       <div className="md:hidden">
//         <div className="relative">
//           {/* Mobile Timeline Line */}
//           <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-900"></div>
          
//           {timelineItems.map((item, index) => (
//             <div 
//               key={item.id} 
//               ref={(el) => (mobileItemsRef.current[index] = el)}
//               className="relative mb-8 sm:mb-12 pl-16 opacity-0 translate-x-8 transition-all duration-700 ease-out"
//               style={{
//                 transitionDelay: `${index * 200}ms`,
//                 '--animate-in': 'opacity-1 translate-x-0'
//               }}
//             >
//               {/* Timeline Connector on the line */}
//               <div className="absolute left-2 top-6">
//                 <img 
//                   src="/timeline-connector.svg" 
//                   alt="timeline connector"
//                   className="h-3 w-auto transform scale-x-[-1]"
//                 />
//               </div>
              
//               {/* Timeline Arrow */}
//               {index < timelineItems.length - 1 && (
//                 <div className="absolute left-5 top-10 w-0 h-0 border-l-2 border-r-2 border-b-4 border-l-transparent border-r-transparent border-b-gray-300"></div>
//               )}
              
//               <div className="bg-white rounded-lg shadow-md border border-gray-900 p-4 sm:p-6">
//                 {/* Header with icon and title */}
//                 <div className="flex items-center mb-3">
//                   <div className="w-8 h-8 sm:w-10 sm:h-10 bg-teal-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-sm border border-white">
//                     <img 
//                       src={item.icon} 
//                       alt={item.title}
//                       className="w-4 h-4 sm:w-5 sm:h-5"
//                     />
//                   </div>
//                   <h3 className="text-base sm:text-lg font-semibold text-gray-800 leading-tight">
//                     {item.title}
//                   </h3>
//                 </div>
                
//                 {/* Description */}
//                 <p className="text-gray-600 text-sm leading-relaxed">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         .animate-in {
//           opacity: 1 !important;
//           transform: translateY(0) !important;
//         }
        
//         .animate-in[style*="translate-x"] {
//           transform: translateX(0) !important;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Timelineter;
