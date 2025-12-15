import React from 'react'
import PageBanner from '../reusable/PageBanner'; 
import serviceBg from '../assets/serviceBanner.jpg';
import ServicesList from '../components/services/ServicesList';
import CallToAction from '../reusable/CallToAction';

const Services = () => {
  return (
     <>
      <PageBanner 
        title="Our Services" 
        currentPage="Services" 
        bgImage={serviceBg} 
      />
      <ServicesList/>
      <CallToAction/>
    </>
  )
}

export default Services