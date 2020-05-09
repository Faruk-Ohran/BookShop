import React from "react";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Body from "./components/body";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
