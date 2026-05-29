"use client";

import { SplineScene } from "@/components/ui/spline";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const stats = [
  { number: "500+", label: "Projects Delivered" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "50+", label: "Expert Developers" },
  { number: "24/7", label: "Support Available" }
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Spotlight  />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black"></div>

      <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
              <span className="text-gray-300 text-sm">Accepting New Projects</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Building the
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Future of Digital
              </span>
              Solutions
            </h1>

            <p className="text-xl text-gray-400 mb-8 max-w-xl leading-relaxed">
              We transform your ideas into powerful digital experiences. From stunning websites to innovative mobile apps, we bring your vision to life.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform flex items-center gap-2">
                Start Your Project
                <FaArrowRight className="text-sm" />
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/5 transition-colors">
                View Our Work
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-white/10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-[600px]"
          >
            <Card className="w-full h-full bg-black/50 relative overflow-hidden backdrop-blur-sm">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}