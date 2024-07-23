import React, { useState, useEffect } from "react";

const Accessiblity = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "image 9.png",
    "rp_center_3 1.png",
    "rp_center_2 1.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    textAlign: 'center',
    marginTop: '100px',
  };

  const lineStyle = {
    width: '20%',
    height: '2px',
    background: 'rgba(0, 0, 0, 0.30)',
  };

  const contentmain = {
    display: 'inline-flex',
    padding: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
  };

  const ourStyle = {
    color: 'var(--gray-900, #18181B)',
    fontFamily: "Plus Jakarta Sans",
    fontSize: 42,
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '48px',
  };

  const productStyle = {
    color: '#E63F31',
    fontFamily: "Plus Jakarta Sans",
    fontSize: 42,
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '48px',
  };

  const iwayplusContainerStyle = {
    display: 'flex',
    padding: '40px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    color: 'var(--Text_Blue, #213757)',
    textAlign: 'center',
    fontFamily: '"Plus Jakarta Sans"',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    letterSpacing: '0.4px',
  };

  const videoContainer = {
    display: 'flex',
    gap: '60px',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // paddingBottom: '40px',
    padding:'40px',
    // paddingLeft:'80px',
    // paddingRight:'80px',
    flexWrap: 'wrap',
  };

  const iframeStyle = {
    flex: '1 1 45%',  // Allows for two videos side-by-side on wider screens
    minWidth: '300px',  // Ensures a minimum width
    height: 'auto',
    aspectRatio: '16/9',
  };

  const imageContainerStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "40px",
    position: "relative",
    
    
  };

  const imageStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
    
  };

  const dotsContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  };

  const dotStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "gray",
    margin: "0 5px",
    transition: "background-color 0.3s",
  };

  const activeDotStyle = {
    backgroundColor: "red",
  };

  return (
    <div>
      <div style={containerStyle}>
        <div style={lineStyle}></div>
        <div style={contentmain}>
          <span style={ourStyle}>We know     Accessibility </span>
 
        </div>
        <div style={lineStyle}></div>
      </div>

      <div style={iwayplusContainerStyle}>
        How many times you find it difficult to locate a washroom, meeting room in a corporate office, exit from a shopping mall, or specific section in a hospital. During our visit to unfamiliar location we found it difficult to access personalized wayfinding information like where do I go? how do I get there?. Failing to get this information can result into stress, anxiety, and confusion. Based on preliminary study data, ~80 % people requires wayfinding assistance in unfamilier spaces and ~20% reported poor wayfinding experience because of miscommunication. Situation is even worse for people with disability.
      </div>

      <div style={videoContainer}>
       
        <iframe
          style={iframeStyle}
          src="https://www.youtube.com/embed/mO3ucugGS6Y?si=XTrsVuat2KP4uyBH"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
         <iframe
          style={iframeStyle}
          src="https://www.youtube.com/embed/NZkJwkvyUM8?si=NFpXc28jZS9L3zl_"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {/* Image Container */}
      {/* <div style={imageContainerStyle}>
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          style={imageStyle}
        />
      </div> */}

      {/* Dots Container */}
      {/* <div style={dotsContainerStyle}>
        {images.map((_, index) => (
          <div
            key={index}
            style={{
              ...dotStyle,
              ...(index === currentImageIndex ? activeDotStyle : {}),
            }}
          ></div>
        ))}
      </div> */}
    </div>
  );
};

export default Accessiblity;
