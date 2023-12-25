import React, { useRef } from "react";
import Navbar from "../components/Navbar";
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
      <Navbar />
      <div className="mx-20 pt-60">
        {" "}
        <h1 className="text-5xl font-semibold">Let's Create</h1>
        <h1 className="text-5xl font-semibold">Progress Together</h1>
      </div>

      <section>
        <h5 className="">Contact me</h5>

        <div className="form">
          <IconContext.Provider value={{ fontsize: "5px" }}>
            <form ref={form} className="form" onSubmit={sendEmail}>
              <div className="form-group">
                <FaUserAlt className="iconc" />
                <input type="hidden" name="contact_number" />

                <input
                  id="name"
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <FaAt className="iconc" />

                <input
                  id="email"
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Your email"
                />
              </div>

              <div className="form-group">
                <FaEnvelope className="iconc" />

                <textarea
                  id="message"
                  name="message"
                  className="form-control msg"
                  placeholder="Message..."
                />
              </div>
              <button type="submit" className="btnc ">
                Send Message
              </button>
            </form>
          </IconContext.Provider>
        </div>
      </section>
    </div>
  );
}

export default Contact;
