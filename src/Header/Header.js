import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import SearchUser from "./component/SearchUser";
import './Header.css';

const Header = () => {

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <Link className="title" to="/">
          ToDo
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav>
            <Link className="menu" to="/">
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
