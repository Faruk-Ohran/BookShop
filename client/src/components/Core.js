import React from "react";
import Carousel1 from "../assets/Background.png";
import Carousel from "react-bootstrap/lib/Carousel";

const Core = () => (
  <main className="core">
    <article className="left">
      <Carousel>
        <Carousel.Item>
          <img src={Carousel1} alt="" />
        </Carousel.Item>
      </Carousel>
    </article>
    <article className="right"></article>
  </main>
);
export default Core;
