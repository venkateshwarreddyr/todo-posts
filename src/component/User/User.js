import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";

const User = ({ username, name, email, website, company }) => {
  return (
    <Row data-testid={'user'}>
      <Col md={6} xs={12} className="card mb-4 bg-white text-dark post">
        <p>User Name: {username}</p>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Website: {website}</p>
      </Col>
      <Col md={6} xs={12} className="card mb-4 bg-dark text-white post">
        <p>Work: {(company || {}).name}</p>
        <p>Slogan: {(company || {}).catchPhrase}</p>
        <p>Base: {(company || {}).bs}</p>
      </Col>
    </Row>
  );
};

User.propTypes = {
  username: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  website: PropTypes.string,
  company: PropTypes.object,
};
export default User;
