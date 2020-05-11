import React, { Component } from "react";
import bookIcon from "../assets/ruza.jpg";

export class AllBooks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sort: "Najnovije",
    };
  }

  changeSortName() {
    this.state.sort !== "Najnovije"
      ? this.setState({ sort: "Najnovije" })
      : this.setState({ sort: "Najstarije" });
  }

  render() {
    const filteredBooks = Object.values(this.props.books).filter((book) => {
      return book.category.indexOf(this.props.category) !== -1;
    });

    const searchBooks = filteredBooks.filter((book) => {
      return (
        book.name.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1
      );
    });

    return (
      <div className="container books">
        <div className="container-fluid p-0">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Poredaj po
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a
                className="dropdown-item"
                type="button"
                href="#"
                onClick={() => {
                  this.changeSortName();
                  this.props.sortBooksNew();
                }}
              >
                {this.state.sort}
              </a>
            </div>
          </div>
          <div className="row">
            {searchBooks.length <= 0
              ? "LOADING..."
              : searchBooks.map((book) => (
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

export default AllBooks;
