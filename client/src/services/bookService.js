import React, { Component } from "react";
import axios from "axios";
import Books from "../components/books";

class ListBooks extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount = () => {
    this.getBooksFromDb();
  };

  getBooksFromDb = () => {
    axios
      .get("/api")
      .then((response) => {
        const books = response.data;
        this.setState({ data: books });
      })
      .catch((error) => {});
  };

  render() {
    return <Books books={this.state.data} />;
  }
}

export default ListBooks;
