import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import emailjs from "emailjs-com";
import { FaUserAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaAt } from "react-icons/fa";
import { IconContext } from "react-icons";
import hand from "../assets/waving-hand.png";
import mail from "../assets/mail-box.png";

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
      <Navbar />
      <div className="mx-40 pt-60">
        {" "}
        <h1 className="text-5xl font-semibold">Let's Create</h1>
        <h1 className="text-5xl font-semibold">Progress Together</h1>
      </div>
      <h5 className="text-xl font-semibold md:mx-20 sm:pt-20">Contact me</h5>
      <section className="grid gap-8 m-5 mx-40 md:grid-cols-2 md:items-center md:text-left md:mx-20 sm:pt-20 pt-60">
        <div className="p-5 px-10 py-10 mx-10 bg-white rounded-lg">
          <h3 className="mb-2 text-2xl font-bold">
            Have a project or question? Just send me a message.
          </h3>
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
        <div className="p-5 mx-10 bg-white">
          <p>
            Your data remains confidential and will not be passed to third
            parties
          </p>

          <p>Email</p>
          <h6>dinithinayanamali98@gmail.com</h6>

          <p>Phone</p>
          <h6>0890837878888</h6>
        </div>
      </section>

      <section>
        <h1 className="text-4xl font-semibold text-center">
          Have a project in mind?
        </h1>
        <h1 className="text-4xl font-semibold text-center">
          Let’s get to work.{" "}
          <span>
            <img src={mail} alt="" className="w-8 animate-waving-hand" />
          </span>
        </h1>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
