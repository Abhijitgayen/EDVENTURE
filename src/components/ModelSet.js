import React, { useState } from 'react';
import { Modal, Button, Form, FormLabel, Container, Row, Col } from 'react-bootstrap';

export default function ModelSet(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {props.btn_name}{props.icon}
      </Button>

      <Modal show={show} onHide={handleClose} className='model_bg'>
        <Modal.Header closeButton>
          <Modal.Title>SIGN IN</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form>
              <Row className="col-12">
                <Col className="col-4">
                  <FormLabel>User ID :</FormLabel>
                </Col>
                <Col className="col-8">
                  <input></input>
                </Col>
                <Col className="col-4">
                <FormLabel>Password :</FormLabel>
                </Col>
                <Col className="col-8">
                <input type='password'></input>
                </Col>
              </Row>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" onClick={handleClose}>
            Sign In
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Log In
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


