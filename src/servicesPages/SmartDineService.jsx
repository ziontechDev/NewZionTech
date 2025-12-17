import React from "react";
import PageBanner from "../reusable/PageBanner";
import bannerBg from "../assets/servicesListBg/dine.jpg";
import ServiceContent from "../reusable/ServiceContent";
import serviceImg from "../assets/services/dine-2.jpg";
import CallToAction from "../reusable/CallToAction";

const SmartDineService = () => {
  const areaFocusPoints = [
    {
      title: "Custom Smart Dine Development",
      desc: "We build fully customized restaurant management platforms from scratch, tailored to your brand, menu, and operations, delivering innovative features for seamless dining experiences.",
    },
    {
      title: "Smart Dine Platform Solutions",
      desc: "Expert implementation and customization of integrated restaurant systems, including digital menus, POS, ordering apps, and analytics dashboards to fit your unique restaurant needs.",
    },
    {
      title: "Third-Party Integrations",
      desc: "Seamlessly connect your Smart Dine system with payment gateways, delivery partners, loyalty programs, inventory management, accounting software, and marketing tools.",
    },
    {
      title: "System Migration & Upgrades",
      desc: "Safely migrate your existing restaurant system to our modern Smart Dine platform or upgrade to the latest features with no data loss, minimal disruption, and improved performance.",
    },
  ];
  return (
    <>
      <PageBanner
        title="Smart Dine"
        currentPage="Smart Dine"
        bgImage={bannerBg}
        parentLinks={[{ label: "Services", path: "/services" }]}
      />
      {/* main content */}
      <ServiceContent
        currentServiceId="smart-dine"
        serviceTitle="Transforming Dining with Intelligent Technology"
        serviceImage={serviceImg}
        serviceDescription={
          <>
            <p>
              We are a leading Smart Dine Restaurant Technology Solutions
              Provider in Oman and across the globe. ZIONTECH brings together
              expert full-stack developers, UI/UX designers, system integration
              specialists, POS experts, and dedicated project managers to
              deliver innovative, all-in-one digital dining platforms that
              transform restaurant operations and elevate customer experiences.
            </p>
            <p>
              Our skilled team has extensive experience building comprehensive
              restaurant management solutions, leveraging modern technologies
              like React, Next.js, Node.js, mobile frameworks, and secure cloud
              infrastructure. We create intuitive, fast, and reliable systems
              that integrate digital menus, online ordering, table reservations,
              POS, kitchen display systems, inventory management, and
              analytics—all in one seamless platform. From concept and design to
              deployment and continuous support, we focus on delivering
              efficiency, innovation, and strong, long-term partnerships with
              our clients.
            </p>
            <p>
              Need a complete digital restaurant solution with QR-code menus and
              contactless ordering? Want a branded mobile app for loyalty
              programs and push notifications? Looking for real-time table
              management, integrated payment processing, or delivery
              partnerships? Require advanced reporting dashboards or
              multi-branch management? Whatever your dining vision, we bring it
              to life. Where traditional systems fall short, we excel—building
              scalable, secure, and future-ready architectures with cloud
              hosting, real-time updates, and third-party integrations. Our
              agile developers think creatively, build efficiently, and iterate
              rapidly. Using a proven scrum-based methodology, we ensure
              top-quality delivery, faster time-to-launch, and a Smart Dine
              platform that boosts revenue, streamlines operations, and delights
              your customers.
            </p>
          </>
        }
        focusAreas={areaFocusPoints}
      />
      <CallToAction />
    </>
  );
};

export default SmartDineService;
