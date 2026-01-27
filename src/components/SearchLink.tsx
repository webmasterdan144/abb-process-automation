import React from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { PARENT_SEARCH } from '@/lib/constants';

interface SearchLinkProps {
  query: string;
  label?: string;
  variant?: 'primary' | 'secondary' | 'inline' | 'card';
  className?: string;
  showIcon?: boolean;
}

/**
 * Reusable component that constructs parent search URLs
 * with proper encoding for grossautomation.com product search.
 */
const SearchLink: React.FC<SearchLinkProps> = ({
  query,
  label,
  variant = 'primary',
  className = '',
  showIcon = true,
}) => {
  const encodedQuery = encodeURIComponent(query).replace(/%20/g, '+');
  const href = `${PARENT_SEARCH.baseUrl}?s=${encodedQuery}&manufacturers=${PARENT_SEARCH.manufacturer}`;
  const displayLabel = label || `Browse ${query} Products`;

  if (variant === 'inline') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors ${className}`}
      >
        {showIcon && <Search className="w-4 h-4 mr-2" />}
        {displayLabel}
        <ArrowRight className="ml-1 w-4 h-4" />
      </a>
    );
  }

  if (variant === 'secondary') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center border-2 border-primary text-primary px-6 py-3 rounded-md hover:bg-primary hover:text-white transition-colors font-medium ${className}`}
      >
        {showIcon && <Search className="w-5 h-5 mr-2" />}
        {displayLabel}
        <ArrowRight className="ml-2 w-5 h-5" />
      </a>
    );
  }

  if (variant === 'card') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-between p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors group ${className}`}
      >
        <div className="flex items-center">
          <Search className="w-5 h-5 text-primary mr-3" />
          <span className="text-abb-gray-700 font-medium">{displayLabel}</span>
        </div>
        <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
      </a>
    );
  }

  // primary variant (default)
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-md hover:bg-primary-dark transition-colors font-medium ${className}`}
    >
      {showIcon && <Search className="w-5 h-5 mr-2" />}
      {displayLabel}
      <ArrowRight className="ml-2 w-5 h-5" />
    </a>
  );
};

export default SearchLink;
