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


"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../data/data";
import { logoImage } from "../../public/assets";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
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

            {/* Mobile menu toggle */}
            <div className="flex items-center justify-end gap-4 md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-menu cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                <line
                  x1="3"
                  y1="6"
                  x2="21"
                  y2="6"
                  className={`origin-left transition ${
                    isOpen ? "rotate-45 -translate-y-1" : ""
                  }`}
                />
                <line
                  x1="3"
                  y1="12"
                  x2="21"
                  y2="12"
                  className={`transition ${isOpen ? "opacity-0" : ""}`}
                />
                <line
                  x1="3"
                  y1="18"
                  x2="21"
                  y2="18"
                  className={`origin-left transition ${
                    isOpen ? "-rotate-45 translate-y-1" : ""
                  }`}
                />
              </svg>
            </div>

            {/* Desktop navigation links */}
            <ul className="hidden md:flex flex-1 items-center justify-end gap-6">
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
                  className="px-4 py-2 border-2 text-black border-[#A221AF] rounded-full hover:bg-purple-50 hover:text-black transition-colors"
                >
                  Sign in
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="overflow-hidden bg-white shadow-md"
          >
            <div className="flex flex-col items-center gap-4 py-20">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-black hover:text-[#A221AF] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/signin"
                className="px-4 py-2 text-black border border-[#A221AF] rounded-full hover:bg-purple-50 hover:text-black transition-colors"
              >
                Sign in
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content spacer to avoid overlap */}
      <div className="pb-[30px] md:pb-[90px] lg:pb-[100px]"></div>
    </>
  );
};

export default Navbar;
