import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CarouselHome from './CarouselHome'

export class Home extends Component {

    render() {
        return (
            <>
                <section className="home_section">
                    <header className="home_top" id="set-for-bg">
                        <Container>
                            <Row>
                                <Col className="col-12 col-sm-6 col-md-6">
                                    <h1>EDVENTURE</h1>
                                    <p> We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                                </Col >
                                <Col className="col-12 col-sm-6 col-md-6">

                                </Col>

                            </Row>
                        </Container>
                    </header>
                    <Container>
                        <CarouselHome />
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
