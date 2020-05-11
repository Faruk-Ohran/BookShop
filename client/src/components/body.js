import React, { Component } from "react";
import SideMenu from "./sideMenu";
import AllBooks from "./AllBooks";

export class Body extends Component {
  render() {
    const {
      books,
      search,
      sortBooksNew,
      updateCategory,
      category,
    } = this.props;
    return (
      <div>
        <div className="wrapper">
          <div className="container">
            <SideMenu updateCategory={updateCategory} />
            <AllBooks
              sortBooksNew={sortBooksNew}
              search={search}
              books={books}
              category={category}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
