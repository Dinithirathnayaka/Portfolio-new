import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/PortfolioNavbar";
import img1 from "../assets/ecommerce1.png";
import img2 from "../assets/ecommerce2.png";
import img3 from "../assets/ecommerce3.png";
import img4 from "../assets/ecommerce4.png";
import img5 from "../assets/ecommerce5.png";
import img6 from "../assets/ecommerce6.png";
import img7 from "../assets/ecommerce7.png";

function Portfolio11() {
  return (
    <div className="bg-gradient-to-r from-indigo-200 from-10% via-sky-100 via-30% to-emerald-100 to-90% h-auto">
      <Navbar />
      <h5 className="pt-32 mx-10 mb-4 text-xl font-bold text-purple-600 md:mx-40 font-inter">
        More Details ...
      </h5>

      <div className="h-auto py-10 ">
        <div className="flex flex-wrap justify-center gap-4">
          <div className="relative m-6 overflow-hidden bg-white bg-no-repeat bg-cover border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 ">
            <img
              className="w-full transition duration-300 ease-in-out rounded-t-lg h-52 md:h-60 hover:scale-110"
              src={img1}
              alt="Card Image"
            />
          </div>

          <div className="relative m-6 overflow-hidden bg-white bg-no-repeat bg-cover border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 ">
            <img
              className="w-full transition duration-300 ease-in-out rounded-t-lg h-52 md:h-60 hover:scale-110"
              src={img2}
              alt="Card Image"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="relative m-6 overflow-hidden bg-white bg-no-repeat bg-cover border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 ">
            <img
              className="w-full transition duration-300 ease-in-out rounded-t-lg h-52 md:h-60 hover:scale-110"
              src={img3}
              alt="Card Image"
            />
          </div>

          <div className="relative m-6 overflow-hidden bg-white bg-no-repeat bg-cover border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 ">
            <img
              className="w-full transition duration-300 ease-in-out rounded-t-lg h-52 md:h-60 hover:scale-110 "
              src={img4}
              alt="Card Image"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="relative m-6 overflow-hidden bg-white bg-no-repeat bg-cover border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 ">
            <img
              className="w-full transition duration-300 ease-in-out rounded-t-lg h-52 md:h-60 hover:scale-110"
              src={img5}
              alt="Card Image"
            />
          </div>

          <div className="relative m-6 overflow-hidden bg-white bg-no-repeat bg-cover border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 ">
            <img
              className="w-full transition duration-300 ease-in-out rounded-t-lg h-52 md:h-60 hover:scale-110"
              src={img6}
              alt="Card Image"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <div className="relative m-6 overflow-hidden bg-white bg-no-repeat bg-cover border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 ">
            <img
              className="w-full transition duration-300 ease-in-out rounded-t-lg h-52 md:h-60 hover:scale-110"
              src={img7}
              alt="Card Image"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Portfolio11;
