import React from "react";
import { UserStar, Lightbulb, ListTodo, CalendarClock } from "lucide-react";

const features = [
  {
    title: "Quick solutions",
    description:
      "Rapidly address technical bottlenecks with agile methodologies designed to minimize downtime and accelerate software delivery.",
    icon: <Lightbulb strokeWidth={1.5} size={55} />,
  },
  {
    title: "Expert advice",
    description:
      "Leverage deep industry knowledge from seasoned tech architects to guide your digital transformation and stack selection.",
    icon: <UserStar strokeWidth={1.5} size={55} />,
  },
  {
    title: "Strategic planning",
    description:
      "Craft scalable technology roadmaps that align your IT infrastructure with long-term business goals and market trends.",
    icon: <ListTodo strokeWidth={1.5} size={55} />,
  },
  {
    title: "Efficient operations",
    description:
      "Streamline workflows through process automation and cloud optimization to reduce operational costs and enhance productivity.",
    icon: <CalendarClock strokeWidth={1.5} size={55} />,
  },
];

const SecondSec = () => {
  return (
    <section className="py-15 bg-white">
      <div className="container mx-auto px-4 sm:px-10">
        {/* Header Section */}
        <div className="text-center mb-7">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-secondary text-2xl leading-none">•</span>
            <span className="text-secondary font-bold tracking-widest text-sm uppercase">
              Number #1 Solver
            </span>
            <span className="text-secondary text-2xl leading-none">•</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-heading mb-2">
            Explore our core features
          </h2>
          <p className="text-gray-500 text-lg">
            Our mission is to empower businesses of thrive in solutions
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative border border-gray-200 bg-white p-8 h-full overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              {/* HOVER ANIMATION LAYER: */}
              <div className="absolute top-0 left-0 h-full w-0 bg-secondary transition-all duration-500 ease-in-out group-hover:w-full z-0"></div>

              {/* CONTENT LAYER: */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon Container */}
                <div className="mb-6 text-gray-700 transition-colors duration-300 group-hover:text-white">                 
                  <div className="inline-block p-2 border border-gray-300 rounded group-hover:border-white/30 transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-heading mb-4 transition-colors duration-300 group-hover:text-white">
                  {feature.title}
                </h3>

                <p className="text-gray-500 leading-relaxed transition-colors duration-300 group-hover:text-gray-100">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecondSec;
