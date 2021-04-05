import React, { useState } from 'react';
import { SliderData } from './data/SliderData';

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import {
    Box
} from '@material-ui/core';

const ImageSlider  = ({ slides }) => {

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

    return ( 
        <Box ml={5} mr={5} pt={15} mb={8}>
          <section className='slider'>
            <ArrowBackIosIcon 
              className='left-arrow' 
              onClick={prevSlide}
              style={{fontSize:"50px"}}
            />
            <ArrowForwardIosIcon 
              className='right-arrow' 
              onClick={nextSlide} 
              style={{fontSize:"50px"}}
            />
            {SliderData.map((slide, index) => {
              return (
                <div
                  className={index === current ? 'slide active' : 'slide'}
                  key={index}
                >
                  {index === current && (
                    <img src={slide.image} alt='travel image' className='image' />
                  )}
                </div>
              );
            })}
          </section>
        </Box>
     );
}
 
export default ImageSlider ;