import React, { Component } from "react";

class SideMenu extends Component {
  render() {
    return (
      <div className="sideMenu col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
        <h4>Kategorija</h4>
        <div className="list-group">
          <button
            className="list-group-item list-group-item-action"
            value=""
            onClick={this.props.updateCategory}
          >
            Sve knjige
          </button>
          <button
            className="list-group-item list-group-item-action"
            value="Roman"
            onClick={this.props.updateCategory}
          >
            Roman
          </button>
          <button
            className="list-group-item list-group-item-action"
            value="Drama"
            onClick={this.props.updateCategory}
          >
            Drama
          </button>
          <button
            className="list-group-item list-group-item-action"
            value="Poezija"
            onClick={this.props.updateCategory}
          >
            Poezija
          </button>
        </div>
      </div>
    );
  }
}

export default SideMenu;
