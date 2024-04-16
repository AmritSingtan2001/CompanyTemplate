import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Contact = () =>{
    const rowStyle = { 
        backgroundImage: `url('https://variety.com/wp-content/uploads/2020/04/workers-ep-1-190315f_075-hboa-cr.jpg')`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
      };

    return(
    <>
        <Container fluid style={rowStyle}>
            <Container>
                <Row className='mt-5' >
                    <Col md={12}>
                        <h4 className='text-center mt-5 mb-2 text-white'>CONTACT US</h4>
                        
                    </Col>
                    <Col md={6}>
                        <Badge bg="warning" className='py-2 px-3 mb-3 rounded text-white'>Contact us</Badge> 
                        <br/>
                        <strong className='fs-4 text-white'>Thanks For The Results Achieved With You. </strong>
                        <p className='fs-6 text-white'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry including versions of Lorem Ipsum.
                        </p>
                    </Col>
                    <Col md={6} className='bg-white text-center '>
                        <div className='pt-4 ps-3 pe-3'>
                            <Form.Control type="text" class="" placeholder="Enter your name..." readOnly /> <br/>
                            <Form.Control type="text" class="" placeholder="Enter your name..." readOnly /> <br/>
                            <Form.Control type="text" class="" placeholder="Enter your name..." readOnly /> <br/>
                            <Form.Control type="text" class="" placeholder="Enter your name..." readOnly /> <br/>
                            <Button variant="danger">Submit</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    </>
    )
};

export default Contact;