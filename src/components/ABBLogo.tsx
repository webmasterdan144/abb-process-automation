import React from 'react';
import Image from 'next/image';

interface ABBLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

const ABBLogo: React.FC<ABBLogoProps> = ({ className = '', width = 100, height = 32 }) => {
  return (
    <Image
      src="/images/ABB_logo.svg"
      alt="ABB Logo"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
};

export default ABBLogo;