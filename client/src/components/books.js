import React, { Component } from "react";
import bookIcon from "../assets/400x400.png";
import { getBooksFromDb } from "../services/bookService";

class books extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: "",
    };
  }

  async componentDidMount() {
    let books = await getBooksFromDb();
    this.setState({ books: books });
  }

  render() {
    const { books } = this.state;
    return (
      <div className="container books">
        <div className="container-fluid p-0">
          <div className="row">
            {books.length <= 0
              ? "LOADING..."
              : books.map((book) => (
                  <div
                    className="columna col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"
                    key={book.id}
                  >
                    <img src={bookIcon} alt="Generic placeholder" />
                    <h5 className="name">{book.name}</h5>
                    <span className="author">{book.author}, </span>
                    <span className="category">{book.category}</span> <br />
                    <span className="price">{book.price} KM</span>
                  </div>
                ))}
          </div>
        </div>
      </div>
    );
  }
}

export default books;
