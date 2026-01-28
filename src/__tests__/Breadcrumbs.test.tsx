import React from 'react';
import { render, screen } from '@testing-library/react';
import Breadcrumbs from '@/components/Breadcrumbs';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

// Mock TrustIndicators
jest.mock('@/components/TrustIndicators', () => {
  return function MockTrustIndicators() {
    return <div data-testid="trust-indicators" />;
  };
});

import { usePathname } from 'next/navigation';
const mockUsePathname = usePathname as jest.MockedFunction<typeof usePathname>;

describe('Breadcrumbs', () => {
  it('renders nothing on home page', () => {
    mockUsePathname.mockReturnValue('/');
    const { container } = render(<Breadcrumbs />);
    expect(container.innerHTML).toBe('');
  });

  it('renders breadcrumb nav on subpages', () => {
    mockUsePathname.mockReturnValue('/products');
    render(<Breadcrumbs />);
    expect(screen.getByLabelText('Breadcrumb')).toBeInTheDocument();
  });

  it('includes Home link', () => {
    mockUsePathname.mockReturnValue('/products');
    render(<Breadcrumbs />);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('generates structured data with new domain', () => {
    mockUsePathname.mockReturnValue('/products');
    const { container } = render(<Breadcrumbs />);
    const script = container.querySelector('script[type="application/ld+json"]');
    expect(script!.textContent).toContain('abbautomationsales.com');
    expect(script!.textContent).not.toContain('freelance800fsales');
  });
});
