import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Badge, Card } from 'react-bootstrap';
import { Link,useParams } from 'react-router-dom';
import Loader from './Loader'; 
import Breadcrumb from 'react-bootstrap/Breadcrumb';


const Blogdetail = () => {
    const {id } = useParams()
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
                const response = await axios.get(`http://127.0.0.1:8000/api/v1/blogs/detail/${id}`);
                console.log(response.data)
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
    <>
    <Container>
        <Breadcrumb className='text-white'>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }} className='text-white'>
                Home
            </Breadcrumb.Item>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/blogs' }} className='text-white'>
                Blog
            </Breadcrumb.Item>
            
        </Breadcrumb>

        <Row>
            <Col md={12}>
                <h1>Blog Detail</h1>
                <h2>{blogs.title}</h2>
            </Col>
            <Col md={4}>
                <img src={blogs.image} className='img-fluid'/>
            </Col>
            <Col md={8}>
                <p>{blogs.description}</p>
            </Col>
        </Row>
        
        
    </Container>
    </>
  )
}

export default Blogdetail