import React from "react";
import SideMenu from "./sideMenu";
import Books from "./books";

function body({ books, search, sortBooksNew }) {
  return (
    <div className="wrapper">
      <div className="container">
        <SideMenu />
        <Books sortBooksNew={sortBooksNew} search={search} books={books} />
      </div>
    </div>
  );
}

export default body;
