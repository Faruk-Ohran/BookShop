import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//dodano
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
//dodano
import { Provider } from "react-redux";
import store from "./store";

import Header from "./components/header";
import Home from "./components/Home";
import Footer from "./components/footer";
import Body from "./components/body";
import Book from "./components/Book";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
//dodano
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}
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
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route
              exact
              path="/"
              render={() => (
                <Header
                  search={this.state.search}
                  updateSearch={this.updateSearch.bind(this)}
                />
              )}
            />
            <Route exact path="/login" component={Login} />
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
            <Route path="/register" component={Register} />
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
