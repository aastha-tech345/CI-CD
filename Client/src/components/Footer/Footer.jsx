import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import { FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>aastha.tech345@gmail.com</span>
        <div className="f-icons">
          <a href="youtube.com/channel/UCyX7YS8oH8eIJln01WqdEGQ">
            <FaYoutube color="white" size={"2rem"} />
          </a>
          <a href="https://www.linkedin.com/in/aastha-modanwal-681922232/">
            <FaLinkedin color="white" size={"2rem"} />
          </a>
          <a href="https://github.com/aastha-tech345">
            <Gitub color="white" size={"2rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
