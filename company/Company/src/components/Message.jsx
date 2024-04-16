import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MessageMD = () =>{
    const rowStyle = { 
        backgroundImage: `url('https://images2.alphacoders.com/731/731152.jpg')`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
      };

    return(
    <>
        <Container fluid style={rowStyle}>
            <Container>
                <Row className='mt-5' >
                    <Col md={12}>
                        <h4 className='text-center mt-5 mb-2 text-white'>MESSAGE FROM MD</h4>
                        <div  className='text-center'>
                            <img width={150} height={100} className="oobject-fit-contain rounded" src='https://imgv3.fotor.com/images/slider-image/A-blurry-close-up-photo-of-a-woman.jpg' alt="no image found.."/>
                            <div className=' text-white mt-2 mb-2'>
                                <strong>Name:</strong> Amrit Singtan<br/>
                                <strong>Phone No:</strong>+977 - 9865326598
                            </div>
                        </div>
                        <div className='message'>
                            <p className='text-white text-bold'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    </>
    )
};

export default MessageMD;