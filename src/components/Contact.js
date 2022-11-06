import React, { useState } from "react";
import { useEffect } from "react";
import Footer from "./Footer";

const Contact = () => {
  const initalData = {
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState(initalData);
  const [successMsg, setSuccessMsg] = useState(false);
  const [errorText, setErrorText] = useState(false);
  // handle multiple inputs
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };
  // handle submitting
  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstname, lastname, email, message } = formData;

    if (firstname && lastname && email && message) {
      setSuccessMsg(true);
      setErrorText(false);
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        message: "",
      });
    }
    if (message === "") {
      setErrorText(true);
    }
    
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSuccessMsg(false);
    }, [2000]);
    return () => {
      clearTimeout(timeout);
    };
  }, [successMsg]);
  const name = "Chidera";
  return (
    <section className="contact">
      {successMsg && <h3 className="msg-success">Message delivered</h3>}
      <h1>Contact Me</h1>
      <p>Hi there, contact me to ask about anything you have in mind</p>
      <form  onSubmit={handleSubmit}>
        <div className="flex-desktop">
          <div>
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              id="first_name"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              id="last_name"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="yourname@email.com"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          cols="30"
          rows="10"
          placeholder="Send a message, I'll reply you as soon as possible..."
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`${errorText ? "error" : "success"}`}
        ></textarea>
        {errorText && <h3 className="error-text">Please enter a message</h3>}
        <label htmlFor="agreement" className="agreement">
          <input type="checkbox" />
          <span className="checkmark"></span>
          You agree to provide your data to {name} who may contact you.
        </label>
        <button type="submit" id="btn__submit">
          Send Message
        </button>
      </form>
      {/* <form action="">
        <input type="text" placeholder="name" required />
        <button type="submit">Submit</button>
      </form> */}
      <Footer />
    </section>
  );
};

export default Contact;
