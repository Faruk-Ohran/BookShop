import React, { Component } from "react";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Body from "./components/Body";

import { getBooksFromDb } from "./services/bookService";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: "",
      search: "",
      category: "",
    };
  }

  async componentDidMount() {
    const books = await getBooksFromDb();
    this.setState({ books: books });
  }

  sortBooksNew() {
    const booksReverse = this.state.books.reverse();
    this.setState({ books: booksReverse });
  }

  updateSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  updateCategory = (e) => {
    this.setState({ category: e.target.value });
  };

  render() {
    return (
      <div>
        <Header
          data={{
            search: this.state.search,
            updateSearch: this.updateSearch.bind(this),
          }}
        />
        <Navbar />
        <Body
          sortBooksNew={this.sortBooksNew.bind(this)}
          search={this.state.search}
          books={this.state.books}
          updateCategory={this.updateCategory.bind(this)}
          category={this.state.category}
        />

        <Footer />
      </div>
    );
  }
}

export default App;
