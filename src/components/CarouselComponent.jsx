import React, { useRef, useState } from "react";
import Slider from "react-slick";
import img from "../assets/17.jpg";
import git from "../assets/git.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <div id="carousel-example" classNameName="relative w-full">
      {/* Carousel wrapper */}
      <div classNameName="relative h-56 overflow-hidden rounded-lg sm:h-64 xl:h-80 2xl:h-96">
        <Slider ref={carouselRef} {...settings}>
          {/* Item 1 */}
          <div classNameName="duration-700 ease-in-out m-10">
            <div className="flex flex-wrap justify-center gap-4">
              <div className="relative items-center bg-white border border-gray-200 rounded-lg shadow w-w5 dark:bg-gray-800 dark:border-gray-700 jusify-center">
                <img
                  src={img}
                  alt=""
                  className="mx-auto mt-3 border rounded-lg w-w4"
                />
                <img
                  src={git}
                  alt=""
                  className="absolute w-8 rounded-full top-5 right-5 "
                />

                <div className="p-5">
                  <a
                    href="#"
                    className="text-blue-700 dark:text-blue-400 hover:underline"
                  >
                    <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <div className="flex">
                    <p className="mx-1 text-blue-600">#react.js</p>
                    <p className="mx-1 text-green-600">#mongodb</p>
                    <p className="mx-1 text-red-600">#tailwind</p>
                  </div>
                </div>
              </div>

              <div className="relative items-center bg-white border border-gray-200 rounded-lg shadow w-w5 dark:bg-gray-800 dark:border-gray-700 jusify-center">
                <img
                  src={img}
                  alt=""
                  className="mx-auto mt-3 border rounded-lg w-w4"
                />
                <img
                  src={git}
                  alt=""
                  className="absolute w-8 rounded-full top-5 right-5 "
                />

                <div className="p-5">
                  <a
                    href="#"
                    className="text-blue-700 dark:text-blue-400 hover:underline"
                  >
                    <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <div className="flex">
                    <p className="mx-1 text-blue-600">#react.js</p>
                    <p className="mx-1 text-green-600">#mongodb</p>
                    <p className="mx-1 text-red-600">#tailwind</p>
                  </div>
                </div>
              </div>

              <div className="relative items-center bg-white border border-gray-200 rounded-lg shadow w-w5 dark:bg-gray-800 dark:border-gray-700 jusify-center">
                <img
                  src={img}
                  alt=""
                  className="mx-auto mt-3 border rounded-lg w-w4"
                />
                <img
                  src={git}
                  alt=""
                  className="absolute w-8 rounded-full top-5 right-5 "
                />

                <div className="p-5">
                  <a
                    href="#"
                    className="text-blue-700 dark:text-blue-400 hover:underline"
                  >
                    <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <div className="flex">
                    <p className="mx-1 text-blue-600">#react.js</p>
                    <p className="mx-1 text-green-600">#mongodb</p>
                    <p className="mx-1 text-red-600">#tailwind</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Item 2 */}
          <div classNameName="duration-700 ease-in-out m-10">
            <div className="flex flex-wrap justify-center gap-4">
              <div className="relative items-center bg-white border border-gray-200 rounded-lg shadow w-w5 dark:bg-gray-800 dark:border-gray-700 jusify-center">
                <img
                  src={img}
                  alt=""
                  className="mx-auto mt-3 border rounded-lg w-w4"
                />
                <img
                  src={git}
                  alt=""
                  className="absolute w-8 rounded-full top-5 right-5 "
                />

                <div className="p-5">
                  <a
                    href="#"
                    className="text-blue-700 dark:text-blue-400 hover:underline"
                  >
                    <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <div className="flex">
                    <p className="mx-1 text-blue-600">#react.js</p>
                    <p className="mx-1 text-green-600">#mongodb</p>
                    <p className="mx-1 text-red-600">#tailwind</p>
                  </div>
                </div>
              </div>

              <div className="relative items-center bg-white border border-gray-200 rounded-lg shadow w-w5 dark:bg-gray-800 dark:border-gray-700 jusify-center">
                <img
                  src={img}
                  alt=""
                  className="mx-auto mt-3 border rounded-lg w-w4"
                />
                <img
                  src={git}
                  alt=""
                  className="absolute w-8 rounded-full top-5 right-5 "
                />

                <div className="p-5">
                  <a
                    href="#"
                    className="text-blue-700 dark:text-blue-400 hover:underline"
                  >
                    <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <div className="flex">
                    <p className="mx-1 text-blue-600">#react.js</p>
                    <p className="mx-1 text-green-600">#mongodb</p>
                    <p className="mx-1 text-red-600">#tailwind</p>
                  </div>
                </div>
              </div>

              <div className="relative items-center bg-white border border-gray-200 rounded-lg shadow w-w5 dark:bg-gray-800 dark:border-gray-700 jusify-center">
                <img
                  src={img}
                  alt=""
                  className="mx-auto mt-3 border rounded-lg w-w4"
                />
                <img
                  src={git}
                  alt=""
                  className="absolute w-8 rounded-full top-5 right-5 "
                />

                <div className="p-5">
                  <a
                    href="#"
                    className="text-blue-700 dark:text-blue-400 hover:underline"
                  >
                    <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <div className="flex">
                    <p className="mx-1 text-blue-600">#react.js</p>
                    <p className="mx-1 text-green-600">#mongodb</p>
                    <p className="mx-1 text-red-600">#tailwind</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Item 3 */}
          <div classNameName="duration-700 ease-in-out m-10">
            <div className="flex flex-wrap justify-center gap-4">
              <div className="relative items-center bg-white border border-gray-200 rounded-lg shadow w-w5 dark:bg-gray-800 dark:border-gray-700 jusify-center">
                <img
                  src={img}
                  alt=""
                  className="mx-auto mt-3 border rounded-lg w-w4"
                />
                <img
                  src={git}
                  alt=""
                  className="absolute w-8 rounded-full top-5 right-5 "
                />

                <div className="p-5">
                  <a
                    href="#"
                    className="text-blue-700 dark:text-blue-400 hover:underline"
                  >
                    <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <div className="flex">
                    <p className="mx-1 text-blue-600">#react.js</p>
                    <p className="mx-1 text-green-600">#mongodb</p>
                    <p className="mx-1 text-red-600">#tailwind</p>
                  </div>
                </div>
              </div>

              <div className="relative items-center bg-white border border-gray-200 rounded-lg shadow w-w5 dark:bg-gray-800 dark:border-gray-700 jusify-center">
                <img
                  src={img}
                  alt=""
                  className="mx-auto mt-3 border rounded-lg w-w4"
                />
                <img
                  src={git}
                  alt=""
                  className="absolute w-8 rounded-full top-5 right-5 "
                />

                <div className="p-5">
                  <a
                    href="#"
                    className="text-blue-700 dark:text-blue-400 hover:underline"
                  >
                    <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <div className="flex">
                    <p className="mx-1 text-blue-600">#react.js</p>
                    <p className="mx-1 text-green-600">#mongodb</p>
                    <p className="mx-1 text-red-600">#tailwind</p>
                  </div>
                </div>
              </div>

              <div className="relative items-center bg-white border border-gray-200 rounded-lg shadow w-w5 dark:bg-gray-800 dark:border-gray-700 jusify-center">
                <img
                  src={img}
                  alt=""
                  className="mx-auto mt-3 border rounded-lg w-w4"
                />
                <img
                  src={git}
                  alt=""
                  className="absolute w-8 rounded-full top-5 right-5 "
                />

                <div className="p-5">
                  <a
                    href="#"
                    className="text-blue-700 dark:text-blue-400 hover:underline"
                  >
                    <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <div className="flex">
                    <p className="mx-1 text-blue-600">#react.js</p>
                    <p className="mx-1 text-green-600">#mongodb</p>
                    <p className="mx-1 text-red-600">#tailwind</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Item 4 */}
          <div classNameName="duration-700 ease-in-out m-10">
            <div className="flex flex-wrap justify-center gap-4">
              <div className="relative items-center bg-white border border-gray-200 rounded-lg shadow w-w5 dark:bg-gray-800 dark:border-gray-700 jusify-center">
                <img
                  src={img}
                  alt=""
                  className="mx-auto mt-3 border rounded-lg w-w4"
                />
                <img
                  src={git}
                  alt=""
                  className="absolute w-8 rounded-full top-5 right-5 "
                />

                <div className="p-5">
                  <a
                    href="#"
                    className="text-blue-700 dark:text-blue-400 hover:underline"
                  >
                    <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <div className="flex">
                    <p className="mx-1 text-blue-600">#react.js</p>
                    <p className="mx-1 text-green-600">#mongodb</p>
                    <p className="mx-1 text-red-600">#tailwind</p>
                  </div>
                </div>
              </div>

              <div className="relative items-center bg-white border border-gray-200 rounded-lg shadow w-w5 dark:bg-gray-800 dark:border-gray-700 jusify-center">
                <img
                  src={img}
                  alt=""
                  className="mx-auto mt-3 border rounded-lg w-w4"
                />
                <img
                  src={git}
                  alt=""
                  className="absolute w-8 rounded-full top-5 right-5 "
                />

                <div className="p-5">
                  <a
                    href="#"
                    className="text-blue-700 dark:text-blue-400 hover:underline"
                  >
                    <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <div className="flex">
                    <p className="mx-1 text-blue-600">#react.js</p>
                    <p className="mx-1 text-green-600">#mongodb</p>
                    <p className="mx-1 text-red-600">#tailwind</p>
                  </div>
                </div>
              </div>

              <div className="relative items-center bg-white border border-gray-200 rounded-lg shadow w-w5 dark:bg-gray-800 dark:border-gray-700 jusify-center">
                <img
                  src={img}
                  alt=""
                  className="mx-auto mt-3 border rounded-lg w-w4"
                />
                <img
                  src={git}
                  alt=""
                  className="absolute w-8 rounded-full top-5 right-5 "
                />

                <div className="p-5">
                  <a
                    href="#"
                    className="text-blue-700 dark:text-blue-400 hover:underline"
                  >
                    <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <div className="flex">
                    <p className="mx-1 text-blue-600">#react.js</p>
                    <p className="mx-1 text-green-600">#mongodb</p>
                    <p className="mx-1 text-red-600">#tailwind</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
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
