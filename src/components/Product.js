import React from 'react';

const Product = ({ name, src, price, realPrice, rating, description }) => {
  return (
    <div className="p-card">
      <div className="pi-box">
        <img src={src} alt={name} />
      </div>
      <div className="pd-box">
        <p className="name">{name}</p>
        <p className="description">{description}</p>
        <p className="price">
          <strike>&#8377;{price}</strike> &#8377;{realPrice}
        </p>
        <p className="rating">{rating}</p>
        <button className="atc-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
