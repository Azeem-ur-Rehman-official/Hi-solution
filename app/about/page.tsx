"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaCogs,
  FaBullhorn,
  FaPenNib,
  FaRocket,
  FaPuzzlePiece,
  FaShieldAlt,
  FaLightbulb,
  FaChartLine,
  FaUsers,
  FaCodeBranch,
  FaMagic,
} from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const whatWeDo = [
  {
    icon: FaCode,
    title: "Web & App Development",
    description:
      "Building scalable, responsive, and high-performance digital platforms.",
  },
  {
    icon: FaCogs,
    title: "Custom Software",
    description:
      "Tailoring robust, intelligent software solutions unique to your business workflows.",
  },
  {
    icon: FaBullhorn,
    title: "Digital Marketing & SEO",
    description:
      "Driving targeted traffic, maximizing online visibility, and boosting your ROI.",
  },
  {
    icon: FaPenNib,
    title: "Content Creation & Design",
    description:
      "Crafting compelling narratives and stunning visuals that elevate your brand identity.",
  },
];

const missionPillars = [
  {
    icon: FaLightbulb,
    title: "Innovating Continuously",
    description:
      "Utilizing the latest tech stacks and agile methodologies to build future-ready software and applications.",
  },
  {
    icon: FaChartLine,
    title: "Driving Results",
    description:
      "Crafting data-driven marketing, SEO, and content strategies that yield measurable success for our clients.",
  },
  {
    icon: FaUsers,
    title: "Prioritizing Clients",
    description:
      "Understanding the unique DNA of every business we work with to deliver truly customized, high-impact results.",
  },
  {
    icon: FaMagic,
    title: "Fusing Tech & Creativity",
    description:
      "Combining flawless technical development with captivating design and storytelling to create unforgettable digital experiences.",
  },
];

const whyChooseUs = [
  {
    icon: FaRocket,
    title: "End-to-End Capabilities",
    description:
      "From initial wireframes and backend architecture to SEO optimization and market launch, we manage the entire lifecycle of your digital product.",
  },
  {
    icon: FaPuzzlePiece,
    title: "Tailored Approach",
    description:
      "We don't believe in one-size-fits-all. Every line of code we write and every campaign we launch is tailored precisely to your goals.",
  },
  {
    icon: FaShieldAlt,
    title: "Commitment to Excellence",
    description:
      "Quality, security, and scalability are at the core of everything we build.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative pt-40 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black"></div>
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-3xl"></div>

          <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-cyan-400 text-sm font-medium uppercase tracking-wider"
            >
              About Us
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mt-4 mb-6 leading-tight"
            >
              Where{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Innovation
              </span>{" "}
              Meets Execution
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              We are a full-service digital agency dedicated to transforming
              businesses through powerful technology and strategic digital
              solutions. In a rapidly evolving digital landscape, we don&apos;t
              just help you keep up — we help you lead.
            </motion.p>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div {...fadeUp} className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Welcome to <span className="text-white font-semibold">HiSolu</span>,
                where innovation meets execution. We are a full-service digital
                agency dedicated to transforming businesses through powerful
                technology and strategic digital solutions. In a rapidly evolving
                digital landscape, we don&apos;t just help you keep up — we help
                you lead.
              </p>
              <p>
                We bring together a talented team of developers, designers,
                marketers, and content creators to build bespoke digital
                experiences. From writing clean code for complex custom software
                to crafting high-converting digital marketing campaigns, we
                handle it all under one roof. Whether you are a startup looking
                to make your mark or an established enterprise aiming to
                optimize operations, HiSolu is your trusted partner in growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 to-black"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div {...fadeUp} className="text-center mb-16">
              <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">
                What We Do
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                Crafted Solutions, End to End
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                A complete suite of digital services designed to launch, scale,
                and elevate your brand.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whatWeDo.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="h-full p-8 bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-cyan-500/30 transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="text-2xl text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* VISION & MISSION */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
            {/* VISION */}
            <motion.div
              {...fadeUp}
              className="relative p-10 bg-gradient-to-br from-purple-500/10 via-white/5 to-transparent border border-white/10 rounded-3xl overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
              <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider relative z-10">
                Our Vision
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6 relative z-10">
                A Global Leader in Digital Transformation
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed relative z-10">
                To be a global leader in digital transformation, recognized for
                engineering innovative software and powerful digital strategies
                that empower businesses to achieve their highest potential in a
                connected world.
              </p>
            </motion.div>

            {/* MISSION */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative p-10 bg-gradient-to-br from-cyan-500/10 via-white/5 to-transparent border border-white/10 rounded-3xl overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl"></div>
              <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider relative z-10">
                Our Mission
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6 relative z-10">
                Bridging Tech &amp; Business Growth
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed relative z-10">
                Our mission is to deliver exceptional, end-to-end digital
                solutions that bridge the gap between technology and business
                growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* MISSION PILLARS */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-900/10 to-black"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div {...fadeUp} className="text-center mb-16">
              <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">
                How We Deliver
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                Four Pillars of Our Mission
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                The principles that drive every project, every campaign, and
                every line of code we ship.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {missionPillars.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-8 bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all group rounded-2xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/10 transition-colors">
                      <item.icon className="text-xl text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeUp} className="text-center mb-16">
              <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                Built on Trust, Delivered with Precision
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Three reasons our clients keep coming back — and referring
                others.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {whyChooseUs.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="h-full p-8 bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-cyan-500/30 transition-all group rounded-2xl"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="text-2xl text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              {...fadeUp}
              className="relative p-12 md:p-16 text-center bg-gradient-to-br from-cyan-500/10 via-white/5 to-purple-500/10 border border-white/10 rounded-3xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 to-transparent"></div>
              <div className="relative z-10">
                <FaCodeBranch className="text-4xl text-cyan-400 mx-auto mb-6" />
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Ready to Build Something Remarkable?
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                  Let&apos;s turn your vision into a high-performance digital
                  reality. Partner with HiSolu and lead the change.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Start Your Project
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
