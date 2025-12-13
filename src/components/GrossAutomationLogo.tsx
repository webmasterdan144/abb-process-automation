import React from 'react';
import Image from 'next/image';

interface GrossAutomationLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

const GrossAutomationLogo: React.FC<GrossAutomationLogoProps> = ({
  className = '',
  width = 150,
  height = 50
}) => {
  return (
    <Image
      src="/images/gross-logo-35.png"
      alt="Gross Automation - 35+ Years"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
};

export default GrossAutomationLogo;