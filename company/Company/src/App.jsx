import React from 'react'
import TopNavbar from "./components/Navbar";
import Slider from "./components/Slider";
import AboutUs from './components/About';
import MessageMD from './components/Message';
import TeamMember from './components/Team';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <TopNavbar/>
      <Slider/>
      <AboutUs/>
      <MessageMD/>
      <TeamMember/>
      <Contact/>
    </>
  )
}

export default App