import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from "./actions";

const RedditPage = ({ postId }) => {
const dispatch = useDispatch();
const post = useSelector(state => state.post.post);
const loading = useSelector(state => state.post.loading);
const error = useSelector(state => state.post.error);

useEffect(() => {
  dispatch(fetchPost(postId));
}, [dispatch, postId]);

return (
  <div>
 
    {loading && <p>loading...</p>}
    {error && <p>Error: {error}</p>}
    {post && <div>{JSON.stringify(post)}</div>}

  </div>
)

}




export default RedditPage;

