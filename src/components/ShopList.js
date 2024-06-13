import React from 'react';
import Product from './Product';
import '../style/Shop.css';

const ShopList = ({ products, searchProduct }) => {
  const filterProducts = products.filter((product) => {
    const { name } = product;
    return name.toLowerCase().includes(searchProduct.toLowerCase());
  });

  return (
    <div className='shop-container'>
      <div className="products">
        {filterProducts.length > 0 ? (
          filterProducts.map((product) => (
            <Product 
              key={product.id}
              id={product.id}
              src={product.img}
              name={product.name}
              price={product.price}
              realPrice={product.realPrice}
              rating={product.rating}
              description={product.description}
            />
          ))
        ) : (
          <p> No Product found </p>
        )}
      </div>
    </div>
  );
};

export default ShopList;
