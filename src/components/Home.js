import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CarouselHome from './CarouselHome'

export class Home extends Component {

    render() {
        return (
            <>
        
            <section className="home_section">
                  <CarouselHome/>
                <Container>
                    <Row>
                  
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="home_section">
                <Container>
                    <Row>
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="home_section">
                <Container>
                    <Row>
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </section> 
            </>
        )
    }
}

export default Home
