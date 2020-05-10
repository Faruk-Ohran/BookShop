import React, { Component } from "react";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Body from "./components/body";

import { getBooksFromDb } from "./services/bookService";
import books from "./components/books";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: "",
      search: "",
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
        />
        <Footer />
      </div>
    );
  }
}

export default App;
