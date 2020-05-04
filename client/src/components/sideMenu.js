import React, { Component } from "react";

class sideMenu extends Component {
  render() {
    return (
      <div className="sideMenu col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
        <h4>Kategorija</h4>
        <div className="list-group">
          <a href="#" className="list-group-item list-group-item-action">
            Sve knjige
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Roman
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Drama
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Poezija
          </a>
        </div>
      </div>
    );
  }
}

export default sideMenu;
