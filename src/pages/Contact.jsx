import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import emailjs from "emailjs-com";
import bgImg from "../assets/bg-1.jpg";
import { FaUserAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaAt } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { IconContext } from "react-icons";

function Contact() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_osvo7ri",
        "template_5pz0fw8",
        form.current,
        "3KqiOVEydz1heFUNA"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully");
        },
        (error) => {
          console.log(error.text);
          alert("Error sending message: " + error.text);
        }
      );

    e.target.reset();
  }
  return (
    <div
      className="relative w-full bg-center bg-no-repeat bg-cover "
      style={{ backgroundImage: `url(${bgImg})` }}
      id="contact"
    >
      <section className="grid items-center justify-center gap-10 py-20 md:grid-cols-2 md:items-center md:text-left md:px-20 backdrop-brightness-50 bg-black/30">
        <div className="z-50">
          <h5 className="mb-5 text-2xl font-bold text-white">Contact me</h5>
          <div className="flex mb-5">
            <FaMap className="w-8 h-8 p-2.5 m-3 bg-white rounded-full" />

            <div>
              <h3 className="text-purple-600">Address</h3>
              <p className="text-white">
                "Madushan" <br />
                Batawela, <br />
                Pattiyagedara, <br />
                Bandarawela.
              </p>
            </div>
          </div>

          <div className="flex mb-5">
            <FaPhone className="w-8 h-8 p-2.5 m-3 bg-white rounded-full" />
            <div>
              <h3 className="text-purple-600">Phone</h3>
              <p className="text-white">0716690125</p>
            </div>
          </div>

          <div className="flex mb-5">
            <FaEnvelope className="w-8 h-8 p-2.5 m-3 bg-white rounded-full" />
            <div>
              <h3 className="text-purple-600">Email</h3>
              <p className="text-white">dinithinayanamali98@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="w-auto px-10 py-10 bg-white rounded-lg md:w-60%">
          <h2 className="text-2xl font-bold">Send Message</h2>

          <IconContext.Provider value={{ fontsize: "5px" }}>
            <form ref={form} className="form" onSubmit={sendEmail}>
              <div className="flex my-10">
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="w-full p-2 text-lg border-b-2 border-black focus:outline-none"
                  placeholder="Full Name"
                />
              </div>

              <div className="flex my-10">
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="w-full p-2 text-lg border-b-2 border-black focus:outline-none "
                  placeholder="Email"
                />
              </div>

              <div className="flex my-10">
                <textarea
                  id="message"
                  rows={2}
                  name="message"
                  className="w-full p-2 text-lg border-b-2 border-black focus:outline-none"
                  placeholder="Type Your Message..."
                />
              </div>
              <button
                type="submit"
                className="w-40 p-3 text-white bg-purple-600 rounded-md"
              >
                Send
              </button>
            </form>
          </IconContext.Provider>
        </div>
      </section>
    </div>
  );
}

export default Contact;
