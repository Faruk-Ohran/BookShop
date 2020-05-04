import React, { Component } from "react";
import { Button } from "react-bootstrap";

class nav extends Component {
  state = {
    clicked: false,
  };

  render() {
    return (
      <div className="nav-border">
        <div className="container">
          <div className="menuDivBtn">
            <Button
              onClick={() => this.setState({ clicked: !this.state.clicked })}
              type="button"
              className="btn btn-outline-secondary"
            >
              Menu
            </Button>
          </div>
          <div className="row w-100 justify-content-center ">
            <div className="columna col-12 col-sm-12 col-md-12 col-lg-11 col-xl-11">
              <div className={this.state.clicked ? "showNav" : "hideNav"}>
                <ul className="nav nav-pills nav-fill navbar">
                  <ol className="nav-item">
                    <a className="nav-link" href="#">
                      Početna
                    </a>
                  </ol>
                  <ol className="nav-item">
                    <a className="nav-link" href="#">
                      Knjige
                    </a>
                  </ol>
                  <ol className="nav-item">
                    <a className="nav-link" href="#">
                      Magazin
                    </a>
                  </ol>
                  <ol className="nav-item">
                    <a className="nav-link" href="#">
                      Audio knjige
                    </a>
                  </ol>
                  <ol className="nav-item">
                    <a className="nav-link" href="#">
                      Preporučujemo
                    </a>
                  </ol>
                  <ol className="nav-item">
                    <a className="nav-link" href="#">
                      Kupovina
                    </a>
                  </ol>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default nav;
