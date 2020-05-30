import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/header";
import Home from "./components/Home";
import Footer from "./components/footer";
import Body from "./components/body";
import Book from "./components/Book";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      category: "",
    };
  }

  updateSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  updateCategory = (e) => {
    this.setState({ category: e.target.value });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header
            data={{
              search: this.state.search,
              updateSearch: this.updateSearch.bind(this),
            }}
          />
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/books"
            render={() => (
              <Body
                search={this.state.search}
                category={this.state.category}
                updateCategory={this.updateCategory.bind(this)}
              />
            )}
          />
          <Route path="/books/:book_name" component={Book} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
