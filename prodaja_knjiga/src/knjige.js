import React from "react";
import slika from "./400x400.png";

const Knjige = ({ knjige }) => {
  const knjigeLista = knjige.map((knjiga) => {
    return (
      <div className="columna col-12 col-sm-6 col-md-4" key={knjiga.id}>
        <img src={slika} alt="Generic placeholder" />
        <h5 className="mt-0 mb-1">{knjiga.naziv}</h5>
        <span className="pisac">{knjiga.pisac}, </span>
        <span className="kategorija">{knjiga.kategorija}</span> <br />
        <span className="cijena">{knjiga.cijena} fKM</span>
      </div>
    );
  });
  return (
    <div className="container-fluid p-0">
      <div className="row">{knjigeLista}</div>
    </div>
  );
};

export default Knjige;
