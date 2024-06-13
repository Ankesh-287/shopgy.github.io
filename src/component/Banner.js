import React from 'react'

const Banner = ({ data }) => {
  return (
    <div>
    {data && (
    <div>
      <img src={data.url} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  )}
  </div>
  );
}

export default Banner
