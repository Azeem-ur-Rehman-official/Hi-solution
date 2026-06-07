import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/hisol.png"
                alt="Hisolu"
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm">
              Building the future of digital solutions. Your vision, our
              expertise.
            </p>
          </div>
          <div className="flex md:flex-row flex-wrap gap-12">
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Cloud Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    AI Solutions
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Hisolu1@outlook.com</li>
                <li>+92 310 1627996</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2018 Hisolu. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="text-gray-500 hover:text-cyan-400 transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <a
              href="#"
              className="text-gray-500 hover:text-cyan-400 transition-colors text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
