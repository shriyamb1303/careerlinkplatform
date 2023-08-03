import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import './carouselc.css'

const Carouselc = () => {
    return (
        <div
            style={{
                height: '600px',
                width: '600px',
                margin: '50px auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

            }}
        >
            <h2 className='car-main-h2'>
                Current and past employers can't see your profile
            </h2>
            <Carousel pause="hover" interval={3000} data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>Apply Today</h5>
                        <p>We have placed more than 1L+ people</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />
                </Carousel.Item> */}
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Work from home</h5>
                        <p>We also provide offline interships</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Carouselc;
