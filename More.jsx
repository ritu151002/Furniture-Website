import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function More() {
  return (
    <>
      <div className="container mt-5">
        <h1>More About Us</h1>
        <p className="lead text-black">
          Discover more about our values, vision, and what makes us unique in
          the world of furniture.
        </p>

        {/* About Us Section */}
        <div className="row mt-5 align-items-center">
          <div className="col-md-7">
            <h2>Our Vision</h2>
            <p>
              At our furniture store, we believe in creating spaces that reflect
              your personality and style. Our vision is to offer high-quality,
              stylish furniture that enhances the beauty of your home. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              similique ex maxime dolorem odit asperiores, sapiente qui, magnam
              error necessitatibus architecto consectetur beatae voluptates
              voluptatem ducimus sed, nobis earum deserunt labore cum optio
              odio? Alias perferendis harum consectetur ipsum magnam veritatis
              laborum, excepturi ut earum, non error, nostrum placeat quod?
            </p>
          </div>
          <div className="col-md-5 text-center">
            <img
              src="vision.jpg"
              alt="Our Vision"
              className="img-fluid rounded shadow"
              width="auto"
            />
          </div>
        </div>

        <div className="mt-5">
          <h2>What Our Customers Say</h2>

          <div className="card mt-5">
            <div className="card-body">
              <p className="card-text">
                "The furniture I purchased transformed my living room!
                Exceptional quality and service."
              </p>
              <footer className="blockquote-footer text-black">John Doe</footer>
            </div>
          </div>
        </div>


      </div>

      <div className="bg-black text-white text-center py-5 mt-5">
        <div className="container">
          <h2>Follow Us</h2>
          <p>Stay updated with our latest collections and offers!</p>
          <div>
            <a href="#" className="text-white mx-3">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="#" className="text-white mx-3">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="#" className="text-white mx-3">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default More;
