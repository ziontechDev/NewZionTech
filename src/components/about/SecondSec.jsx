import React from 'react';
import { Target, Telescope, History } from 'lucide-react';
import fixedBgImg from "../../assets/aboutUs/fixedBg.jpg"

const SecondSec = () => {
  
  const cardData = [
    {
      icon: Target,
      heading: "Our Mission",
      text: "Develop a team of highly motivated and talented professionals to provide our customers effective technology platform to work with."
    },
    {
      icon: Telescope,
      heading: "Our Vision",
      text: "We will enable companies across the globe to be highly productive, profitable, innovative with our talented professionals to make the corporations simple, easy but still highly productive."
    },
    {
      icon: History,
      heading: "History",
      text: "Established in 2024, our software company is dedicated to crafting innovative solutions that redefine industry standards and empower businesses to thrive in the digital era."
    }
  ];

  return (
    // Section with Fixed Background Image
    <section 
      className="relative w-full min-h-[500px] py-10 px-6 flex items-center justify-center bg-fixed bg-cover bg-center bg-no-repeat"
      
      style={{ backgroundImage: `url(${fixedBgImg})` }}
    >
      
      {/* Dark Overlay to ensure text readability on top of the image */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        
        {/* Grid Layout for the 3 Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {cardData.map((item, index) => (
            // Glassmorphism Card
            <div 
              key={index}
              className="group flex flex-col items-center text-center p-8 md:p-10 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg shadow-2xl transition-all duration-300 hover:bg-white/20 hover:scale-[1.02]"
            >
              {/* Icon Container */}
              <div className="mb-6 p-4 rounded-full bg-white text-secondary shadow-lg">
                <item.icon className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
              </div>

              {/* Heading */}
              <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">
                {item.heading}
              </h3>

              {/* Text Content */}
              <p className="text-white text-sm md:text-base leading-relaxed font-medium">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecondSec;