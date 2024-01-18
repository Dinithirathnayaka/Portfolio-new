import React from "react";
import img1 from "../assets/note1.png";
import Footer from "../components/Footer";
import Navbar from "../components/PortfolioNavbar";

function Portfolio10() {
  return (
    <div className="bg-gradient-to-r from-indigo-200 from-10% via-sky-100 via-30% to-emerald-100 to-90% ">
      <Navbar className="" />
      <h5 className="pt-32 mx-10 mb-12 text-xl font-bold text-purple-600 md:mx-40">
        More Details ...
      </h5>

      <div className="h-auto pt-6 pb-14 mx:pt-8">
        <div className="flex flex-wrap justify-center gap-4">
          <div className="relative m-6 overflow-hidden bg-white bg-no-repeat bg-cover border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 ">
            <img
              className="w-full transition duration-300 ease-in-out rounded-t-lg h-52 md:h-60 hover:scale-110"
              src={img1}
              alt="Card Image"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Portfolio10;
