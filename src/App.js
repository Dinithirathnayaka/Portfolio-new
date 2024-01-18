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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/portfolio1" element={<Portfolio1 />} />
          <Route path="/portfolio2" element={<Portfolio2 />} />
          <Route path="/portfolio3" element={<Portfolio3 />} />
          <Route path="/portfolio4" element={<Portfolio4 />} />
          <Route path="/portfolio5" element={<Portfolio5 />} />
          <Route path="/portfolio6" element={<Portfolio6 />} />
          <Route path="/portfolio7" element={<Portfolio7 />} />
          <Route path="/portfolio8" element={<Portfolio8 />} />
          <Route path="/portfolio9" element={<Portfolio9 />} />
          <Route path="/portfolio10" element={<Portfolio10 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
