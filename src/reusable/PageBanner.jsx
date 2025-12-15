import React from "react";
import { ChevronRight, Home } from "lucide-react";

const PageBanner = ({
  title,
  bgImage ,
  currentPage,
}) => {
  return (
    <section
      className="relative h-[400px] w-full bg-cover bg-center lg:h-[550px]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* === Light Overlay === */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* === Content === */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center text-white">
        {/* Page Title */}
        <h1 className="mt-20 mb-6 text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
          {title}
        </h1>

        {/* Breadcrumb Pill */}
        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-2 backdrop-blur-sm transition-colors hover:bg-white/10">
          <a
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            <Home size={14} />
            <span>Home</span>
          </a>

          <ChevronRight size={14} className="text-gray-500" />

          <span className="text-sm font-semibold text-blue-400">
            {currentPage || title}
          </span>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
