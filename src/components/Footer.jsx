import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";

function Footer() {
  return (
    <section className="items-center mx-20 ">
      <hr />
      <div>
        <p className="mb-3 font-medium text-center">
          © 2023 All rights reserved.
        </p>
      </div>

      <div className="flex items-center justify-center mx-auto ">
        <a href="http://www.linkedin.com/in/supun-nilakshana-916129202">
          <FaLinkedin className="m-3 text-xl" />
        </a>

        <a href="https://www.facebook.com/supun.nilakshana.5">
          <FaFacebook className="m-3 text-xl" />
        </a>
        <a href="https://github.com/supunnilakshana">
          <FaGithub className="m-3 text-xl" />
        </a>
      </div>
    </section>
  );
}

export default Footer;
