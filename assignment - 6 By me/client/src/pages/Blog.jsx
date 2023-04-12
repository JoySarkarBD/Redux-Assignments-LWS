import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BlogDetails from "../components/BlogDetails/BlogDetails";
import BlogHeader from "../components/BlogHeader/BlogHeader";
import Loading from "../components/Loading/Loading";
import { fetchBlog } from "../features/blog/blogSlice";

const Post = () => {
  // use Selector
  const { blog, isLoading, isError, error } = useSelector(state => state.blog);

  // Dispatch
  const dispatch = useDispatch();

  // Use params
  const { blogId } = useParams();

  // usEffect
  useEffect(() => {
    dispatch(fetchBlog(blogId));
  }, [dispatch, blogId]);

  // decide what to render
  let content = null;

  if (isLoading) content = <Loading />;

  if (!isLoading && isError) {
    content = <div className='col-span-12'>{error}</div>;
  }

  if (!isError && !isLoading && !blog?.id) {
    content = <div className='col-span-12'>No video found!</div>;
  }

  if (!isError && !isLoading && blog?.id) {
    content = <BlogDetails blog={blog} />;
  }

  return (
    <div>
      <BlogHeader />
      {content}
    </div>
  );
};

export default Post;
