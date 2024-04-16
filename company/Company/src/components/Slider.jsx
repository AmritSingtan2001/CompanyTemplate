import Carousel from "react-bootstrap/Carousel";
import Images from "../assets/images/bannar1.jpg";
import Image1 from "../assets/images/bannar2.jpg";

const Slider =() =>{
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img fluid 
          className="d-block w-100 object-fit-contain"
          src={Images}
          style={{ maxHeight:'450px' }} 
          alt="First slide"
        />
        <Carousel.Caption className="bg-dark text-white">
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img fluid 
          className="d-block w-100 object-fit-contain"
          src={Image1}
          style={{ maxHeight:'450px' }}
          alt="Second slide"
        />
        <Carousel.Caption className="bg-dark text-white">
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default Slider;
