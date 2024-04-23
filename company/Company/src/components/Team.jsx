import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Loader from "../components/Loader";
import axios from "axios";
import { useState, useEffect } from "react";


const TeamMember = () => {
    const[teams, setTeam] = useState([]);
  const[loading, setLoading]= useState(false);

  useEffect(()=>{
    FetchBanner()
  },[])


  const FetchBanner = async() =>{
    try {
      setLoading(true);
      const response = await axios.get("http://127.0.0.1:8000/api/v1/team/members");
      setTeam(response.data)
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
                    {
                        teams.map((team) =>(
                        <Col md={3} key={team.id}>
                            <Card >
                                <Card.Img variant="top" src={team.image} />
                                <Card.Body className="text-center">
                                    <strong>{team.name}</strong>
                                    <p>{team.position}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        ))
                    }
                    

                    
                    
                </Row>
            </Container>
        </>
    )
};

export default TeamMember;
