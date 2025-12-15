import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactInfo = () => {
  const contactDetails = [
    {
      id: 1,
      title: "Email us",
      content: ["admin@zionteck.com"],
      icon: <Mail className="h-8 w-8 transition-colors duration-300" />,
    },
    {
      id: 2,
      title: "Call us",
      content: ["+968-97892123", "+968-92110122"],
      icon: <Phone className="h-8 w-8 transition-colors duration-300" />,
    },
    {
      id: 3,
      title: "Our Location",
      content: ["#1425 Mumtaz Area, RUWI,", "MUSCAT, SULTANATE OF OMAN."],
      icon: <MapPin className="h-8 w-8 transition-colors duration-300" />,
    },
    {
      id: 4,
      title: "Support Hours",
      content: ["8:00am to 7:00pm"],
      icon: <Clock className="h-8 w-8 transition-colors duration-300" />,
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-12">
      {/* custom keyframes for the shake animation */}
      <style>
        {`
          @keyframes shake {
            0% { transform: rotate(0deg); }
            25% { transform: rotate(-15deg); }
            50% { transform: rotate(15deg); }
            75% { transform: rotate(-5deg); }
            100% { transform: rotate(0deg); }
          }
          .group:hover .icon-shake {
            animation: shake 0.5s ease-in-out;
          }
        `}
      </style>

      <div className="container mx-auto px-4 sm:px-10">
        {/* Header */}
        <div className="mb-10 text-center">
          <h4 className="mb-3 text-sm font-bold uppercase tracking-widest text-secondary">
            • CONTACT US •
          </h4>
          <h2 className="text-4xl font-bold text-heading md:text-5xl">
            Our contact information
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {contactDetails.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col items-center justify-center border border-gray-200 bg-white p-10 text-center shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              {/* Icon Container */}
              <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-blue-50 text-secondary transition-all duration-300 group-hover:bg-secondary group-hover:text-white">
                <div className="icon-shake">{item.icon}</div>
              </div>

              {/* Title */}
              <h3 className="mb-4 text-2xl font-bold text-black">
                {item.title}
              </h3>

              {/* Content Lines */}
              <div className="space-y-1 text-gray-500">
                {item.content.map((line, idx) => (
                  <p key={idx} className="text-base leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
