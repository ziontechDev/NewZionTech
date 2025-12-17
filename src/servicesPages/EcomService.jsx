import React from "react";
import PageBanner from "../reusable/PageBanner";
import bannerBg from "../assets/servicesListBg/ecom.jpg";
import ServiceContent from "../reusable/ServiceContent";
import serviceImg from "../assets/services/ecom-2.jpg";
import CallToAction from "../reusable/CallToAction";

const EcomService = () => {
  const areaFocusPoints = [
    {
      title: "Custom E-commerce Development",
      desc: "We build fully customized online stores from the ground up, tailored to your brand, products, and business goals, delivering unique features and exceptional shopping experiences.",
    },
    {
      title: "Platform-Based E-commerce Solutions",
      desc: "Expert development on leading platforms like WooCommerce, Shopify, and Magento, with custom themes, plugins, and extensions to match your specific requirements.",
    },
    {
      title: "Third-Party Integrations",
      desc: "Seamlessly integrate your e-commerce store with payment gateways, shipping providers, ERP/CRM systems, marketing tools, inventory management, and analytics platforms.",
    },
    {
      title: "E-commerce Migration & Upgrades",
      desc: "Safely migrate your existing store to a new platform or upgrade to the latest version with zero data loss, minimal downtime, and enhanced performance and security.",
    },
  ];
  return (
    <>
      <PageBanner
        title="E-commerce Development"
        currentPage="E-commerce Development"
        bgImage={bannerBg}
        parentLinks={[{ label: "Services", path: "/services" }]}
      />
      {/* main content */}
      <ServiceContent
        currentServiceId="e-commerce-development"
        serviceTitle="Expert E-commerce Development & Integration"
        serviceImage={serviceImg}
        serviceDescription={
          <>
            <p>
              We are a leading E-commerce Development Company in Oman and across
              the globe. ZIONTECH unites skilled full-stack developers, UI/UX
              designers, payment integration specialists, performance
              optimizers, and dedicated project managers to build powerful,
              secure, and high-converting online stores that fuel your business
              growth and deliver exceptional shopping experiences.
            </p>
            <p>
              Our talented team has decades of experience crafting successful
              e-commerce platforms using industry-leading technologies such as
              WooCommerce, Shopify, Magento, React, Next.js, Node.js, and custom
              solutions. We specialize in creating fast-loading,
              mobile-responsive, and feature-packed stores that not only meet
              your sales goals but also delight customers with seamless
              navigation and intuitive checkout flows. From strategy and design
              to development, launch, and ongoing maintenance, we emphasize
              quality, security, scalability, and lasting client relationships.
            </p>
            <p>
              Need a brand-new online store from scratch? Want to migrate or
              upgrade an existing platform? Looking for custom features like
              advanced product configurators, subscription models, multi-vendor
              marketplaces, or personalized recommendations? Require secure
              payment gateways, inventory management, or integrations with ERP,
              CRM, and shipping providers? Whatever your e-commerce vision, we
              make it a reality. Where standard solutions limit possibilities,
              we shine—delivering tailored architectures, headless commerce,
              progressive web apps, and cutting-edge optimizations. Our agile
              developers think strategically, code efficiently, and iterate
              quickly. With our proven scrum-based methodology, we guarantee
              superior quality, faster time-to-market, and an e-commerce
              platform that drives revenue and customer loyalty.
            </p>
          </>
        }
        focusAreas={areaFocusPoints}
      />
      <CallToAction />
    </>
  );
};

export default EcomService;
