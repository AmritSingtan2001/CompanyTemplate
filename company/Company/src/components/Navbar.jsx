import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const TopNavbar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className='sticky-top'>
        <Container>
          <Navbar.Brand href="#home">
            <img src='https://jagaranaarogya.com/static/app/img/jagarnArogya.png' alt="Jagarn Arogya Logo" style={{ height: '50px' }}/>
          </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Nav >
                    <Nav.Link href="#home" className='fs-5 text-white p-2'>Home</Nav.Link>
                    <Nav.Link href="#features" className='fs-5 text-white p-2'>Features</Nav.Link>
                    <Nav.Link href="#pricing" className='fs-5 text-white p-2'>Pricing</Nav.Link>
                    <Nav.Link href="#home" className='fs-5 text-white p-2'>Home</Nav.Link>
                    <Nav.Link href="#features" className='fs-5 text-white p-2'>Features</Nav.Link>
                    <Nav.Link href="#pricing" className='fs-5 text-white p-2'>Pricing</Nav.Link>
                </Nav>
                <button className='btn btn-outline-danger text-white py-2'>
                    Contact Us
                </button>
            </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
  );
}


export default TopNavbar;