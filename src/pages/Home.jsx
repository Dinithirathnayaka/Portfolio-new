import React from "react";
import img from "../assets/face-5.png";
import img2 from "../assets/bg-3.png";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import resume from "../assets/resume.pdf";

function Home() {
  const [text] = useTypewriter({
    words: ["Web Developer.", "Full Stack Developer."],
    loop: 3000,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  return (
    <div className="w-full h-auto px-8 pt-20 md:p-10" id="home">
      <section className="grid gap-5 md:grid-cols-2 md:items-center md:text-left sm:pt-20">
        {" "}
        <div>
          <h1 className="mb-3 text-xl font-bold text-purple-600 uppercase font-inter">
            Hi There,
          </h1>

          <h1 className="mb-8 text-4xl font-bold font-inter">
            I'm Dinithi Rathnayake ,<br />a{" "}
            <span className="font-inter">{text}</span>{" "}
            <span>
              {" "}
              <Cursor className="text-purple-600" />
            </span>
          </h1>

          <p className="mb-5 font-inter">
            "✨🚀 Enthusiastic developer skilled in creating user-friendly web
            experiences that seamlessly combine creativity and functionality. My
            coding expertise brings ideas to life, from polished front-end
            designs to powerful back-end solutions.💻✨"
          </p>

          <div className="flex items-center mb-3 flex-left">
            <div className="m-2 bg-gray-300 rounded-full hover:border-2 hover:border-purple-600 hover:text-purple-600">
              <a href="https://www.linkedin.com/in/dinithi-rathnayake-887126202/">
                <FaLinkedin className="m-3 text-xl " />
              </a>
            </div>

            <div className="m-2 bg-gray-300 rounded-full hover:border-2 hover:border-purple-600 hover:text-purple-600">
              <a href="https://www.facebook.com/dinithi.rathnayake.942?mibextid=ZbWKwL">
                <FaFacebook className="m-3 text-xl" />
              </a>
            </div>
            <div className="m-3 bg-gray-300 rounded-full hover:border-2 hover:border-purple-600 hover:text-purple-600">
              <a href="https://github.com/Dinithirathnayaka">
                <FaGithub className="m-3 text-xl" />
              </a>
            </div>
          </div>

          <a
            href={resume}
            download="Resume"
            className="inline-flex items-center px-3 py-2 mb-3 text-sm font-medium text-white bg-purple-600 rounded-lg font-inter hover:border-2 hover:border-white "
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
        <div className="relative flex items-center justify-center">
          <img src={img2} alt="" className="mx-auto w-w6" />
          <img src={img} alt="" className="absolute" />
        </div>
      </section>
    </div>
  );
}

export default Home;
