import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';

const TeamMember = () => {
    return(
        <>
            <Container>
                <Row>
                    <Col md={12} className='mb-3'>
                        <div className='text-center pt-5'>
                            <Badge bg="warning" className='py-2 px-3 mb-3 rounded text-white'>Team Member</Badge> 
                            <h4 className='text-uppercase'>Our Team Member </h4>
                        </div>
                    </Col>

                    <Col md={3}>
                        <Card >
                            <Card.Img variant="top" src="https://brookings.edu/wp-content/uploads/2023/09/shutterstock_1708245121-1.jpg" />
                            <Card.Body className="text-center">
                                <strong>Ram Thapa</strong>
                                <p>CEO</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card >
                            <Card.Img variant="top" src="https://brookings.edu/wp-content/uploads/2023/09/shutterstock_1708245121-1.jpg" />
                            <Card.Body className="text-center">
                                <strong>Ram Thapa</strong>
                                <p>CEO</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card >
                            <Card.Img variant="top" src="https://brookings.edu/wp-content/uploads/2023/09/shutterstock_1708245121-1.jpg" />
                            <Card.Body className="text-center">
                                <strong>Ram Thapa</strong>
                                <p>CEO</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card >
                            <Card.Img variant="top" src="https://brookings.edu/wp-content/uploads/2023/09/shutterstock_1708245121-1.jpg" />
                            <Card.Body className="text-center">
                                <strong>Ram Thapa</strong>
                                <p>CEO</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    
                </Row>
            </Container>
        </>
    )
};

export default TeamMember;
