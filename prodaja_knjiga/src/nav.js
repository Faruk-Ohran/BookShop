import React, { Component } from "react";

class nav extends Component {
  state = {
    klik: false,
  };

  render() {
    return (
      <div>
        <ul className="nav nav-pills nav-fill navbar menu">
          <li className="nav-item pocetna-border">
            <a
              className="nav-link active pocetna menu "
              type="button"
              onClick={() => this.setState({ klik: !this.state.klik })}
            >
              Menu
            </a>
          </li>
        </ul>
        <div className="nav-border">
          <div className="navigacija">
            <div className={this.state.klik ? "menuOn" : "menuOff"}>
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
    );
  }
}

export default nav;
