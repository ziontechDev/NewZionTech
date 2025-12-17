import React from "react";
import PageBanner from "../reusable/PageBanner";
import bannerBg from "../assets/servicesListBg/mobile.jpg";
import ServiceContent from "../reusable/ServiceContent";
import serviceImg from "../assets/services/mobile.jpg";
import CallToAction from "../reusable/CallToAction";

const MobileService = () => {
  const areaFocusPoints = [
    {
      title: "iOS Development",
      desc: "ZIONTECH is a full-service iOS app development company providing services that cover the entire development cycle, from concept to distribution.",
    },
    {
      title: "Android Development",
      desc: "We provide Android app with services that cover the entire development cycle, from concept to distribution. Leveraging a proven agile methodology.",
    },
    {
      title: "Native Development",
      desc: "We pride ourselves on providing truly native software development solutions for a variety of platforms. We consider two different and separate levels.",
    },
    {
      title: "Hybrid App Development",
      desc: "ZIONTECH makes HTML5 hybrid mobile app development Cordova simple and easy. ZIONTECH is the most open hybrid app development platform.",
    },
  ];
  return (
    <>
      <PageBanner
        title="Mobile Applications"
        currentPage="Mobile Applications"
        bgImage={bannerBg}
        parentLinks={[{ label: "Services", path: "/services" }]}
      />
      {/* main content */}
      <ServiceContent
        currentServiceId="mobile-app"
        serviceTitle="Innovative Mobile Development for Modern Businesses"
        serviceImage={serviceImg}
        serviceDescription={
          <>
            <p>
              We are leading Mobile app Development Company in OMAN and all over
              the world. ZIONTECH is home for highly qualified iOS, Android,
              Windows, Graphic designers, quality control specialists and
              project managers to customize mobile strategy for success. We have
              rich domain expertise with vision to deliver result-relevant
              customer solutions.
            </p>
            <p>
              Our outstanding team has decades of experience in providing best
              optimized solutions in world's leading platforms. We emphasize
              more on quality technology driven mobility solutions, that not
              only fulfills our clients major requirements but also helps us to
              build long lasting liaison with the customer .We go an extra mile
              to ensure best quality of services and innovative solutions from
              idea generation to complete mobile application development and the
              maintenance.
            </p>
            <p>
              Do you need a custom, native iOS, Android or Windows app? Prefer a
              cross-platform responsive web app? Require a secure backend?
              Desire a mobile game? If you want it, we can build it. Where
              others struggle, we thrive. We also love building for new tech
              like IOT and wearables. Our developers are agile sprinters — they
              think fast and code even faster, iterating as they go. On any
              language you need, with any customizations you require, our mobile
              application developers always deliver. Our scrum-based agile
              process delivers higher productivity, quality, and faster time to
              market for your app.
            </p>
          </>
        }
        focusAreas={areaFocusPoints}
      />
      <CallToAction/>
    </>
  );
};

export default MobileService;
