import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { fetchComments } from "./../../helpers/fetchDetails";
import Container from "react-bootstrap/Container";
import "./PostPage.css";
import PostDetails from "../../component/PostDetails";
import { DataContext } from "./../../context/dataContext";

const PostPage = ({ match }) => {
  const postId = Number(match.params.postId);
  const [post, setPost] = useState({});
  const context = useContext(DataContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchComments(postId)
      .then((comments) => {
        const postDetails = context.posts.find((post) => post.id === postId);
        (postDetails || {}).comments = comments;
        setPost(postDetails);
      })
      .finally(() => setLoading(false));
  }, [context.posts, postId]);

  return (
    <>
      <Container>
          <PostDetails {...post} isLoading={context.loading || loading} />
      </Container>
    </>
  );
};

PostPage.propTypes = {
  match: PropTypes.object,
};
export default PostPage;
