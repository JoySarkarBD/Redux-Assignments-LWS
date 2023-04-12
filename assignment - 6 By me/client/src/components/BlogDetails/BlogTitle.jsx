import React from "react";

const BlogTitle = ({ blog }) => {
  // destructure
  const { title, tags } = blog || {};

  const tagContent = tags.map(tag => `#${tag}`).join(", ");

  return (
    <div>
      <h1 className='mt-6 text-2xl post-title' id='lws-singleTitle'>
        {title}
      </h1>
      <div className='tags' id='lws-singleTags'>
        <span>{tagContent}</span>
      </div>
    </div>
  );
};

export default BlogTitle;
