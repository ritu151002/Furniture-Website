import React from "react";
import Products from "./Product";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const navigate = useNavigate();

  const handleGetDirections = () => {
    const latitude = 28.678898570907243;
    const longitude = 77.09833417301708;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    window.open(url, "_blank");
  };

  const handleProductsClick = () => {
    navigate("/product");
  };

  const products = [
    {
      id: 1,
      name: "Modern Sofa",
      price: "INR 15799",
      image: "sofa.jpeg",
    },
    {
      id: 2,
      name: "Classic Dining Table",
      price: "INR 10499",
      image: "dining.jpeg",
    },
    {
      id: 3,
      name: "Stylish Coffee Table",
      price: "INR 5299",
      image: "coffee.jpeg",
    },
    {
      id: 4,
      name: "Elegant Armchair",
      price: "INR 2349",
      image: "arm1.jpg",
    },
    {
      id: 5,
      name: "Bookshelf",
      price: "INR 12399",
      image: "bookshelf.jpg",
    },
    {
      id: 6,
      name: "Bed Frame",
      price: "INR 18899",
      image: "bedframe.jpg",
    },
  ];

  return (
    <>
      <div className="position-relative">
        <img
          src="Back1.jpg"
          className="BackGround-img d-block w-100"
          alt="backGround"
        />

        <div className="overlay-text">
          <div className="heading-1">Furniture Store</div>
          <div className="heading-2">Best in line</div>
          <div className="input mt-3 d-flex">
            <input
              type="email"
              className="form-control"
              placeholder="Send us your email"
              aria-label="Email"
              aria-describedby="subscribe-button"
            />

            <button className="btn btn-outline-light" id="subscribe-button">
              Send
            </button>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="p-5 col-md-6 d-flex flex-column justify-content-center">
            <h1 className="mb-4">About Our Furniture Store</h1>
            <p className="lead text-black">
              Welcome to our premium furniture store, where{" "}
              <strong>elegance</strong> meets <strong>comfort</strong>. We are
              committed to offering high-quality furniture that blends
              craftsmanship with contemporary design to suit any space.
            </p>
            <p className="lead text-black">
              Our mission is to provide you with a collection of unique,
              stylish, and functional furniture pieces that make your space
              warm, cozy, and inviting. We carefully curate each item to reflect
              modern trends.
            </p>
            <button
              className="btn btn-black btn-lg mt-1"
              onClick={handleProductsClick}
            >
              Know more
            </button>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center p-0 m-0">
            {" "}
            <img src="Home3.jpg" alt="Furniture Store" className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center p-0 m-0">
            {" "}
            <img src="Home1.jpg" alt="Furniture Store" className="img-fluid" />
          </div>
          <div className="p-5 col-md-6 d-flex flex-column justify-content-center">
            <h1 className="mb-4">Exciting range of Bed collection</h1>
            <p className="lead text-black">
              Welcome to our premium furniture store, where{" "}
              <strong>elegance</strong> meets <strong>comfort</strong>. We are
              committed to offering high-quality furniture that blends
              craftsmanship with contemporary design to suit any space.
            </p>
            <p className="lead text-black">
              Our mission is to provide you with a collection of unique,
              stylish, and functional furniture pieces that make your space
              warm, cozy, and inviting. We carefully curate each item to reflect
              modern trends.
            </p>
            <button
              className="btn btn-black btn-lg mt-1"
              onClick={handleProductsClick}
            >
              Explore Our Collection
            </button>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="p-5 col-md-6 d-flex flex-column justify-content-center">
            <h1 className="mb-4">Exciting range of sofa's</h1>
            <p className="lead text-black">
              Welcome to our premium furniture store, where{" "}
              <strong>elegance</strong> meets <strong>comfort</strong>. We are
              committed to offering high-quality furniture that blends
              craftsmanship with contemporary design to suit any space.
            </p>
            <p className="lead text-black">
              Our mission is to provide you with a collection of unique,
              stylish, and functional furniture pieces that make your space
              warm, cozy, and inviting. We carefully curate each item to reflect
              modern trends.
            </p>
            <button
              className="btn btn-black btn-lg mt-1"
              onClick={handleProductsClick}
            >
              Explore Our Collection
            </button>
          </div>

          <div className="col-md-6 d-flex flex-column justify-content-center p-0 m-0">
            {" "}
            <img src="Home2.jpg" alt="Furniture Store" className="img-fluid" />
          </div>
        </div>
      </div>

      {/* products */}
      <div className="bg-black text-white p-4">
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h1 className="">Our Products</h1>
            <p className="lead mb-4 text-white">
              Check out our wide range of products
            </p>
          </div>
          <div>
            <button
              className="btn btn-link btn-lg mt-3 text-white no-underline"
              onClick={handleProductsClick}
            >
              Goto..
            </button>
          </div>
        </div>

        <div className="row flex-row flex-nowrap no-scrollbar ">
          {products.map((product) => (
            <div
              className="col-md-2"
              key={product.id}
              style={{ minWidth: "300px" }}
            >
              <div className="card border-light shadow-sm">
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-img-top img-fluid rounded-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body ">
                  <h5 className="card-title text-black">{product.name}</h5>
                  <p className="card-text text-black">{product.price}</p>
                  <button className="btn btn-black btn-lg">Show details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* products */}

      {/* review       */}
      <div className="d-flex justify-content-between align-items-start mx-5 mt-5">
        <div>
          <h1 className="">What Our Customers Say</h1>
        </div>
        <div>
          <button
            className="btn btn-link btn-lg mt-3 text-black no-underline"
            onClick={handleProductsClick}
          >
            More..
          </button>
        </div>
      </div>

      <div className="card mx-5 mb-3">
        <div className="card-body">
          <p className="card-text">
            "The furniture I purchased transformed my living room! Exceptional
            quality and service."
          </p>
          <footer className="blockquote-footer text-black">John Doe</footer>
        </div>
      </div>

      <div className="card mx-5 mb-5">
        <div className="card-body">
          <p className="card-text">
            "The furniture I purchased transformed my living room! Exceptional
            quality and service."
          </p>
          <footer className="blockquote-footer text-black">John Doe</footer>
        </div>
      </div>

      {/* review */}

      {/* Contact */}
      <div className="bg-black py-5 px-5">
        <h1 className="text-white">ContactUs</h1>
        <p className="lead mb-4 text-white">
          We’re here to help you! Get in touch with us for any queries or
          feedback.
        </p>

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

        <div className="text-center mt-5">
          <p className="lead mb-4 text-white">
            Click on Button below to find the distance between you and us!
          </p>
          <button
            className="btn btn-outline-light btn-lg mt-2"
            onClick={handleGetDirections}
          >
            Get Directions
          </button>
        </div>
      </div>

      {/* Contact */}
    </>
  );
}

export default Home;
