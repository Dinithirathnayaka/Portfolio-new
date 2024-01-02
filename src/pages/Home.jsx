import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img from "../assets/face-5.png";
import img2 from "../assets/paint.png";
import hand from "../assets/waving-hand.png";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Home() {
  const [text] = useTypewriter({
    words: ["Dinithi Rathnayake", "Web Developer", "Full Stack Developer"],
    loop: 3,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  const cvUrl = "../assets/Dinithi_Rathnayake.png";

  const handleDownload = () => {
    window.location.href = cvUrl;
  };
  return (
    <div>
      <Navbar className="" />
      <section className="grid gap-8 m-5 md:grid-cols-2 md:items-center md:text-left md:mx-20 sm:pt-20">
        {" "}
        <div>
          <h1 className="mb-3 text-xl font-bold text-purple-600 uppercase">
            Hi There,
          </h1>

          <h1 className="mb-8 text-4xl font-bold">
            I'm <span>{text}</span>{" "}
            <span>
              {" "}
              <Cursor className="text-purple-600" />
            </span>
          </h1>

          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            reiciendis sed error doloribus, doloremque eius consequatur.
            Provident laudantium mollitia obcaecati.
          </p>

          <div className="flex items-center mb-3 flex-left">
            <div className="m-2 bg-gray-300 rounded-full hover:border-2 hover:border-purple-600 hover:text-purple-600">
              <a href="http://www.linkedin.com/in/supun-nilakshana-916129202">
                <FaLinkedin className="m-3 text-xl " />
              </a>
            </div>

            <div className="m-2 bg-gray-300 rounded-full hover:border-2 hover:border-purple-600 hover:text-purple-600">
              <a href="https://www.facebook.com/supun.nilakshana.5">
                <FaFacebook className="m-3 text-xl" />
              </a>
            </div>
            <div className="m-3 bg-gray-300 rounded-full hover:border-2 hover:border-purple-600 hover:text-purple-600">
              <a href="https://github.com/supunnilakshana">
                <FaGithub className="m-3 text-xl" />
              </a>
            </div>
          </div>

          <a
            href={cvUrl}
            download="YourCVFileName.pdf"
            onClick={handleDownload}
            className="inline-flex items-center px-3 py-2 mb-3 text-sm font-medium text-white bg-purple-600 rounded-lg hover:border-2 hover:border-white "
          >
            Download CV
            <svg
              className="w-3.5 h-3.5 ms-2 transform rotate-90"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
        <div className="">
          <img src={img2} alt="" className="relative mx-auto w-w2" />
          <img
            src={img}
            alt=""
            className="absolute top-98 md:right-40 md:top-40"
          />
        </div>
      </section>

      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
