import React from "react";
import SideMenu from "./sideMenu";
import Books from "./books";

function body() {
  return (
    <div className="wrapper">
      <div className="container">
        <SideMenu />
        <Books />
      </div>
    </div>
  );
}

export default body;
