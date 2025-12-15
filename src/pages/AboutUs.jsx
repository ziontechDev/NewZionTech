import React from 'react'
import PageBanner from '../reusable/PageBanner'; 
import aboutBg from '../assets/aboutBanner.jpg';
import CallToAction from '../reusable/CallToAction';
import FirstSec from '../components/about/FirstSec';
import SecondSec from '../components/about/SecondSec';
import ThirdSec from '../components/about/ThirdSec';

const AboutUs = () => {
  return (
     <>
      <PageBanner 
        title="About Us" 
        currentPage="About Us" 
        bgImage={aboutBg} 
      />
      <FirstSec/>
      <SecondSec/>
      <ThirdSec/>
      <CallToAction/>
    </>
  )
}

export default AboutUs