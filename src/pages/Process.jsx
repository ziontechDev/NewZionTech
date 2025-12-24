import React, { useRef } from 'react';
import PageBanner from "../reusable/PageBanner";
import processBg from "../assets/processBanner.jpg";
import { motion, useScroll, useSpring } from 'framer-motion';
import { MessageCircle, FileText, Code2, Rocket } from 'lucide-react';

// stage images
import stage1Img from "../assets/process/stage1.jpg"
import stage2Img from "../assets/process/stage2.jpg"
import stage3Img from "../assets/process/stage3.jpg"
import stage4Img from "../assets/process/stage4.jpg"
import CallToAction from '../reusable/CallToAction';

const Process = () => {
  const containerRef = useRef(null);

  // Scroll Progress 
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const steps = [
    {
      id: 1,
      title: "Discovery & Consultation",
      icon: MessageCircle,
      desc: "We align our vision with yours. We listen to your ideas, understand your business goals, and identify the technical requirements to ensure we build exactly what you need.",
      color: "bg-blue-500",
      shadow: "shadow-blue-500/50",
      image: stage1Img
    },
    {
      id: 2,
      title: "Strategy & Planning",
      icon: FileText,
      desc: "We create detailed wireframes and architectural plans. We define the user journey, select the right tech stack, and set milestones for a smooth process.",
      color: "bg-indigo-500",
      shadow: "shadow-indigo-500/50",
      image: stage2Img
    },
    {
      id: 3,
      title: "Design & Development",
      icon: Code2,
      desc: "Our designers create stunning visuals while developers write clean code. We build your product iteratively, keeping you in the loop with regular updates.",
      color: "bg-purple-500",
      shadow: "shadow-purple-500/50",
      image: stage3Img
    },
    {
      id: 4,
      title: "Testing & Launch",
      icon: Rocket,
      desc: "We rigorously test every feature to ensure security and performance. Once polished, we launch your product and provide ongoing support to help you scale.",
      color: "bg-pink-500",
      shadow: "shadow-pink-500/50",
      image: stage4Img
    },
  ];

  return (
    <>
    <PageBanner title="Process" currentPage="Process" bgImage={processBg} />
    <section className="w-full py-10 md:py-18 bg-slate-50" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-24">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-secondary font-bold uppercase tracking-widest text-sm mb-3"
          >
            Our Workflow
          </motion.h4>
          <h2 className="text-3xl md:text-5xl font-bold text-heading">
            From Concept to Reality
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* === THE VERTICAL LINES === */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2 rounded-full"></div>
          
          <motion.div 
            style={{ scaleY }}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-blue-500 via-purple-500 to-pink-500 -translate-x-1/2 rounded-full origin-top z-10"
          ></motion.div>

          {/* === STEPS LOOP === */}
          <div className="space-y-16 md:space-y-32">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div 
                  key={step.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
                  className={`relative flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-0`}
                >
                  
                  {/* === LEFT SIDE Desktop: Text/Image  === */}
                  <div className={`w-full md:w-[42%] ${isEven ? "md:text-right" : "order-last md:order-first"}`}>
                    
                    {/* Desktop Content Logic */}
                    <div className="hidden md:block">
                      {isEven ? (
                        // EVEN (Desktop): Text Card
                        <div className="relative z-20">
                          <h3 className="text-2xl font-bold text-heading mb-4">{step.title}</h3>
                          <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                        </div>
                      ) : (
                        // ODD (Desktop): Image
                        <motion.div 
                          variants={{ hidden: { opacity: 0.5, filter: "grayscale(100%)", scale: 0.9 }, visible: { opacity: 1, filter: "grayscale(0%)", scale: 1 } }}
                          transition={{ duration: 0.5 }}
                          className="w-full h-64 rounded-2xl overflow-hidden shadow-lg border-4 border-white"
                        >
                          <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                        </motion.div>
                      )}
                    </div>

                    {/* MOBILE CONTENT:  */}
                    <div className="block md:hidden">
                       {/* 1. Image  */}
                       <div className="w-full h-56 rounded-xl overflow-hidden shadow-md mb-6">
                          <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                       </div>
                       
                       {/* 2. Title & Desc */}
                       <h3 className="text-2xl font-bold text-heading mb-3">{step.title}</h3>
                       <p className="text-slate-600 leading-relaxed text-sm">{step.desc}</p>
                    </div>

                  </div>

                  {/* === CENTER ICON (HIDDEN ON MOBILE) === */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-20">
                    <motion.div 
                      variants={{
                        hidden: { scale: 0.8, boxShadow: "0 0 0 rgba(0,0,0,0)" },
                        visible: { scale: 1.2, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }
                      }}
                      className={`w-16 h-16 rounded-full border-4 border-white flex items-center justify-center transition-shadow duration-500 ${step.color} ${step.shadow}`}
                    >
                      <step.icon className="w-7 h-7 text-white" />
                    </motion.div>
                  </div>

                  {/* === RIGHT SIDE (Desktop Only Logic) === */}
                  
                  <div className={`w-full md:w-[42%] ${isEven ? "" : "md:text-left"} hidden md:block`}>
                    {isEven ? (
                       // EVEN (Desktop): Image
                      <motion.div 
                        variants={{ hidden: { opacity: 0.5, filter: "grayscale(100%)", scale: 0.9 }, visible: { opacity: 1, filter: "grayscale(0%)", scale: 1 } }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-64 rounded-2xl overflow-hidden shadow-lg border-4 border-white"
                      >
                         <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                      </motion.div>
                    ) : (
                      // ODD (Desktop): Text Card
                      <div className="relative z-20">
                        <h3 className="text-2xl font-bold text-heading mb-4">{step.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                      </div>
                    )}
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
    <CallToAction/>
    </>
  );
};

export default Process;