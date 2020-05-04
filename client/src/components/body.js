import React from "react";
import SideMenu from "./sideMenu";
import ListBooks from "../services/bookService";

function body() {
  return (
    <div className="wrapper">
      <SideMenu />
      <ListBooks />
    </div>
  );
}

export default body;
