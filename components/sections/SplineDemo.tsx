"use client";

import { SplineScene } from "@/components/ui/spline";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
export default function SplineDemo() {
  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Expert Developers" },
    { number: "24/7", label: "Support Available" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full mx-auto min-h-12 bg-black/[0.96] pt-25 relative overflow-hidden">
        <Spotlight className="" />

        <div className="flex h-full flex-col md:flex-row">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="pl-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
              <span className="text-gray-300 text-sm">
                Accepting New Projects
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Building the
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Future of Digital
              </span>
              Solutions
            </h1>

            <p className="text-xl text-gray-400 mb-8 max-w-xl leading-relaxed">
              We transform your ideas into powerful digital experiences. From
              stunning websites to innovative mobile apps, we bring your vision
              to life.
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

           
          </motion.div>
          

          {/* Right content */}
          <div className="flex-1 relative h-full min-h-[300px]">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
          
        </div>
        
      </div>
       <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-white/10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex flex-col content-center items-center"
                >
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
    </motion.div>
  );
}
