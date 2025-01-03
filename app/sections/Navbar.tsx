"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../data/data";
import { logoImage } from "../../public/assets";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const handleMouseEnter = (tab: string) => {
    setHoveredTab(tab);
  };

  const handleMouseLeave = () => {
    setHoveredTab(null);
  };

  return (
    <>
      <header className="fixed top-2 z-30 w-full md:top-6">
        <div className="mx-auto max-w-8xl lg:px-8 px-6 sm:px-6">
          <div className="relative flex h-20 items-center rounded-2xl /50 px-3 shadow-lg shadow-black/30 backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
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
              <span className="text-lg font-bold text-black">BotWot</span>
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
            <ul className="hidden md:flex flex-1 py-5 items-center justify-center gap-6 whitespace-nowrap">
              {navLinks.map((link) => (
                <li
                  key={link.href}
                  onMouseEnter={() => handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                  className="relative"
                >
                  {link.label === "Pricing" ? (
                    <Link
                      href={link.href}
                      className="px-2 py-4 text-black text-center hover:text-[#A221AF] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <span className="px-2 py-4 text-black text-center hover:text-[#A221AF] transition-colors">
                      {link.label}
                    </span>
                  )}
                  {hoveredTab === link.label && link.submenu && (
                    <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg p-4">
                      <div
                        className={`grid ${
                          link.submenu.length <= 6
                            ? "grid-cols-1 w-[350px]"
                            : "grid-cols-2 w-[600px]"
                        } gap-x-4 gap-y-5`}
                      >
                        {link.submenu.map((submenuItem, index) => (
                          <div key={index} className="flex items-start gap-4">
                            {submenuItem.icon && (
                              <div className="flex-shrink-0 text-[#A221AF]">
                                <submenuItem.icon className="h-5 w-5" />
                              </div>
                            )}
                            <div>
                              <Link
                                href={submenuItem.href}
                                className="block font-medium text-black hover:text-[#A221AF] transition-colors"
                              >
                                {submenuItem.label}
                              </Link>
                              <p className="text-sm text-gray-500 mt-1">
                                {submenuItem.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
              <li>
                <Link
                  href="/signin"
                  className="px-6 py-2 border-2 text-black border-[#A221AF] rounded-full hover:bg-purple-50 hover:text-black transition-colors whitespace-nowrap"
                >
                  Sign in
                </Link>

                <Link href="https://calendly.com/botwot62/30min" passHref>
                  <button className="px-5 md:px-6 py-3 ml-4 text-white bg-black rounded-full transition hover:bg-gray-800">
                    Request a demo
                  </button>
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
            className="overflow-hidden  shadow-md"
          >
            <div className="flex flex-col items-center gap-4 py-20">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className="text-black hover:text-[#A221AF] transition-colors"
                  >
                    {link.label}
                  </Link>
                  {/* Mobile submenu */}
                  {link.submenu && (
                    <div className="mt-2">
                      {link.submenu.map((submenuItem, index) => (
                        <Link
                          key={index}
                          href={submenuItem.href}
                          className="block py-2 text-black hover:text-[#A221AF] transition-colors"
                        >
                          {submenuItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
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
