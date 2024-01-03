import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import logo from "./assets/letter-d2.png";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <BrowserRouter>
        <div>
          <nav className="fixed top-0 z-20 w-full h-20 bg-white border-b border-gray-200 start-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
              <a
                href="https://flowbite.com/"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <img src={logo} className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Dinithi
                </span>
              </a>
              <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
                <HashLink
                  to="#contact"
                  className="px-4 py-2 text-sm font-medium text-center text-white bg-purple-600 rounded-lg hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-purple-600 dark:hover:bg-purple-600 dark:focus:ring-purple-600"
                >
                  {" "}
                  Contact
                </HashLink>

                <button
                  type="button"
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-sticky"
                  aria-expanded={isMenuOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={`${
                  isMenuOpen ? "block" : "hidden"
                } items-center justify-between w-full md:flex md:w-auto md:order-1`}
                id="navbar-sticky"
              >
                <ul className="flex flex-col p-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 dark:border-gray-700">
                  <li>
                    <HashLink
                      to="#home"
                      className="block px-3 py-2 text-white bg-purple-600 rounded md:bg-transparent md:text-purple-600 md:p-0 md:dark:text-purple-600"
                    >
                      Home
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      to="#about"
                      className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:ttext-purple-600 md:p-0 md:dark:hover:text-purple-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      About
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      to="#portfolio"
                      className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-600 md:p-0 md:dark:hover:text-purple-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Portfolio
                    </HashLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </BrowserRouter>
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
