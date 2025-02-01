'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState, useCallback, memo } from 'react';

// Navigation items type definition
type NavItem = {
  label: string;
  href: string;
};

// Dropdown items type definition
type DropdownItem = {
  label: string;
  href: string;
};

// Define navigation items as constants
const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

// Define dropdown items as constants
const DROPDOWN_ITEMS: DropdownItem[] = [
  { label: 'Wooden Awards', href: '/plaque/wood' },
  { label: 'Glass Awards', href: '/plaque/glass' },
  { label: 'Acrylic Awards', href: '/plaque/acrylic' },
] as const;

// Memoized NavLink component
const NavLink = memo(({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="text-black hover:text-gray-600 transition-colors duration-200"
  >
    {children}
  </Link>
));
NavLink.displayName = 'NavLink';

// Memoized DropdownItem component
const DropdownLink = memo(({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
    role="menuitem"
  >
    {children}
  </Link>
));
DropdownLink.displayName = 'DropdownLink';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Dropdown handlers
  const handleMouseEnter = useCallback(() => {
    setIsDropdownOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsDropdownOpen(false);
  }, []);

  return (
    <nav className="flex items-center justify-between p-4 px-12 bg-transparent absolute w-full z-50">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link href="/" className="text-xl font-bold text-black">
          <Image
            src="/JAO_Logo (1).png"
            alt="JAO Logo"
            width={120}
            height={40}
            className="object-contain"
            priority
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        {/* Regular Nav Items */}
        {NAV_ITEMS.map((item) => (
          <NavLink key={item.href} href={item.href}>
            {item.label}
          </NavLink>
        ))}

        {/* Dropdown Menu */}
        <div
          className="relative group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Dropdown Trigger */}
          <button 
            className="text-black hover:text-gray-600 transition-colors duration-200 focus:outline-none"
            aria-expanded={isDropdownOpen}
            aria-haspopup="true"
          >
            Plaque & Awards
          </button>

          {/* Dropdown Content */}
          <div
            className={`
              absolute left-0 mt-2 w-48 
              rounded-md shadow-lg 
              bg-white ring-1 ring-black ring-opacity-5 
              transition-all duration-300 ease-in-out 
              z-50 pb-3
              ${isDropdownOpen 
                ? 'opacity-100 visible translate-y-0' 
                : 'opacity-0 invisible -translate-y-1'
              }
            `}
          >
            <div className="py-1" role="menu" aria-orientation="vertical">
              {DROPDOWN_ITEMS.map((item) => (
                <DropdownLink key={item.href} href={item.href}>
                  {item.label}
                </DropdownLink>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button 
          className="p-2 text-black focus:outline-none hover:text-gray-600 transition-colors duration-200"
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
