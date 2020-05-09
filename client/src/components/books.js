import React from "react";
import bookIcon from "../assets/400x400.png";

const books = ({ books, search }) => {
  const filteredBooks = Object.values(books).filter((book) => {
    return book.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  return (
    <div className="container books">
      <div className="container-fluid p-0">
        <div className="row">
          {filteredBooks.length <= 0
            ? "LOADING..."
            : filteredBooks.map((book) => (
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
};

export default books;
