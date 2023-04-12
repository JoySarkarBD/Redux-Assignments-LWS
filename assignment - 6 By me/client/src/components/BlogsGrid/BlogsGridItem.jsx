import React from "react";
import { Link } from "react-router-dom";

const BlogsGridItem = ({ blog }) => {
  // Destructured data from props
  const { id, image, createdAt, likes, title, tags, isSaved } = blog || {};

  const tagsContent = tags.map(tag => `#${tag}`).join(", ");

  return (
    <div className='lws-card'>
      <Link to={`/blogs/${id}`}>
        <img src={image} className='lws-card-image' alt='' />
      </Link>
      <div className='p-4'>
        <div className='lws-card-header'>
          <p className='lws-publishedDate'>{createdAt}</p>
          <p className='lws-likeCount'>
            <i className='fa-regular fa-thumbs-up'></i>
            {likes}
          </p>
        </div>
        <Link to={`/blogs/${id}`} className='lws-postTitle'>
          {title}
        </Link>
        <div className='lws-tags'>
          <span>{tagsContent}</span>
        </div>
        {/* <!-- Show this element if post is saved --> */}
        {isSaved && (
          <div className='flex gap-2 mt-4'>
            <span className='lws-badge'> Saved </span>
          </div>
        )}
        {/* <!-- Show this element if post is saved Ends --> */}
      </div>
    </div>
  );
};

export default BlogsGridItem;
