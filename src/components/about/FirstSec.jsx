import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FirstSec = () => {
  

  return (
    <section className="w-full bg-white py-10 md:py-15 px-4 sm:px-17">
      <div className=" mx-auto flex flex-col lg:flex-row items-start justify-between gap-5 lg:gap-20">
        
        {/* --- Left Column: Headings --- */}
        <div className="w-full lg:w-1/2">
          {/* Label with dots */}
          <div className="flex items-center gap-2 text-secondary font-bold text-sm tracking-widest uppercase mb-4">
            <span className="text-xl leading-none">•</span>
            <span>About Our Company</span>
            <span className="text-xl leading-none">•</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-heading leading-[1.15]">
           Enabling Technological Advancement for Today's Organizations
          </h2>
        </div>

        {/* --- Right Column: Content & Action --- */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8 pt-2">
          
          {/* Summarized Content */}
          <div className="text-gray-600 text-sm md:text-[16px] leading-relaxed space-y-4">
            <p>
              We are a software development company based in Oman that takes pride in doing things differently. We believe that a fun and respectful environment empowers happy employees to build great software.
            </p>
            <p>
              From experienced development teams to dedicated support, we apply best practices to deliver products we are proud of. Join us on a journey to build amazing digital solutions where innovation meets passion.
            </p>
          </div>

          {/* Button */}
          <div>
            <Link to="/contact">
            <button 
              className="group bg-linear-to-r from-pink to-secondary text-white rounded-full p-1.5 pr-8 flex items-center gap-4 transition-all hover:bg-black hover:shadow-lg"
            >
              <div className="bg-white p-3 rounded-full transition-transform group-hover:scale-105">
                <ArrowRight className="w-5 h-5 text-primary" strokeWidth={2.5} />
              </div>
              <span className="font-semibold text-sm md:text-base tracking-wide">
                Learn more
              </span>
            </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FirstSec;