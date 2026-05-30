"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FaReact, FaCloud, FaChartLine, FaCode, FaRobot, FaPalette, FaCheck } from "react-icons/fa";

const services = [
  {
    icon: FaCode,
    title: "Web Development",
    description: "Custom websites and web applications built with cutting-edge technologies like React, Next.js, and Node.js.",
    features: ["E-commerce Platforms", "Web Apps", "CMS Solutions", "API Development"]
  },
  {
    icon: FaReact,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.",
    features: ["iOS Development", "Android Development", "React Native", "Flutter Apps"]
  },
  {
    icon: FaCloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and DevOps services to power your applications with reliability and performance.",
    features: ["Cloud Migration", "AWS/Azure/GCP", "CI/CD Pipelines", "Serverless Architecture"]
  },
  {
    icon: FaRobot,
    title: "AI Agents & Solutions",
    description: "Intelligent automation and AI-powered solutions to transform your business operations and decision-making.",
    features: ["AI Agents", "Machine Learning", "Natural Language Processing", "Smart Automation"]
  },
  {
    icon: FaChartLine,
    title: "SEO & Digital Marketing",
    description: "Boost your online visibility, drive organic traffic, and grow your brand with expert search engine optimization and digital marketing strategies.",
    features: ["Search Engine Optimization (SEO)", "Search Engine Marketing (SEM)", "Social Media Marketing", "Content Strategy & Copywriting"]
  },
  {
    icon: FaPalette,
    title: "Designing & Customization",
    description: "Tailor-made design and customization services for web and mobile apps to perfectly match your brand identity and unique functional needs.",
    features: ["UI/UX Design & Prototyping", "Theme Customization", "Feature Tailoring", "Brand Alignment & Assets"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-900/10 to-black"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From concept to deployment, we provide end-to-end services that drive growth and innovation for your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-full p-8 bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-cyan-500/30 transition-all group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="text-2xl text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                      <FaCheck className="text-xs text-cyan-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}