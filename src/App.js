import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Main from "./pages/MainPage";
import Portfolio from "./pages/Portfolio";
import Portfolio1 from "./pages/Portfolio1";
import Portfolio2 from "./pages/Portfolio2";
import Portfolio3 from "./pages/Portfolio3";
import Portfolio4 from "./pages/Portfolio4";
import Portfolio5 from "./pages/Portfolio5";
import Portfolio6 from "./pages/Portfolio6";
import Portfolio7 from "./pages/Portfolio7";
import Portfolio8 from "./pages/Portfolio8";
import Portfoli09 from "./pages/Portfolio9";
import Portfolio10 from "./pages/Portfolio10";
import Portfolio9 from "./pages/Portfolio9";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
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

export default App;
