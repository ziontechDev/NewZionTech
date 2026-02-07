import React from "react";
import PageBanner from "../reusable/PageBanner";
import blogBg from "../assets/blogsBanner.jpg";
import BlogsList from "../components/blog/BlogsList";
import CallToAction from "../reusable/CallToAction";

const Blogs = () => {
  return (
    <>
      <PageBanner title="Blogs" currentPage="Blogs" bgImage={blogBg} />
      <BlogsList/>
      <CallToAction/>
    </>
  );
};

export default Blogs;
