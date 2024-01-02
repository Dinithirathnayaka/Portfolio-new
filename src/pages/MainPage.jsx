import React from "react";
import Navbar from "../components/Navbar";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";
import Footer from "../components/Footer";

function MainPage() {
  return (
    <div className="bg-gradient-to-r from-indigo-200 from-10% via-sky-100 via-30% to-emerald-100 to-90% h-auto">
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default MainPage;
