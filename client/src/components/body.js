import React from "react";
import SideMenu from "./sideMenu";
import ListBooks from "../services/bookService";

function body() {
  return (
    <div className="wrapper">
      <div className="container">
        <SideMenu />
        <ListBooks />
      </div>
    </div>
  );
}

export default body;
