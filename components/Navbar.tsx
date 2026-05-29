"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-xl border-b border-white/10"></div>
      <div className="max-w-7xl mx-auto px-6 py-4 relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <span className="text-white font-semibold text-xl">Hisolu</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {["Services", "Process", "About", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                {item}
              </a>
            ))}
          </div>
          <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}