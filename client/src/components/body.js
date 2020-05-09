import React from "react";
import SideMenu from "./sideMenu";
import Books from "./books";

function body({ books, search }) {
  return (
    <div className="wrapper">
      <div className="container">
        <SideMenu />
        <Books search={search} books={books} />
      </div>
    </div>
  );
}

export default body;
