import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import SearchUser from "./component/SearchUser";

const Header = () => {
  const style = { textDecoration: "none" };
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <Link style={style} to="/">
          BlueBird
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav>
            <Link style={style} to="/">
              Posts
            </Link>
          </Nav>
        </Nav>
        <SearchUser />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
