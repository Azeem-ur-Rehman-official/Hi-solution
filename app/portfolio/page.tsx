"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaCode, FaMobileAlt, FaCloud, FaRobot, FaLock } from "react-icons/fa";

const categories = ["All", "Web", "Mobile", "Cloud", "AI", "Security"];

const projects = [
  {
    title: "Aether Finance",
    category: "Web",
    icon: FaCode,
    description: "A next-generation AI-powered decentralized banking platform providing real-time portfolio tracking and seamless digital assets trading.",
    imageGradient: "from-cyan-500/20 via-blue-500/20 to-purple-600/20",
    glowColor: "shadow-cyan-500/10 border-cyan-500/20",
    tags: ["Next.js 14", "Tailwind CSS", "Web3 Integration", "AI Insights"],
    metrics: { client: "Aether Inc.", impact: "+140% trading volume" }
  },
  {
    title: "Nova Health Portal",
    category: "Mobile",
    icon: FaMobileAlt,
    description: "An integrated telemedicine and patient monitoring application featuring video consultations, secure health records, and prescription tracking.",
    imageGradient: "from-purple-500/20 via-pink-500/20 to-red-600/20",
    glowColor: "shadow-purple-500/10 border-purple-500/20",
    tags: ["React Native", "Expo", "Node.js", "WebRTC Video"],
    metrics: { client: "Nova Healthcare", impact: "500k+ downloads" }
  },
  {
    title: "Apex Retail Platform",
    category: "Web",
    icon: FaCode,
    description: "A high-performance enterprise e-commerce platform handling tens of thousands of simultaneous orders with ultra-fast sub-second response times.",
    imageGradient: "from-emerald-500/20 via-teal-500/20 to-cyan-600/20",
    glowColor: "shadow-emerald-500/10 border-emerald-500/20",
    tags: ["Next.js", "GraphQL", "Redis Caching", "Stripe Checkout"],
    metrics: { client: "Apex Global", impact: "0.8s load speed" }
  },
  {
    title: "Sentient AI Engine",
    category: "AI",
    icon: FaRobot,
    description: "Enterprise workflow automation platform orchestrating multiple specialized AI agents to automate customer care, document analysis, and data logging.",
    imageGradient: "from-indigo-500/20 via-purple-500/20 to-cyan-600/20",
    glowColor: "shadow-indigo-500/10 border-indigo-500/20",
    tags: ["Python LLM", "LangChain", "Vector DB", "React Dashboard"],
    metrics: { client: "Sentient Corp", impact: "85% cost reduction" }
  },
  {
    title: "Helios Cloud Infrastructure",
    category: "Cloud",
    icon: FaCloud,
    description: "Complete cloud-native modernization and serverless migration for a global SaaS provider, guaranteeing 99.99% uptime and auto-scaling rules.",
    imageGradient: "from-blue-500/20 via-indigo-500/20 to-cyan-500/20",
    glowColor: "shadow-blue-500/10 border-blue-500/20",
    tags: ["AWS Architecture", "Terraform", "Kubernetes", "CI/CD GitOps"],
    metrics: { client: "Helios SaaS", impact: "99.99% Uptime" }
  },
  {
    title: "Vanguard Trust Shield",
    category: "Security",
    icon: FaLock,
    description: "A zero-trust identity assurance system and real-time internal threat detection dashboard utilizing biometric scanning and anomaly modeling.",
    imageGradient: "from-red-500/20 via-orange-500/20 to-pink-600/20",
    glowColor: "shadow-red-500/10 border-red-500/20",
    tags: ["OAuth2 / SAML", "Anomaly Analytics", "Express API", "Cyber Security"],
    metrics: { client: "Vanguard Group", impact: "Zero breaches logged" }
  }
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <div className="relative min-h-screen bg-black text-white">
      <Navbar />

      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black pointer-events-none"></div>

      <main className="max-w-7xl mx-auto px-6 py-32 relative z-10">
        {/* Page Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">Portfolio</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Explore our curated list of high-impact digital solutions designed, optimized, and deployed for our clients worldwide.
          </p>
        </div>

        {/* Categories / Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === category
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg"
                  : "bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`h-full bg-gradient-to-b from-white/5 to-transparent border rounded-3xl overflow-hidden flex flex-col hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 group ${project.glowColor}`}
              >
                {/* Image Mockup Panel */}
                <div className={`h-48 w-full bg-gradient-to-br ${project.imageGradient} relative flex items-center justify-center p-6 border-b border-white/5 group-hover:opacity-90 transition-opacity`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_rgba(0,0,0,0.4))]"></div>
                  <div className="w-16 h-16 rounded-2xl bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-lg group-hover:scale-110 transition-transform">
                    <project.icon className="text-3xl text-cyan-400" />
                  </div>
                </div>

                {/* Project Info Panel */}
                <div className="p-8 flex flex-col flex-1">
                  <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Badges/Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Impact & Client Info */}
                  <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <p className="text-gray-500 uppercase tracking-wider font-semibold">Client</p>
                      <p className="text-white font-medium mt-1">{project.metrics.client}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 uppercase tracking-wider font-semibold">Impact</p>
                      <p className="text-cyan-400 font-semibold mt-1">{project.metrics.impact}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
