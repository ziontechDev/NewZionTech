import React from "react";
import PageBanner from "../reusable/PageBanner";
import bannerBg from "../assets/servicesListBg/it.jpg";
import ServiceContent from "../reusable/ServiceContent";
import serviceImg from "../assets/services/it.jpg";
import CallToAction from "../reusable/CallToAction";

const ITService = () => {
  const areaFocusPoints = [
    // {
    //   title: "CMS Based Websites",
    //   desc: "Our developers have extensive experience building websites for nearly every industry using leading platforms including WordPress, Drupal, and Joomla.",
    // },
    // {
    //   title: "E-Commerce Applications",
    //   desc: "Whether you have an existing store or need a new one, we can help. We build powerful online stores using popular platforms like WooCommerce, Shopify, and Magento.",
    // },
    // {
    //   title: "API Development and Documentation",
    //   desc: "We specialize in building and integrating APIs of all types — including Voice, Video, Payment, Cloud, Accounting, and more — with clear, comprehensive documentation.",
    // },
    // {
    //   title: "Website Rescue and Optimisation",
    //   desc: "If your website is hacked, running slow, or facing issues, our expert team of developers and hosting specialists can rescue, secure, and optimize it for peak performance.",
    // },
  ];
  return (
    <>
      <PageBanner
        title="Managed IT Services"
        currentPage="Managed IT Services"
        bgImage={bannerBg}
        parentLinks={[{ label: "Services", path: "/services" }]}
      />
      {/* main content */}
      <ServiceContent
        currentServiceId="IT-services"
        serviceTitle="Transforming Ideas into Powerful Web Platforms"
        serviceImage={serviceImg}
        serviceDescription={
          <>
            <p>
              Managed IT services involve outsourcing IT operations to a
              specialized third-party provider, allowing businesses to focus on
              core activities while experts handle infrastructure, security, and
              support. ZionTech delivers comprehensive managed services tailored
              for efficiency and growth in the IT landscape.
            </p>
            <h1 className="text-2xl font-bold">Key Benefits</h1>
            <p>
              Managed services reduce overall IT costs through economies of
              scale and predictable monthly fees, often lower than in-house
              management. They enhance cybersecurity with 24/7 monitoring,
              proactive threat detection, and rapid incident response.
              Businesses gain access to advanced expertise and tools without
              heavy internal investments.
            </p>
            <h1 className="text-2xl font-bold">Core Services Offered</h1>
            <p>
              ZionTech provides network management, cloud optimization, data
              backups, and device support to minimize downtime. Proactive
              monitoring and automated updates ensure systems run smoothly.
              Disaster recovery and compliance services protect against
              disruptions.
            </p>
            <h1 className="text-2xl font-bold">Why Choose ZionTech</h1>
            <p>
              Partner with ZionTech for scalable solutions that align IT with
              business goals, freeing your team for innovation. Enjoy peace of
              mind from expert handling of evolving tech needs. Contact us to
              streamline your operations today.
            </p>
          </>
        }
        focusAreas={areaFocusPoints}
      />
      <CallToAction />
    </>
  );
};

export default ITService;
