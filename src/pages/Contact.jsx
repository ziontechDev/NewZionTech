import React from 'react';
import PageBanner from '../reusable/PageBanner'; 
import contactBg from '../assets/contactBanner.jpg';
import ContactInfo from '../components/contact/ContactInfo';
import ContactFormAndMap from '../components/contact/ContactFormAndMap';
const Contact = () => {
  return (
    <>
      <PageBanner 
        title="Contact Us" 
        currentPage="Contact" 
        bgImage={contactBg} 
      />
      <ContactInfo/>
      <ContactFormAndMap/>
    </>
  );
};

export default Contact