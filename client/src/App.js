import React from "react";
import Header from "./components/header";
import Navbar from "./components/navbar";
import SideMenu from "./components/sideMenu";
import BookList from "./services/bookService";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <SideMenu />
      <BookList />
      <Footer />
    </div>
  );
};

export default App;
