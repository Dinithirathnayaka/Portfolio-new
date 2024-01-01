import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import emailjs from "emailjs-com";
import { FaUserAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaAt } from "react-icons/fa";
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
    <div>
      <section className="grid items-center justify-center gap-10 pt-32 md:mx-10 md:grid-cols-2 md:items-center md:text-left md:px-20">
        <div className="w-auto px-10 py-10 bg-white rounded-lg md:w-full">
          <h1 className="uppercase">Get in Touch</h1>
          <h5 className="mb-3 font-sans text-4xl font-bold text-left">
            Contact me.
          </h5>

          <IconContext.Provider value={{ fontsize: "5px" }}>
            <form ref={form} className="form" onSubmit={sendEmail}>
              <div className="flex my-10">
                <FaUserAlt className="m-3 text-2xl" />
                <input type="hidden" name="contact_number" />

                <input
                  id="name"
                  type="text"
                  name="name"
                  className="w-full p-2 text-xl border rounded-md"
                  placeholder="Your name"
                />
              </div>

              <div className="flex my-10">
                <FaAt className="m-3 text-2xl" />

                <input
                  id="email"
                  type="email"
                  name="email"
                  className="w-full p-2 text-xl border rounded-md"
                  placeholder="Your email"
                />
              </div>

              <div className="flex my-10">
                <FaEnvelope className="m-3 text-2xl" />

                <textarea
                  id="message"
                  rows={5}
                  name="message"
                  className="w-full p-2 text-xl border rounded-md msg "
                  placeholder="Message..."
                />
              </div>
              <button
                type="submit"
                className="p-5 text-white bg-black rounded-md"
              >
                Send Message
              </button>
            </form>
          </IconContext.Provider>
        </div>
        <div className="flex items-center justify-center ">
          <img
            src="https://media1.giphy.com/media/j1LcC8vd7UxxP8uFYr/giphy.gif?cid=6c09b952up6zrk5ei7nhjszhtxks4laxgnd3i8iveev7mwu0&ep=v1_stickers_related&rid=giphy.gif&ct=s"
            alt=""
            className="max-w-full max-h-full mx-auto animate-bounce w-w3"
          />
          {/* <p className="mb-8 text-2xl font-bold">
            Your data remains confidential and will not be passed to third
            parties
          </p>

          <p>Email</p>
          <h6 className="mb-5 text-xl font-semibold ">
            dinithinayanamali98@gmail.com
          </h6>

          <p>Phone</p>
          <h6 className="mb-5 text-xl font-semibold">0890837878888</h6> */}
        </div>
      </section>

      <section className="my-10">
        <h1 className="text-2xl font-bold text-center">
          Have a project in mind?
        </h1>
        <h1 className="text-2xl font-bold text-center">Let’s get to work. </h1>
      </section>
    </div>
  );
}

export default Contact;
