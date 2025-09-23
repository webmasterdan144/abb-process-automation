'use client';

import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Pulsing background */}
      <div className="absolute inset-0 bg-red-500 opacity-20 animate-pulse"></div>

      {/* Floating radial gradients */}
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, #FF000F 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, #FF000F 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, #FF000F 0%, transparent 50%)
          `,
          animation: 'float 20s ease-in-out infinite'
        }}
      ></div>

      {/* Sine wave animation */}
      <svg
        className="absolute inset-0 w-full h-full opacity-60"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF000F" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#FF000F" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FF000F" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* Primary sine wave - upper area */}
        <path
          d="M0,200 Q480,100 960,200 T1920,200 L1920,400 L0,400 Z"
          fill="url(#waveGradient)"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="translate"
            values="0,0; 30,15; 0,0; -30,-15; 0,0"
            dur="45s"
            repeatCount="indefinite"
          />
        </path>

        {/* Secondary sine wave - middle area */}
        <path
          d="M0,300 Q240,200 480,300 T960,300 T1440,300 T1920,300 L1920,500 L0,500 Z"
          fill="#FF000F"
          opacity="0.3"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="translate"
            values="0,0; -25,-12; 0,0; 25,12; 0,0"
            dur="60s"
            repeatCount="indefinite"
          />
        </path>

        {/* Tertiary sine wave - throughout */}
        <path
          d="M0,100 Q360,50 720,100 T1440,100 T1920,100 L1920,1080 L0,1080 Z"
          fill="#FF000F"
          opacity="0.15"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="translate"
            values="0,0; 20,8; 0,0; -20,-8; 0,0"
            dur="80s"
            repeatCount="indefinite"
          />
        </path>
      </svg>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;