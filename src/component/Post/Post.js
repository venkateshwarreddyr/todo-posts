import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Post.css";
const Post = ({ userId, userName, id, title }) => {
  return (
    <Row data-testid={"post"}>
      <Col md={5} className="card mb-4 bg-white text-dark post">
        <Link className="link" to={`/user/${userId}`}>
          <Row className="text-dark">
            <Col md={4} className="name-icon">
              <h1>{userName[0]}</h1>
            </Col>
            <Col>
              <h4>{userName}</h4>
            </Col>
          </Row>
        </Link>
      </Col>
      <Col md={7}>
        <Link className="link" to={`/post/${id}`}>
          <div className="card mb-4 text-white bg-dark">
            <div className="card-body">
              <h5 className="card-title float-left">{title}</h5>
            </div>
          </div>
        </Link>
      </Col>
    </Row>
  );
};

Post.propTypes = {
  userId: PropTypes.number,
  id: PropTypes.number,
  title: PropTypes.string,
  userName: PropTypes.string,
};
export default Post;
