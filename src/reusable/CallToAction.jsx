import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="w-full bg-secondary relative overflow-hidden py-10 md:py-14">
      
      {/* --- Background Decorative Elements --- */}
      
      {/* Large Circle (Bottom Left)  */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/10  pointer-events-none"></div>
      
      {/* Large Circle (Top Right)  */}
      <div className="absolute -top-24 -right-20 w-80 h-80 rounded-full bg-white/10  pointer-events-none"></div>

      {/* Floating Stars  */}
      <Star className="absolute top-15 left-[5%] text-white/40 w-6 h-6 animate-pulse fill-current" />
      <Star className="absolute bottom-10 right-[25%] text-white/30 w-8 h-8 animate-pulse delay-700 fill-current" />
      <Star className="absolute top-8 right-12 text-white/50 w-4 h-4 fill-current" />

      {/* --- Content Wrapper  --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Text Section */}
        <div className="text-center md:text-left space-y-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wide leading-tight">
            Let's get in touch
          </h2>
          <p className="text-white/90 text-sm md:text-lg font-medium leading-relaxed max-w-xl mx-auto md:mx-0">
            Our approach to support is simple we help you every way we can. 
            We're real people who really care.
          </p>
        </div>

        {/* Button Section */}
        <div className="shrink-0">
            <Link to="/contact">
          <button className="group relative cursor-pointer bg-white rounded-full p-1.5 pr-6 flex items-center gap-3 transition-transform hover:scale-105 active:scale-95 shadow-xl">
            {/* Icon Circle */}
            <div className="bg-secondary rounded-full p-2.5 flex items-center justify-center text-white transition-opacity group-hover:opacity-90">
              <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
            </div>
            
            {/* Button Text */}
            <span className="text-secondary font-bold text-sm uppercase tracking-wide">
              Lets talk now
            </span>
          </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CallToAction;