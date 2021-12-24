import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import blog_1 from '../images/blog1.jpg';
import blog_2 from '../images/blog2.jpg';
import blog_3 from '../images/blog3.jpg';
import blog_4 from '../images/blog4.jpg';
import blog_5 from '../images/blog5.jpg';
const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 4500,
    smartSpeed: 450,
    nav: false,
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
                    title: 'Slide One',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.',
                    img: blog_1,
                    interval: 1000

                },
                {
                    id: 1,
                    title: 'Slide Two',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.',
                    img: blog_2,
                    interval: 1000

                },
                {
                    id: 2,
                    title: 'Slide Three',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.',
                    img: blog_3,
                    interval: 1000

                },
                {
                    id: 3,
                    title: 'Slide Four',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.',
                    img: blog_4,
                    interval: 1000

                },
                {
                    id: 4,
                    title: 'Slide Five',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.',
                    img: blog_5,
                    interval: 1000

                },
                {
                    id: 5,
                    title: 'Slide Six',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.',
                    img: blog_1,
                    interval: 1000

                },
                {
                    id: 6,
                    title: 'Slide Seven',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.',
                    img: blog_1,
                    interval: 1000

                },
                {
                    id: 7,
                    title: 'Slide Eight',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.',
                    img: blog_1,
                    interval: 1000

                },
                {
                    id: 8,
                    title: 'Slide Nine',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.',
                    img: blog_1,
                    interval: 1000

                },
                {
                    id: 9,
                    title: 'Slide Ten',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.',
                    img: blog_1,
                    interval: 1000

                },
                {
                    id: 10,
                    title: 'Slide Eleven',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.',
                    img: blog_1,
                    interval: 1000

                },
                {
                    id: 11,
                    title: 'Slide Twelve',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.',
                    img: blog_1,
                    interval: 1000

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
                    <div class="shadow-effect">
                        <img class="img-circle" src={carousel.img} alt=' ' />
                        <p>{carousel.content}</p>
                    </div>
                    <div class="testimonial-name">
                        <h6>{carousel.title}</h6>
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

// import React, { useEffect, useState } from 'react';
// import TestiMonialsDetails from '../TestiMonialsDetails/TestiMonialsDetails'
// import OwlCarousel from 'react-owl-carousel';
// import userPic from '../../image/user-one.png';
// import './TestiMonials.css'

// const TestiMonials = () => {

//     const testiMonials = [
//         {
//             name: 'Rekob Ramya',
//             description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
//             address: 'USA',
//             img: 'https://i.ibb.co/hgGJc8d/Gareth-Bale.jpg'
//         },
//         {
//             name: 'Brandon Savage',
//             description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
//             address: 'USA',
//             img: 'https://i.ibb.co/z7Kp6yr/np-file-33188.jpg'
//         },
//         {
//             name: 'Steve Burns',
//             description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
//             address: 'USA',
//             img: 'https://i.ibb.co/CP5sj7g/2856040-58866808-2560-1440.jpg'
//         },
//         {
//             name: 'Kevin Canlas',
//             description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
//             address: 'USA',
//             img: 'https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg'
//         },
//     ]
//     };
//     return (
//         <section id="testimonial" className="testimonials pt-70 pb-70">
//             <div className="container mt-5">
//                 <h4 className="miniTitle text-center">TESTIMONIALS</h4>
//                 <div className="text-center ">
//                     <h3 className="sectionTitle">What Our Clients are Saying?</h3>
//                 </div>
//                 <p className="text-center ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
//                 <div className="row">
//                     <div className="col-md-12">
//                         <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
//                             {
//                                 testiMonials.length === 0 ?
//                                     <div class="item">
//                                         <div class="shadow-effect">
//                                             <img class="img-circle" src={userPic} />

//                                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
//                                         </div>
//                                         <div class="testimonial-name">
//                                             <h5>Rajon Rony</h5>
//                                             <small>ITALY</small>
//                                         </div>
//                                     </div> :
//                                     testiMonials.map(testiMonialDetail => {
//                                         return (
//                                             <TestiMonialsDetails testiMonialDetail={testiMonialDetail} key={testiMonialDetail._key} />

//                                         )
//                                     })
//                             }
//                         </OwlCarousel>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default TestiMonials;