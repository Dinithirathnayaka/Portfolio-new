import React from "react";
import img from "../assets/face-5.png";
import img2 from "../assets/bg-3.png";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Home() {
  const [text] = useTypewriter({
    words: ["Web Developer.", "Full Stack Developer."],
    loop: 3,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  const cvUrl = "../assets/Dinithi_Rathnayake.png";

  const handleDownload = () => {
    window.location.href = cvUrl;
  };
  return (
    <div className="w-full h-auto px-8 pt-20 md:p-10" id="home">
      <section className="grid gap-5 md:grid-cols-2 md:items-center md:text-left sm:pt-20">
        {" "}
        <div>
          <h1 className="mb-3 text-xl font-bold text-purple-600 uppercase">
            Hi There,
          </h1>

          <h1 className="mb-8 text-4xl font-bold">
            I'm Dinithi Rathnayake ,<br />a <span>{text}</span>{" "}
            <span>
              {" "}
              <Cursor className="text-purple-600" />
            </span>
          </h1>

          <p className="mb-5">
            "✨🚀 Passionate Developer with a flair for crafting seamless,
            innovative, and user-centric web experiences. My code weaves
            together creativity and functionality, transforming ideas into
            digital masterpieces. From front-end finesse to back-end brilliance,
            I specialize in bringing projects to life with a perfect blend of
            aesthetics and robust functionality.💻✨"
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
        <div className="relative flex items-center justify-center">
          <img src={img2} alt="" className="mx-auto w-w6" />
          <img src={img} alt="" className="absolute" />
        </div>
      </section>
    </div>
  );
}

export default Home;
