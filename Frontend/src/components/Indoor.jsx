import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import hero from "../assets/images/Hero.png";
import map from "../assets/images/Map.png";
const getStyles = (isHovered, screenSize, isTextVisible) => {
  const isMobile = screenSize <= 768;
  const isTablet = screenSize > 768 && screenSize <= 1024;

  return {
    mainContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      padding: "20px",
      position: "relative",
    },
    mainContainerMobile: {
      flexDirection: "column",
      padding: "10px",
    },
    mainContainerTablet: {
      flexDirection: "column",
      padding: "15px",
    },
    leftContainer: {
      flex: 1,
      paddingLeft: "40px",
      display: "flex",
      flexDirection: "column",
    },
    leftContainerHidden: {
      display: "none",
    },
    leftContainerVisible: {
      display: "flex",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: "center",
      backdropFilter: "blur(10px)",
      backgroundColor: "rgba(255, 255, 255, 0.6)",
      color: "#FFF",
      textAlign: "center",
      padding: "20px",
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      borderRadius: "10px",
    },
    rightContainer: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      maxWidth: "600px",
      height: "auto",
      marginTop: "100px",
    },
    imageMobile: {
      maxWidth: "100%",
      marginTop: "80px",
    },
    imageTablet: {
      maxWidth: "100%",
      marginTop: "50px",
    },
    heading: {
      fontFamily: '"Plus Jakarta Sans"',
      fontSize: "58px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "130%",
      letterSpacing: "1.16px",
      color: "#000", // Default to black for all sizes
    },
    headingMobile: {
      fontSize: "36px",
    },
    headingTablet: {
      fontSize: "48px",
    },
    highlightedText: {
      color: "#ED455D",
    },
    subheading: {
      marginTop:'2%',
      color: "#213757",
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "176%",
      letterSpacing: "0.4px",
    },
    subheadingMobile: {
      fontSize: "16px",
    },
    
    subheadingTablet: {
      fontSize: "18px",
    },
    button: {
      width: "165px",
      height: "56px",
      flexShrink: 0,
      marginTop:'2%',
      borderRadius: "4px",
      background: "#E63F31",
      color: "#FFF",
      textAlign: "center",
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "24px",
      padding: "10px 20px",
      border: "none",
      cursor: "pointer",
      outline: "none",
    },
    buttonHover: {
      background: "#FFF",
      color: "#E63F31",
      borderRadius: "4px",
      border: "1px solid rgba(0, 0, 0, 0.15)",
    },
    buttonMobile: {
      width: "100%",
    },
    buttonTablet: {
      width: "100%",
    },
  };
};

const Indoor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 1024) {
      const timer = setTimeout(() => {
        setIsTextVisible(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [screenSize]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/quote");
  };

  const styles = getStyles(isHovered, screenSize, isTextVisible);

  return (
    <main>
      <section
        style={{
          ...styles.mainContainer,
          ...(screenSize <= 768 && styles.mainContainerMobile),
          ...(screenSize > 768 && screenSize <= 1024 && styles.mainContainerTablet),
        }}
      >
        <div
          style={{
            ...styles.leftContainer,
            ...(screenSize <= 1024 && !isTextVisible && styles.leftContainerHidden),
            ...(screenSize <= 1024 && isTextVisible && styles.leftContainerVisible),
          }}
        >
          <h1
            style={{
              ...styles.heading,
              ...(screenSize <= 768 && styles.headingMobile),
              ...(screenSize > 768 && screenSize <= 1024 && styles.headingTablet),
            }}
          >
            Revolutionizing
            <span style={styles.highlightedText}> Indoor Wayfinding </span>
            For All!
          </h1>
          <p
            style={{
              ...styles.subheading,
              ...(screenSize <= 768 && styles.subheadingMobile),
              ...(screenSize > 768 && screenSize <= 1024 && styles.subheadingTablet),
            }}
          >
            Providing Digital Access to Urban Public Spaces - Compact and Scalable Solution
          </p>
          <button
            style={{
              ...styles.button,
              ...(isHovered && styles.buttonHover),
              ...(screenSize <= 768 && styles.buttonMobile),
              ...(screenSize > 768 && screenSize <= 1024 && styles.buttonTablet),
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleButtonClick}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleButtonClick();
              }
            }}
            tabIndex={0}
            aria-label="Get a Quote for Indoor Wayfinding Solutions"
          >
            Get Quote
          </button>
        </div>
        <div
          style={{
            ...styles.rightContainer,
            ...(screenSize <= 768 && styles.rightContainerMobile),
            ...(screenSize > 768 && screenSize <= 1024 && styles.rightContainerTablet),
          }}
        >
          <img
            src={hero}
            alt="Revolutionizing Indoor Wayfinding"
            style={{
              ...styles.image,
              ...(screenSize <= 768 && styles.imageMobile),
              ...(screenSize > 768 && screenSize <= 1024 && styles.imageTablet),
            }}
            aria-hidden="true"
          />
        </div>
      </section>
    </main>
  );
};

export default Indoor;
