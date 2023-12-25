import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img from "../assets/17.jpg";
import hand from "../assets/waving-hand.png";

function Home() {
  return (
    <div>
      <Navbar className="" />
      <section className="grid gap-8 m-5 md:grid-cols-2 md:items-center md:text-left md:mx-20 sm:pt-20">
        {" "}
        <div>
          <h1 className="flex m-2 mt-12 mb-2 font-mono text-5xl font-bold">
            <span>
              <img src={hand} alt="" className="w-8 animate-waving-hand" />
            </span>
            , Hey there
          </h1>
          <h1 className="m-2 font-mono text-5xl font-bold ">
            It's Dinithi Rathnayake.{" "}
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            repellendus!
          </p>
          <button className="p-2 mt-5 text-white bg-blue-500 w-100">
            Say Hello
          </button>
        </div>
        <div className="">
          <img src={img} alt="" className="w-full " />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
