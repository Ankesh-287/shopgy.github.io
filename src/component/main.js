import React, { useEffect } from 'react';

const Main = () => {
  const getData = async () => {
    try {
      const res = await fetch('http://localhost:8000/https://api.covid19india.org/data.json');
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return <div></div>;
};

export default Main;
