import React from "react";
import { ChevronRight, CheckCheck } from "lucide-react";
import { Link } from "react-router-dom";

// Services ---
const servicesList = [
  { id: "mobile-app", name: "Mobile App Development", path: "/mobile-app" },
  {
    id: "web-development",
    name: "Advanced Web Development",
    path: "/web-development",
  },
  { id: "customized-erp", name: "Customized ERP", path: "/erp" },
  {
    id: "e-commerce-development",
    name: "E-commerce Development",
    path: "/e-commerce-development",
  },
  { id: "smart-dine", name: "Smart Dine", path: "/smart-Dine" },
];

const ServiceContent = ({
  serviceTitle,
  serviceImage,
  serviceDescription,
  currentServiceId,
  focusAreas = [],
}) => {
  return (
    <section className="w-full py-12 md:py-18 px-4 md:px-10 bg-white">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        {/* === LEFT COLUMN: Main Service Content === */}
        <div className="lg:col-span-8">
          {/* Service Image */}
          <div className="w-full h-[300px] md:h-[480px] rounded-sm overflow-hidden mb-8">
            <img
              src={serviceImage}
              alt={serviceTitle}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Service Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-6 leading-tight">
            {serviceTitle}
          </h2>

          {/* Service Description */}
          <div className="text-slate-600 text-[15px] sm:text-[16px] leading-relaxed space-y-4">
            {serviceDescription}
          </div>

          {/* ===  Areas we focus on === */}
          {focusAreas.length > 0 && (
            <div className="mt-5 pt-5 border-t border-gray-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                Areas we focus on
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                {focusAreas.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    {/* Tick Icon */}
                    <div className="shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mt-1">
                      <CheckCheck
                        className=" text-blue-600"
                        strokeWidth={3}
                        size={25}
                      />
                    </div>

                    {/* Content */}
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* === RIGHT COLUMN: Related Services Sidebar === */}
        <div className="lg:col-span-4 space-y-8">
          {/* Sidebar Box */}
          <div className="bg-gray-50 p-4 md:p-8 rounded-sm border border-gray-100 sticky top-8">
            {/* Sidebar Heading */}
            <div className="mb-8 relative">
              <h3 className="text-xl font-bold text-heading mb-3">
                Related service
              </h3>
              <div className="w-12 h-1 bg-secondary rounded-full"></div>
            </div>

            {/* Navigation Buttons List */}
            <div className="flex flex-col space-y-4">
              {servicesList.map((service) => {
                const isActive = currentServiceId === service.id;

                return (
                  <Link
                    key={service.id}
                    to={service.path}
                    className={`
                      group flex items-center justify-between px-6 py-4 rounded-sm text-sm md:text-base font-semibold transition-all duration-300
                      ${
                        isActive
                          ? "bg-secondary text-white shadow-md"
                          : "bg-gray-200 text-slate-700 hover:bg-gray-300 hover:text-secondary"
                      }
                    `}
                  >
                    <span>{service.name}</span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isActive ? "" : "group-hover:translate-x-1"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Contact Box */}
            <div className="mt-10 bg-primary text-white p-6 rounded-sm text-center">
              <h4 className="text-xl sm:text-3xl font-bold mb-2">
                Need help?
                <br />
                Feel free contact us
              </h4>
              <p className="text-blue-200 text-sm mb-4">
                Questions or need assistance? Speak directly with our team —
                just give us a call.
              </p>
              <div className="text-2xl font-bold">+968-97892123</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceContent;
