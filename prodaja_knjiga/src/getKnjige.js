import React, { Component } from "react";
import Knjige from "./knjige";

class ListaKnjiga extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      intervalIsSet: false,
    };
  }

  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  getDataFromDb = () => {
    fetch("http://localhost:3001/api/getData")
      .then((data) => data.json())
      .then((res) => this.setState({ data: res.data }));
  };

  render() {
    return <Knjige knjige={this.state.data} />;
  }
}

export default ListaKnjiga;
