import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'T&C', href: '/terms' },
  { label: 'Blog', href: '/blog' }
];

const Navbar: React.FC = () => {
  return (
    <nav className="flex overflow-hidden rounded-3xl border border-gray-400">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/assets/images/botwot.svg"
            alt="Logo"
            width={121}
            height={54}
            className="object-contain"
          />
        </Link>
        
        <div className="flex items-center space-x-6">
          <div className="flex space-x-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-6 hover:text-purple-500 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          <Link 
            href="/signin"
            className="px-4 py-2 border-2 border-purple-400 rounded-full 
                       shadow-[0px_0px_60px_rgba(236,39,182,0.6)]
                       hover:bg-purple-50 transition-colors"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

