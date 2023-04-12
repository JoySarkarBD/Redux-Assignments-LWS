import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedBlogs } from "../../features/relatedBlogs/relatedBlogsSlice";
import Loading from "../Loading/Loading";
import RelatedBlog from "./RelatedBlog";

const RelatedBlogs = ({ currentBlogId, tags }) => {
  // use Selector
  const { relatedBlogs, isLoading, isError, error } = useSelector(
    state => state.relatedBlogs
  );

  // dispatch
  const dispatch = useDispatch();

  // use Effect
  useEffect(() => {
    dispatch(fetchRelatedBlogs({ tags, id: currentBlogId }));
  }, [dispatch, tags, currentBlogId]);

  // decide what to render
  let content = null;

  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <div className='col-span-12'>{error}</div>;

  if (!isLoading && !isError && relatedBlogs?.length === 0)
    content = <div className='col-span-12'> No related videos found!!</div>;

  if (!isLoading && !isError && relatedBlogs?.length > 0)
    content = relatedBlogs.map(singleRelatedBlog => (
      <RelatedBlog
        singleRelatedBlog={singleRelatedBlog}
        key={singleRelatedBlog.id}
      />
    ));

  return (
    <div>
      <aside>
        <h4 className='mb-4 text-xl font-medium' id='lws-relatedPosts'>
          Related Posts
        </h4>
        <div className='space-y-4 related-post-container'>{content}</div>
      </aside>
    </div>
  );
};

export default RelatedBlogs;
