import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faDribbble } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="bg-black text-white py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-6 text-md-start">
            <h2 className="fw-bold">Get in Touch</h2>
            <p className="lead">
              Ecosystem bootstrapping learning curve lean startup disruptive.
              Marketing long tail disruptive agile development partner.
            </p>

            <div className="d-flex justify-content-center  justify-content-md-start gap-3 mt-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />                
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FontAwesomeIcon icon={faPinterest} size="2x" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-around mt-md-0">
            <div className="contact-card bg-dark p-3 rounded d-flex flex-column align-items-center justify-content-center">
              <FontAwesomeIcon icon={faDribbble} size="lg" className="mb-2" />
              <a href="" className="text-white text-decoration-none">dribbble.com/example</a>
            </div>

            <div className="contact-card bg-dark p-3 rounded d-flex flex-column align-items-center justify-content-center">
              <FontAwesomeIcon icon={faEnvelope} size="lg" className="mb-2" />
              <a href="" className="text-white text-decoration-none">contact@example.com</a>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between mt-5 ">
          <a  className="text-white text-decoration-none" href="">Privacy Policy | Terms of Service</a>
          <a className="text-white text-decoration-none" href="">&copy; 2024 Your Company. All rights reserved.</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
