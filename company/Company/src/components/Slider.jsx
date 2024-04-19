import Carousel from "react-bootstrap/Carousel";
import Images from "../assets/images/bannar1.jpg";
import Image1 from "../assets/images/bannar2.jpg";
import Loader from "../components/Loader";
import axios from "axios";
import { useState, useEffect } from "react";


const Slider =() =>{
  const[banner, setBanner] = useState([]);
  const[loading, setLoading]= useState(false);

  useEffect(()=>{
    FetchBanner()
  },[])


  const FetchBanner = async() =>{
    try {
      setLoading(true);
      const response = await axios.get("http://127.0.0.1:8000/api/v1/banner/");
      setBanner(response.data)
      // console.log("hello i am down")
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
    <Carousel data-bs-theme="dark">
      {
        banner.map((item)=> ( //for i in range(4)
          <Carousel.Item>
            <img fluid 
              className="d-block w-100 object-fit-cover"
              src={item.image}
              style={{ maxHeight:'450px' }} 
              alt="First slide"
            />
            <Carousel.Caption className="bg-dark text-white">
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))
      }
      
    </Carousel>
  );
}

export default Slider;
