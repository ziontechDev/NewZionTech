import React from "react";
import { ArrowRight } from "lucide-react";
import CtaBgImg from "../../assets/ctaBg.jpg"

const HomeCallToAction = () => {
  // Placeholder image - replace with your actual office meeting image
  const bgImage =CtaBgImg;

  return (
    <section className="relative h-[550px] w-full lg:h-[550px]">
      {/* === Background Image === */}
      <div
        className="absolute inset-0 z-0 h-full w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Dark Overlay to make text pop */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* === Content Container === */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-4">
        {/* === Glassmorphism Box === */}
        <div className="w-full max-w-5xl overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-md md:p-16 text-center">
          <h2 className="mb-6 text-3xl font-bold leading-tight text-white md:text-5xl">
            Ready to Accelerate Your <br className="hidden md:block" />
            Digital Transformation?
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-white md:text-xl">
            Partner with ZIONTECH to leverage innovative technology, optimize
            your operations, and drive sustainable growth in a digital-first
            world.
          </p>

          <div className="flex justify-center">
            <button className="group flex items-center gap-3 rounded-full bg-linear-to-r from-pink to-secondary px-8 py-4 text-base font-bold text-white transition-all  hover:shadow-lg hover:shadow-blue-500/30">
              Let's Work Together
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-secondary transition-transform group-hover:translate-x-1">
                <ArrowRight size={14} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCallToAction;
