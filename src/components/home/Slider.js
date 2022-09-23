import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img_s_1 from '../../assets/img_s_1.jpg';
import img_s_2 from '../../assets/img_s_2.jpg';

import img_s_3 from '../../assets/img_s_3.jpg';
function Slider(){
    return(
        <div className='pb-5'>
        <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-50 mx-auto"
          src={img_s_1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Satellite</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-50 mx-auto"
          src={img_s_2}
          alt="Second slide"
        //   style={{height:'47rem'}}
        />
        <Carousel.Caption>
          <h3>Earth</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 mx-auto"
          src={img_s_3}
          alt="Third slide"
        //   style={{height:'47rem'}}
        />
        <Carousel.Caption>
          <h3>Poverty</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    )
}
export default Slider;