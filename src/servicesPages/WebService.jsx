import React from "react";
import PageBanner from "../reusable/PageBanner";
import bannerBg from "../assets/servicesListBg/web.jpg";
import ServiceContent from "../reusable/ServiceContent";
import serviceImg from "../assets/services/web-2.jpg";
import CallToAction from "../reusable/CallToAction";

const WebService = () => {
  const areaFocusPoints = [
    {
      title: "CMS Based Websites",
      desc: "Our developers have extensive experience building websites for nearly every industry using leading platforms including WordPress, Drupal, and Joomla.",
    },
    {
      title: "E-Commerce Applications",
      desc: "Whether you have an existing store or need a new one, we can help. We build powerful online stores using popular platforms like WooCommerce, Shopify, and Magento.",
    },
    {
      title: "API Development and Documentation",
      desc: "We specialize in building and integrating APIs of all types — including Voice, Video, Payment, Cloud, Accounting, and more — with clear, comprehensive documentation.",
    },
    {
      title: "Website Rescue and Optimisation",
      desc: "If your website is hacked, running slow, or facing issues, our expert team of developers and hosting specialists can rescue, secure, and optimize it for peak performance.",
    },
  ];
  return (
    <>
      <PageBanner
        title="Advanced Web Applications"
        currentPage="Advanced Web Applications"
        bgImage={bannerBg}
        parentLinks={[{ label: "Services", path: "/services" }]}
      />
      {/* main content */}
      <ServiceContent
        currentServiceId="web-development"
        serviceTitle="Transforming Ideas into Powerful Web Platforms"
        serviceImage={serviceImg}
        serviceDescription={
          <>
            <p>
              We are a leading Advanced Web Application Development Company in
              Oman and across the globe. ZIONTECH brings together expert
              full-stack developers, UI/UX designers, DevOps engineers, and
              project managers to craft powerful, scalable, and modern web
              solutions tailored to your business success. With deep expertise
              in cutting-edge technologies, we deliver web applications that
              drive growth and outperform the competition.
            </p>
            <p>
              Our exceptional team boasts decades of experience building
              high-performance web platforms using the latest frameworks like
              React, Next.js, Node.js, and more. We focus on creating secure,
              responsive, and feature-rich applications that not only meet your
              core objectives but also provide an outstanding user experience.
              From initial concept to deployment and ongoing support, we
              prioritize quality, innovation, and long-term partnerships with
              our clients.
            </p>
            <p>
              Need a progressive web app (PWA) that works seamlessly across
              devices? Looking for a robust single-page application (SPA) with
              real-time features? Require a secure enterprise-grade portal or a
              custom backend API? Want a high-converting dashboard or SaaS
              platform? Whatever your vision, we can bring it to life. Where
              complexity challenges others, we excel—embracing modern
              architectures, cloud integration, microservices, and emerging
              technologies. Our developers are agile experts who design smart,
              build fast, and iterate continuously. Using a proven scrum-based
              agile methodology, we ensure superior quality, rapid delivery, and
              faster time-to-market for your web application.
            </p>
          </>
        }
        focusAreas={areaFocusPoints}
      />
      <CallToAction />
    </>
  );
};

export default WebService;
