// this is CarouselHome for review for student and parents.
import React, { Component, useState } from 'react';
import { CloseButton, Modal } from 'react-bootstrap';

import OwlCarousel from 'react-owl-carousel';
import ReactPlayer from "react-player";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import blog_1 from '../images/blog1.jpg';
import blog_2 from '../images/blog2.jpg';
import blog_3 from '../images/blog3.jpg';
import blog_4 from '../images/blog4.jpg';
import blog_5 from '../images/blog5.jpg';
// import {BiLeftArrow,BiRightArrow} from 'react-icons/bi';
const options = {
    loop: true,
    center: false,
    rewind: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 4500,
    smartSpeed: 450,
    nav: true,
    // navText : ['<BiLeftArrow/>','<BiRightArrow/>'],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
};

function Example(props) {
    // const values = [''];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    
  const handleClose = () => setShow(false);

    function handleShow() {
        setFullscreen('xxl-down');
        setShow(true);
    }

    return (
        <>
            <div className="me-2" onClick={() => handleShow()}>
                <img className="img-circle" src={props.src} alt=' ' />
            </div>
            <Modal id='review_demo' show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
             <CloseButton aria-label="Hide"  variant="white" onClick={handleClose} />
                <ReactPlayer width='80%' id='youtube_demo' height='80%' url={props.link} />
            </Modal>
        </>
    );
}


export class CarouselHome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            carouselItem: [
                {
                    id: 0,
                    title: 'Father of Manav',
                    content: 'BYJU\'S helped Manav pick up his Learning pace in Science',
                    details: 'Class 9| Bangalore',
                    img: blog_1,
                    link_of_review: 'https://www.youtube.com/watch?v=5zlQmlJf8Gg&ab_channel=TheWonderinBookshelf',
                },
                {
                    id: 1,
                    title: 'Father of Manav',
                    content: 'BYJU\'S helped Manav pick up his Learning pace in Science',
                    details: 'Class 9| Bangalore',
                    img: blog_2,
                    link_of_review: 'https://www.youtube.com/watch?v=5zlQmlJf8Gg&ab_channel=TheWonderinBookshelf',
                },
                {
                    id: 2,
                    title: 'Father of Manav',
                    content: 'BYJU\'S helped Manav pick up his Learning pace in Science',
                    details: 'Class 9| Bangalore',
                    img: blog_3,
                    link_of_review: 'https://www.youtube.com/watch?v=5zlQmlJf8Gg&ab_channel=TheWonderinBookshelf',
                },
                {
                    id: 3,
                    title: 'Father of Manav',
                    content: 'BYJU\'S helped Manav pick up his Learning pace in Science',
                    details: 'Class 9| Bangalore',
                    img: blog_4,
                    link_of_review: 'https://www.youtube.com/watch?v=5zlQmlJf8Gg&ab_channel=TheWonderinBookshelf',
                },
                {
                    id: 4,
                    title: 'Father of Manav',
                    content: 'BYJU\'S helped Manav pick up his Learning pace in Science',
                    details: 'Class 9| Bangalore',
                    img: blog_5,
                    link_of_review: 'https://www.youtube.com/watch?v=5zlQmlJf8Gg&ab_channel=TheWonderinBookshelf',
                },
                {
                    id: 5,
                    title: 'Father of Manav',
                    content: 'BYJU\'S helped Manav pick up his Learning pace in Science',
                    details: 'Class 9| Bangalore',
                    img: blog_1,
                    link_of_review: 'https://www.youtube.com/watch?v=5zlQmlJf8Gg&ab_channel=TheWonderinBookshelf',
                },
                {
                    id: 6,
                    title: 'Father of Manav',
                    content: 'BYJU\'S helped Manav pick up his Learning pace in Science',
                    details: 'Class 9| Bangalore',
                    img: blog_1,
                    link_of_review: 'https://www.youtube.com/watch?v=5zlQmlJf8Gg&ab_channel=TheWonderinBookshelf',
                },
                {
                    id: 7,
                    title: 'Father of Manav',
                    content: 'BYJU\'S helped Manav pick up his Learning pace in Science',
                    details: 'Class 9| Bangalore',
                    img: blog_1,
                    link_of_review: 'https://www.youtube.com/watch?v=5zlQmlJf8Gg&ab_channel=TheWonderinBookshelf',
                },
                {
                    id: 8,
                    title: 'Father of Manav',
                    content: 'BYJU\'S helped Manav pick up his Learning pace in Science',
                    details: 'Class 9| Bangalore',
                    img: blog_1,
                    link_of_review: 'https://www.youtube.com/watch?v=5zlQmlJf8Gg&ab_channel=TheWonderinBookshelf',
                },
                {
                    id: 9,
                    title: 'Father of Manav',
                    content: 'BYJU\'S helped Manav pick up his Learning pace in Science',
                    details: 'Class 9| Bangalore',
                    img: blog_1,
                    link_of_review: 'https://www.youtube.com/watch?v=5zlQmlJf8Gg&ab_channel=TheWonderinBookshelf',
                },
                {
                    id: 10,
                    title: 'Father of Manav',
                    content: 'BYJU\'S helped Manav pick up his Learning pace in Science',
                    details: 'Class 9| Bangalore',
                    img: blog_1,
                    link_of_review: 'https://www.youtube.com/watch?v=5zlQmlJf8Gg&ab_channel=TheWonderinBookshelf',
                },
                {
                    id: 11,
                    title: 'Father of Manav',
                    content: 'BYJU\'S helped Manav pick up his Learning pace in Science',
                    details: 'Class 9| Bangalore',
                    img: blog_1,
                    link_of_review: 'https://www.youtube.com/watch?v=5zlQmlJf8Gg&ab_channel=TheWonderinBookshelf',
                },
                {
                    id: 12,
                    title: 'Father of Manav',
                    content: 'BYJU\'S helped Manav pick up his Learning pace in Science',
                    details: 'Class 9| Bangalore',
                    img: blog_1,
                    link_of_review: 'https://www.youtube.com/watch?v=5zlQmlJf8Gg&ab_channel=TheWonderinBookshelf',
                },
            ],
        };
        //Owl Carousel Settings

    }
    render() {
        const allcarouselItem = this.state.carouselItem.map((carousel) => {
            return (
                <>
                    <div className='item'  key={carousel.id}>
                        <div className="shadow-effect">
                            <Example link={carousel.link_of_review} src={carousel.img} />
                            <p>{carousel.content}</p>
                        <div className="testimonial-name">
                            <h6>{carousel.title}</h6>
                            <p>{carousel.details}</p>
                        </div>
                        </div>
                    </div>
                </>

            )
        });
        return (
            <>
                <div className='container-fluid' >
                    <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                        {allcarouselItem}

                    </OwlCarousel>
                    <div>
                    </div>
                </div>
            </>
        )
    }
}

export default CarouselHome
