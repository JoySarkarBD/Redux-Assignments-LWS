import React from "react";

const BlogImage = ({ blog }) => {
  return (
    <div>
      <img
        src={blog.image}
        alt='githum'
        className='w-full rounded-md'
        id='lws-megaThumb'
      />
    </div>
  );
};

export default BlogImage;
