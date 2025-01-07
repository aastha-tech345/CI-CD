import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import { themeContext } from "../../Context";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const data = {
    //   name,
    //   email,
    //   message,
    // };

    try {
      let res = await axios.post("http://localhost:5000/email/send", data);
      if (res.status === 200) {
        toast.success(res.message);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="contact-form" id="contact">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            className="user"
            placeholder="Email"
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
            value={data.message}
            onChange={handleChange}
          />
          <button className="button" onClick={handleSubmit}>
            Submit
          </button>
          {/* <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div> */}
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
