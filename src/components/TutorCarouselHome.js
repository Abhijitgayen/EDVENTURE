import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
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
    dots: false,
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


export class CarouselHome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            carouselItem: [
                {
                    id: 0,
                    title: 'Rani Balaji',
                    content: 'Our teaching method involves heavy emphasis on concept building. Cueing is a combination of guidance and facilitation of independent thinking. Unlike traditional schools, we go on the why behind the what.',
                    details: 'PG in math and Computing',
                    no_std: 26,
                    img: blog_1
                },
                {
                    id: 1,
                    title: 'Manav Sen',
                    content: 'The Math program is such a unique one. We believe in Cueing, and the program is individually tailored to the student\'s ability. This builds confidence in students, and thus, parents love it',
                    details: 'Btech in Computer Science',
                    no_std: 36,
                    img: blog_2
                },
                {
                    id: 2,
                    title: 'Rahul Halder',
                    content: 'My main objective is to develop a problem-solving thinking process among children by using coding to prepare them for the challenges of the future.',
                    details: 'Mtech in Computer science',
                    no_std: 23,
                    img: blog_3
                },
                {
                    id: 3,
                    title: 'Abhijit Gayen',
                    content: 'Our teaching method involves heavy emphasis on concept building. Cueing is a combination of guidance and facilitation of independent thinking. Unlike traditional schools, we go on the why behind the what.',
                    details: 'M.sc in math and computing',
                    no_std: 25,
                    img: blog_4
                },
                {
                    id: 4,
                    title: 'Abhijit Gayen',
                    content: 'The Math program is such a unique one. We believe in Cueing, and the program is individually tailored to the student\'s ability. This builds confidence in students, and thus, parents love it',
                    details: 'M.sc in math and computing',
                    no_std: 25,
                    img: blog_5
                },
                {
                    id: 5,
                    title: 'Abhijit Gayen',
                    content: 'The Math program is such a unique one. We believe in Cueing, and the program is individually tailored to the student\'s ability. This builds confidence in students, and thus, parents love it',
                    details: 'M.sc in math and computing',
                    no_std: 25,
                    img: blog_1
                },
                {
                    id: 6,
                    title: 'Abhijit Gayen',
                    content: 'The Math program is such a unique one. We believe in Cueing, and the program is individually tailored to the student\'s ability. This builds confidence in students, and thus, parents love it',
                    details: 'M.sc in math and computing',
                    no_std: 25,
                    img: blog_1
                },
                {
                    id: 7,
                    title: 'Abhijit Gayen',
                    content: ' Math program iThes such a unique one. We believe in Cueing, and the program is individually tailored to the student\'s ability. This builds confidence in students, and thus, parents love it',
                    details: 'M.sc in math and computing',
                    no_std: 25,
                    img: blog_1
                },
                {
                    id: 8,
                    title: 'Abhijit Gayen',
                    content: 'The Math program is such a unique one. We believe in Cueing, and the program is individually tailored to the student\'s ability. This builds confidence in students, and thus, parents love it',
                    details: 'M.sc in math and computing',
                    no_std: 25,
                    img: blog_1
                },
                {
                    id: 9,
                    title: 'Abhijit Gayen',
                    content: 'The Math program is such a unique one. We believe in Cueing, and the program is individually tailored to the student\'s ability. This builds confidence in students, and thus, parents love it',
                    details: 'M.sc in math and computing',
                    no_std: 25,
                    img: blog_1
                },
                {
                    id: 10,
                    title: 'Abhijit Gayen',
                    content: 'The Math program is such a unique one. We believe in Cueing, and the program is individually tailored to the student\'s ability. This builds confidence in students, and thus, parents love it',
                    details: 'M.sc in math and computing',
                    no_std: 25,
                    img: blog_1
                },
                {
                    id: 11,
                    title: 'Abhijit Gayen',
                    content: 'The Math program is such a unique one. We believe in Cueing, and the program is individually tailored to the student\'s ability. This builds confidence in students, and thus, parents love it',
                    details: 'M.sc in math and computing',
                    no_std: 25,
                    img: blog_1
                },
                {
                    id: 12,
                    title: 'Abhijit Gayen',
                    content: 'The Math program is such a unique one. We believe in Cueing, and the program is individually tailored to the student\'s ability. This builds confidence in students, and thus, parents love it',
                    details: 'M.sc in math and computing',
                    no_std: 25,
                    img: blog_1
                },
            ],
        };
        //Owl Carousel Settings

    }
    render() {
        const allcarouselItem = this.state.carouselItem.map((carousel) => {
            return (
                <>
                    <div className='item' key={carousel.id}>
                            <div className="tutor-img-circle-pos">
                                <img className="tutor-img-circle" src={carousel.img} alt=' ' />
                            </div>
                        <div className="tutor-details">
                            <p>{'"'}{carousel.content}{'"'}</p>
                            <div className="tutor-testimonial-name">
                                <div className='left-details'>
                                <h6>{carousel.title}</h6>
                                <p>{carousel.details}</p>
                                </div>
                                <div className='right-details'>
                                    <h6>{carousel.no_std}  students</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </>

            )
        });
        return (
            <>
                <h6>Our best in class faculties to help you nurture your talent, guide you to the best career path and transform your knowledge into real world practise.</h6>
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
