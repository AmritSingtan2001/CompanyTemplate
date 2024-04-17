import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';

const Blogs = () => {
    const textStyle = {
        textAlign: 'justify', 
    };

    
    return(
        <>
            <Container>
                <Row>
                    <Col md={12} className='mb-3'>
                        <div className='text-center pt-5'>
                            <Badge bg="warning" className='py-2 px-3 mb-3 rounded text-white'>Blogs</Badge> 
                            <h4 className='text-uppercase'>Our Latest Blog </h4>
                        </div>
                    </Col>

                    <Col md={3}>
                        <Card >
                            <Card.Img variant="top" src="https://brookings.edu/wp-content/uploads/2023/09/shutterstock_1708245121-1.jpg" />
                            <Card.Body className="text-center">
                                <strong>Lorem Ipsum</strong>
                                <p style={textStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card >
                            <Card.Img variant="top" src="https://brookings.edu/wp-content/uploads/2023/09/shutterstock_1708245121-1.jpg" />
                            <Card.Body className="text-center">
                                <strong>Lorem Ipsum</strong>
                                <p style={textStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card >
                            <Card.Img variant="top" src="https://brookings.edu/wp-content/uploads/2023/09/shutterstock_1708245121-1.jpg" />
                            <Card.Body className="text-center">
                                <strong>Lorem Ipsum</strong>
                                <p style={textStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card >
                            <Card.Img variant="top" src="https://brookings.edu/wp-content/uploads/2023/09/shutterstock_1708245121-1.jpg" />
                            <Card.Body className="text-center">
                                <strong>Lorem Ipsum</strong>
                                <p style={textStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    
                </Row>
            </Container>
        </>
    )
};

export default Blogs;
