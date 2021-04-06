import React, { useState } from 'react';
import { SliderData } from './data/SliderData';

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import theme from "../components/ui/theme";
import { makeStyles } from '@material-ui/core/styles';
import {
    Box
} from '@material-ui/core';

const ImageSlider  = ({ slides }) => {

  const classes = useStyles();

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
              className={classes.leftArrow} 
              onClick={prevSlide}
              style={{fontSize:"50px"}}
            />
            <ArrowForwardIosIcon 
              className={classes.rightArrow}
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
                    <img src={slide.image} alt='travel image' className={classes.imageSize} />
                  )}
                </div>
              );
            })}
          </section>
        </Box>
     );
}
 
export default ImageSlider ;

const useStyles = makeStyles({
  imageSize: {
    width: "1095px",
    height: "300px",

    [theme.breakpoints.down("sm")]: {
      width: "300px",
      height: "200px",
    },
  },
  leftArrow: {
    position: "absolute",
    top: "39%",
    left: "140px",
    color: "#fff",
    zIndex: "10",
    cursor: "pointer",
    userSelect: "none",
    background: "rgba(245, 245, 245, .2)",
    borderRadius: "50%",
    padding: "3px 3px 3px 17px",

    [theme.breakpoints.down("sm")]: {
      top: "25%",
      left: "60px",
    },
  },
  rightArrow: {
    position: "absolute",
    top: "39%",
    right: "140px",
    color: "#fff",
    zIndex: "10",
    cursor: "pointer",
    userSelect: "none",
    background: "rgba(245, 245, 245, .2)",
    borderRadius: "50%",
    padding: "10px 10px 10px 12px",

    [theme.breakpoints.down("sm")]: {
      top: "25%",
      right: "60px",
    },
  },
});