import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contactus");
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
      <div className="container mt-5">
        <h1 className="mb-2">Our Products</h1>
        <p className="lead text-black">Check out are wide range of products</p>
        
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card border-light shadow-sm">
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-img-top img-fluid rounded-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title text-black">{product.name}</h5>
                  <p className="card-text text-black">{product.price}</p>
                  <button className="btn btn-black btn-lg">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Banner */}
      <div className="bg-black text-white text-center py-5 mt-5">
        <div className="container">
          <h2>Upgrade Your Home with Our Exclusive Collections</h2>
          <button
            className="btn btn-outline-light btn-lg mt-3"
            onClick={handleContactClick}
          >
            Contact us
          </button>
        </div>
      </div>
    </>
  );
}

export default Products;
