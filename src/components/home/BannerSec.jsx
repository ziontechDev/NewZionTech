import React from "react";
import { ArrowRight } from "lucide-react";
import bannerImg from "../../assets/banner.jpg";
import { Link } from "react-router-dom";

export default function BannerSec() {
  return (
    <section className="relative h-screen min-h-[520px] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={bannerImg}
        alt="IT Consulting Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-3xl">
            {/* Top label */}
            <span className="inline-block mb-4 mt-15 text-sm tracking-widest uppercase text-white font-semibold opacity-0 animate-fade-up">
              Digital Consulting Agency
            </span>

            {/* Heading */}
            <h1 className="text-white font-extrabold leading-tight text-3xl sm:text-5xl lg:text-6xl opacity-0 animate-fade-up animate-delay-200">
              Smart IT Consulting <br className="hidden sm:block" />& Digital
              Solutions
            </h1>

            {/* Description */}
            <p className="mt-6 text-white text-sm sm:text-lg leading-relaxed opacity-0 animate-fade-up animate-delay-400">
              We empower businesses with scalable IT strategies, modern software
              solutions, cloud transformation, and digital innovation to
              accelerate growth and efficiency.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up animate-delay-600">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-linear-to-r from-pink to-secondary text-white 
                           font-medium transition-all duration-300 hover:opacity-95 hover:scale-[1.02]"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full border-2 border-white text-white
                           transition-all duration-300 hover:bg-white hover:text-primary"
              >
                Our Services               
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
