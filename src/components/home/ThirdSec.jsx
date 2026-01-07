import React from "react";
import { ArrowRight, Check } from "lucide-react";
import mainImage from "../../assets/team.jpg";
import smallImage from "../../assets/logo3.png";
import { Link } from "react-router-dom";

const ThirdSec = () => {
  const points = [
    "Strategic Digital Transformation",
    "Cloud-Native Architecture & Migration",
    "Data-Driven AI & Analytics Solutions",
  ];

  return (
    <section className="relative w-full overflow-hidden bg-lightBlue py-14 lg:py-25">
      {/* --- Background Decorative Shapes --- */}
      {/* Large left white shape */}
      <div className="absolute -left-20 top-0 h-full w-1/2 rounded-r-[150px] bg-white/80 lg:w-2/5 lg:rounded-r-[250px]"></div>
      {/* Small bottom right star shape */}
      <div className="absolute bottom-20 right-1/4 h-12 w-12 text-blue-200">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-full w-full animate-pulse"
        >
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>
      {/* Bottom center small circle */}
      <div className="absolute bottom-10 left-1/2 h-4 w-4 rounded-full border-2 border-blue-400"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-10 sm:px-10">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center">
          {/* === Left Column: Image Section === */}
          <div className="relative lg:w-1/2">
            {/* Floating small image circle */}
            <div className="absolute -top-12 right-4 z-20 h-24 w-24 p-2 overflow-hidden rounded-full border-[6px] bg-white border-white shadow-lg md:-top-16 md:right-12 md:h-32 md:w-32">
              <img
                src={smallImage}
                alt="IT Experts"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Main shaped image container */}
            <div className="relative z-10 overflow-hidden rounded-bl-[100px] rounded-br-[40px] rounded-tl-[40px] rounded-tr-[150px] shadow-2xl">
              <img
                src={mainImage}
                alt="IT Consulting Team discussing solutions"
                className="h-[350px] w-full object-cover md:h-[450px] lg:h-[550px]"
              />
              <div className="absolute inset-0 bg-blue-900/10"></div>
            </div>
          </div>

          {/* === Right Column: Content Section === */}
          <div className="lg:w-1/2 lg:pl-16">
            {/* Subheading */}
            <div className="mb-4 flex items-center font-semibold uppercase tracking-wider text-secondary">
              <span className="mr-2">•</span> Our company{" "}
              <span className="ml-2">•</span>
            </div>

            {/* Main Heading */}
            <h2 className="mb-6 text-3xl font-extrabold leading-tight text-heading md:text-4xl lg:text-[3rem]">
              Empowering Your Business with Precision Creativity and Innovation.
            </h2>

            {/* Description */}
            <p className="mb-6 text-md leading-relaxed text-gray-600">
              ZIONTECH we are committed to providing our clients with the
              best-in-class technological solutions. Our team of dedicated
              professionals ensures that every project we undertake is executed
              with precision, creativity, and innovation
            </p>

            {/* Points List */}
            <ul className="mb-8 space-y-5">
              {points.map((point, index) => (
                <li key={index} className="flex items-center">
                  <div className="mr-4 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                    <Check className="h-4 w-4 text-blue-600" strokeWidth={3} />
                  </div>
                  <span className="text-md font-medium text-black">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* === Animated Button === */}
            <Link to="/about">
            <button className="group relative inline-flex items-center justify-between overflow-hidden border-2 border-secondary rounded-full bg-secondary py-1 pl-8 pr-1 text-white hover:text-primary transition-all duration-300 ease-in-out">
              {/* Button Text */}
              <span className="relative z-10 text-base font-bold tracking-wide">
                Read more
              </span>

              {/* Arrow Circle (Visible initially) */}
              <div className="relative z-10 ml-6 flex h-12 w-12 items-center justify-center rounded-full border-2 border-secondary bg-white text-primary transition-colors duration-300 group-hover:bg-transparent">
                <ArrowRight className="h-6 w-6" />
              </div>

              {/* The expanding background animation element */}
              <div className="absolute right-2 top-1/2 h-12 w-12 -translate-y-1/2 scale-0 rounded-full bg-white transition-transform duration-500 ease-out group-hover:scale-[30]"></div>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSec;
