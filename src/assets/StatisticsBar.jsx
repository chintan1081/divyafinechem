import React, { useState, useEffect } from 'react';

const StatItem = ({ icon, endValue, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const end = parseInt(endValue);
    const increment = end / 200;
    const timer = setInterval(() => {
      setCount((oldCount) => {
        const newCount = oldCount + increment;
        if (newCount >= end) {
          clearInterval(timer);
          return end;
        }
        return newCount;
      });
    }, 10);

    return () => clearInterval(timer);
  }, [endValue]);

  return (
    <div className="flex flex-col items-center">
      <div className="text-orange-400 mb-4">
        <svg className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 24 24" fill="currentColor">
          {icon}
        </svg>
      </div>
      <div className="text-3xl md:text-4xl font-bold text-white">
        {Math.round(count)}
        {endValue.includes('+') && '+'}
      </div>
      <div className="text-sm md:text-base text-gray-400 mt-2 text-center uppercase">
        {label}
      </div>
    </div>
  );
};

const StatisticsBar = () => {
  const stats = [
    { 
      icon: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>, 
      endValue: '7+', 
      label: 'States Explored To' 
    },
    { 
      icon: <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/>,
      endValue: '15+', 
      label: 'Satisfied Clients' 
    },
    { 
      icon: <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/>, 
      endValue: '11+', 
      label: 'Years of Experience' 
    },
    { 
        icon: <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>,
        endValue: '30+', 
        label: 'Dedicated Staff' 
      },
  ];

  return (
    <div className="bg-gray-900">
    <div className="bg-gray-900 py-10 mx-36">
      <div className="container mx-auto md:px-28">
        <div className="grid grid-cols-1  md:grid-cols-4 gap-8 md:gap-0">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default StatisticsBar;