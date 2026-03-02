import React from 'react';

const NigerianLogo = () => {
  return (
    <div style={{
      position: 'relative',
      width: '100px',
      height: '100px',
      filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))',
      animation: 'gentlePulse 4s ease-in-out infinite'
    }}>
      <style>{`
        @keyframes gentlePulse {
          0%, 100% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.05); filter: brightness(1.1); }
        }
      `}</style>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org">
        <defs>
          {/* Deep Gold Gradient for the Coin Edge */}
          <linearGradient id="coinGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8A6E2F" />
            <stop offset="50%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#B8860B" />
          </linearGradient>
          
          {/* Vibrant Green for the "Zero/Safe" Ring */}
          <linearGradient id="safeGreen" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00A859" />
            <stop offset="100%" stopColor="#006747" />
          </linearGradient>

          {/* Glossy Reflection Filter */}
          <filter id="shine">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
            <feSpecularLighting in="blur" surfaceScale="5" specularConstant="1" specularExponent="40" lightingColor="#fff" result="light">
              <fePointLight x="-5000" y="-10000" z="20000" />
            </feSpecularLighting>
            <feComposite in="light" in2="SourceAlpha" operator="in" result="light" />
            <feComposite in="SourceGraphic" in2="light" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
          </filter>
        </defs>

        {/* 1. The Protection Ring (Zero Mumu / Safety) */}
        <circle cx="100" cy="100" r="90" fill="none" stroke="url(#safeGreen)" strokeWidth="15" />

        {/* 2. The 3D Gold Naira Coin */}
        <circle cx="100" cy="100" r="70" fill="url(#coinGold)" filter="url(#shine)" />
        
        {/* 3. The Naira Symbol (₦) - Universally Understood */}
        <text
          x="100"
          y="135"
          textAnchor="middle"
          style={{
            fill: '#4D3D1A', /* Dark bronze for readability */
            fontSize: '110px',
            fontWeight: '900',
            fontFamily: 'Arial, sans-serif'
          }}
        >
          ₦
        </text>

        {/* 4. Small ZMT Branding */}
        <rect x="65" y="145" width="70" height="25" rx="5" fill="#006747" />
        <text
          x="100"
          y="163"
          textAnchor="middle"
          style={{
            fill: '#fff',
            fontSize: '18px',
            fontWeight: 'bold',
            fontFamily: 'system-ui'
          }}
        >
          ZMT
        </text>
      </svg>
    </div>
  );
};

export default NigerianLogo;