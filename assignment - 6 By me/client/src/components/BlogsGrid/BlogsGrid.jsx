import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../features/blogs/blogsSlice";
import Loading from "../Loading/Loading";
import BlogsGridItem from "./BlogsGridItem";

const BlogsGrid = ({ sorted }) => {
  // Use Selector
  const { blogs, isLoading, isError, error } = useSelector(
    state => state.blogs
  );

  const { filterSort } = useSelector(state => state.savedBlogs);

  // dispatch
  const dispatch = useDispatch();

  // Use Effect
  useEffect(() => {
    dispatch(fetchBlogs(sorted));
  }, [dispatch, sorted]);

  // decide what to render
  let content;

  if (isLoading) content = <Loading />;

  if (!isLoading && isError) {
    content = <div className='col-span-12'>{error}</div>;
  }

  if (!isLoading && !isError && blogs?.length === 0) {
    content = (
      <div className='col-span-12'> No Blogs are Available Here Now!!</div>
    );
  }

  if (!isLoading && !isError && blogs?.length > 0) {
    content = blogs
      ?.filter(blog => {
        if (filterSort === "saved") return blog.isSaved;
        else return true;
      })
      ?.map(blog => <BlogsGridItem blog={blog} key={blog.id} />);
  }

  return (
    <div className='post-container' id='lws-postContainer'>
      {content}
    </div>
  );
};

export default BlogsGrid;
