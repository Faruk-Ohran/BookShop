import React from "react";
import bookIcon from "../assets/400x400.png";

const Books = ({ books }) => {
  const bookList = books.map((book) => {
    return (
      <div className="columna col-12 col-sm-6 col-md-4" key={book.id}>
        <img src={bookIcon} alt="Generic placeholder" />
        <h5 className="mt-0 mb-1">{book.name}</h5>
        <span className="pisac">{book.author}, </span>
        <span className="kategorija">{book.category}</span> <br />
        <span className="cijena">{book.price} KM</span>
      </div>
    );
  });
  return (
    <div className="container-fluid p-0">
      <div className="row">{bookList}</div>
    </div>
  );
};

export default Books;
