import React from 'react';
import first from "../assets/images/blog1.png";
import second from "../assets/images/blog2.png";
import third from "../assets/images/blog3.png";
import './Blog.css';



const Blog = () => {
  return (
    <div className="blog-container">
      <div className="image-container"></div>
      <div className="main-container">
        <div className="card">
          <div className="upper-container">
            <div className="typography">Article</div>
            <h1 className="heading">12 Employee experience best practices every HR leader should follow</h1>
          </div>
          <div className="lower-container">
            <img src={first} alt="Card Image" className="card-image" />
          </div>
        </div>
        <div className="card">
          <div className="upper-container">
            <div className="typography">Article</div>
            <h1 className="heading">How to map the employee experience journey (with an example and a template)</h1>
          </div>
          <div className="lower-container">
            <img src={second} alt="Card Image" className="card-image" />
          </div>
        </div>
        <div className="card">
          <div className="upper-container">
            <div className="typography">Article</div>
            <h1 className="heading">6 Benefits of one-on-one meetings with employees</h1>
          </div>
          <div className="lower-container">
            <img src={third} alt="Card Image" className="card-image" />
          </div>
        </div>
        <div className="card">
          <div className="upper-container">
            <div className="typography">Article</div>
            <h1 className="heading">How to map the employee experience journey (with an example and a template)</h1>
          </div>
          <div className="lower-container">
            <img src={second} alt="Card Image" className="card-image" />
          </div>
        </div>
        <div className="card">
          <div className="upper-container">
            <div className="typography">Article</div>
            <h1 className="heading">How to map the employee experience journey (with an example and a template)</h1>
          </div>
          <div className="lower-container">
            <img src={second} alt="Card Image" className="card-image" />
          </div>
        </div>
        <div className="card">
          <div className="upper-container">
            <div className="typography">Article</div>
            <h2 className="heading">How to map the employee experience journey (with an example and a template)</h2>
          </div>
          <div className="lower-container">
            <img src={second} alt="Card Image" className="card-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
