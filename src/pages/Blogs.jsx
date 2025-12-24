import React from "react";
import PageBanner from "../reusable/PageBanner";
import blogBg from "../assets/blogsBanner.jpg";
import BlogsList from "../components/blog/BlogsList";

const Blogs = () => {
  return (
    <>
      <PageBanner title="Blogs" currentPage="Blogs" bgImage={blogBg} />
      <BlogsList/>
    </>
  );
};

export default Blogs;
