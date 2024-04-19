import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { FaArrowRight } from "react-icons/fa";
import Loader from "../components/Loader";
import axios from "axios";
import { useState, useEffect } from "react";


const AboutUs = () => {
    const[about, setAbout] = useState([]);
    const[loading, setLoading]= useState(false);

    useEffect(()=>{
        FetchAbout()
    },[])


    const FetchAbout = async() =>{
        try {
          setLoading(true);
          const response = await axios.get("http://127.0.0.1:8000/api/v1/about/");
          setAbout(response.data)
          console.log(response.data)
          setLoading(false);
          
        } catch (error) {
          setLoading(false);
          console.log(error);
        }
      }
      
    if(loading){
        return <Loader/>
    }

    return (
        <>
        <Container>
        {
            about.map((item)=> (
                <Row>
    
                    <Col  xs={6} className='pt-5' >
                        <img width={450} src={item.image} alt="Jagarn Arogya Logo" />
    
                    </Col>
                    <Col xs={6} className='pt-5'>
                        <Badge bg="warning" className='py-2 px-3 mb-3 rounded text-white'>About</Badge> 
                        <h4>{item.title}</h4>
                        <p className='text-align-justify'>
                            {item.descriptions}
                        </p>
                        <Button variant="outline-success py-1 fs-6">Contact US <FaArrowRight className='text-white bg-secondary rounded py-1'/></Button>
                    </Col>
                </Row>
                ))
        }
        
        </Container>
        
        </>
    );
}


export default AboutUs;