import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./Post.css";
const Post = ({ userId, userName, id, title }) => {
  return (
    <div data-testid={"post"} className="tupple" >
      <div className="post-by">
        <h5>
          <Link to={`/user/${userId}`}>
            <span className="text-white">{userName}</span>
          </Link>
        </h5>
      </div>
      <Link className="link" to={`/post/${id}`}>
        <div className="post-title">
          <p>
            <span className="text-white">{title}</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

Post.propTypes = {
  userId: PropTypes.number,
  id: PropTypes.number,
  title: PropTypes.string,
  userName: PropTypes.string
};
export default Post;
