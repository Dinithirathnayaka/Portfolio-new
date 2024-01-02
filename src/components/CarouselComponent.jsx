import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import img from "../assets/17.jpg";
import git from "../assets/git.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/chatbot1.png";
import img2 from "../assets/fashion1.png";
import img3 from "../assets/janux1.png";
import img4 from "../assets/pizza11.png";
import img5 from "../assets/pizza7.png";
import img6 from "../assets/metait1.png";
import img7 from "../assets/Picture1.png";
import img8 from "../assets/school1.png";
import img9 from "../assets/statics1.png";
import img10 from "../assets/note1.png";

const CarouselComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (index) => setCurrentSlide(index),
  };

  const goToPrevSlide = () => {
    carouselRef.current.slickPrev();
  };

  const goToNextSlide = () => {
    carouselRef.current.slickNext();
  };

  return (
    <div id="carousel-example" className="relative w-full p-20 bg-cover">
      <h5 className="mb-5 text-2xl font-bold text-purple-600">Projects</h5>
      <p className="mb-2 text-lg text-left ">
        Following projects showcases my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos in it. It reflects my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively.
      </p>
      {/* Carousel wrapper */}
      <div classNameName="relative h-56 overflow-hidden rounded-lg sm:h-64 xl:h-80 2xl:h-96">
        <Slider ref={carouselRef} {...settings} className="hidden md:flex">
          {/* Item 1 */}
          <div classNameName="duration-700 ease-in-out m-10 sm:hidden md:block">
            <div className="flex flex-wrap justify-center gap-4 ">
              <div className="relative items-center m-8 overflow-hidden bg-white bg-no-repeat bg-cover border border-gray-200 rounded-lg shadow h-h1 w-w5 dark:bg-gray-800 dark:border-gray-700 jusify-center">
                <img
                  src={img1}
                  alt=""
                  className="h-40 mx-auto mt-3 transition duration-300 ease-in-out border rounded-lg w-w4 hover:scale-110"
                />
                <a href="https://github.com/Dinithirathnayaka/ChatbotGroup-Project">
                  {" "}
                  <img
                    src={git}
                    alt=""
                    className="absolute w-8 rounded-full top-5 right-5 "
                  />
                </a>

                <div className="p-5">
                  <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Cloud-based student information chatbot system.
                  </h5>

                  <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
                    Created a cloud-based student information chatbot system
                    that makes information access easier for student safety.
                  </p>
                  <a
                    href="portfolio1"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-white mb-3 "
                  >
                    Read more
                    <svg
                      class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>

                  <div className="flex">
                    <p className="mx-1 text-blue-600">#HTML</p>
                    <p className="mx-1 text-green-600">#CSS</p>
                    <p className="mx-1 text-red-600">#Bootstrap</p>
                  </div>
                  <div className="bottom-0 flex">
                    <p className="mx-1 text-yellow-600">#React.js</p>
                    <p className="mx-1 text-purple-600">#Dialog Flow</p>
                    <p className="mx-1 text-orange-600">#Firebase</p>
                  </div>
                </div>
              </div>

              <div className="relative items-center m-8 overflow-hidden bg-white bg-no-repeat bg-cover border border-gray-200 rounded-lg shadow h-h1 w-w5 dark:bg-gray-800 dark:border-gray-700 jusify-center">
                <img
                  src={img2}
                  alt=""
                  className="h-40 mx-auto mt-3 transition duration-300 ease-in-out border rounded-lg w-w4 hover:scale-110"
                />
                <a href="https://github.com/Dinithirathnayaka/NEWFASHION">
                  {" "}
                  <img
                    src={git}
                    alt=""
                    className="absolute w-8 rounded-full top-5 right-5 "
                  />
                </a>

                <div className="p-5">
                  <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Fashion store website
                  </h5>

                  <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
                    Created mobile response web sie for fashion design.
                  </p>
                  <a
                    href="portfolio2"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-white mb-3 "
                  >
                    Read more
                    <svg
                      class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>

                  <div className="bottom-0 flex">
                    <p className="mx-1 text-blue-600">#HTML</p>
                    <p className="mx-1 text-green-600">#CSS</p>
                    <p className="mx-1 text-red-600">#Bootstrap</p>
                  </div>
                </div>
              </div>

              <div className="relative items-center m-8 overflow-hidden bg-white bg-no-repeat bg-cover border border-gray-200 rounded-lg shadow h-h1 w-w5 dark:bg-gray-800 dark:border-gray-700 jusify-center">
                <img
                  src={img3}
                  alt=""
                  className="h-40 mx-auto mt-3 transition duration-300 ease-in-out border rounded-lg w-w4 hover:scale-110"
                />
                <img
                  src={git}
                  alt=""
                  className="absolute w-8 rounded-full top-5 right-5 "
                />

                <div className="p-5">
                  <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Admin Panel for Janux Academy
                  </h5>
                  <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
                    Creating an admin panel for Janux Academy(Frontend part).
                  </p>{" "}
                  <a
                    href="portfolio3"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-white mb-3 "
                  >
                    Read more
                    <svg
                      class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                  <div className="flex">
                    <p className="mx-1 text-blue-600">#HTML</p>
                    <p className="mx-1 text-green-600">#CSS</p>
                    <p className="mx-1 text-red-600">#Bootstrap</p>
                  </div>
                  <div className="flex">
                    <p className="mx-1 text-yellow-600">#React.js</p>
                    <p className="mx-1 text-purple-600">#Firebase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Item 2 */}
          <div classNameName="duration-700 ease-in-out m-10 hidden md:block">
            <div className="flex flex-wrap justify-center gap-4">
              <div className="relative items-center m-8 overflow-hidden bg-white bg-no-repeat bg-cover border border-gray-200 rounded-lg shadow h-h1 w-w5 dark:bg-gray-800 dark:border-gray-700 jusify-center">
                <img
                  src={img4}
                  alt=""
                  className="h-40 mx-auto mt-3 transition duration-300 ease-in-out border rounded-lg w-w4 hover:scale-110"
                />
                <a href="https://github.com/Dinithirathnayaka/Pizza-Store">
                  <img
                    src={git}
                    alt=""
                    className="absolute w-8 rounded-full top-5 right-5 "
                  />
                </a>

                <div className="p-5">
                  <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    SpiceCraft pizza website
                  </h5>

                  <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
                    Creating a SpiceCraft pizza website for pizza ordering
                    store.
                  </p>

                  <a
                    href="portfolio4"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-white mb-3 "
                  >
                    Read more
                    <svg
                      class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>

                  <div className="flex">
                    <p className="mx-1 text-blue-600">#Laravel</p>
                    <p className="mx-1 text-green-600">#Firebase</p>
                    <p className="mx-1 text-red-600">#HTML</p>
                    <p className="mx-1 text-yellow-600">#CSS</p>
                  </div>
                  <div className="flex">
                    <p className="mx-1 text-purple-600">#Bootstrap</p>
                    <p className="mx-1 text-orange-600">#Java Script</p>
                    <p className="mx-1 text-pink-600">#MySql</p>
                  </div>
                </div>
              </div>

              <div className="relative items-center m-8 overflow-hidden bg-white bg-no-repeat bg-cover border border-gray-200 rounded-lg shadow h-h1 w-w5 dark:bg-gray-800 dark:border-gray-700 jusify-center">
                <img
                  src={img5}
                  alt=""
                  className="h-40 mx-auto mt-3 transition duration-300 ease-in-out border rounded-lg w-w4 hover:scale-110"
                />
                <a href="https://github.com/Dinithirathnayaka/Pizza-Store">
                  <img
                    src={git}
                    alt=""
                    className="absolute w-8 rounded-full top-5 right-5 "
                  />
                </a>

                <div className="p-5">
                  <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    SpiceCraft website's admin panel
                  </h5>

                  <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
                    Creating an admin panel for SpiceCraft pizza website.
                  </p>
                  <a
                    href="portfolio5"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-white mb-3 "
                  >
                    Read more
                    <svg
                      class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>

                  <div className="flex">
                    <p className="mx-1 text-blue-600">#react.js</p>
                    <p className="mx-1 text-green-600">#mongodb</p>
                    <p className="mx-1 text-red-600">#tailwind</p>
                  </div>
                </div>
              </div>

              <div className="relative items-center m-8 overflow-hidden bg-white bg-no-repeat bg-cover border border-gray-200 rounded-lg shadow h-h1 w-w5 dark:bg-gray-800 dark:border-gray-700 jusify-center">
                <img
                  src={img6}
                  alt=""
                  className="h-40 mx-auto mt-3 transition duration-300 ease-in-out border rounded-lg w-w4 hover:scale-110"
                />
                <a href="https://github.com/Dinithirathnayaka/Metait-webpage">
                  {" "}
                  <img
                    src={git}
                    alt=""
                    className="absolute w-8 rounded-full top-5 right-5 "
                  />
                </a>

                <div className="p-5">
                  <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Metait company official website
                  </h5>

                  <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
                    Create mobile response metait official web site for metait
                    company.
                  </p>

                  <a
                    href="portfolio6"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-white mb-3 "
                  >
                    Read more
                    <svg
                      class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>

                  <div className="flex">
                    <p className="mx-1 text-blue-600">#HTML</p>
                    <p className="mx-1 text-green-600">#CSS</p>
                    <p className="mx-1 text-red-600">#Bootstrap</p>
                  </div>
                  <div className="flex">
                    <p className="mx-1 text-yellow-600">#Java Script</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Item 3 */}
          <div classNameName="duration-700 ease-in-out m-10 hidden md:block">
            <div className="flex flex-wrap justify-center gap-4">
              <div className="relative items-center m-8 overflow-hidden bg-white bg-no-repeat bg-cover border border-gray-200 rounded-lg shadow h-h1 w-w5 dark:bg-gray-800 dark:border-gray-700 jusify-center">
                <img
                  src={img7}
                  alt=""
                  className="h-40 mx-auto mt-3 transition duration-300 ease-in-out border rounded-lg w-w4 hover:scale-110"
                />
                <a href="https://github.com/Dinithirathnayaka/Pharmacy-Tracking-System">
                  {" "}
                  <img
                    src={git}
                    alt=""
                    className="absolute w-8 rounded-full top-5 right-5 "
                  />
                </a>

                <div className="p-5">
                  <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Pharmacy Tracking System.
                  </h5>

                  <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
                    Pharmacy Tracking System for easily tracking the necessary
                    medicines for patients in the nearest phamacy
                  </p>

                  <a
                    href="portfolio7"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-white mb-3 "
                  >
                    Read more
                    <svg
                      class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>

                  <div className="flex">
                    <p className="mx-1 text-blue-600">#HTML</p>
                    <p className="mx-1 text-green-600">#CSS</p>
                    <p className="mx-1 text-red-600">#Bootstrap</p>
                  </div>
                  <div className="flex">
                    <p className="mx-1 text-yellow-600">#MERN Stack</p>
                  </div>
                </div>
              </div>

              <div className="relative items-center m-8 overflow-hidden bg-white bg-no-repeat bg-cover border border-gray-200 rounded-lg shadow h-h1 w-w5 dark:bg-gray-800 dark:border-gray-700 jusify-center">
                <img
                  src={img8}
                  alt=""
                  className="h-40 mx-auto mt-3 transition duration-300 ease-in-out border rounded-lg w-w4 hover:scale-110"
                />
                <img
                  src={git}
                  alt=""
                  className="absolute w-8 rounded-full top-5 right-5 "
                />

                <div className="p-5">
                  <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    School Website.
                  </h5>

                  <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
                    Created a website for school (Frontend-part).
                  </p>

                  <a
                    href="portfolio8"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-white mb-3 "
                  >
                    Read more
                    <svg
                      class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>

                  <div className="flex">
                    <p className="mx-1 text-blue-600">#HTML</p>
                    <p className="mx-1 text-green-600">#CSS</p>
                    <p className="mx-1 text-red-600">#Bootstrap</p>
                  </div>
                  <div className="flex">
                    <p className="mx-1 text-yellow-600">#Java Script</p>
                    <p className="mx-1 text-purple-600">#Firebase</p>
                  </div>
                </div>
              </div>

              <div className="relative items-center m-8 overflow-hidden bg-white bg-no-repeat bg-cover border border-gray-200 rounded-lg shadow h-h1 w-w5 dark:bg-gray-800 dark:border-gray-700 jusify-center">
                <img
                  src={img9}
                  alt=""
                  overflow-hidden
                  bg-cover
                  bg-no-repeat
                  className="h-40 mx-auto mt-3 transition duration-300 ease-in-out border rounded-lg w-w4 hover:scale-110"
                />
                <a href="https://github.com/Dinithirathnayaka/statictis-table">
                  {" "}
                  <img
                    src={git}
                    alt=""
                    className="absolute w-8 rounded-full top-5 right-5 "
                  />
                </a>

                <div className="p-5">
                  <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Statictis Table
                  </h5>

                  <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
                    The purpose of a Statistics Table is to summarize and
                    present data in a structured format, making it easier to
                    understand, analyze, and draw conclusions from the data.
                  </p>

                  <a
                    href="portfolio9"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-white mb-3 "
                  >
                    Read more
                    <svg
                      class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>

                  <div className="flex ">
                    <p className="mx-1 text-blue-600">#HTML</p>
                    <p className="mx-1 text-green-600">#CSS</p>
                    <p className="mx-1 text-red-600">#Bootstrap</p>
                  </div>

                  <div className="flex">
                    <p className="mx-1 text-yellow-600">#Java Script</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Item 4 */}

          <div classNameName="duration-700 ease-in-out m-10 sm:hidden md:block">
            <div className="flex flex-wrap justify-center gap-4 ">
              <div className="relative items-center m-8 overflow-hidden bg-white bg-no-repeat bg-cover border border-gray-200 rounded-lg shadow h-h1 w-w5 dark:bg-gray-800 dark:border-gray-700 jusify-center ">
                <img
                  src={img10}
                  alt=""
                  className="h-40 mx-auto mt-3 transition duration-300 ease-in-out border rounded-lg w-w4 hover:scale-110"
                />
                <a href="https://github.com/Dinithirathnayaka/note-app">
                  {" "}
                  <img
                    src={git}
                    alt=""
                    className="absolute w-8 rounded-full top-5 right-5 "
                  />
                </a>

                <div className="p-5">
                  <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Note creating app
                  </h5>

                  <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
                    Created note adding website.
                  </p>

                  <a
                    href="portfolio10"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-white mb-3 "
                  >
                    Read more
                    <svg
                      class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>

                  <div className="flex">
                    <p className="mx-1 text-blue-600">#HTML</p>
                    <p className="mx-1 text-green-600">#CSS</p>
                    <p className="mx-1 text-red-600">#Bootstrap</p>
                  </div>
                  <div className="flex">
                    <p className="mx-1 text-yellow-600">#Java Script</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>

        <div classNameName="duration-700 ease-in-out m-10 md:hidden block">
          <div className="flex flex-wrap justify-center gap-4 md:hidden">
            <div className="relative items-center m-8 overflow-hidden bg-white bg-no-repeat bg-cover border border-gray-200 rounded-lg shadow h-h1 w-w5 dark:bg-gray-800 dark:border-gray-700 jusify-center">
              <img
                src={img1}
                alt=""
                className="h-40 mx-auto mt-3 transition duration-300 ease-in-out border rounded-lg w-w4 hover:scale-110"
              />
              <a href="https://github.com/Dinithirathnayaka/ChatbotGroup-Project">
                {" "}
                <img
                  src={git}
                  alt=""
                  className="absolute w-8 rounded-full top-5 right-5 "
                />
              </a>

              <div className="p-5">
                <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Cloud-based student information chatbot system.
                </h5>

                <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
                  Created a cloud-based student information chatbot system that
                  makes information access easier for student safety.
                </p>
                <a
                  href="portfolio1"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-white mb-3 "
                >
                  Read more
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>

                <div className="flex">
                  <p className="mx-1 text-blue-600">#HTML</p>
                  <p className="mx-1 text-green-600">#CSS</p>
                  <p className="mx-1 text-red-600">#Bootstrap</p>
                </div>
                <div className="bottom-0 flex">
                  <p className="mx-1 text-yellow-600">#React.js</p>
                  <p className="mx-1 text-purple-600">#Dialog Flow</p>
                  <p className="mx-1 text-orange-600">#Firebase</p>
                </div>
              </div>
            </div>

            <div className="relative items-center m-8 overflow-hidden bg-white bg-no-repeat bg-cover border border-gray-200 rounded-lg shadow h-h1 w-w5 dark:bg-gray-800 dark:border-gray-700 jusify-center">
              <img
                src={img2}
                alt=""
                className="h-40 mx-auto mt-3 transition duration-300 ease-in-out border rounded-lg w-w4 hover:scale-110"
              />
              <a href="https://github.com/Dinithirathnayaka/NEWFASHION">
                {" "}
                <img
                  src={git}
                  alt=""
                  className="absolute w-8 rounded-full top-5 right-5 "
                />
              </a>

              <div className="p-5">
                <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Fashion store website
                </h5>

                <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
                  Created mobile response web sie for fashion design.
                </p>
                <a
                  href="portfolio2"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-white mb-3 "
                >
                  Read more
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>

                <div className="bottom-0 flex">
                  <p className="mx-1 text-blue-600">#HTML</p>
                  <p className="mx-1 text-green-600">#CSS</p>
                  <p className="mx-1 text-red-600">#Bootstrap</p>
                </div>
              </div>
            </div>

            <div className="relative items-center m-8 overflow-hidden bg-white bg-no-repeat bg-cover border border-gray-200 rounded-lg shadow h-h1 w-w5 dark:bg-gray-800 dark:border-gray-700 jusify-center">
              <img
                src={img3}
                alt=""
                className="h-40 mx-auto mt-3 transition duration-300 ease-in-out border rounded-lg w-w4 hover:scale-110"
              />
              <img
                src={git}
                alt=""
                className="absolute w-8 rounded-full top-5 right-5 "
              />

              <div className="p-5">
                <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Admin Panel for Janux Academy
                </h5>
                <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
                  Creating an admin panel for Janux Academy(Frontend part).
                </p>{" "}
                <a
                  href="portfolio3"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-white mb-3 "
                >
                  Read more
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
                <div className="flex">
                  <p className="mx-1 text-blue-600">#HTML</p>
                  <p className="mx-1 text-green-600">#CSS</p>
                  <p className="mx-1 text-red-600">#Bootstrap</p>
                </div>
                <div className="flex">
                  <p className="mx-1 text-yellow-600">#React.js</p>
                  <p className="mx-1 text-purple-600">#Firebase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Item 2 */}
        <div classNameName="duration-700 ease-in-out m-10">
          <div className="flex flex-wrap justify-center gap-4 md:hidden">
            <div className="relative items-center m-8 overflow-hidden bg-white bg-no-repeat bg-cover border border-gray-200 rounded-lg shadow h-h1 w-w5 dark:bg-gray-800 dark:border-gray-700 jusify-center">
              <img
                src={img4}
                alt=""
                className="h-40 mx-auto mt-3 transition duration-300 ease-in-out border rounded-lg w-w4 hover:scale-110"
              />
              <a href="https://github.com/Dinithirathnayaka/Pizza-Store">
                <img
                  src={git}
                  alt=""
                  className="absolute w-8 rounded-full top-5 right-5 "
                />
              </a>

              <div className="p-5">
                <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  SpiceCraft pizza website
                </h5>

                <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
                  Creating a SpiceCraft pizza website for pizza ordering store.
                </p>

                <a
                  href="portfolio4"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-white mb-3 "
                >
                  Read more
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>

                <div className="flex">
                  <p className="mx-1 text-blue-600">#Laravel</p>
                  <p className="mx-1 text-green-600">#Firebase</p>
                  <p className="mx-1 text-red-600">#HTML</p>
                  <p className="mx-1 text-yellow-600">#CSS</p>
                </div>
                <div className="flex">
                  <p className="mx-1 text-purple-600">#Bootstrap</p>
                  <p className="mx-1 text-orange-600">#Java Script</p>
                  <p className="mx-1 text-pink-600">#MySql</p>
                </div>
              </div>
            </div>

            <div className="relative items-center m-8 overflow-hidden bg-white bg-no-repeat bg-cover border border-gray-200 rounded-lg shadow h-h1 w-w5 dark:bg-gray-800 dark:border-gray-700 jusify-center">
              <img
                src={img5}
                alt=""
                className="h-40 mx-auto mt-3 transition duration-300 ease-in-out border rounded-lg w-w4 hover:scale-110"
              />
              <a href="https://github.com/Dinithirathnayaka/Pizza-Store">
                <img
                  src={git}
                  alt=""
                  className="absolute w-8 rounded-full top-5 right-5 "
                />
              </a>

              <div className="p-5">
                <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  SpiceCraft website's admin panel
                </h5>

                <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
                  Creating an admin panel for SpiceCraft pizza website.
                </p>
                <a
                  href="portfolio5"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-white mb-3 "
                >
                  Read more
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>

                <div className="flex">
                  <p className="mx-1 text-blue-600">#react.js</p>
                  <p className="mx-1 text-green-600">#mongodb</p>
                  <p className="mx-1 text-red-600">#tailwind</p>
                </div>
              </div>
            </div>

            <div className="relative items-center m-8 overflow-hidden bg-white bg-no-repeat bg-cover border border-gray-200 rounded-lg shadow h-h1 w-w5 dark:bg-gray-800 dark:border-gray-700 jusify-center">
              <img
                src={img6}
                alt=""
                className="h-40 mx-auto mt-3 transition duration-300 ease-in-out border rounded-lg w-w4 hover:scale-110"
              />
              <a href="https://github.com/Dinithirathnayaka/Metait-webpage">
                {" "}
                <img
                  src={git}
                  alt=""
                  className="absolute w-8 rounded-full top-5 right-5 "
                />
              </a>

              <div className="p-5">
                <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Metait company official website
                </h5>

                <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
                  Create mobile response metait official web site for metait
                  company.
                </p>

                <a
                  href="portfolio6"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-white mb-3 "
                >
                  Read more
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>

                <div className="flex">
                  <p className="mx-1 text-blue-600">#HTML</p>
                  <p className="mx-1 text-green-600">#CSS</p>
                  <p className="mx-1 text-red-600">#Bootstrap</p>
                </div>
                <div className="flex">
                  <p className="mx-1 text-yellow-600">#Java Script</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Item 3 */}
        <div classNameName="duration-700 ease-in-out m-10">
          <div className="flex flex-wrap justify-center gap-4 md:hidden">
            <div className="relative items-center m-8 overflow-hidden bg-white bg-no-repeat bg-cover border border-gray-200 rounded-lg shadow h-h1 w-w5 dark:bg-gray-800 dark:border-gray-700 jusify-center">
              <img
                src={img7}
                alt=""
                className="h-40 mx-auto mt-3 transition duration-300 ease-in-out border rounded-lg w-w4 hover:scale-110"
              />
              <a href="https://github.com/Dinithirathnayaka/Pharmacy-Tracking-System">
                {" "}
                <img
                  src={git}
                  alt=""
                  className="absolute w-8 rounded-full top-5 right-5 "
                />
              </a>

              <div className="p-5">
                <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Pharmacy Tracking System.
                </h5>

                <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
                  Pharmacy Tracking System for easily tracking the necessary
                  medicines for patients in the nearest phamacy
                </p>

                <a
                  href="portfolio7"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-white mb-3 "
                >
                  Read more
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>

                <div className="flex">
                  <p className="mx-1 text-blue-600">#HTML</p>
                  <p className="mx-1 text-green-600">#CSS</p>
                  <p className="mx-1 text-red-600">#Bootstrap</p>
                </div>
                <div className="flex">
                  <p className="mx-1 text-yellow-600">#MERN Stack</p>
                </div>
              </div>
            </div>

            <div className="relative items-center m-8 overflow-hidden bg-white bg-no-repeat bg-cover border border-gray-200 rounded-lg shadow h-h1 w-w5 dark:bg-gray-800 dark:border-gray-700 jusify-center">
              <img
                src={img8}
                alt=""
                className="h-40 mx-auto mt-3 transition duration-300 ease-in-out border rounded-lg w-w4 hover:scale-110"
              />
              <img
                src={git}
                alt=""
                className="absolute w-8 rounded-full top-5 right-5 "
              />

              <div className="p-5">
                <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  School Website.
                </h5>

                <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
                  Created a website for school (Frontend-part).
                </p>

                <a
                  href="portfolio8"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-white mb-3 "
                >
                  Read more
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>

                <div className="flex">
                  <p className="mx-1 text-blue-600">#HTML</p>
                  <p className="mx-1 text-green-600">#CSS</p>
                  <p className="mx-1 text-red-600">#Bootstrap</p>
                </div>
                <div className="flex">
                  <p className="mx-1 text-yellow-600">#Java Script</p>
                  <p className="mx-1 text-purple-600">#Firebase</p>
                </div>
              </div>
            </div>

            <div className="relative items-center m-8 overflow-hidden bg-white bg-no-repeat bg-cover border border-gray-200 rounded-lg shadow h-h1 w-w5 dark:bg-gray-800 dark:border-gray-700 jusify-center">
              <img
                src={img9}
                alt=""
                overflow-hidden
                bg-cover
                bg-no-repeat
                className="h-40 mx-auto mt-3 transition duration-300 ease-in-out border rounded-lg w-w4 hover:scale-110"
              />
              <a href="https://github.com/Dinithirathnayaka/statictis-table">
                {" "}
                <img
                  src={git}
                  alt=""
                  className="absolute w-8 rounded-full top-5 right-5 "
                />
              </a>

              <div className="p-5">
                <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Statictis Table
                </h5>

                <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
                  The purpose of a Statistics Table is to summarize and present
                  data in a structured format, making it easier to understand,
                  analyze, and draw conclusions from the data.
                </p>

                <a
                  href="portfolio9"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-white mb-3 "
                >
                  Read more
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>

                <div className="flex ">
                  <p className="mx-1 text-blue-600">#HTML</p>
                  <p className="mx-1 text-green-600">#CSS</p>
                  <p className="mx-1 text-red-600">#Bootstrap</p>
                </div>

                <div className="flex">
                  <p className="mx-1 text-yellow-600">#Java Script</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Item 4 */}
        <div classNameName="duration-700 ease-in-out m-10">
          <div className="flex flex-wrap justify-center gap-4 md:hidden">
            <div className="relative items-center m-8 overflow-hidden bg-white bg-no-repeat bg-cover border border-gray-200 rounded-lg shadow h-h1 w-w5 dark:bg-gray-800 dark:border-gray-700 jusify-center">
              <img
                src={img10}
                alt=""
                className="h-40 mx-auto mt-3 transition duration-300 ease-in-out border rounded-lg w-w4 hover:scale-110"
              />
              <a href="https://github.com/Dinithirathnayaka/note-app">
                {" "}
                <img
                  src={git}
                  alt=""
                  className="absolute w-8 rounded-full top-5 right-5 "
                />
              </a>

              <div className="p-5">
                <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Note creating app
                </h5>

                <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
                  Created note adding website.
                </p>

                <a
                  href="portfolio10"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-white mb-3 "
                >
                  Read more
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>

                <div className="flex">
                  <p className="mx-1 text-blue-600">#HTML</p>
                  <p className="mx-1 text-green-600">#CSS</p>
                  <p className="mx-1 text-red-600">#Bootstrap</p>
                </div>
                <div className="flex">
                  <p className="mx-1 text-yellow-600">#Java Script</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider indicators */}
      <div classNameName="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2 rtl:space-x-reverse">
        {[...Array(4)].map((_, index) => (
          <button
            key={index}
            type="button"
            classNameName={`h-5 w-5 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-300"
            }`}
            aria-current={index === currentSlide}
            aria-label={`Slide ${index + 1}`}
            onClick={() => carouselRef.current.slickGoTo(index)}
          ></button>
        ))}
      </div>

      {/* Slider controls */}
      <button
        id="data-carousel-prev"
        type="button"
        classNameName="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={goToPrevSlide}
      ></button>
      <button
        id="data-carousel-next"
        type="button"
        classNameName="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={goToNextSlide}
      ></button>
    </div>
  );
};

export default CarouselComponent;
