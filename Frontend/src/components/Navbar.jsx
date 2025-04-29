import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/images/image 1 (4).png";
import './Navbar.css';

const Navbar = ({ scrollToSection }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const productsRef = useRef(null);
  const useCaseRef = useRef(null);
  const aboutUsRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        productsRef.current &&
        !productsRef.current.contains(event.target) &&
        useCaseRef.current &&
        !useCaseRef.current.contains(event.target) &&
        aboutUsRef.current &&
        !aboutUsRef.current.contains(event.target)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (dropdown) => {
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const handleHomeClick = () => {
    window.location.href = '/';
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuItemClick = (section) => {
    scrollToSection(section);
    setIsMobileMenuOpen(false);
  };
  
  const handleProdClick = () => {
    navigate("/Products");
  };

  const handleUsecaseClick=() =>{
   navigate("/UseCase");
  };

  const handleContactClick=() =>{
    navigate("/Write-us");
   };
       const handleAboutusClick=() =>{
       navigate ("/About-us");
       };
  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="navbar-logo">
        <img src={logo} alt='Logo' />
      </div>
      <div className={`navbar-items-container ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="navbar-items">
          <span className="navbar-item" onClick={handleHomeClick} tabIndex="0">Home</span>
          <li
            style={{ position: 'relative' }}
            ref={productsRef}
            onMouseEnter={() => handleMouseEnter('products')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleMenuItemClick('products')}
            aria-haspopup="true"
            aria-expanded={openDropdown === 'products'}
            tabIndex="0"
          >
            <span className="navbar-item"   onClick={handleProdClick}>
              <span>Products</span>
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none" style={{ marginTop: '5px' }}>
                <path d="M1.25509 0.308217C0.854556 0.708287 0.854556 1.3533 1.25509 1.75337L7.75456 8.83118C8.07335 9.14961 8.58832 9.14961 8.90712 8.83118L15.6998 1.7452C16.1004 1.34513 16.1004 0.700123 15.6998 0.300053C15.2993 -0.100018 14.6536 -0.100018 14.253 0.300053L8.32675 6.51241L2.69374 0.300053C2.30138 -0.0918529 1.64745 -0.091853 1.25509 0.308217Z" fill="#6D7D8B" />
              </svg> */}
            </span>
            {/* {openDropdown === 'products' && (
              <div className="dropdown">
                <ul>
                  <li tabIndex="0" className="dropdown-item"  onClick={handleProdClick}>Iwayplus Apps</li>
                  <li tabIndex="0" className="dropdown-item" onClick={handleProdClick}>Iwayplus Web</li>
                  <li tabIndex="0" className="dropdown-item" onClick={handleProdClick}>Iwayplus CMS</li>
                  <li tabIndex="0" className="dropdown-item" onClick={handleProdClick}>Iwayplus Annotations</li>
                  <li tabIndex="0" className="dropdown-item" onClick={handleProdClick}>Beacons</li>
                  <li tabIndex="0" className="dropdown-item" onClick={handleProdClick}>Indoor Location</li>
                </ul>
              </div>
            )} */}
          </li>
          <li
            style={{ position: 'relative' }}
            ref={useCaseRef}
            onMouseEnter={() => handleMouseEnter('useCase')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleMenuItemClick('usecase')}
            aria-haspopup="true"
            aria-expanded={openDropdown === 'useCase'}
            tabIndex="0"
          >
            <span className="navbar-item"  onClick={ handleUsecaseClick}>
              <span>Use Case</span>
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none" style={{ marginTop: '5px' }}>
                <path d="M1.25509 0.308217C0.854556 0.708287 0.854556 1.3533 1.25509 1.75337L7.75456 8.83118C8.07335 9.14961 8.58832 9.14961 8.90712 8.83118L15.6998 1.7452C16.1004 1.34513 16.1004 0.700123 15.6998 0.300053C15.2993 -0.100018 14.6536 -0.100018 14.253 0.300053L8.32675 6.51241L2.69374 0.300053C2.30138 -0.0918529 1.64745 -0.091853 1.25509 0.308217Z" fill="#6D7D8B" />
              </svg> */}
            </span>
            {/* {openDropdown === 'useCase' && (
              <div className="dropdown">
                <ul>
                  <li tabIndex="0" className="dropdown-item">Healthcare facility and Hospitals</li>
                  <li tabIndex="0" className="dropdown-item">Academic Institutes/Universities</li>
                  <li tabIndex="0" className="dropdown-item">Airports and Transport terminals</li>
                  <li tabIndex="0" className="dropdown-item">IT Parks and Corporates</li>
                  <li tabIndex="0" className="dropdown-item">Offices and Buildings</li>
                  <li tabIndex="0" className="dropdown-item">Events</li>
                </ul>
              </div>
            )} */}
          </li>
          <li
            style={{ position: 'relative' }}
            ref={aboutUsRef}
            onMouseEnter={() => handleMouseEnter('aboutUs')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleMenuItemClick('about')}
            aria-haspopup="true"
            aria-expanded={openDropdown === 'aboutUs'}
            tabIndex="0"
          >
            <span className="navbar-item" onClick={handleAboutusClick}>
              <span>About Us</span>
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none" style={{ marginTop: '5px' }}>
                <path d="M1.25509 0.308217C0.854556 0.708287 0.854556 1.3533 1.25509 1.75337L7.75456 8.83118C8.07335 9.14961 8.58832 9.14961 8.90712 8.83118L15.6998 1.7452C16.1004 1.34513 16.1004 0.700123 15.6998 0.300053C15.2993 -0.100018 14.6536 -0.100018 14.253 0.300053L8.32675 6.51241L2.69374 0.300053C2.30138 -0.0918529 1.64745 -0.091853 1.25509 0.308217Z" fill="#6D7D8B" />
              </svg> */}
            </span>
            {/* {openDropdown === 'aboutUs' && (
              <div className="dropdown">
                <ul>
                  <li tabIndex="0" className="dropdown-item">Our Work</li>
                  <li tabIndex="0" className="dropdown-item">Leadership</li>
                  <li tabIndex="0" className="dropdown-item">Our Team</li>
                  <li tabIndex="0" className="dropdown-item">Gallery</li>
                </ul>
              </div>
            )} */}
          </li>
          <li
            style={{ position: 'relative' }}
            ref={aboutUsRef}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleMenuItemClick('contact')}
            aria-haspopup="true"
            aria-expanded={openDropdown === 'aboutUs'}
            tabIndex="0"
          >
            <span className="navbar-item"  onClick={handleContactClick}>
              <span>Contact Us</span>
            </span>
          </li>
          <div className="navbar-contact">
          <a href='https://mail.google.com/mail/?view=cm&fs=1&to=inwayplus@gmail.com'>
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
              <rect x="2.80559" y="5.89087" width="23.0559" height="16.1391" stroke="#E63F31" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2.80559 5.89087L14.3335 16.266L25.8615 5.89087" stroke="#E63F31" strokeWidth="1.5" />
              <path d="M2.80559 22.03L10.8752 12.8076" stroke="#E63F31" strokeWidth="1.5" />
              <path fillRule="evenodd" clipRule="evenodd" d="M25.8615 22.03L17.7919 12.8076L25.8615 22.03Z" stroke="#E63F31" strokeWidth="1.5" />
            </svg>
            </a>
            <a href='https://mail.google.com/mail/?view=cm&fs=1&to=inwayplus@gmail.com'>inwayplus@gmail.com</a>
          </div>
        </ul>
      </div>
      <div className="navbar-hamburger" onClick={toggleMobileMenu} tabIndex="0" aria-label="Toggle Mobile Menu">
        {isMobileMenuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 6L18 18" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 6H21" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 12H21" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 18H21" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
