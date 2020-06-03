import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { getBooksFromDb } from "../services/bookService";

class SimpleSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: "",
    };
  }

  async componentDidMount() {
    const books = await getBooksFromDb();
    this.setState({ books: books });
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const { books } = this.state;
    return (
      <div className="slider">
        <div className="container">
          <h3>New books</h3>
        </div>
        <Slider {...settings}>
          {Object.values(books).map((book) => (
            <div className="slider-inside">
              <img src={book.bookImage} alt="Generic placeholder" />
              <div className="book-info-slide">
                <h5 className="name">{book.name}</h5>
                <span className="author">{book.author}, </span>
                <span className="category">{book.category}</span> <br />
                <span className="price">{book.price} KM</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default SimpleSlider;
