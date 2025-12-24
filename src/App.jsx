import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
// Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";

import ScrollToTop from "./components/ScrollToTop";
import MobileService from "./servicesPages/MobileService";
import WebService from "./servicesPages/WebService";
import ErpService from "./servicesPages/ErpService";
import EcomService from "./servicesPages/EcomService";
import SmartDineService from "./servicesPages/SmartDineService";
import Blogs from "./pages/Blogs";
import Process from "./pages/Process";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />

      <main className="min-h-screen">
        <Routes>
          {/* main pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/process" element={<Process/>}/>
          <Route path="/contact" element={<Contact />} />

          {/* services pages */}
          <Route path="/mobile-app" element={<MobileService/>}/>
          <Route path="/web-development" element={<WebService/>}/>
          <Route path="/erp" element={<ErpService/>}/>
          <Route path="/e-commerce-development" element={<EcomService/>}/>
          <Route path="/smart-dine" element={<SmartDineService/>}/>
        </Routes>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
