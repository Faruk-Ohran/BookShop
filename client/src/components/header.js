import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    };
  }
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
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

                <button className="logout" onClick={this.onLogoutClick}>
                  Logout
                  {user.name === undefined ? "" : "," + user.name.split(" ")[0]}
                </button>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Header);
