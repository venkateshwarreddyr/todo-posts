import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";
import './PostDetails.css';

const Comments = ({ comments }) => {
  const commentsList = (comments || []).map((comment) => {
    return (
      <div key={comment.name}>
        <small className="card-text">Email: {comment.email}</small>
        <p className="card-text">Comment: {comment.body}</p>
        <hr />
      </div>
    );
  });
  return commentsList;
};

const PostDetails = ({ title, body, comments, userName }) => {
  return (
    <div data-testid={'postdetails'}>
      <Row className="userData">
          <h1 className="card-title">{userName}</h1>
      </Row>
      <Row>
        <Col md={8} xs={12} className="card mb-4 bg-dark text-white post">
          <h3 className="card-title">{title}</h3>
          <h5 className="card-text">{body}</h5>
        </Col>
        <Col md={4} xs={12} className="mb-4  postData">
          <div className="comments">
            <Comments comments={comments} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

PostDetails.propTypes = {
  title: PropTypes.string,
  userName: PropTypes.string,
  body: PropTypes.string,
  comments: PropTypes.array,
};
export default PostDetails;
