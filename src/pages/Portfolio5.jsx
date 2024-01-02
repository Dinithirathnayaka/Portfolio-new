import React from "react";
import img1 from "../assets/pizza2.png";
import img2 from "../assets/pizza3.png";
import img3 from "../assets/pizza4.png";
import img4 from "../assets/pizza5.png";
import img5 from "../assets/pizza6.png";
import img6 from "../assets/pizza7.png";
import img7 from "../assets/pizza10.png";
import img8 from "../assets/pizza18.png";
import img9 from "../assets/pizza19.png";
import img10 from "../assets/pizza20.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Portfolio5() {
  return (
    <div className="bg-gradient-to-r from-indigo-200 from-10% via-sky-100 via-30% to-emerald-100 to-90% h-auto">
      <Navbar />
      <h5 className="mx-40 text-xl text-white pt-14">More Details ...</h5>

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
        </div>{" "}
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

          <div className="relative m-6 overflow-hidden bg-white bg-no-repeat bg-cover border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 ">
            <img
              className="w-full transition duration-300 ease-in-out rounded-t-lg h-52 md:h-60 hover:scale-110"
              src={img8}
              alt="Card Image"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="relative m-6 overflow-hidden bg-white bg-no-repeat bg-cover border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 ">
            <img
              className="w-full transition duration-300 ease-in-out rounded-t-lg h-52 md:h-60 hover:scale-110"
              src={img9}
              alt="Card Image"
            />
          </div>{" "}
          <div className="relative m-6 overflow-hidden bg-white bg-no-repeat bg-cover border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 ">
            <img
              className="w-full transition duration-300 ease-in-out rounded-t-lg h-52 md:h-60 hover:scale-110"
              src={img10}
              alt="Card Image"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Portfolio5;
