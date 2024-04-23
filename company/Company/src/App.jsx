import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNavbar from './components/Navbar';
import AboutUs from './components/About';
import MessageMD from './components/Message';
import TeamMember from './components/Team';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import Home from './components/Home';
import Blogdetail from './components/Blogdetail';



function App() {
  return (
    <Router>
        <TopNavbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<AboutUs />} />

          <Route path="/message" element={<MessageMD />} />

          <Route path="/team" element={<TeamMember />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/detail/:id" element={<Blogdetail />} />

        </Routes>

        <Footer />
    </Router>
  );
}

// function Home() {
//   return (
//     <>
//       <Slider />
//       <AboutUs />
//       <MessageMD />
//       <TeamMember />
//       <Contact />
//       <Blogs />
//     </>
//   );
// }

export default App;
