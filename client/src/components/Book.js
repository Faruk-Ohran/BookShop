import React, { Component } from "react";
import { getBooksFromDb } from "../services/bookService";

class Book extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookName: null,
      books: "",
    };
  }

  async componentDidMount() {
    const bookName = this.props.match.params.book_name;
    const books = await getBooksFromDb();
    this.setState({ books: books });
    Object.values(books).filter((book) => {
      if (bookName.indexOf(book.name) !== -1) {
        this.setState({
          bookName: book._id,
        });
      }
    });
  }

  render() {
    const { books } = this.state;

    const selectedBook = Object.values(books).filter((book) => {
      if (this.state.bookName === book._id) return book;
    });
    return (
      <div className="selected-book container">
        <div className="row">
          {selectedBook.length <= 0
            ? "Nema rezultata..."
            : selectedBook.map((book) => (
                <div className="columna" key={book.id}>
                  <div className="book-image">
                    <img src={book.bookImage} alt="Generic placeholder" />
                  </div>
                  <div className="book-info">
                    <h5 className="name">{book.name}</h5>
                    <span className="author">{book.author}, </span>
                    <span className="category">{book.category}</span> <br />
                    <span className="description">{book.description}</span>{" "}
                    <br />
                    <span className="price">{book.price} KM</span> <br />
                    <button>Pošalji mail</button>
                  </div>
                </div>
              ))}
        </div>
      </div>
    );
  }
}

export default Book;
