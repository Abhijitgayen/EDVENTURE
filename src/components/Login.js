import React, { useState } from 'react';
import { Modal, Button, Form, FormLabel, Container, Row, Col } from 'react-bootstrap';

export default function Login(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="light" size="sm" onClick={handleShow}>
        {props.btn_name}{props.icon}
      </Button>

      <Modal show={show} onHide={handleClose} className='model_bg'>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form>
              <Row >
                <Col className="col-12 col-sm-4">
                  <FormLabel>User ID :</FormLabel>
                </Col>
                <Col className="col-12 col-sm-8">
                  <input></input>
                </Col>
                <Col className="col-12 col-sm-4 ">
                <FormLabel>Password :</FormLabel>
                </Col>
                <Col className="col-12 col-sm-8 ">
                <input type='password'></input>
                </Col>
              </Row>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" onClick={handleClose}>
            Log In
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


