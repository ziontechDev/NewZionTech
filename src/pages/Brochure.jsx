import React from "react";
import PageBanner from "../reusable/PageBanner";
import brochureBg from "../assets/brochureBanner.jpg";
import brochurePdf from "../assets/brochure/companyBrochure.pdf";
import { Download } from "lucide-react";
import CallToAction from "../reusable/CallToAction";

const Brochure = () => {
  return (
    <>
      <PageBanner title="Brochure" currentPage="Brochure" bgImage={brochureBg} />

      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Company Profile & Services
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-8">
              Explore our detailed brochure to understand our vision, mission,
              and the full range of services we offer to transform your
              business.
            </p>

            {/* Download Button */}
            <a
              href={brochurePdf}
              download="Ziontech_Brochure.pdf"
              className="inline-flex items-center gap-2 bg-secondary hover:bg-primary text-white font-semibold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Download className="w-5 h-5" />
              Download Brochure
            </a>
          </div>

          {/* PDF Viewer Container */}
          <div className="w-full bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
            <object
              data={brochurePdf}
              type="application/pdf"
              className="w-full h-[500px] md:h-[800px]"
            >
              {/* fallback message if PDF is not supported in any browser */}
              <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-gray-50">
                <p className="text-lg text-slate-700 mb-4">
                  It appears your browser doesn't support inline PDF display.
                </p>
                <a
                  href={brochurePdf}
                  className="text-blue-600 font-bold underline hover:text-blue-800"
                >
                  Click here to download the PDF
                </a>
              </div>
            </object>
          </div>
        </div>
      </section>
      <CallToAction/>
    </>
  );
};

export default Brochure;
