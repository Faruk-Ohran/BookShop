import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    };
  }
  render() {
    return (
      <div className="header">
        <div className="container">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand>
              <Link to="/">BOOKSTORE</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Form
                inline
                value={this.props.data.search}
                onChange={this.props.data.updateSearch}
                className={this.state.clicked ? "showSearch" : "hideSearch"}
              >
                <FormControl
                  type="text"
                  placeholder="Search all books"
                  className="mr-sm-2"
                />
              </Form>
              <Nav className="mr-auto">
                <Link
                  className="nav-link"
                  to="/"
                  onClick={() => {
                    this.setState({ clicked: false });
                  }}
                >
                  Home
                </Link>
                <Link
                  className="nav-link"
                  to="/books"
                  onClick={() => {
                    this.setState({ clicked: true });
                  }}
                >
                  Books
                </Link>
                <NavDropdown title="More" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Sign in
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">About</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default Header;
