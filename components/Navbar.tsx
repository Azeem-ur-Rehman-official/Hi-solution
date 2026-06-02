"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-xl border-b border-white/10"></div>
        <div className="max-w-7xl mx-auto px-6 py-4 relative">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 cursor-pointer">
              <img
                src="/hisol.png"
                alt="Hisolu"
                className="h-9 w-auto object-contain"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {["Home","Services", "Portfolio", "Process", "About", "Contact"].map(
                (item) => {
                  const href =
                    item === "Home"
                      ? "/"
                      : item === "Contact"
                        ? "/contact"
                        : item === "Portfolio"
                          ? "/portfolio"
                          : item === "About"
                            ? "/about"
                            : `/#${item.toLowerCase()}`;
                  return (
                    <Link
                      key={item}
                      href={href}
                      className="text-gray-300 hover:text-white transition-colors text-sm font-medium cursor-pointer"
                    >
                      {item}
                    </Link>
                  );
                },
              )}
            </div>

            {/* Desktop CTA Button */}
            <Link href="/contact" className="hidden md:block cursor-pointer">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">
                Get Started
              </button>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden text-gray-300 hover:text-white focus:outline-none cursor-pointer"
              aria-label="Open Menu"
            >
              <FaBars className="text-2xl" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer (Sidebar) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
            />

            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed top-0 left-0 bottom-0 w-[80%] max-w-[320px] min-h-screen h-screen bg-black/95 backdrop-blur-2xl border-r border-white/10 z-50 md:hidden flex flex-col p-6 shadow-2xl"
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between mb-12">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <img
                    src="/hisol.png"
                    alt="Hisolu"
                    className="h-9 w-auto object-contain"
                  />
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white focus:outline-none cursor-pointer"
                  aria-label="Close Menu"
                >
                  <FaTimes className="text-2xl" />
                </button>
              </div>

              {/* Sidebar Links */}
              <div className="flex flex-col gap-6 flex-1">
                <Link
                  key="Home"
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white transition-colors text-xl font-medium cursor-pointer py-2 border-b border-white/5"
                >
                  Home
                </Link>
                {["Services", "Portfolio", "Process", "About", "Contact"].map(
                  (item) => {
                    const href =
                      item === "Contact"
                        ? "/contact"
                        : item === "About"
                          ? "/about"
                          : item === "Portfolio"
                            ? "/portfolio"
                            : `/#${item.toLowerCase()}`;
                    return (
                      <Link
                        key={item}
                        href={href}
                        onClick={() => setIsOpen(false)}
                        className="text-gray-300 hover:text-white transition-colors text-xl font-medium cursor-pointer py-2 border-b border-white/5"
                      >
                        {item}
                      </Link>
                    );
                  },
                )}
              </div>

              {/* Sidebar Footer CTA */}
              <div className="mt-auto pt-6">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full cursor-pointer"
                >
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-xl font-medium hover:opacity-90 transition-opacity cursor-pointer">
                    Get Started
                  </button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
