"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Build Something
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Amazing?
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help transform your vision into reality.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="cursor-pointer">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:scale-105 transition-transform text-lg cursor-pointer">
                Start Your Project
              </button>
            </Link>
            <Link href="/contact" className="cursor-pointer">
              <button className="border border-white/20 text-white px-10 py-4 rounded-xl font-semibold hover:bg-white/5 transition-colors text-lg cursor-pointer">
                Schedule a Call
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}