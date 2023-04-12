import React from "react";
import { Link } from "react-router-dom";

const RelatedBlog = ({ singleRelatedBlog }) => {
  // Destructuring
  const { id, image, title, createdAt, tags } = singleRelatedBlog || {};

  const tagContent = tags.map(tag => `#${tag}`).join(", ");

  return (
    <div>
      {/* <!-- related post  --> */}
      <div className='card'>
        <Link to={`/posts/${id}`}>
          <img src={image} className='card-image' alt='' />
        </Link>
        <div className='p-4'>
          <Link
            to={`/posts/${id}`}
            className='text-lg post-title lws-RelatedPostTitle'>
            {title}
          </Link>
          <div className='mb-0 tags'>
            <span>{tagContent}</span>
          </div>
          <p>{createdAt}</p>
        </div>
      </div>
      {/* <!-- related post ends --> */}
    </div>
  );
};

export default RelatedBlog;
