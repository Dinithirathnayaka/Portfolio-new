import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div>
      <Navbar />
      {/*---------------------------------
             -----Education Section-------- 
             -----------------------------------*/}
      <h5 className="pt-20 mx-20 text-xl font-bold font-display">Education</h5>

      <section className="grid gap-8 m-5 md:grid-cols-2 md:items-center md:text-left md:mx-20 ">
        <div className="h-auto p-5 mx-10 duration-1000 delay-500 rounded-lg shadow-lg bg-emerald-200 obg-indigo-800 shadow-indigo-500/50 animate-slide-in-from-left">
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

        <div className="h-auto p-5 mx-10 duration-1000 delay-500 rounded-lg shadow-lg bg-emerald-200 obg-indigo-800 shadow-indigo-500/50 animate-slide-in-from-right">
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
      <section className="grid gap-8 m-5 md:grid-cols-2 md:items-center md:text-left md:mx-20 ">
        <div className="h-auto p-5 mx-10 duration-1000 delay-500 rounded-lg shadow-lg bg-emerald-200 obg-indigo-800 shadow-indigo-500/50 animate-slide-in-from-bottom">
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
      <Footer />
    </div>
  );
}

export default About;
