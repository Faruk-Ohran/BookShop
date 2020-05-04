import React from "react";
import bookIcon from "../assets/400x400.png";

const Books = ({ books }) => {
  const bookList = books.map((book) => {
    return (
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
    );
  });
  return (
    <div className="books">
      <div className="container-fluid p-0">
        <div className="row">{bookList}</div>
      </div>
    </div>
  );
};

export default Books;
