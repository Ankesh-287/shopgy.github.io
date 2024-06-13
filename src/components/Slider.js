import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

// const img = "https://i02.appmifile.com/173_operator_in/09/06/2021/fde866737ea0357305c2d1c852541460.gif"

const Slider = ({ start }) => {
  return (
    <Carousel fade>
      {start.map((item, index) => (
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={item}
            alt="Slide" />
        </Carousel.Item>
      ))
      }
    </Carousel>
  )
}
export default Slider
