import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import {
  ShieldCheck,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import companyLogo from "../../assets/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // menu items with their paths
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Process", path: "/process" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" }, 
  ];

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        if (!open) setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY, open]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* ================= TOP INFO (DESKTOP ONLY) ================= */}
      <div
        className={`hidden lg:block bg-secondary text-white overflow-hidden transition-all duration-500 ease-in-out ${
          isAtTop ? "max-h-[60px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto px-6">
          <div className="flex items-center justify-between text-sm py-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" />
              <span className="font-medium">
                Empowering Your Business with Precision Creativity and
                Innovation
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-semibold">
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4" /> +968-97892123
              </div>
              <span>|</span>
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4" /> +968-92110122
              </div>
              <span>|</span>
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" /> admin@zionteck.com
              </div>
              <span>|</span>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> 8am – 7pm
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAV ================= */}
      <div
        className={`transition-all duration-300 border-b ${
          isAtTop
            ? "bg-white/70 backdrop-blur-md border-transparent"
            : "bg-white shadow-sm border-gray-100"
        }`}
      >
        <div className="mx-auto px-4 sm:px-10">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src={companyLogo}
                alt="Ziontech"
                className="w-12 h-12 object-contain"
              />
              <div>
                <div className="text-2xl font-bold text-primary">ZIONTECH</div>
                <div className="text-xs text-gray-500">
                  IT Consulting & Solutions
                </div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-6 font-semibold">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="hover:text-primary transition"
                >
                  {item.name}
                </Link>
              ))}
              <GetQuoteButton />
            </nav>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* ================= OVERLAY ================= */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 lg:hidden transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* ================= MOBILE SLIDE MENU ================= */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full sm:w-[420px] bg-white h-screen overflow-y-auto
        transform transition-transform duration-300 ease-in-out lg:hidden
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="px-5 py-6 space-y-6">
          <div className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center gap-3">
              <img
                src={companyLogo}
                alt="Ziontech"
                className="w-10 h-10 object-contain"
              />
              <div className="leading-tight">
                <div className="text-lg font-bold text-primary">ZIONTECH</div>
                <div className="text-xs text-gray-500">
                  IT Consulting & Solutions
                </div>
              </div>
            </div>

            <button onClick={() => setOpen(false)} aria-label="Close Menu">
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-4 font-semibold">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="hover:text-primary transition"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* <GetQuoteButton /> */}

          <div className="pt-6 border-t border-gray-300">
            <h4 className="font-semibold mb-3 text-primary">
              Contact Information
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                +968-97892123
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                +968-92110122
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                admin@zionteck.com
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Support: 8am – 7pm
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ================= CTA BUTTON ================= */
function GetQuoteButton() {
  return (
    <Link to="/contact" >
      <button className="relative overflow-hidden flex items-center gap-3 pl-1 py-1 pr-3 rounded-full bg-secondary text-white border-2 border-secondary group">
        <span className="relative z-10 flex items-center justify-center w-9 h-9 rounded-full">
          <span className="absolute inset-0 rounded-full bg-white scale-0 group-hover:scale-[20] transition-transform duration-500 ease-out" />
          <span className="relative z-10 w-full h-full rounded-full bg-white text-primary flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition">
            <ArrowRight className="w-4 h-4" />
          </span>
        </span>
        <span className="relative z-10 font-medium group-hover:text-primary transition">
          Get Quote
        </span>
      </button>
    </Link>
  );
}
