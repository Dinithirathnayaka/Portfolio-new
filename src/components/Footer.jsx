import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";

function Footer() {
  return (
    <section className="items-center h-40 border-none outline-none dark:bg-gray-800 ">
      <hr />

      <div className="flex items-center justify-center mx-auto mb-3">
        <a href="https://www.linkedin.com/in/dinithi-rathnayake-887126202/">
          <FaLinkedin className="m-3 text-xl text-white" />
        </a>

        <a href="https://www.facebook.com/dinithi.rathnayake.942?mibextid=ZbWKwL">
          <FaFacebook className="m-3 text-xl text-white" />
        </a>
        <a href="https://github.com/Dinithirathnayaka">
          <FaGithub className="m-3 text-xl text-white" />
        </a>
      </div>

      <div className="flex justify-center mb-10 text-center">
        <a href="" className="mx-2 font-bold text-white">
          Home
        </a>
        <a href="" className="mx-2 font-bold text-white">
          About
        </a>
        <a href="" className="mx-2 font-bold text-white">
          Portfolio
        </a>
        <a href="" className="mx-2 font-bold text-white">
          Contact
        </a>
      </div>

      <p className="bottom-0 text-center text-white font-lg">
        © 2023 All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
