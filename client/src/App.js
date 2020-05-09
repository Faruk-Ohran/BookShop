import React, { Component } from "react";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Body from "./components/body";

import { getBooksFromDb } from "./services/bookService";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: "",
      search: "",
    };
  }

  async componentDidMount() {
    let books = await getBooksFromDb();
    this.setState({ books: books });
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
        <Body search={this.state.search} books={this.state.books} />
        <Footer />
      </div>
    );
  }
}

export default App;
