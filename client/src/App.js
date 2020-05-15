import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/header";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Body from "./components/body";
import Book from "./components/Book";

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
      <BrowserRouter>
        <div className="App">
          <Header
            data={{
              search: this.state.search,
              updateSearch: this.updateSearch.bind(this),
            }}
          />
          <Navbar />
          <Route
            exact
            path="/"
            render={() => (
              <Body
                sortBooksNew={this.sortBooksNew.bind(this)}
                search={this.state.search}
                books={this.state.books}
                category={this.state.category}
                updateCategory={this.updateCategory.bind(this)}
              />
            )}
          />
          <Route path="/:book_name" component={Book} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
