import React from "react";
import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
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
          {/* === COLUMN 1: Logo + Description + Socials === */}
          <div>
            <img
              src={companyLogo}
              alt="Ziontech logo"
              className="w-36 mb-6 object-contain"
            />

            {/* Small Description */}
            <p className="text-sm text-white/80 leading-relaxed mb-6">
              Transforming businesses with cutting-edge technology solutions. We
              are dedicated to delivering innovation and excellence in every
              project.
            </p>

            {/* Social Icons  */}
            <div className="flex gap-3">
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

          {/* === COLUMN 2: Services === */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="text-sm space-y-3">
              <li>
                <Link
                  to="/mobile-app"
                  className="footer-link hover:text-blue-300 transition-colors"
                >
                  Mobile Applications
                </Link>
              </li>
              <li>
                <Link
                  to="/web-development"
                  className="footer-link hover:text-blue-300 transition-colors"
                >
                  Advanced Web Applications
                </Link>
              </li>
              <li>
                <Link
                  to="/erp"
                  className="footer-link hover:text-blue-300 transition-colors"
                >
                  Customized ERP
                </Link>
              </li>
              <li>
                <Link
                  to="/e-commerce-development"
                  className="footer-link hover:text-blue-300 transition-colors"
                >
                  E-commerce Development
                </Link>
              </li>
              <li>
                <Link
                  to="/smart-dine"
                  className="footer-link hover:text-blue-300 transition-colors"
                >
                  Smart Dine
                </Link>
              </li>
              <li>
                <Link
                  to="/it-services"
                  className="footer-link hover:text-blue-300 transition-colors"
                >
                  Managed IT Services
                </Link>
              </li>
            </ul>
          </div>

          {/* === COLUMN 3: Useful Links  === */}
          <div>
            <h3 className="text-lg font-bold mb-4">Useful Links</h3>
            <ul className="text-sm space-y-3">
              <li>
                <Link
                  to="/"
                  className="footer-link hover:text-blue-300 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="footer-link hover:text-blue-300 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="footer-link hover:text-blue-300 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/process"
                  className="footer-link hover:text-blue-300 transition-colors"
                >
                  Process
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="footer-link hover:text-blue-300 transition-colors"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="footer-link hover:text-blue-300 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* === COLUMN 4: Reach Us  === */}
          <div>
            <h3 className="text-lg font-bold mb-4">Reach Us</h3>

            {/* Address */}
            <div className="flex items-start gap-3 text-sm text-white/90 mb-4">
              <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
              <div className="leading-relaxed">
                <div>#1425 Mumtaz Area, RUWI,</div>
                <div>MUSCAT, SULTANATE OF OMAN.</div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 text-sm text-white/90 mb-4">
              <Phone className="w-4 h-4 shrink-0" />
              <div>+968-97892123</div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 text-sm text-white/90 mb-4">
              <Mail className="w-4 h-4 shrink-0" />
              <div>admin@zionteck.com</div>
            </div>
          </div>
        </div>

        {/* --- GO TOP BUTTON --- */}
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
