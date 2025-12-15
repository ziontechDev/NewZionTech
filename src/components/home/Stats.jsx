import React from "react";
import {
  MessageSquare,
  Briefcase,
  ChartNoAxesCombined,
  Users,
} from "lucide-react";

const Stats = () => {
  const statsData = [
    {
      id: 1,
      value: "780",
      label: "Coffee Consumes",
      icon: (
        <Users className=" text-secondary mb-4" strokeWidth={1.5} size={60} />
      ),
    },
    {
      id: 2,
      value: "560",
      label: "Enquiry Processed",
      icon: (
        <MessageSquare
          className="text-secondary mb-4"
          strokeWidth={1.5}
          size={60}
        />
      ),
    },
    {
      id: 3,
      value: "90%",
      label: "Related Business",
      icon: (
        <Briefcase
          className="text-secondary mb-4"
          strokeWidth={1.5}
          size={60}
        />
      ),
    },
    {
      id: 4,
      value: "1+",
      label: "Years of Experience",
      icon: (
        <ChartNoAxesCombined className="text-secondary mb-4" strokeWidth={1.5} size={60} />
      ),
    },
  ];

  return (
    <section className="bg-lightBlue py-10">
      <div className="container mx-auto px-4">
        {/* === Header Section === */}
        <div className="mb-16 text-center">
          <h4 className="mb-3 text-sm font-bold uppercase tracking-widest text-secondary">
            • facts •
          </h4>
          <h2 className="text-3xl font-bold text-heading md:text-5xl">
            Driving digital success through <br className="hidden md:block" />
            proven numbers and results
          </h2>
        </div>

        {/* === Stats Grid === */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 relative">
          {statsData.map((stat, index) => (
            <div
              key={stat.id}
              className="relative flex flex-col items-center justify-center text-center"
            >
              {stat.icon}
              <div className="mb-2 text-5xl font-extrabold text-heading">
                {stat.value}
              </div>
              <div className="text-gray-500 font-medium">{stat.label}</div>

              {index !== statsData.length - 1 && (
                <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 h-full items-center">
                  {/* The Line */}
                  <div className="h-full w-px bg-gray-300 relative">
                    {/* The Circle (Centered on the line) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full border-2 border-blue-500 bg-white"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
