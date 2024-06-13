import React from 'react';
import '../style/ProductSearch.css';

const ProductSearch = ({ setProduct }) => {
  const handleSearch = (e) => {
    setProduct(e.target.value);
  };

  return (
    <div className='search'>
      <input 
        type="text"  
        className='pSearch' 
        placeholder='Search' 
        onChange={handleSearch}
      />
    </div>
  );
};

export default ProductSearch;
