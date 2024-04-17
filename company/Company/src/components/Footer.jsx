import React, { useState } from 'react';
import {Container,Row, Col, Card, Button, InputGroup } from 'react-bootstrap'; 
import Form from 'react-bootstrap/Form';

const Footer = () =>{
    const textStyle = {
        textAlign: 'justify',
        color:'white',
        styleType:'none'
    };

    return(
        <Container fluid className='bg-dark'>
            <Container className='pt-5 pb-4'>
                <Row>
                    <Col md={4}>
                        <h4 style={textStyle} >TEST COMPANY</h4>
                        <img width={100} src='https://www.adobe.com/express/create/media_132ac1063154866fee43fa18abe4ef260ce2d773f.jpeg?width=400&format=jpeg&optimize=medium' alt=" logo not found.."/>
                        <br/>
                        <p style={textStyle}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </Col>
                    <Col md={3}>
                        <h4 style={textStyle} >Address</h4>
                        <ul style={textStyle}>
                            <li>Gwarko, Lalitpur</li>
                            <li>+977 - 9865323265</li>
                            <li>+977 - 0125365</li>
                            <li>abxd@gmail.com</li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <h4 style={textStyle} >Quick Links</h4>
                        <ul style={textStyle}>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Blog</li>
                            <li>Notic</li>
                        </ul>
                        
                    </Col>
                    <Col md={3}>
                        <h4 style={textStyle} >News Letter</h4>
                        <InputGroup className="mb-3">
                            <Form.Control
                            placeholder="Enter your email"
                            aria-label="Enter your email"
                            aria-describedby="basic-addon2"
                            />
                            <InputGroup.Text id="basic-addon2" className='bg-danger'>SingUp</InputGroup.Text>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}


export default Footer;