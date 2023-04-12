import React from "react";
import { useDispatch } from "react-redux";
import { fetchSavedBlog } from "../../features/savedBlog/savedBlog";
import { fetchLikesUpdated } from "../../features/updateLikes/updateLike";

const BlogLikeUnlike = ({ blog }) => {
  // Dispatch
  const dispatch = useDispatch();

  // Destructered
  const { id, isSaved, likes } = blog || {};

  // saved handler
  const saveHandler = () => {
    dispatch(fetchSavedBlog(id));
  };

  // like handler
  const likeHandler = () => {
    dispatch(fetchLikesUpdated(id));
  };

  return (
    <div className='btn-group'>
      {/* <!-- handle like on button click --> */}
      <button className='like-btn' id='lws-singleLinks' onClick={likeHandler}>
        <i className='fa-regular fa-thumbs-up'></i> {likes}
      </button>
      {/* <!-- handle save on button click --> */}
      {/* <!-- use ".active" className and "Saved" text  if a post is saved, other wise "Save" --> */}
      <button
        className={`${isSaved && "active"} save-btn`}
        id='lws-singleSavedBtn'
        onClick={saveHandler}>
        <i className='fa-regular fa-bookmark'></i> Saved
      </button>
    </div>
  );
};

export default BlogLikeUnlike;
