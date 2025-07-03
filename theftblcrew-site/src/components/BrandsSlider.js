import React, { useRef, useEffect } from 'react';
import './BrandsSlider.css';
import brand1 from '../assets/1.png';
import brand2 from '../assets/2.png';
import brand3 from '../assets/3.png';
import brand4 from '../assets/4.png';
import brand5 from '../assets/5.png';
import brand6 from '../assets/6.png';

function BrandsSlider() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({
          left: 300,
          behavior: 'smooth'
        });

        const scrollLeft = sliderRef.current.scrollLeft;
        const scrollWidth = sliderRef.current.scrollWidth;
        const containerWidth = sliderRef.current.clientWidth;

        if (scrollLeft >= scrollWidth / 2) {
          sliderRef.current.scrollLeft = 0;
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const brands = [brand1, brand2, brand3, brand4, brand5, brand6];

  return (
    <section className='brands-section'>
      <h2>Brands we have worked with</h2>
      <div className='brands-slider'>
        <button className='arrow-left' onClick={scrollLeft}>
          &lt;
        </button>
        <div className='brands-container' ref={sliderRef}>
          {brands.concat(brands).map((brand, idx) => (
            <img key={idx} src={brand} alt={`Brand ${idx}`} />
          ))}
        </div>
        <button className='arrow-right' onClick={scrollRight}>
          &gt;
        </button>
      </div>
    </section>
  );
}

export default BrandsSlider;
