import React from "react";
import "./Footer.css"; // You can create a CSS file for additional styling

const Footer = () => {
  return (
    <footer className="bg-white text-center text-lg-start">
      <div className="container p-4" style={{ backgroundColor: "white" }}>
        <section className="mb-4">
          <a
            href="https://www.facebook.com/profile.php?id=100047265457023&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="me-4 text-reset"
          >
            <i className="fa fa-facebook-f fa-lg" aria-hidden="true"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/nourhan-samy-4a6794237"
            target="_blank"
            rel="noopener noreferrer"
            className="me-4 text-reset"
          >
            <i className="fa fa-linkedin fa-lg" aria-hidden="true"></i>
          </a>
          <a
            href="#/"
            target="_blank"
            rel="noopener noreferrer"
            className="me-4 text-reset"
          >
            <i className="fa fa-youtube fa-lg" aria-hidden="true"></i>
          </a>
        </section>
      </div>
      <div className="text-center p-3">
        © {new Date().getFullYear()} Eg nourhan samy. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
