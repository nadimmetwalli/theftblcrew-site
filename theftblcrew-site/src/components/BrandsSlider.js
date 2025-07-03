import React from 'react';
import './BrandsSlider.css';
import brand1 from '../assets/1.png'
import brand2 from '../assets/2.png'
import brand3 from '../assets/3.png'
import brand4 from '../assets/4.png'
import brand5 from '../assets/5.png'
import brand6 from '../assets/6.png'
import { useRef } from 'react';

function BrandsSlider() {
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollBy({
            left: -300,
            behavior:'smooth'

        });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    };

    return(
        <section className='brands-section'>
            <h2>Brands we have worked with</h2>
            <div className='brands-slider'>
                <button className='arrow-left' onClick={scrollLeft}>&lt;</button>
                <div className='brands-container' ref={sliderRef}>
                    <img src={brand1}/>
                    <img src={brand2}/>
                    <img src={brand3}/>
                    <img src={brand4}/>
                    <img src={brand5}/>
                    <img src={brand6}/>
                </div>
                <button className='arrow-right' onClick={scrollRight}>&gt;</button>
            </div>
        </section>
    );
}
export default BrandsSlider;