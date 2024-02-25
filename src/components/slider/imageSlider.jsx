'use client'
import { useState } from 'react';
import {  SliderData  }  from '../../utils/imageData/projectsImage';
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
import Image from "next/image";

const ImageSlider = ({ slides }) => {
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
    <section className='slider'>
      <GoChevronLeft className='left-arrow absolute lg:left-36 top-1/2 left-5 text-white bg-mainColor rounded-full hover:text-black' onClick={prevSlide} />
      <GoChevronRight className='right-arrow text-white bg-mainColor rounded-full hover:text-black' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            
            {index === current && (
              <img src={slide.image} alt='travel image' className='rounded-lg' width={600}  />
              )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;