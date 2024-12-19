import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (

  <div
    className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
    justify-between items-center"
  >
    <p className="text-gray-400">
      &copy; {new Date().getFullYear()} Anujan. All rights reserved.
    </p>
    <div className="flex space-x-4 my-4 md:my-0">
      <a href="https://www.instagram.com/_a.new.generation_/?hl=en" className="text-gray-400 hover:text-white">
        <FaInstagram />
      </a>
      <a href="https://www.linkedin.com/in/anujan-mohanakumar/?originalSubdomain=ca" className="text-gray-400 hover:text-white">
        <FaLinkedin />
      </a>
      <a href="https://github.com/Anujanless?tab=repositories" className="text-gray-400 hover:text-white">
        <FaGithub />
      </a>
    </div>
    <div className="flex space-x-4">
      <a href="https://g.co/kgs/7qhyMkW" className="text-gray-400 hover:text-white">
        Location: Mississauga, ON
      </a>
    </div>
  </div>
  );
};

export default Footer;