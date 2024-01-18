import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function Main() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default Main;
