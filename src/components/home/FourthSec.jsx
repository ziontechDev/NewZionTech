import React, { useRef } from "react";
import {
  Server,
  UtensilsCrossed,
  Smartphone,
  Globe,
  ShoppingCart,
  ArrowRight,
  MonitorCog
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import ErpImg from "../../assets/services/erp.jpg";
import mobileImg from "../../assets/services/mobile.jpg";
import webImg from "../../assets/services/web.jpg";
import ecomImg from "../../assets/services/ecom.jpg";
import dineImg from "../../assets/services/dine.jpg";
import itImg from "../../assets/services/it.jpg";
import { Link } from "react-router-dom";

const FourthSec = () => {
  const containerRef = useRef(null);

  const services = [
    {
      id: 1,
      title: "Customized ERP",
      description:
        "Streamline your entire business operation with a bespoke Enterprise Resource Planning system.",
      icon: <Server className="h-6 w-6 text-white" />,
      image: ErpImg,
      path:'/erp'
    },
    {
      id: 2,
      title: "Smart Dine",
      description:
        "Revolutionize the dining experience with our digital management suite. From QR code ordering to kitchen display systems.",
      icon: <UtensilsCrossed className="h-6 w-6 text-white" />,
      image: dineImg,
      path:'/smart-dine'
    },
    {
      id: 3,
      title: "Mobile Development",
      description:
        "Engage your customers on the go with high-performance native and cross-platform mobile apps.",
      icon: <Smartphone className="h-6 w-6 text-white" />,
      image: mobileImg,
      path:'/mobile-app'
    },
    {
      id: 4,
      title: "Web Development",
      description:
        "Establish a powerful online presence with our responsive web solutions. We build fast, SEO-optimized websites.",
      icon: <Globe className="h-6 w-6 text-white" />,
      image: webImg,
      path:'/web-development'
    },
    {
      id: 5,
      title: "E-commerce Development",
      description:
        "Drive sales with a secure and user-friendly online store. Secure payment gateways and inventory management.",
      icon: <ShoppingCart className="h-6 w-6 text-white" />,
      image: ecomImg,
      path:'/e-commerce-development'
    },
    {
      id: 6,
      title: "Managed IT Services",
      description:
        "Boost business efficiency with reliable and proactive managed IT services. Expert infrastructure management, robust cybersecurity, and 24/7 support.",
      icon: <MonitorCog className="h-6 w-6 text-white" />,
      image: itImg,
      path:'/it-services'
    },
  ];

  return (
    <section ref={containerRef} className="bg-white py-12 relative">
      <div className="container mx-auto px-4 mb-3 text-center max-w-4xl">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-widest text-secondary">
          • what we do •
        </h4>
        <h2 className="text-4xl md:text-5xl font-bold text-heading tracking-tighter uppercase mb-4">
          Our Development
        </h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-sm md:text-base text-gray-500">
            Being a quality-oriented software development company. ZIONTECH sets
            up and continuously maintains high standards of software
            engineering.
          </p>
        </div>
      </div>

      <div className="relative pb-10">
        {services.map((service, index) => {
          
          const targetScale = 1 - (services.length - index) * 0.1;

          return (
            <Card
              key={service.id}
              i={index}
              {...service}
              targetScale={targetScale}
              total={services.length}
            />
          );
        })}
      </div>
    </section>
  );
};

const Card = ({ i, title, description, icon, image, total, targetScale,path }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 1],
    [1, i === total - 1 ? 1 : 0]
  );

  return (
    <div
      ref={container}
      className="sticky top-12 flex h-screen items-start justify-center pt-4 mb-[-130px]"
    >
      <motion.div
        style={{
          scale: scale,
          opacity: opacity,
        }}
        className="relative flex h-[80vh] w-[95%] flex-col overflow-hidden rounded-3xl bg-cardBg shadow-2xl lg:w-[90%] lg:flex-row border border-gray-800"
      >
        {/* === Left Side: Content === */}
        <div className="flex h-1/1 flex-col justify-center p-6 lg:h-full lg:w-1/2 lg:p-12">
          <div className="mb-4 flex items-center justify-between lg:mb-8">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-blue-500/20 p-2 lg:p-3 border border-blue-500/30">
                {icon}
              </div>
            </div>
            <span className="font-mono text-lg lg:text-xl text-gray-400 opacity-50">
              {i + 1}/{total}
            </span>
          </div>

          <h2 className="mb-4 text-2xl font-bold leading-tight text-white lg:mb-6 lg:text-5xl">
            {title}
          </h2>

          <p className="mb-6 text-sm leading-relaxed text-gray-300 lg:mb-8 lg:text-base">
            {description}
          </p>

          <div>
            <Link to={path}>
            <button className="group flex items-center gap-3 rounded-full bg-linear-to-r from-pink to-secondary px-5 py-2 text-sm font-semibold text-white transition-all lg:px-6 lg:py-3 lg:text-base">
              Get started
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-secondary transition-transform group-hover:translate-x-1">
                <ArrowRight size={14} />
              </span>
            </button>
            </Link>
          </div>
        </div>

        {/* === Right Side: Image === */}

        <div className="relative h-1/2 w-full lg:h-full lg:w-1/2">
          <div className="absolute inset-0 bg-linear-to-t from-cardBg via-transparent to-transparent lg:hidden"></div>

          <img src={image} alt={title} className="h-full w-full object-cover" />
        </div>
      </motion.div>
    </div>
  );
};

export default FourthSec;
