import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Platform = () => {
  const [activeFeature, setActiveFeature] = useState('Intelligent Monitoring');

  // Checkmark SVG component using the public SVG file
  const CheckmarkIcon = () => (
    <img 
      src="/Checkmark.svg" 
      alt="Checkmark" 
      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0 mt-0.5"
    />
  );

  const features = [
    'Intelligent Monitoring',
    'Realtime Collaborations',
    'Dynamic Pathways',
    'Patient Engagement'
  ];

  // Content for each feature
  const featureContent = {
    'Intelligent Monitoring': {
      title: 'Predictive PSA Tracking',
      description: 'Monitor and predict patient outcomes with advanced analytics and real-time data visualization.',
      bulletPoints: [
        'Visualize patient data over time.',
        'Receive alerts for high-risk trajectories.',
        'Compare actual vs. predicted values for better insights.'
      ],
      hasChart: true
    },
    'Realtime Collaborations': {
      title: 'Real-Time Care Team Collaboration',
      description: 'Break down communication silos. PREP provides a unified hub for GPs, urologists, nurses, and administrative staff to coordinate care in real-time.',
      bulletPoints: [
        'Secure messaging between providers.',
        'Shared patient timelines and status updates.',
        'Automated notifications for critical events.'
      ],
      hasChart: false,
      image: '/DeWatermark.ai_1755162285088.jpeg'
    },
    'Dynamic Pathways': {
      title: 'Dynamic Treatment Pathways',
      description: 'Standardize and optimize care with evidence-based, dynamic treatment pathways. Guide patients through their journey with clarity and consistency.',
      bulletPoints: [
        'Customizable decision-tree logic.',
        'Track progress against established care plans.',
        'Automate follow-ups and next steps.'
      ],
      hasChart: false,
      image: 'public/wmremove-transformed (1).png'
    },
    'Patient Engagement': {
      title: 'Empowering Patient Engagement',
      description: 'Engage patients as active partners in their care. Our patient portal provides education, reminders, and a direct line of communication.',
      bulletPoints: [
        'Automated appointment and medication reminders.',
        'Access to personalized educational materials.',
        'Secure portal for viewing results and communicating with providers.'
      ],
      hasChart: false,
      image: '/wmremove-transformed.png'
    }
  };

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Actual PSA',
        data: [1.3, 1.4, 1.6, 1.8, 2.1, 2.4, 2.67],
        borderColor: '#0D9488',
        backgroundColor: '#0D9488',
        borderWidth: 2,
        pointBackgroundColor: '#0D9488',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 4,
        tension: 0.1,
      },
      {
        label: 'Predicted',
        data: [1.3, 1.45, 1.65, 1.85, 2.05, 2.35, 2.6],
        borderColor: '#7DD3FC',
        backgroundColor: '#7DD3FC',
        borderWidth: 2,
        borderDash: [5, 5],
        pointBackgroundColor: '#7DD3FC',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 4,
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12,
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#6B7280',
          font: {
            size: 12,
          },
        },
      },
      y: {
        grid: {
          color: '#E5E7EB',
        },
        ticks: {
          color: '#6B7280',
          font: {
            size: 12,
          },
          callback: function(value) {
            return value.toFixed(2);
          },
        },
      },
    },
  };

  return (
    <div className=" bg-gray-100 py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#4A9B8E] mb-3 sm:mb-4 px-2">
          The PREP Solution : A Unified Patient Journey
          </h1>
          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            Explore the core features that make PREP a revolutionary tool for urology professionals and their patients.
          </p>
          
          {/* Feature Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 px-4">
            {features.map((feature) => (
              <button
                key={feature}
                onClick={() => setActiveFeature(feature)}
                className={`px-3 py-2 rounded-full font-medium transition-all duration-200 text-base sm:text-[1rem] w-[15rem] ${
                  activeFeature === feature
                    ? 'bg-[#4A9B8E] text-white shadow-lg'
                    : 'bg-blue-100 text-gray-700 hover:bg-blue-200'
                }`}
              >
                {feature}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Section - Dynamic Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#4A9B8E] mb-3 sm:mb-4">
              {featureContent[activeFeature].title}
            </h2>
            <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6">
              {featureContent[activeFeature].description}
            </p>
            <div className="space-y-3 sm:space-y-4">
              {featureContent[activeFeature].bulletPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-2 sm:gap-3">
                  <CheckmarkIcon />
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Chart Card or Image */}
          <div className="order-1 lg:order-2 bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 lg:p-12">
            {featureContent[activeFeature].hasChart ? (
              <div className="h-48 sm:h-56 md:h-64 lg:h-72">
                <Line data={chartData} options={chartOptions} />
              </div>
            ) : (
              <div className="h-48 sm:h-56 md:h-64 lg:h-72 flex items-center justify-center">
                <img 
                  src={featureContent[activeFeature].image} 
                  alt={featureContent[activeFeature].title}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;