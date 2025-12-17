import React from "react";
import PageBanner from "../reusable/PageBanner";
import bannerBg from "../assets/servicesListBg/erp.jpg";
import ServiceContent from "../reusable/ServiceContent";
import serviceImg from "../assets/services/erp.jpg";
import CallToAction from "../reusable/CallToAction";

const ErpService = () => {
  const areaFocusPoints = [
    {
      title: "Custom ERP Development",
      desc: "We design and build fully customized Enterprise Resource Planning systems tailored to your unique business processes, integrating finance, HR, inventory, sales, and more into a single powerful platform.",
    },
    {
      title: "ERP Module Customization",
      desc: "Enhance or extend existing ERP systems with bespoke modules and features that address your specific industry requirements and operational workflows.",
    },
    {
      title: "Third-Party ERP Integration",
      desc: "Seamlessly connect your ERP with CRM, e-commerce platforms, payment gateways, analytics tools, and other third-party systems for streamlined data flow and automation.",
    },
    {
      title: "ERP Migration & Upgrades",
      desc: "Safely migrate from legacy or outdated ERP systems to modern, scalable solutions while ensuring data integrity, minimal downtime, and improved performance.",
    },
  ];
  return (
    <>
      <PageBanner
        title="Customized ERP"
        currentPage="Customized ERP"
        bgImage={bannerBg}
        parentLinks={[{ label: "Services", path: "/services" }]}
      />
      {/* main content */}
      <ServiceContent
        currentServiceId="customized-erp"
        serviceTitle="Empower Your Enterprise with Smart ERP Solutions"
        serviceImage={serviceImg}
        serviceDescription={
          <>
            <p>
              We are a leading Customized ERP Solutions Provider in Oman and
              worldwide. ZIONTECH assembles a dedicated team of ERP specialists,
              business analysts, full-stack developers, integration experts, and
              project managers to deliver tailored Enterprise Resource Planning
              systems that perfectly align with your unique business processes
              and goals.
            </p>
            <p>
              Our seasoned team brings decades of experience in designing,
              developing, and implementing robust ERP solutions customized for
              diverse industries. We leverage modern technologies, proven
              frameworks, and best practices to build scalable, secure, and
              intuitive systems that integrate finance, HR, inventory, supply
              chain, sales, and more into a unified platform. From in-depth
              requirement analysis to seamless deployment and post-launch
              support, we focus on delivering measurable value, operational
              efficiency, and long-term client success.
            </p>
            <p>
              Need a fully customized ERP to replace fragmented legacy systems?
              Looking for a modular solution that grows with your business?
              Require deep integrations with third-party tools, CRM, e-commerce,
              or analytics platforms? Want real-time reporting, automated
              workflows, or industry-specific features? No matter how complex
              your requirements, we turn them into reality. Where off-the-shelf
              solutions fall short, we thrive—building flexible, future-ready
              architectures with cloud deployment, microservices, and advanced
              security. Our agile development approach ensures rapid iterations,
              superior quality, and faster time-to-value, empowering your
              organization with an ERP system that drives productivity and
              competitive advantage.
            </p>
          </>
        }
        focusAreas={areaFocusPoints}
      />
      <CallToAction />
    </>
  );
};

export default ErpService;
