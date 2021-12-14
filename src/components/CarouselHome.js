import { Carousel } from 'react-bootstrap';
import blog_1 from '../images/blog1.jpg';
import blog_2 from '../images/blog2.jpg';
import blog_3 from '../images/blog3.jpg';
import blog_4 from '../images/blog4.jpg';
import blog_5 from '../images/blog5.jpg';

import React, { Component } from 'react'

export class CarouselHome extends Component {
    constructor(props){
        super(props);

        this.state={
            carouselItem:[
                {
                    id:0,
                    title:'Slide One',
                    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.',
                    img: blog_1,
                    interval:1000

                },
                {
                    id:1,
                    title:'Slide Two',
                    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.',
                    img: blog_2,
                    interval:1000

                },
                {
                    id:2,
                    title:'Slide Three',
                    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.',
                    img: blog_3,
                    interval:1000

                },
                {
                    id:3,
                    title:'Slide Four',
                    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.',
                    img: blog_4,
                    interval:1000

                },
                {
                    id:4,
                    title:'Slide Five',
                    content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.',
                    img: blog_5,
                    interval:1000

                },

            ],
        };
    }
    render() {
    const allcarouselItem=this.state.carouselItem.map((carousel)=>{
    
        return(
            <Carousel.Item interval={carousel.interval} key={carousel.id} className='carousel_item align-item-center'>
                    <img
                        className="d-block col-md-6 w-100 h-100"
                        src={carousel.img}
                        alt={carousel.title}
                    />
                    <Carousel.Caption id='center'>
                        <h3>{carousel.title}</h3>
                        <p>{carousel.content}</p>
                    </Carousel.Caption>
                </Carousel.Item>
        )

    });
        return (
            <>
            <Carousel className='carousel_body' >
                {allcarouselItem}
            </Carousel>  
            </>
        )
    }
}

export default CarouselHome







// export default function CarouselHome() {
//     return (
//         <>

//             <Carousel className='carousel_body' >
//                 <Carousel.Item interval={100}>
//                     <img
//                         className="d-block w-100"
//                         src={blog_2}
//                         alt="First slide"
//                     />
//                     <Carousel.Caption className='center'>
//                         <h3>First slide label</h3>
//                         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item interval={500}>
//                     <img
//                         className="d-block w-100"
//                         src={blog_1}
//                         alt="Second slide"
//                     />
//                     <Carousel.Caption className='center'>
//                         <h3>Second slide label</h3>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src={blog_3}
//                         alt="Third slide"
//                     />
//                     <Carousel.Caption className='center'>
//                         <h3>Third slide label</h3>
//                         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//             </Carousel>

//         </>
//     )
// }
