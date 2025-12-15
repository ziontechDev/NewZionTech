import React from "react";
import {
  Star,
  ShieldCheck,
  Clock,
  HeartHandshake,
  Users,
} from "lucide-react";
import corporateImg from "../../assets/aboutUs/office.jpg"

const ThirdSec = () => {
  const coreValues = [
    {
      icon: ShieldCheck,
      title: "TRUSTWORTHY",
      desc: "We have been successfully delivering projects across the OMAN for a decade.",
    },
    {
      icon: Clock,
      title: "RELIABLE",
      desc: "We have always made sure that the projects are delivered on time, everytime.",
    },
    {
      icon: HeartHandshake,
      title: "INTEGRITY",
      desc: "We abide by our core values of quality and have maintained that integrity throughout.",
    },
    {
      icon: Users,
      title: "CLIENT PRIORITY",
      desc: "We have always put the needs of our clients first before anything.",
    },
  ];

  return (
    <section className="w-full bg-white py-10 md:py-14 px-4 sm:px-10 flex justify-center">
      <div className=" w-full mx-auto relative">
        {/* Container for the Two Main Blocks */}
        <div className="flex flex-col lg:flex-row items-stretch">
          {/* --- LEFT SIDE: Content Box --- */}

          <div className="w-full lg:w-1/2 bg-[#EAF4FF] p-4 md:p-6 lg:p-10 relative">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-2 rounded-full font-bold text-xl mb-8 shadow-lg">
              <Star className="w-4 h-4 fill-white" />
              <span>Our Core Values</span>
            </div>

            {/* Content List */}
            <div className="space-y-5">
              {coreValues.map((item, index) => (
                <div key={index} className="flex gap-2 sm:gap-6">
                  {/* Icon */}
                  <div className="shrink-0">
                    <item.icon
                      className="w-8 h-8 text-blue-600"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1 uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed max-w-md">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- RIGHT SIDE: Image Box --- */}

          <div className="w-full lg:w-1/2 relative min-h-[200px] lg:min-h-[400px]">
            <div className="absolute inset-0 w-full h-full">
              <img
                src={corporateImg}
                alt="Office Meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSec;
