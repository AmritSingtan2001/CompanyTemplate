import React from 'react'
import Slider from "./Slider";
import AboutUs from './About';
import MessageMD from './Message';
import TeamMember from './Team';
import Contact from './Contact';
import Blogs from './Blogs';
import Footer from './Footer';

function Home() {
  return (
    <>
      <Slider/>
      <AboutUs/>
      <MessageMD/>
      <TeamMember/>
      <Contact/>
      <Blogs/>
    </>
  )
}

export default Home