import React, { useState } from 'react';

function FurnitureProduct() {
  const [selectedColor, setSelectedColor] = useState('Oak Brown');
  const [selectedSize, setSelectedSize] = useState('Medium');

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="furniture-product-container d-flex">
      {/* Left Section - Image Gallery */}
      <div className="product-images">
        <img src="sofa.jpg" className="img-fluid main-image" alt="sofa" />
        <div className="thumbnail-gallery">
          <img src="coffee.jpg" className="img-thumbnail" alt="thumbnail1" />
          <img src="bookshelf.jpg" className="img-thumbnail" alt="thumbnail2" />
          <img src="dining.jpeg" className="img-thumbnail" alt="thumbnail3" />
        </div>
      </div>

      {/* Right Section - Product Details */}
      <div className="product-details ms-5">
        <h2>Luxury Sofa</h2>
        <p className="text-danger">$899.99 <span className="text-muted">$1299.99</span></p>
        <p>Item: Sofa</p>

        {/* Color Selection */}
        <div className="product-color mb-3">
          <p>Color: {selectedColor}</p>
          <div className="color-options">
            <button className={`color-option ${selectedColor === 'Oak Brown' ? 'active' : ''}`} onClick={() => handleColorChange('Oak Brown')}>Oak Brown</button>
            <button className={`color-option ${selectedColor === 'Dark Grey' ? 'active' : ''}`} onClick={() => handleColorChange('Dark Grey')}>Dark Grey</button>
            <button className={`color-option ${selectedColor === 'Cream White' ? 'active' : ''}`} onClick={() => handleColorChange('Cream White')}>Cream White</button>
          </div>
        </div>

        {/* Size Selection */}
        <div className="product-size mb-3">
          <p>Size: {selectedSize}</p>
          <div className="size-options">
            <button className={`size-option ${selectedSize === 'Small' ? 'active' : ''}`} onClick={() => handleSizeChange('Small')}>Small</button>
            <button className={`size-option ${selectedSize === 'Medium' ? 'active' : ''}`} onClick={() => handleSizeChange('Medium')}>Medium</button>
            <button className={`size-option ${selectedSize === 'Large' ? 'active' : ''}`} onClick={() => handleSizeChange('Large')}>Large</button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button className="btn btn-dark btn-lg mt-3">ADD TO CART</button>
      </div>
    </div>
  );
}

export default FurnitureProduct;
