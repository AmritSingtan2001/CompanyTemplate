import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useState } from 'react';
import {toast} from "react-toastify"

const Contact = () =>{

    const [loading, setLoading] =useState(false)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        // const { name, value } = e.target;
        // setFormData((prevData) => ({
        //     ...prevData,
        //     [name]: value
        // }));

        const  name = e.target.name;
        const value = e.target.value;
        setFormData((prevData) => ({
                ...prevData, //rest operator -- previouse data store 
                [name]: value
            }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true)  //if error set loading true
            const response = await axios.post('http://127.0.0.1:8000/api/v1/contact/us', formData);
            // console.log('Comment submitted successfully:', response.data);
            
            toast.success('Form submitted successfully!')
                
        
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            }); 
            e.target.reset();
            setLoading(false)

        } catch (error) {
            setLoading(false) //if error set loading false
            console.error('Error submitting comment:', error);
            toast.error('Failed to submit form. Please try again.' )

        }
    };


    const rowStyle = { 
        backgroundImage: `url('https://variety.com/wp-content/uploads/2020/04/workers-ep-1-190315f_075-hboa-cr.jpg')`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
      };

    if(loading){
        return <h1>Loading....</h1>
    }

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
                        <Form onSubmit={handleSubmit}>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your name..."
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                /><br />
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email..."
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                /><br />
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your phone..."
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                /><br />
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                    name="message"
                                    value={formData.comment}
                                    onChange={handleChange}
                                    required
                                /><br />
                                <Button type='submit' variant="danger">Submit</Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    </>
    )
};

export default Contact;