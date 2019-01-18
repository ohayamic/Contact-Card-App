import React, { Component } from "react";
import { Nav, Navbar, NavDropdown, NavItem, MenuItem } from "react-bootstrap";
import "./NavBar.css";
class GetNavBar extends Component {
  state = {};
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/" style={{ marginBottom: 5 }}>
              <img
                src="/assets/logo.png"
                alt="logo"
                style={{ width: 30, height: 30 }}
              />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="/">
              Home
            </NavItem>
            <NavItem eventKey={2} href="/about">
              About
            </NavItem>
            <NavItem eventKey={2} href="/blog">
              BLog
            </NavItem>
            <NavDropdown eventKey={3} title="Others" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1} />
              <MenuItem eventKey={3.2} />
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Contact</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default GetNavBar;
