import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Marquee from "react-fast-marquee";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
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
import img12 from "../assets/developer.png";
import img13 from "../assets/graduated.png";
import img14 from "../assets/knowledge.png";
import { FaFacebook } from "react-icons/fa";

function About() {
  return (
    <div className="mx-3 md:mx-20">
      {/*---------------------------------
             -----Education Section-------- 
             -----------------------------------*/}

      <h5 className="pt-20 mx-20 text-xl font-bold font-display">Education</h5>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(147, 51, 254)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(147, 51, 254)" }}
          date="2020 - present"
          iconStyle={{
            background: "rgb(147, 51, 254)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          icon={<img src={img13} alt="Your Image" style={{ width: "40px" }} />}
        >
          <h3 className="vertical-timeline-element-title">
            {" "}
            Sabaragamuwa University Of Sri Lanka-Computing And Information
            Systems(CIS)
          </h3>
          <h4 className="vertical-timeline-element-subtitle ">
            {" "}
            Undergraduate
          </h4>
          <p>
            I am an undergraduate from the Department of Computing and
            Information Systems at the Faculty of Computing, Sabaragamuwa
            University of Sri Lanka.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          date=" October 2018 - April 2019"
          iconStyle={{
            background: "rgb(147, 51, 254)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          icon={<img src={img14} alt="Your Image" style={{ width: "40px" }} />}
        >
          <h3 className="vertical-timeline-element-title">
            Sabaragamuwa University Of Sri Lanka-CODL <br />
            Certificate Course in English
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Completed</h4>
          <p>
            I completed a Certificate Course in English at the Center for Open
            and Distance Learning (CODL), Sabaragamuwa University of Sri Lanka.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      {/*---------------------------------
             -----MyService Section-------- 
             -----------------------------------*/}

      <h5 className="mx-20 mt-20 text-xl font-bold font-display">
        My Services
      </h5>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(147, 51, 254)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(147, 51, 254)" }}
          date="2021 - present"
          iconStyle={{
            background: "rgb(147, 51, 254)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          icon={<img src={img12} alt="Your Image" style={{ width: "40px" }} />}
        >
          <h3 className="vertical-timeline-element-title">
            {" "}
            Full Stack Web Development
          </h3>

          <p>
            I'm a skilled Full-Stack Developer in MERN stack and PHP Laravel.
            Explore my portfolio to see my work in building dynamic web
            applications using cutting-edge technologies.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      <h5 className="mx-20 mt-20 text-xl font-bold font-display">
        Technologies & Languages
      </h5>
      <Marquee direction="right" speed={100} className="mt-10 mb-20 ">
        <div className="p-0.5 bg-white mx-1">
          <img
            src={img1}
            alt=""
            className="w-12 p-2 mx-8 my-2 rounded-full dark:bg-gray-800 dark:border-gray-700 md:w-20 md:mx-12 "
          />
        </div>
        <div className="p-0.5 bg-white mx-1">
          <img
            src={img2}
            alt=""
            className="w-12 p-2 mx-8 my-2 rounded-full dark:bg-gray-800 dark:border-gray-700 md:w-20 md:mx-12"
          />
        </div>
        <div className="p-0.5 bg-white mx-1">
          <img
            src={img3}
            alt=""
            className="w-12 p-2 mx-8 my-2 rounded-full dark:bg-gray-800 dark:border-gray-700 md:w-20 md:mx-12"
          />
        </div>
        <div className="p-0.5 bg-white mx-1">
          <img
            src={img4}
            alt=""
            className="w-12 p-2 mx-8 my-2 rounded-full dark:bg-gray-800 dark:border-gray-700 md:w-20 md:mx-12"
          />
        </div>
        <div className="p-0.5 bg-white mx-1">
          <img
            src={img5}
            alt=""
            className="w-12 p-2 mx-8 my-2 rounded-full dark:bg-gray-800 dark:border-gray-700 md:w-20 md:mx-12"
          />
        </div>
        <div className="p-0.5 bg-white mx-1">
          <img
            src={img6}
            alt=""
            className="w-12 p-2 mx-8 my-2 rounded-full dark:bg-gray-800 dark:border-gray-700 md:w-20 md:mx-12"
          />
        </div>
        <div className="p-0.5 bg-white mx-1">
          <img src={img7} alt="" className="w-12 mx-8 my-2 md:w-20 md:mx-12" />
        </div>
        <div className="p-0.5 bg-white mx-1">
          <img
            src={img8}
            alt=""
            className="w-12 p-2 mx-8 my-2 rounded-full dark:bg-gray-800 dark:border-gray-700 md:w-20 md:mx-12"
          />
        </div>
        <div className="p-0.5 bg-white mx-1">
          <img
            src={img9}
            alt=""
            className="w-12 p-2 mx-8 my-2 rounded-full dark:bg-gray-800 dark:border-gray-700 md:w-20 md:mx-12"
          />
        </div>
        <div className="p-0.5 bg-white mx-1">
          <img
            src={img10}
            alt=""
            className="w-12 p-2 mx-8 my-2 rounded-full dark:bg-gray-800 dark:border-gray-700 md:w-20 md:mx-12"
          />
        </div>
        <div className="p-0.5 bg-white mx-1">
          <img
            src={img11}
            alt=""
            className="w-12 p-2 mx-8 my-2 rounded-full dark:bg-gray-800 dark:border-gray-700 md:w-20 md:mx-12"
          />
        </div>
      </Marquee>
    </div>
  );
}

export default About;
