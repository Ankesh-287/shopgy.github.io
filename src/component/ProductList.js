import React from 'react'
import Product from './Product'
import '../style/ProductList.css';

const ProductList = ({products, searchProduct}) => {
    const filterProducts = products.filter((product) =>{
        const {name} = product;
        return(
            name.toLowerCase().includes(searchProduct.toLowerCase())
        );
    });
  return (
    <div className='product-container'>
      {filterProducts.length > 0 ?(
        filterProducts.map((product) => (
        <Product 
        key={product.id}
        id={product.id}
        src={product.img}
        name={product.name}
        price={product.price}
        realPrice={product.realPrice}
        rating={product.rating}
        />
      ))
      ) : (
        <p> No Product found </p>
      )}
    </div>
  )
}

export default ProductList
