import React, { Component } from "react";
import SideMenu from "./sideMenu";
import AllBooks from "./AllBooks";

export class Body extends Component {
  render() {
    const {
      books,
      search,
      sortBooksNew,
      category,
      updateCategory,
    } = this.props;
    return (
      <div className="wrapper container">
        <SideMenu updateCategory={updateCategory} />

        <AllBooks
          sortBooksNew={sortBooksNew}
          search={search}
          books={books}
          category={category}
        />
      </div>
    );
  }
}

export default Body;
