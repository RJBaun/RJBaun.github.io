import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.scss";
import RGBAnimation from "./RGBAnimation";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "default_service",
        "template_9fj7o46",
        form.current,
        "7zF9A-VWl1ADyZ2aI",
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
        },
      );
  };

  return (
    <section className="contact">
      <a id="contact"></a>
      <form ref={form} onSubmit={sendEmail}>
        <h2>I'd Love to hear from you!</h2>
        <p>
          Please be sure to include your contact informationin the message you
          submit.
        </p>
        <div className="inputs">
          <input
            type="text"
            placeholder="Your Name"
            name="from_name"
            required
          />
        </div>
        <textarea
          className="textbox"
          placeholder="Your message here..."
          rows="5"
          cols="50"
          name="message"
          required
        />
        <button type="submit">Submit</button>
      </form>
      <div className="links">
        <p>
          You can also find me on
          <a
            href="https://www.linkedin.com/in/rylan-baun-6720b71a2/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/RJBaun" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.instagram.com/rylanbaun/" target="_blank">
            <i className="fa-brands fa-square-instagram"></i>
          </a>
        </p>
        <p>
          Or view my resume{" "}
          <a href="https://flowcv.com/resume/bkdm18rbti" target="_blank">
            <i className="fa-solid fa-file-lines"></i>
          </a>
        </p>
      </div>
      <RGBAnimation />
    </section>
  );
};

export default Contact;
