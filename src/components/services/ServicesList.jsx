import React from "react";
import {
  Smartphone,
  Globe,
  Building2,
  ArrowRight,
  ShoppingCart,
  UtensilsCrossed,
  MonitorCog
} from "lucide-react";
import { Link } from "react-router-dom";
import mobileImg from "../../assets/servicesListBg/mobile.jpg";
import webImg from "../../assets/servicesListBg/web.jpg";
import ecomImg from "../../assets/servicesListBg/ecom.jpg";
import dineImg from "../../assets/servicesListBg/dine.jpg";
import erpImg from "../../assets/servicesListBg/erp.jpg";
import itImg from "../../assets/servicesListBg/it.jpg";

const ServicesList = () => {
  const services = [
    {
      id: 1,
      title: "Mobile Applications",
      description:
        "Create seamless, high-performance native and cross-platform mobile experiences for iOS and Android.",
      icon: <Smartphone strokeWidth={1.5} size={40} />,
      image: mobileImg,
      path: '/mobile-app'
    },
    {
      id: 2,
      title: "Advanced Web Applications",
      description:
        "Build scalable, responsive, and secure web solutions using cutting-edge technologies like React and Next.js.",
      icon: <Globe strokeWidth={1.5} size={40} />,
      image: webImg,
      path: '/web-development'
    },
    {
      id: 3,
      title: "Customized ERP",
      description:
        "Tailored Enterprise Resource Planning solutions designed to streamline your business processes, improve efficiency, and support scalable growth.",
      icon: <Building2 strokeWidth={1.5} size={40} />,
      image: erpImg,
      path: '/erp'
    },
    {
      id: 4,
      title: "E-commerce Development",
      description:
        "Build powerful, secure, and user-friendly online stores with custom features, seamless payment integration, and optimal performance.",
      icon: <ShoppingCart strokeWidth={1.5} size={40} />,
      image: ecomImg,
      path: '/e-commerce-development'
    },
    {
      id: 5,
      title: "Smart Dine",
      description:
        "Innovative restaurant management solutions featuring digital menus, online ordering, table reservations, and POS integration for a modern dining experience.",
      icon: <UtensilsCrossed strokeWidth={1.5} size={40} />,
      image: dineImg,
      path: '/smart-Dine'
    },
    {
      id: 6,
      title: "Managed IT Services",
      description:
        "Managed IT services outsource IT operations to a specialist provider, freeing businesses to focus on core activities while experts manage infrastructure, security, and support.",
      icon: <MonitorCog strokeWidth={1.5} size={40} />,
      image: itImg,
      path: '/it-services' 
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 sm:px-10">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h4 className="mb-3 text-sm font-bold uppercase tracking-widest text-secondary">
            • OUR SOLUTIONS •
          </h4>
          <h2 className="text-3xl font-bold text-heading md:text-5xl">
            Services we provide
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-100 p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* === BACKGROUND IMAGE (Always Visible) === */}
              <div className="absolute inset-0 z-0">
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/70 z-10" />
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* === CONTENT === */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon - Always White Background */}
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white text-secondary shadow-lg">
                  <div>{service.icon}</div>
                </div>

                {/* Text Content - Always White/Light */}
                <div className="mb-8">
                  <h3 className="mb-4 text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 mb-1">
                    {service.description}
                  </p>
                </div>

                {/* Read More Button - Rounded White BG */}
                <div className="mt-auto">
                  <Link
                    to={service.path}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-secondary transition-transform duration-300 hover:scale-105 active:scale-95"
                  >
                    Read more
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;