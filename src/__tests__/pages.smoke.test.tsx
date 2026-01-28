import React from 'react';
import { render } from '@testing-library/react';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
  useRouter: () => ({ push: jest.fn(), replace: jest.fn(), back: jest.fn() }),
  useSearchParams: () => new URLSearchParams(),
}));

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href, ...props }: { children: React.ReactNode; href: string; [key: string]: unknown }) => (
    <a href={href} {...props}>{children}</a>
  );
});

// Helper to check rendered output for old domain
function expectNoOldDomain(container: HTMLElement) {
  expect(container.innerHTML).not.toContain('freelance800fsales');
}

describe('Page smoke tests', () => {
  it('HomePage renders without crashing', () => {
    const HomePage = require('@/app/page').default;
    const { container } = render(<HomePage />);
    expect(container.firstChild).not.toBeNull();
    expectNoOldDomain(container);
  });

  it('SolutionsPage renders without crashing', () => {
    const SolutionsPage = require('@/app/solutions/page').default;
    const { container } = render(<SolutionsPage />);
    expect(container.firstChild).not.toBeNull();
    expectNoOldDomain(container);
  });

  it('WisconsinPage renders without crashing', () => {
    const WisconsinPage = require('@/app/wisconsin-abb-automation/page').default;
    const { container } = render(<WisconsinPage />);
    expect(container.firstChild).not.toBeNull();
    expectNoOldDomain(container);
  });

  it('AboutPage renders without crashing', () => {
    const AboutPage = require('@/app/about/page').default;
    const { container } = render(<AboutPage />);
    expect(container.firstChild).not.toBeNull();
    expectNoOldDomain(container);
  });

  it('SupportPage renders without crashing', () => {
    const SupportPage = require('@/app/support/page').default;
    const { container } = render(<SupportPage />);
    expect(container.firstChild).not.toBeNull();
    expectNoOldDomain(container);
  });

  it('ProductsPage renders without crashing', () => {
    const ProductsPage = require('@/app/products/page').default;
    const { container } = render(<ProductsPage />);
    expect(container.firstChild).not.toBeNull();
    expectNoOldDomain(container);
  });

  it('ContactPage renders without crashing', () => {
    const ContactPage = require('@/app/contact/page').default;
    const { container } = render(<ContactPage />);
    expect(container.firstChild).not.toBeNull();
    expectNoOldDomain(container);
  });
});
