import React from "react";
import img1 from "../assets/school1.png";
import img2 from "../assets/scl2.png";
import img3 from "../assets/scl3.png";
import img4 from "../assets/scl4.png";
import img5 from "../assets/scl5.png";
import img6 from "../assets/scl6.png";

function Portfolio8() {
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
    </div>
  );
}

export default Portfolio8;
