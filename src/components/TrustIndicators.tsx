import React from 'react';

interface TrustIndicatorsProps {
  variant?: 'default' | 'onRed';
  compact?: boolean;
}

const TrustIndicators: React.FC<TrustIndicatorsProps> = ({ variant = 'default', compact = false }) => {
  if (variant === 'onRed') {
    if (compact) {
      return (
        <div className="text-white text-right">
          <div className="flex items-center justify-end space-x-4 md:space-x-6">
            <div className="text-lg font-bold">ABB</div>
            <div className="text-base font-semibold">Gross Automation</div>
            <div className="text-sm">35+ Years Experience</div>
          </div>
          <div className="text-xs text-white/80 mt-1">
            Trusted Globally by Industry Leaders
          </div>
        </div>
      );
    }
    return (
      <div className="pt-8">
        <p className="text-sm text-white/80 mb-4">Trusted Globally by Industry Leaders</p>
        <div className="flex items-center space-x-8 opacity-80">
          <div className="text-2xl font-bold text-white">ABB</div>
          <div className="text-lg font-semibold text-white">Gross Automation</div>
          <div className="text-sm text-white">35+ Years Experience</div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-8">
      <p className="text-sm text-abb-gray-500 mb-4">Trusted Globally by Industry Leaders</p>
      <div className="flex items-center space-x-8 opacity-60">
        <div className="text-2xl font-bold text-abb-gray-400">ABB</div>
        <div className="text-lg font-semibold text-abb-gray-400">Gross Automation</div>
        <div className="text-sm text-abb-gray-400">35+ Years Experience</div>
      </div>
    </div>
  );
};

export default TrustIndicators;