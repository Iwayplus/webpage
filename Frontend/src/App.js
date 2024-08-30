import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Box } from '@mui/material';

import Products from './components/Products';
import About from './components/About';

import Contact from './components/Contact';
import Accessiblity from './components/Accessiblity';
import Footer from './components/Footer';


import Faq from './components/Faq';
import Indoor from './components/Indoor';
import Work from './components/Work';
import Team from './components/Team';
import Career from './components/Career';
import Quote from './components/Quote';
import Blog from './components/Blog';
import Get from './components/Get';
import Usecase from './components/Usecase';
import Testimonial from './components/Testimonial';
import Privacy from './components/Privacy';
import Client from './components/Client';
import Bot from './components/Bot';
// import Simple from './components/Simple';
import Data from './components/Data';
function App() {
  const productsRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
 const  usecaseRef = useRef(null);

  const scrollToSection = (section) => {
    if (section === 'products' && productsRef.current) {
      productsRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'contact' && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'about' && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    else if (section === 'usecase' && usecaseRef.current) {
      usecaseRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (

    
    <Router>
      <Box>
        <Navbar scrollToSection={scrollToSection} />
        <Routes>
          <Route path="/" element={
            <>
              <Indoor />
  
              <Client />
              <div ref={productsRef}>
                <Products />
              </div>
              
              <div ref={aboutRef}>
                <About />
              </div>
         
              <Accessiblity />
              <Faq />
{/*               
              <Testimonial/> */}
              <div ref={contactRef}>
                <Contact />
              </div>

              <div ref={usecaseRef}>
                <Usecase />
              </div>
              {/* <Career /> */}
              <Get />
           
   
              {/* <Privacy /> */}
              <Footer />
            </>
          } />

          <Route path="/quote" element={<Quote />} /> 
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Bot />} />
          {/* <Route path="/simple" element={<Simple />} /> */}

          <Route path="/data" element={<Data />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
