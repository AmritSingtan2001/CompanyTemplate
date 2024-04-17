import React from 'react'
import TopNavbar from "./components/Navbar";
import Slider from "./components/Slider";
import AboutUs from './components/About';
import MessageMD from './components/Message';
import TeamMember from './components/Team';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <TopNavbar/>
      <Slider/>
      <AboutUs/>
      <MessageMD/>
      <TeamMember/>
      <Contact/>
      <Blogs/>
      <Footer/>
    </>
  )
}

export default App