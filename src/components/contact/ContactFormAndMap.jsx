import React from "react";
import { ArrowRight } from "lucide-react";

const ContactFormAndMap = () => {
  const serviceOptions = [
    "Odoo Software",
    "Artificial Intelligence",
    "Mobile App Development",
    "Block Chain Technologies",
    "Product Development",
    "Development Process",
    "Advanced Web Development",
  ];

  // Address for the map query
  const mapAddress = "1425 Mumtaz Area, Ruwi, Muscat, Sultanate of Oman";
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    mapAddress
  )}&output=embed`;

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4 sm:px-10">
        <div className="flex flex-col overflow-hidden bg-[#F8FAFC] shadow-sm lg:flex-row">
          {/* === Left Side: Contact Form === */}
          <div className="w-full p-8 lg:w-1/2 lg:p-16">
            <h2 className="mb-8 text-2xl sm:text-6xl font-bold leading-tight text-heading md:text-4xl">
              Feel free to <span className="text-secondary">get in touch</span>{" "}
              or
              <br />
              visit our location.
            </h2>

            <form className="space-y-6">
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-gray-600"
                  >
                    Full name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder=""
                    className="w-full border-b border-gray-300 bg-transparent py-2 text-black outline-none transition-colors focus:border-blue-600"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-gray-600"
                  >
                    Email address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder=""
                    className="w-full border-b border-gray-300 bg-transparent py-2 text-black outline-none transition-colors focus:border-blue-600"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Option Dropdown */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-semibold text-gray-600"
                  >
                    Phone number*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder=""
                    className="w-full border-b border-gray-300 bg-transparent py-2 text-black outline-none transition-colors focus:border-blue-600"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="service"
                    className="text-sm font-semibold text-gray-600"
                  >
                    Choose an option
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      className="w-full appearance-none border-b px-4 border-gray-300 bg-transparent py-2 text-black outline-none transition-colors focus:border-blue-600"
                    >
                      <option value="" disabled selected>
                        Select service
                      </option>
                      {serviceOptions.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {/* Custom Arrow for Select */}
                    <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3: Message */}
              <div className="space-y-2 pt-4">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-gray-600"
                >
                  Type message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full border-b border-gray-300 bg-transparent py-2 text-black outline-none transition-colors focus:border-blue-600 resize-none"
                ></textarea>
              </div>

              {/* Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="group flex items-center gap-3 rounded-full bg-cardBg pl-2 pr-6 py-2 text-white transition-all hover:bg-blue-600"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white transition-transform group-hover:scale-110 group-hover:bg-white group-hover:text-blue-600">
                    <ArrowRight size={18} />
                  </span>
                  <span className="font-semibold">Send message</span>
                </button>
              </div>
            </form>
          </div>

          {/* === Right Side: Google Map === */}
          <div className="w-full lg:w-1/2">
            <iframe
              title="Ziontech Location"
              width="100%"
              height="100%"
              className="min-h-[400px] w-full border-0 lg:h-full"
              loading="lazy"
              allowFullScreen
              src={mapSrc}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormAndMap;
