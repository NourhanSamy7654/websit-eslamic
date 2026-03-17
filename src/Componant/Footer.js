import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer" dir="rtl">
      <div className="container site-footer-inner">
        <p className="footer-title">حصن المسلم</p>

        <section className="footer-social" aria-label="روابط التواصل الاجتماعي">
          <a
            href="https://www.facebook.com/profile.php?id=100047265457023&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon-link"
            aria-label="Facebook"
          >
            <i className="fa fa-facebook-f" aria-hidden="true"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/nourhan-samy-4a6794237"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon-link"
            aria-label="LinkedIn"
          >
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
          <a
            href="#/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon-link"
            aria-label="YouTube"
          >
            <i className="fa fa-youtube" aria-hidden="true"></i>
          </a>
        </section>

        <p className="footer-copy">(c) {new Date().getFullYear()} Nourhan Samy. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
