import "bootstrap/dist/css/bootstrap.css";
import React from "react";

function ContactUs() {
  const handleGetDirections = () => {
    const latitude = 28.678898570907243;
    const longitude = 77.09833417301708;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    window.open(url, "_blank");
  };

  return (
    <>      
      <div className="container text-black mt-5">
        <h1 className="text-black">Contact Us</h1>
        <p className="lead text-black">
          We’re here to help you! Get in touch with us for any queries or
          feedback.
        </p>
      </div>

      {/* Contact Us Form Section */}
      <div className="container mt-5">
        <div className="row">
          {/* Left Column: Contact Form */}
          <div className="col-md-6">
            <h2 className="mb-4 text-black">Send Us a Message</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label text-black">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control border-black"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-black">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control border-black"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label text-black">
                  Your Message
                </label>
                <textarea
                  className="form-control border-black"
                  id="message"
                  rows="4"
                  placeholder="Write your message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-black btn-lg">
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column: Store Information */}
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h2 className="mb-4 text-black">Visit Our Store</h2>
            <p className="lead text-black">
              Our furniture store is open to the public! Come visit us for
              personalized service and a hands-on experience with our
              collections.
            </p>
            <ul className="list-unstyled text-black">
              <li>
                <strong>Address:</strong> 123 Furniture Street, Design City,
                Country
              </li>
              <li>
                <strong>Phone:</strong> +123 456 7890
              </li>
              <li>
                <strong>Email:</strong> support@furniturestore.com
              </li>
              <li>
                <strong>Opening Hours:</strong> Mon-Sat: 9 AM - 7 PM
              </li>
            </ul>
          </div>
        </div>

        {/* Embedded Google Map */}
        <div className="row mt-5">
          <div className="col">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.035547819299!2d77.071322!3d28.645318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd1d08f1f7d5%3A0x4eaaafcfae94b482!2sEye%20Mantra%20Hospital!5e0!3m2!1sen!2sus!4v1635190592927!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Store Location"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer Call-to-Action Section */}
      <div className="bg-black text-center py-5 mt-5">
        <div className="container">
          <h2 className="text-white">Let’s Get in Touch</h2>
          <p className="lead text-white">
            We’d love to hear from you! Contact us or visit our store today.
          </p>
          <button className="btn btn-outline-light btn-lg mt-3" onClick={handleGetDirections}>Get Directions</button>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
