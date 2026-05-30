import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black pointer-events-none"></div>

      <main className="max-w-4xl mx-auto px-6 py-32 relative z-10">
        <div className="mb-12 text-center">
          <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">Legal</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-sm">
            Last Updated: May 30, 2026
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 space-y-8 backdrop-blur-sm">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 border-b border-white/10 pb-2">
              1. Introduction
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Welcome to Hisolu ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our software solutions and development services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 border-b border-white/10 pb-2">
              2. Information We Collect
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We may collect several types of information from and about users of our services, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 leading-relaxed">
              <li><strong>Personal Identifiers:</strong> Name, email address, phone number, and company name when you fill out our contact or project inquiry forms.</li>
              <li><strong>Usage Data:</strong> Information about your internet connection, the equipment you use to access our website, and usage details.</li>
              <li><strong>Client Data:</strong> Information provided to us during the course of providing software development, design, and customization services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 border-b border-white/10 pb-2">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use the information we collect for various purposes, including to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 leading-relaxed">
              <li>Provide, maintain, and optimize our software development and customization services.</li>
              <li>Respond to inquiries, provide quotes, and deliver customer support.</li>
              <li>Send marketing communications and updates regarding our services (where permitted).</li>
              <li>Monitor and analyze usage and trends to improve user experience.</li>
              <li>Ensure compliance with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 border-b border-white/10 pb-2">
              4. Data Security
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We implement robust technical and organizational security measures designed to secure your personal information from accidental loss and unauthorized access, use, alteration, or disclosure. However, please note that no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 border-b border-white/10 pb-2">
              5. Your Privacy Rights
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal data, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 leading-relaxed">
              <li>The right to access the personal data we hold about you.</li>
              <li>The right to request the correction of inaccurate personal data.</li>
              <li>The right to request the erasure of your personal data under certain conditions.</li>
              <li>The right to object to or restrict our processing of your data.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 border-b border-white/10 pb-2">
              6. Contact Us
            </h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at <a href="mailto:hello@hisolu.com" className="text-cyan-400 hover:underline">hello@hisolu.com</a> or use our separate <Link href="/contact" className="text-purple-400 hover:underline">Contact Page</Link>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
