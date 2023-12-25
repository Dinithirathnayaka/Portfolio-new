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
        <div className="p-5 mx-10 bg-white rounded-lg shadow-lg h-60 obg-indigo-600 shadow-indigo-500/50">
          <h6 className="">
            Sabaragamuwa University Of Sri Lanka-Computing And Information
            Systems(CIS)
          </h6>
          <p className="w-20 p-1 text-white bg-blue-300">Undergraduate</p>

          <p className="">
            I am an undergraduate from the Department of Computing and
            Information Systems at the Faculty of Computing, Sabaragamuwa
            University of Sri Lanka.
          </p>
        </div>

        <div className="p-5 mx-10 bg-white rounded-lg shadow-lg h-60 obg-indigo-600 shadow-indigo-500/50">
          <h6 className="font-sans text-bold">
            Sabaragamuwa University Of Sri Lanka-CODL <br />
            Certificate Course in English
          </h6>
          <p className="w-20 p-1 text-white bg-blue-300">Completed</p>
          <button className="p-0.5 bg-gray-300">October 2018-April 2019</button>
          <p className="">
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
        <div className="p-5 mx-10 bg-white rounded-lg shadow-lg h-60 obg-indigo-600 shadow-indigo-500/50">
          <h6 className="">Web Development</h6>
          <p className="">
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
