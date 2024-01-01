import React from "react";
import img1 from "../assets/fashion1.png";
import img2 from "../assets/fashion2.png";
import img3 from "../assets/fashion3.png";
import img4 from "../assets/fashion4.png";
import img5 from "../assets/fashion5.png";
import img6 from "../assets/fashion6.png";
import img7 from "../assets/fashion7.png";
import img8 from "../assets/fashion8.png";
import img9 from "../assets/fashion9.png";

function Portfolio2() {
  return (
    <div>
      <h5 className="mx-40 text-xl text-white pt-14">More Details ...</h5>

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
        </div>
      </div>
    </div>
  );
}

export default Portfolio2;
