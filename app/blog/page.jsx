import React from "react";
import BlogComponent from "../../components/Main/Blog";
import classes from "./page.module.scss";

const Blog = () => {
  return (
    <div className={classes.blog}>
      <h1>Blog</h1>
      <BlogComponent />
    </div>
  );
};

export default Blog;
