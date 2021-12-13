import React from 'react'
import { Carousel } from 'react-bootstrap';
import blog_1 from '../images/blog1.jpg';
import blog_2 from '../images/blog2.jpg';
import blog_3 from '../images/blog3.jpg';

export default function CarouselHome() {
    return (
        <>

            <Carousel className='carousel_body' >
                <Carousel.Item interval={100}>
                    <img
                        className="d-block w-100"
                        src={blog_2}
                        alt="First slide"
                    />
                    <Carousel.Caption className='center'>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={blog_1}
                        alt="Second slide"
                    />
                    <Carousel.Caption className='center'>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={blog_3}
                        alt="Third slide"
                    />
                    <Carousel.Caption className='center'>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </>
    )
}
