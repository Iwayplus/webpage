import React from 'react';
import './navtool.css';

const NavTool = () => {
  return (
    <div className="navtool-container">
      <div className="logo">Logo</div>

      <div className="nav-buttons">
        <button>Home</button>
        <button>Products    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11" fill="none">
  <path d="M0.359632 0.373803C-0.119553 0.859004 -0.119553 1.64127 0.359632 2.12647L8.13538 10.7104C8.51678 11.0965 9.13287 11.0965 9.51426 10.7104L17.6409 2.11657C18.12 1.63136 18.12 0.849102 17.6409 0.363901C17.1617 -0.1213 16.3891 -0.1213 15.9099 0.363901L8.81993 7.89818L2.08079 0.363901C1.61138 -0.111398 0.829039 -0.111398 0.359632 0.373803Z" fill="#6D7D8B"/>
</svg></button>
        <button>UseCase</button>
        <button>AboutUs</button>
        <button>Blog</button>
        <button>ContactUs</button>
      </div>

      <div className="cta-container">
        <button>Call to Action</button>
      </div>
    </div>
  );
};

export default NavTool;
