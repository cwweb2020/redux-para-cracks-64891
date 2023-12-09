import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPost, getUser } from "../apis/posts";

const usePosts = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, user_posts, user } = useSelector((store) => store.posts);

  useEffect(() => {
    dispatch(getUser(id));
    dispatch(getPost(id));

    return () => {};
  }, [id]);

  return {
    user,
    user_posts,
    loading,
  };
};

export default usePosts;
