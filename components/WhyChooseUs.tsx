"use client";

import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "framer-motion";
import { FaClock, FaBrain, FaHeadset, FaRocket } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <Spotlight className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" fill="#8b5cf6" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Partners in Your Digital Journey
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              We don't just build software — we build lasting partnerships. Our commitment to excellence sets us apart.
            </p>

            <div className="space-y-6">
              {[
                { icon: FaClock, title: "On-Time Delivery", desc: "We respect your timelines and deliver projects as scheduled." },
                { icon: FaBrain, title: "AI-Powered", desc: "Cutting-edge AI solutions that transform your business operations." },
                { icon: FaHeadset, title: "24/7 Support", desc: "Round-the-clock assistance to keep your systems running smoothly." },
                { icon: FaRocket, title: "Scalable Solutions", desc: "Future-proof architecture that grows with your business." }
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-xl text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative p-8 bg-white/5 border border-white/10 rounded-3xl">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Response Time", value: "< 2 hours" },
                  { label: "Project Success", value: "98%" },
                  { label: "Code Quality", value: "A+" },
                  { label: "Client Retention", value: "95%" }
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 rounded-xl bg-white/5">
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-gray-500 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20">
                <p className="text-white text-center font-medium">
                  "Trusted by 500+ companies worldwide"
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}