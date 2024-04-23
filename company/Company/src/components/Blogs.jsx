import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Badge, Card } from 'react-bootstrap';
import axios from 'axios';
import Loader from './Loader'; // Assuming Loader component is defined elsewhere
import { Link } from 'react-router-dom';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const textStyle = {
        textAlign: 'justify',
    };

    useEffect(() => {
        const fetchBlogs = async () => {
            setLoading(true);
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/v1/blogs/");
                setBlogs(response.data);
            } catch (error) {
                setError('Error fetching blogs'); // Set error state on fetch failure
            }
            setLoading(false);
        };

        fetchBlogs();
    }, []);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (blogs.length === 0) {
        return <p>No blogs available</p>;
    }

    const renderLimitedDescription = (description, maxLength) => {
        if (description.length > maxLength) {
            return description.substring(0, maxLength) + '...';
        }
        return description;
    };

    return (
        <Container>
            <Row className='my-5 justify-content-center'>
                <Col md={12} className="mb-3">
                    <div className="text-center pt-5">
                        <Badge bg="warning" className="py-2 px-3 mb-3 rounded text-white">Blogs</Badge>
                        <h4 className="text-uppercase">Our Latest Blog</h4>
                    </div>
                </Col>

                {blogs.map((blog) => (
                    
                    
                    <Col md={3} key={blog.id}>
                        < Link to={`/blog/detail/${blog.id}`}>
                        <Card>
                            <Card.Img height={200} width={200} variant="top" src={blog.image} className='object-fit-contain' />
                            <Card.Body className="text-center">
                                <strong>{blog.title}</strong>
                                <p style={textStyle}>
                                    {renderLimitedDescription(blog.description, 100)}
                                </p>
                            </Card.Body>
                        </Card>
                    </Link>
                    </Col>
                   
                    
                ))}
            </Row>
        </Container>
    );
};

export default Blogs;
