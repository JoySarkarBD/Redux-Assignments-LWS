import React from "react";

const BlogDescription = ({ blog }) => {
  return (
    <div className='mt-6'>
      <p>{blog.description}</p>
    </div>
  );
};

export default BlogDescription;
