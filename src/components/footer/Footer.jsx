import React from "react";
import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

import companyLogo from "../../assets/logo.png";

export default function Footer() {
  
  // Function to scroll smoothly to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-primary text-white relative">
      <div className="mx-auto px-6 sm:px-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Left: logo + address */}
          <div>
            <img
              src={companyLogo}
              alt="Ziontech logo"
              className="w-36 mb-4 object-contain"
            />

            <div className="flex items-start gap-3 text-sm text-white/90 mb-3">
              <MapPin className="w-4 h-4 mt-1" />
              <div>
                <div>123 Zion Street, Business Bay</div>
                <div>Muscat, Oman</div>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-3 text-sm text-white/90 mb-3">
              <Phone className="w-4 h-4" />
              <div>+968-97892123</div>
            </div>

            <div className="mt-2 flex items-center gap-3 text-sm text-white/90 mb-3">
              <Mail className="w-4 h-4" />
              <div>admin@zionteck.com</div>
            </div>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-primary
                transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-primary
                transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-primary
                transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <FaInstagram className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-primary
                transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="text-sm space-y-3">
              <li className="footer-link">Odoo Software</li>
              <li className="footer-link">Artificial Intelligence</li>
              <li className="footer-link">Mobile App Development</li>
              <li className="footer-link">Block Chain Technologies</li>
              <li className="footer-link">Product Development</li>
              <li className="footer-link">Development Process</li>
              <li className="footer-link">Advanced Web Development</li>
            </ul>
          </div>

          {/* Technology */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Technology</h3>
            <ul className="text-sm space-y-3">
              <li className="footer-link">Asp.Net</li>
              <li className="footer-link">Java / JEE</li>
              <li className="footer-link">Php</li>
              <li className="footer-link">Python</li>
              <li className="footer-link">Node JS</li>
              <li className="footer-link">IOS / Android</li>
              <li className="footer-link">Angular JS</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="text-sm space-y-3">
              <li className="footer-link">ZIONTECH</li>
              <li className="footer-link">Process</li>
              <li className="footer-link">Blog</li>
              <li className="footer-link">Hire Us</li>
            </ul>
          </div>
        </div>

        {/* --- GO TOP BUTTON  --- */}
        <button 
          onClick={scrollToTop}
          className="absolute sm:bottom-30 bottom-40 right-6 md:right-10 flex items-center justify-center w-12 h-12 rounded-full bg-white text-primary shadow-lg transition-all duration-300 hover:bg-blue-50 hover:-translate-y-1 z-20"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>

        {/* Copyright Section */}
        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/70 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} ZIONTECH. All rights reserved.</div>
          <div className="text-xs">
            Designed & Built by ZIONTECH • Privacy Policy • Terms
          </div>
        </div>
      </div>
    </footer>
  );
}