import React, { Component } from "react";
import Logo from "../assets/Logo.png";
import Cart from "../assets/Cart.png";
import { Form, FormControl } from "react-bootstrap";
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
      <div className="Header">
        <div className="container">
          <div className="row">
            <Link to="/" className="Logo col-4 col-sm-4 col-md-7">
              <img
                src={Logo}
                onClick={() => {
                  this.setState({ clicked: false });
                }}
              ></img>
              <div
                className="Brand-name"
                onClick={() => {
                  this.setState({ clicked: false });
                }}
              >
                BOOKSTORE
              </div>
            </Link>
            <div
              className={
                this.state.clicked
                  ? "right col-8 col-sm-8 col-md-5"
                  : "right-reverse col-8 col-sm-8 col-md-5"
              }
            >
              <Form
                className={this.state.clicked ? "show" : "hide"}
                value={this.props.data.search}
                onChange={this.props.data.updateSearch}
              >
                <FormControl
                  type="text"
                  placeholder="Search all books"
                  className="pretrazi"
                />
              </Form>
              <ul className="Navigation">
                <ol className="Button">
                  <Link
                    className="Home nav-link"
                    to="/"
                    onClick={() => {
                      this.setState({ clicked: false });
                    }}
                  >
                    Home
                  </Link>
                </ol>
                <ol className="Button">
                  <Link
                    className="Books nav-link"
                    to="/books"
                    onClick={() => {
                      this.setState({ clicked: true });
                    }}
                  >
                    Books
                  </Link>
                </ol>
                <ol className="Button-sign">
                  <Link className="Sign nav-link">Sign in</Link>
                </ol>
                <img type="button" src={Cart}></img>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
