// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const NAV_ITEMS = [
//   { label: 'Home', href: '/' },
//   { label: 'About Us', href: '/about' },
//   { label: 'Pricing', href: '/pricing' },
//   { label: 'T&C', href: '/terms' },
//   { label: 'Blog', href: '/blog' }
// ];

// const Navbar: React.FC = () => {
//   return (
//     <nav className="flex overflow-hidden rounded-4xl border border-gray-400">
//       <div className="container mx-auto px-4 py-2 flex items-center justify-between">
// <Link href="/" className="flex-shrink-0">
//   <Image
//     src="/assets/images/botwot.svg"
//     alt="Logo"
//     width={121}
//     height={54}
//     className="object-contain"
//   />
//         </Link>

//         <div className="flex items-center space-x-6">
//           <div className="flex space-x-6">
//             {NAV_ITEMS.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className="px-2 py-4 hover:text-[#A221AF] transition-colors"
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div>

//           <Link
//             href="/signin"
//             className="px-4 py-2 border-2 border-[#A221AF] rounded-full hover:bg-purple-50 transition-colors "
//           >
//             Sign In
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import Link from "next/link";
import Image from "next/image";
import { logoImage } from "../../public/assets";

// Define the navigation links
const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "T&C", href: "/terms" },
  { label: "Blog", href: "/blog" },
];

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-20 items-center justify-between gap-3 rounded-full bg-white/50 px-3 shadow-lg shadow-black/30 backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src={logoImage}
                alt="BotWot Logo"
                width={121}
                height={54}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop navigation links */}
          <ul className="flex flex-1 items-center justify-end gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-2 py-4 text-black hover:text-[#A221AF] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/signin"
                className="px-4 py-2 border-2 text-black border-[#A221AF] rounded-full hover:bg-purple-50 hover:text-black transition-colors "
              >
                Sign in
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;