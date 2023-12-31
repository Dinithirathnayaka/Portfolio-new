import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Marquee from "react-fast-marquee";
import img1 from "../assets/icons8-html-240.png";
import img2 from "../assets/icons8-css-240.png";
import img3 from "../assets/icons8-javascript-240.png";
import img4 from "../assets/icons8-react-js-200.png";
import img5 from "../assets/icons8-tailwind-css-240.png";
import img6 from "../assets/icons8-bootstrap-240.png";
import img7 from "../assets/nextjs.256x256.png";
import img8 from "../assets/icons8-laravel-96.png";
import img9 from "../assets/icons8-git-240.png";
import img10 from "../assets/icons8-mongodb-240.png";
import img11 from "../assets/icons8-firebase-240.png";

function About() {
  return (
    <div className="mx-3 md:mx-20">
      <Navbar />
      {/*---------------------------------
             -----Education Section-------- 
             -----------------------------------*/}
      <h5 className="pt-20 mx-20 text-xl font-bold font-display">Education</h5>

      <section className="grid gap-8 m-2 md:grid-cols-2 md:items-center md:text-left md:mx-20 ">
        <div className="h-auto p-5 mx-8 duration-1000 delay-500 rounded-lg shadow-lg bg-emerald-200 obg-indigo-800 shadow-indigo-500/50 animate-slide-in-from-left">
          <h6 className="p-1 mb-3 font-sans text-base font-bold text-blue-800 text-whitemb-3 ">
            Sabaragamuwa University Of Sri Lanka-Computing And Information
            Systems(CIS)
          </h6>
          <p className="w-32 p-1 mb-3 text-center text-blue-800 bg-blue-300 rounded-xl">
            Undergraduate
          </p>

          <p className="text-gray-500">
            I am an undergraduate from the Department of Computing and
            Information Systems at the Faculty of Computing, Sabaragamuwa
            University of Sri Lanka.
          </p>
        </div>

        <div className="h-auto p-5 mx-8 duration-1000 delay-500 rounded-lg shadow-lg bg-emerald-200 obg-indigo-800 shadow-indigo-500/50 animate-slide-in-from-right">
          <h6 className="mb-3 font-sans text-base font-bold text-blue-800">
            Sabaragamuwa University Of Sri Lanka-CODL <br />
            Certificate Course in English
          </h6>
          <p className="w-32 p-1 mb-3 text-center text-blue-800 bg-blue-300 rounded-xl">
            Completed
          </p>
          <button className="justify-end p-0.5 mb-3 mr-0 text-center text-red-800 bg-gray-300 w-60 rounded-lg">
            October 2018-April 2019
          </button>
          <p className="text-gray-500">
            I completed a Certificate Course in English at the Center for Open
            and Distance Learning (CODL), Sabaragamuwa University of Sri Lanka.
          </p>
        </div>
      </section>

      {/*---------------------------------
             -----MyService Section-------- 
             -----------------------------------*/}

      <h5 className="mx-20 text-xl font-bold font-display">My Services</h5>
      <section className="grid gap-8 m-2 md:grid-cols-2 md:items-center md:text-left md:mx-20 ">
        <div className="h-auto p-5 mx-8 duration-1000 delay-500 rounded-lg shadow-lg bg-emerald-200 obg-indigo-800 shadow-indigo-500/50 animate-slide-in-from-bottom">
          <h6 className="mb-3 font-sans text-base font-bold text-blue-800">
            Web Development
          </h6>
          <p className="text-gray-500">
            I'm a skilled Full-Stack Developer in MERN stack and PHP Laravel.
            Explore my portfolio to see my work in building dynamic web
            applications using cutting-edge technologies.
          </p>
        </div>
      </section>

      <h5 className="mx-20 mt-20 text-xl font-bold font-display">
        Technologies & Languages
      </h5>
      <Marquee direction="right" speed={100} className="mt-10 mb-20 bg-white">
        <div>
          <img
            src={img1}
            alt=""
            className="w-12 p-2 mx-8 my-2 rounded-full dark:bg-gray-800 dark:border-gray-700 md:w-20 md:mx-12"
          />
        </div>
        <div>
          <img
            src={img2}
            alt=""
            className="w-12 p-2 mx-8 my-2 rounded-full dark:bg-gray-800 dark:border-gray-700 md:w-20 md:mx-12"
          />
        </div>
        <div>
          <img
            src={img3}
            alt=""
            className="w-12 p-2 mx-8 my-2 rounded-full dark:bg-gray-800 dark:border-gray-700 md:w-20 md:mx-12"
          />
        </div>
        <div>
          <img
            src={img4}
            alt=""
            className="w-12 p-2 mx-8 my-2 rounded-full dark:bg-gray-800 dark:border-gray-700 md:w-20 md:mx-12"
          />
        </div>
        <div>
          <img
            src={img5}
            alt=""
            className="w-12 p-2 mx-8 my-2 rounded-full dark:bg-gray-800 dark:border-gray-700 md:w-20 md:mx-12"
          />
        </div>
        <div>
          <img
            src={img6}
            alt=""
            className="w-12 p-2 mx-8 my-2 rounded-full dark:bg-gray-800 dark:border-gray-700 md:w-20 md:mx-12"
          />
        </div>
        <div>
          <img src={img7} alt="" className="w-12 mx-8 my-2 md:w-20 md:mx-12" />
        </div>
        <div>
          <img
            src={img8}
            alt=""
            className="w-12 p-2 mx-8 my-2 rounded-full dark:bg-gray-800 dark:border-gray-700 md:w-20 md:mx-12"
          />
        </div>
        <div>
          <img
            src={img9}
            alt=""
            className="w-12 p-2 mx-8 my-2 rounded-full dark:bg-gray-800 dark:border-gray-700 md:w-20 md:mx-12"
          />
        </div>
        <div>
          <img
            src={img10}
            alt=""
            className="w-12 p-2 mx-8 my-2 rounded-full dark:bg-gray-800 dark:border-gray-700 md:w-20 md:mx-12"
          />
        </div>
        <div>
          <img
            src={img11}
            alt=""
            className="w-12 p-2 mx-8 my-2 rounded-full dark:bg-gray-800 dark:border-gray-700 md:w-20 md:mx-12"
          />
        </div>
      </Marquee>

      <Footer />
    </div>
  );
}

export default About;
