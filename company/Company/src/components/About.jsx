import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { FaArrowRight } from "react-icons/fa";


const AboutUs = () => {
  return (
    <>
    <Container>
        <Row>
            <Col  xs={6} className='pt-5' >
                <img width={450} src='https://jagaranaarogya.com/media/aboutimage/WhatsApp_Image_2023-06-21_at_8.33.46_AM_1.jpeg' alt="Jagarn Arogya Logo" />

            </Col>
            <Col xs={6} className='pt-5'>
                <Badge bg="warning" className='py-2 px-3 mb-3 rounded text-white'>About</Badge> 
                <h4>What is Lorem Ipsum?</h4>
                <p className='text-align-justify'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged. It was popularised in the 
                    1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus PageMaker including versions of
                    Lorem Ipsum.
                </p>
                <Button variant="outline-success py-1 fs-6">Contact US <FaArrowRight className='text-white bg-secondary rounded py-1'/></Button>
            </Col>
        </Row>
    </Container>
    
    </>
  );
}


export default AboutUs;