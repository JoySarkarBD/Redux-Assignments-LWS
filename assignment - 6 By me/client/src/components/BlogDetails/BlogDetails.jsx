import React from "react";
import RelatedBlogs from "../RelatedBlog/RelatedBlogs";
import BlogDescription from "./BlogDescription";
import BlogImage from "./BlogImage";
import BlogLikeUnlike from "./BlogLikeUnlike";
import BlogTitle from "./BlogTitle";

const BlogDetails = ({ blog }) => {
  // Destructured
  const { id, tags } = blog || {};

  return (
    <div className='post-page-container'>
      <div className='post'>
        <BlogImage blog={blog} />
        <div>
          <BlogTitle blog={blog} />
          <BlogLikeUnlike blog={blog} />
          <BlogDescription blog={blog} />
        </div>
      </div>
      <RelatedBlogs currentBlogId={id} tags={tags} />
    </div>
  );
};

export default BlogDetails;
