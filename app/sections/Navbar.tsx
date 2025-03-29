"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../data/data";
import { logoImage } from "../../public/assets";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const handleMouseEnter = (tab: string) => {
    setHoveredTab(tab);
  };

  const handleMouseLeave = () => {
    setHoveredTab(null);
  };

  const toggleSubmenu = (label: string) => {
    setActiveSubmenu(activeSubmenu === label ? null : label);
  };

  return (
    <>
      <header className="fixed top-2 z-30 w-full md:top-6">
        <div className="mx-auto max-w-8xl lg:px-8 px-6 sm:px-6">
          <div className="relative flex h-24 items-center rounded-2xl shadow-lg shadow-black/30 backdrop-blur-lg">
            {/* Site Branding */}
            <div className="flex flex-1 items-center ml-2 md:ml-8 lg:ml-14">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src={logoImage}
                  alt="BotWot Logo"
                  width={250}
                  height={100}
                  className="object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <div className="flex items-center mr-4 justify-center gap-4 md:hidden">
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
            <ul className="hidden md:flex flex-1 py-5 items-center justify-center gap-14 whitespace-nowrap">
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
                      className="px-2 py-4 text-black text-center hover:text-[#387D8C] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <span className="px-2 py-4 text-black text-center hover:text-[#387D8C] transition-colors">
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
                              <div className="flex-shrink-0 text-black">
                                <submenuItem.icon className="h-5 w-5" />
                              </div>
                            )}
                            <div>
                              <Link
                                href={submenuItem.href}
                                className="block font-medium text-black hover:text-[#387D8C] transition-colors"
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
                <Link href="https://app.botwot.io" passHref>
                  <button className="px-6 py-2 border-2 text-black border-[#387D8C] rounded-full hover:bg-green-100 hover:text-black transition-colors whitespace-nowrap">
                    Sign in
                  </button>
                </Link>

                <Link
                  href="https://outlook.office365.com/book/BotWotDemo@nivamoney.com/"
                  passHref
                >
                  <button className="px-6 md:px-6 py-3 ml-4 mr-6 text-white bg-black rounded-full transition hover:bg-gray-800">
                    Request a demo
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[72px] left-0 right-0 z-20 bg-white shadow-lg rounded-b-2xl mx-4"
          >
            <div className="flex flex-col py-4 space-y-2">
              {navLinks.map((link) => (
                <div key={link.href} className="px-4 mt-10">
                  {link.submenu ? (
                    <button
                      onClick={() => toggleSubmenu(link.label)}
                      className="w-full text-left py-2 text-black hover:text-[#387D8C]"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="block py-2 text-black hover:text-[#387D8C]"
                    >
                      {link.label}
                    </Link>
                  )}
                  {activeSubmenu === link.label && link.submenu && (
                    <div className="pl-4 space-y-2">
                      {link.submenu.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="block py-2 text-gray-600 hover:text-[#387D8C]"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-4 pt-4 flex flex-col space-y-3">
                <Link href="https://app.botwot.io" passHref>
                  <button className="px-4 py-2 text-center text-black border border-[#387D8C] rounded-full hover:bg-green-50">
                    Sign in
                  </button>
                </Link>
                <Link
                  href="https://outlook.office365.com/book/BotWotDemo@nivamoney.com/"
                  className="px-4 py-2 text-center text-white bg-black rounded-full hover:bg-gray-800"
                >
                  Request a demo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content Spacer to avoid overlap */}
      <div className="pb-[30px] md:pb-[90px] lg:pb-[100px]"></div>
    </>
  );
};

export default Navbar;
