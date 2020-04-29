import React from "react";
import Header from "./header";
import Navigacija from "./nav";
import SideMenu from "./sideMenu";
import ListaKnjiga from "./getKnjige";
import Footer from "./footer";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <Header />
      <Navigacija />
      <SideMenu />
      <ListaKnjiga />
      <Footer />
    </div>
  );
};

export default App;
