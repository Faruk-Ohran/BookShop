import React, { Component } from "react";
import axios from "axios";
import Knjige from "./knjige";

class ListaKnjiga extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount = () => {
    this.getDataFromDb();
  };

  getDataFromDb = () => {
    axios
      .get("/api")
      .then((response) => {
        const data = response.data;
        this.setState({ data: data });
        console.log("Data has been received!!");
      })
      .catch(() => {
        alert("Error retrieving data!!!");
      });
  };

  render() {
    return <Knjige knjige={this.state.data} />;
  }
}

export default ListaKnjiga;
