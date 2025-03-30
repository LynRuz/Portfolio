import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#2E0D39]  to-[#230A2A] px-6"
    >
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-purple-400 mb-6">
        Contact Me
      </h2>

      <p className="text-lg text-purple-200 max-w-xl text-center mb-6">
        I'd love to hear from you! Connect with me on social media or reach out directly.
      </p>

      {/* Social Media Icons */}
      <div className="flex space-x-6 mb-6">
        <a
          href="https://www.facebook.com/share/1BiP7WSsDZ/?mibextid=wwXI"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:scale-110 transition transform duration-300"
        >
          <FaFacebook size={40} />
        </a>
        <a
          href="https://github.com/ruzkaw25"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-800 hover:scale-110 transition transform duration-300"
        >
          <FaGithub size={40} />
        </a>
        <a
          href="https://github.com/ruzkaw25"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:scale-110 transition transform duration-300"
        >
          <FaLinkedin size={40} />
        </a>
        <a
          href="https://twitter.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:scale-110 transition transform duration-300"
        >
          <FaTwitter size={40} />
        </a>
      </div>

      {/* Direct Contact Info */}
      <div className="text-center">
        <p className="text-purple-200 text-lg mb-2">
          Phone: <span className="font-semibold">+63 9182076442</span>
        </p>
        <p className="text-purple-200 text-lg mb-4">
          Email: <span className="font-semibold">ruzkaw25@gmail.com</span>
        </p>

        {/* Fun Question */}
        <div className="border-t pt-4">
          <p className="text-purple-200 text-lg">
            <span className="font-semibold">Fun Question:</span> How did you find me?
          </p>
          <p className="text-purple-200 text-lg italic">
            (Google, LinkedIn, Friend Referral, etc.)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;