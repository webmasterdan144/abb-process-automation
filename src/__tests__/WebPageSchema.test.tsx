import React from 'react';
import { render } from '@testing-library/react';
import WebPageSchema from '@/components/WebPageSchema';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: () => '/products',
}));

describe('WebPageSchema', () => {
  it('renders a script tag with application/ld+json', () => {
    const { container } = render(<WebPageSchema />);
    const script = container.querySelector('script[type="application/ld+json"]');
    expect(script).toBeInTheDocument();
  });

  it('contains the new domain URL', () => {
    const { container } = render(<WebPageSchema />);
    const script = container.querySelector('script[type="application/ld+json"]');
    const json = JSON.parse(script!.textContent!);
    expect(json.url).toContain('abbautomationsales.com');
  });

  it('does not contain old domain', () => {
    const { container } = render(<WebPageSchema />);
    const script = container.querySelector('script[type="application/ld+json"]');
    expect(script!.textContent).not.toContain('freelance800fsales');
  });

  it('uses correct page type', () => {
    const { container } = render(<WebPageSchema pageType="AboutPage" />);
    const script = container.querySelector('script[type="application/ld+json"]');
    const json = JSON.parse(script!.textContent!);
    expect(json['@type']).toBe('AboutPage');
  });
});
