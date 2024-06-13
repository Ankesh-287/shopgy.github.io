import React from 'react'

const Product = ({ name, src, price, realPrice, rating  }) => {
  return (
    <>
        <div className="card">
          {/* <div className="img-container"> */}
            <img src={src} alt='img' />
          {/* </div> */}
          <div className="desc-box">
            <p>{name}</p>
            <p> <strike>&#8377;{price}</strike> &#8377;{realPrice}</p>
            <p>{rating}</p>
            <button className='btn-bn'>Buy Now</button>
            <button className='btn-atc'>Add to Cart</button>
          </div>
        </div>
    </>
  )
}

export default Product
