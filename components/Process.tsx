"use client";

import { motion } from "framer-motion";

const process = [
  { step: "01", title: "Discovery", description: "We analyze your market, audience, and business goals to map out a clear strategy for success." },
  { step: "02", title: "Design", description: "We launch your platform with rigorous quality checks and optimize it for growth and ongoing support." },
  { step: "03", title: "Development", description: "Expert developers build your solution using cutting-edge technologies." },
  { step: "04", title: "Deployment", description: "We deploy your product with rigorous testing and ongoing support." }
];

export default function Process() {
  return (
    <section id="process" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">Our Process</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            How We Work
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative 
            p-3"
            >
              <div className="text-6xl font-bold text-white/30 mb-4">{item.step}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
             
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}