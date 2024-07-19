import React from "react";
import photo from "../assets/images/photo.png"; // Replace with the path to your photo

const StarIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#E63F31">
    <path fill="currentColor" d="M12 2l2.2 7.1H22l-6.3 4.7 2.2 7.1-6.3-4.7-6.3 4.7 2.2-7.1L2 9.1h7.8L12 2z"/>
  </svg>
);

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  },
  heading: {
    color: "var(--IwayPlus-RED, #E63F31)",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "52px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "62px", // 119.231%
    letterSpacing: "-2px",
    '@media (max-width: 768px)': {
      fontSize: "36px",
      lineHeight: "42px",
    },
    '@media (max-width: 480px)': {
      fontSize: "28px",
      lineHeight: "34px",
    },
  },
  lowerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    marginTop: "20px",
    '@media (max-width: 768px)': {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  card: {
    display: "flex",
    padding: "20px",
    borderRadius: "20px",
    background: "#FFF",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Optional: Adds a subtle shadow to the cards
    maxWidth: "460px", // Optional: Sets a maximum width for the cards
    '@media (max-width: 768px)': {
      flexDirection: "column",
      alignItems: "center",
      maxWidth: "90%",
    },
  },
  leftContainer: {
    flex: "0 0 220px", // Fixed width for left container
    marginRight: "40px", // Gap between left and right containers
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    '@media (max-width: 768px)': {
      marginRight: "0",
      marginBottom: "20px",
    },
  },
  rightContainer: {
    flex: "1", // Take remaining space
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    maxWidth: '200px',
    '@media (max-width: 768px)': {
      alignItems: "center",
      maxWidth: "100%",
    },
  },
  photo: {
    width: "90%",
    height: "auto",
    borderRadius: "20px",
    marginBottom: "10px",
  },
  stars: {
    display: "flex",
    marginBottom: "10px",
    alignSelf: "flex-start", // Align stars to the right within the right container
    '@media (max-width: 768px)': {
      justifyContent: "center",
      alignSelf: "center",
    },
  },
  starIcon: {
    width: "20px",
    height: "20px",
    marginRight: "5px",
    fill: "#E63F31", // Red color for the star
  },
  testimonialText: {
    color: "var(--Base-02, #090914)", // Dark color for the paragraph
    fontFamily: "Poppins",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "28px", // 155.556%
    marginBottom: "10px",
    '@media (max-width: 768px)': {
      textAlign: "center",
    },
  },
};

const Testimonial = () => {
  return (
    <main style={styles.mainContainer}>
      <h1 style={styles.heading}>Our Happy Clients say about us</h1>
      <section style={styles.lowerContainer}>
        <div style={styles.card}>
          <div style={styles.leftContainer}>
            <img src={photo} alt="User A" style={styles.photo} />
          </div>
          <div style={styles.rightContainer}>
            <div style={styles.stars}>
              {[...Array(5)].map((_, index) => (
                <span key={index} style={styles.starIcon}>{StarIcon}</span>
              ))}
            </div>
            <p style={styles.testimonialText}>
              "We love Iwayplus! Our designers were using it for their projects, so we already knew what kind of design they want."
            </p>
            <p>- User A</p>
          </div>
        </div>
        <div style={styles.card}>
          <div style={styles.leftContainer}>
            <img src={photo} alt="User B" style={styles.photo} />
          </div>
          <div style={styles.rightContainer}>
            <div style={styles.stars}>
              {[...Array(5)].map((_, index) => (
                <span key={index} style={styles.starIcon}>{StarIcon}</span>
              ))}
            </div>
            <p style={styles.testimonialText}>
              "We love Iwayplus! Our designers were using it for their projects, so we already knew what kind of design they want."
            </p>
            <p>- User B</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Testimonial;
