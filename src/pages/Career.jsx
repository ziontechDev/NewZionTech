import React, { useRef, useState } from "react";
import { Mail, Upload, CheckCircle } from "lucide-react";
// import emailjs from "@emailjs/browser";
import PageBanner from "../reusable/PageBanner";
import careerBg from "../assets/careerBanner.jpg";

const Career = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");

  // Handle File Selection to show name
  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    
    // const SERVICE_ID = "YOUR_SERVICE_ID";
    // const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    // const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

    // emailjs
    //   .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
    //   .then(
    //     () => {
    //       alert("Application sent successfully!");
    //       e.target.reset();
    //       setFileName("");
    //       setLoading(false);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //       alert("Failed to send. Please try again.");
    //       setLoading(false);
    //     }
    //   );
  };

  return (
    <>
      <PageBanner title="Career" currentPage="Career" bgImage={careerBg} />

      <section className="py-16 md:py-24 bg-gray-50">
        <div className=" mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* === Left Side: Content === */}
            <div>
              <h4 className="text-secondary font-bold uppercase tracking-widest text-sm mb-3">
                Join Our Team
              </h4>
              <h2 className="text-3xl md:text-5xl font-bold text-heading mb-6">
                Build the Future with Ziontech
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                We are constantly seeking passionate, innovative, and courageous people. 
                At Ziontech, a career is not just a job but a life-changing experience.
              </p>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-secondary" />
                  Prefer email?
                </h4>
                <p className="text-slate-600 text-sm mb-4">
                  You can also send your CV directly to our HR department.
                </p>
                <a 
                  href="mailto:admin@zionteck.com" 
                  className="text-secondary font-bold underline hover:text-blue-800"
                >
                  admin@zionteck.com
                </a>
              </div>
            </div>

            {/* === Right Side: Application Form === */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Apply Now
              </h3>
              
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Full Name *</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="Full Name"
                  />
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Email Address *</label>
                    <input
                      type="email"
                      name="user_email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                      placeholder="Enter Email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Phone Number *</label>
                    <input
                      type="tel"
                      name="user_phone"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                      placeholder="Enter Phone Number"
                    />
                  </div>
                </div>

                {/* Resume Upload */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Upload Resume (PDF/Doc) *</label>
                  <div className="relative">
                    <input
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      required
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div className="w-full px-4 py-4 rounded-lg bg-blue-50 border-2 border-dashed border-blue-200 flex flex-col items-center justify-center text-center transition-colors hover:bg-blue-100">
                      {fileName ? (
                        <div className="flex items-center gap-2 text-blue-700 font-medium">
                          <CheckCircle className="w-5 h-5" />
                          {fileName}
                        </div>
                      ) : (
                        <>
                          <Upload className="w-6 h-6 text-blue-500 mb-2" />
                          <span className="text-sm text-blue-600 font-medium">Click to upload file</span>
                          <span className="text-xs text-blue-400 mt-1">Max size 5MB</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 rounded-xl font-bold text-white shadow-lg transition-all transform hover:-translate-y-1 ${
                    loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 hover:shadow-blue-500/30"
                  }`}
                >
                  {loading ? "Submitting..." : "Submit Application"}
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Career;