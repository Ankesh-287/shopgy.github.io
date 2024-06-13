import React from "react";

const user = {
  name : 'Ankesh patil',
  imgurl : 'https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2019/1/By_photka.jpg',
  imgsize : 50,
};
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

const listItems = products.map(product =>
    <li key={product.id}>
    style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
    }}
        {product.title}
    </li> 
    );

function Button(){
return(
    <div>
        <h1> {user.name} </h1>
        <img src={user.imgurl} alt={`Photo of ` + user.name} height='150px' width='150px' />
        <ul>{listItems}</ul>
    </div>
  )
};
export default Button;