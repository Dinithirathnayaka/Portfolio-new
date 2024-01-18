import React, { useState } from "react";
import logo from "../assets/letter-d2.png";
import { Link } from "react-scroll";

function PortfolioNavbar() {
  return (
    <div>
      <nav className="fixed top-0 z-20 w-full h-20 bg-white border-b border-gray-200 start-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-8" alt="" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Dinithi
            </span>
          </Link>

          <div className="flex order-1 w-auto " id="navbar-sticky">
            <a
              href="/"
              className="text-white hover:text-purple-600 "
              aria-current="page"
            >
              Home
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default PortfolioNavbar;
