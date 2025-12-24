import React from "react";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

// blog images
import aiImg from "../../assets/blogs/ai.jpg";
import cloudImg from "../../assets/blogs/cloud.jpg";
import appsImg from "../../assets/blogs/apps.jpg";
import uiImg from "../../assets/blogs/ui.jpg";
import seoImg from "../../assets/blogs/seo.jpg";
import blockchainImg from "../../assets/blogs/blockchain.jpg";
import remoteImg from "../../assets/blogs/remote.jpg";

const BlogsList = () => {
  // --- Mock Data for Main Blogs ---
  const blogs = [
    {
      id: 1,
      title: "The Future of AI in Enterprise Solutions",
      image: aiImg,
      author: "Alex Morgan",
      date: "Dec 22, 2025",
      desc: "Artificial Intelligence is no longer a buzzword but a core driver of business innovation. Discover how enterprise solutions are evolving with predictive analytics and automated decision-making processes.",
    },
    {
      id: 2,
      title: "Navigating Cloud Security Challenges",
      image: cloudImg,
      author: "Sarah Jenkins",
      date: "Dec 18, 2025",
      desc: "As businesses migrate to the cloud, security remains a top concern. We explore the latest protocols, encryption standards, and best practices to keep your corporate data safe in a distributed environment.",
    },
    {
      id: 3,
      title: "Top Mobile App Trends for 2026",
      image: appsImg,
      author: "David Lee",
      date: "Nov 30, 2025",
      desc: "From 5G integration to AR experiences, mobile app development is shifting gears. Learn what users expect from modern apps and how developers can stay ahead of the curve.",
    },
    {
      id: 4,
      title: "Optimizing UI/UX for Better Conversion",
      image: uiImg,
      author: "Emily Chen",
      date: "Nov 15, 2025",
      desc: "A pretty interface isn't enough anymore. We dive deep into user psychology and behavioral patterns to design interfaces that not only look good but effectively drive sales and user retention.",
    },
  ];

  // --- Mock Data for Related Posts ---
  const relatedPosts = [
    {
      id: 101,
      title: "Why SEO Matters for Local Business",
      image: seoImg,
      author: "Mark T.",
      date: "Oct 10, 2025",
      desc: "Local search strategies that put your business on the map.",
    },
    {
      id: 102,
      title: "Blockchain Beyond Crypto",
      image: blockchainImg,
      author: "Jane D.",
      date: "Sep 28, 2025",
      desc: "How supply chains are using ledger tech for transparency.",
    },
    {
      id: 103,
      title: "Remote Work Tools Guide",
      image: remoteImg,
      author: "Sam W.",
      date: "Sep 15, 2025",
      desc: "The essential software stack for distributed teams.",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-10 bg-gray-50">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* ================= LEFT SECTION: MAIN BLOG FEED ================= */}
        <div className="lg:col-span-8">
          {/* Section Header */}
          <div className="mb-6 sm:mb-12">
            <h4 className="text-secondary font-bold uppercase tracking-widest text-sm mb-2">
              Our Blog
            </h4>
            <h2 className="text-3xl md:text-5xl font-bold text-heading mb-4">
              Latest News & Articles
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl">
              Insights into the world of technology, digital transformation, and
              business growth strategies.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col"
              >
                {/* Image */}
                <div className="h-56 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="sm:p-6 p-4 flex flex-col grow">
                  {/* Meta Data */}
                  <div className="flex items-center gap-4 text-xs text-slate-500 font-medium mb-3">
                    <div className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-secondary" />
                      <span>{blog.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-secondary" />
                      <span>{blog.date}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-heading mb-3 hover:text-secondary transition-colors cursor-pointer">
                    <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 grow">
                    {blog.desc}
                  </p>

                  {/* Read More Button */}
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-secondary font-bold text-sm hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT SECTION: RELATED POSTS ================= */}
        <div className="lg:col-span-4 space-y-8">
          {/* Sidebar Container */}
          <div className="sticky top-24 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
            {/* Sidebar Heading */}
            <div className="mb-6 pb-4 border-b border-gray-100 flex items-center justify-between">
              <h3 className="text-xl sm:text-2xl font-bold text-heading">Related Posts</h3>
              <div className="bg-blue-100 p-1.5 rounded-md">
                <Clock className="w-4 h-4 text-secondary" />
              </div>
            </div>

            {/* List of Related Posts */}
            <div className="space-y-6">
              {relatedPosts.map((post) => (
                <div key={post.id} className="group flex flex-col gap-3">
                  {/* Image */}
                  <div className="w-full h-40 rounded-xl overflow-hidden relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded-md backdrop-blur-sm">
                      {post.date}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div>
                    <div className="flex items-center gap-2 text-xs text-secondary font-semibold mb-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>

                    <h4 className="text-base font-bold text-heading mb-2 leading-tight group-hover:text-secondary transition-colors cursor-pointer">
                      <Link to='/'>{post.title}</Link>
                    </h4>

                    {/* Description */}
                    <p className="text-slate-500 text-xs line-clamp-1">
                      {post.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Newsletter */}
            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
              <p className="text-sm font-semibold text-slate-800 mb-2">
                Want more updates?
              </p>
              <button className="w-full py-2.5 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-secondary transition-colors">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsList;
