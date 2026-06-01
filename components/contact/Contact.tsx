"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import ContactForm from "./ContactForm";
const locations = [
  {
    city: "Lake City (lahore)",
    address: "123 Tech Street, Suite 400",
    zip: "CA 94105",
    phone: "+92 310 1627996"
  },
  {
    city: "Depalpur District (Okara)",
    address: "456 Innovation Ave, Floor 20",
    zip: "NY 10001",
    phone: "+92 310 1627996"
  }
];

const socialLinks = [
  { icon: FaFacebook, href: "https://facebook.com/hisolu", label: "Facebook" },
  { icon: FaTwitter, href: "https://twitter.com/hisolu", label: "Twitter" },
  { icon: FaInstagram, href: "https://instagram.com/hisolu", label: "Instagram" },
  { icon: FaLinkedin, href: "https://linkedin.com/company/hisolu", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com/hisolu", label: "GitHub" }
];

export default function Contact() {
  

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">Contact Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can help bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8"
          >
            <ContactForm/>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                    <FaEnvelope className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">hisolu1@outlook.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <FaPhone className="text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white">+92 310 1627996</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Locations */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Our Locations</h3>
              <div className="space-y-6">
                {locations.map((location) => (
                  <div key={location.city} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt className="text-pink-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{location.city}</h4>
                      <p className="text-gray-400 text-sm">{location.address}</p>
                      <p className="text-gray-400 text-sm">{location.zip}</p>
                      <p className="text-cyan-400 text-sm mt-1">{location.phone}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-cyan-500/20 hover:scale-110 transition-all"
                  >
                    <social.icon className="text-lg text-gray-400 hover:text-cyan-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}