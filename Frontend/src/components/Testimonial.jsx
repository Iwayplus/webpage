import React, { useState, useEffect } from "react";
import { useSpring, animated } from '@react-spring/web';
import photo from "../assets/images/photo.png"; // Replace with the path to your photo

const StarIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#E63F31">
    <path fill="currentColor" d="M12 2l2.2 7.1H22l-6.3 4.7 2.2 7.1-6.3-4.7-6.3 4.7 2.2-7.1L2 9.1h7.8L12 2z" />
  </svg>
);

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px 20px",
    backgroundColor: "#f9f9f9",
  },
  heading: {
    color: "#E63F31",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "42px",
    fontWeight: 600,
    marginBottom: "30px",
  },
  testimonialsContainer: {
    display: "flex",
    gap: "20px",
    flexWrap: "nowrap", // Keep all cards in the same row
    justifyContent: "center",
    width: "calc(646px * 2 + 20px)", // Two cards visible at a time
    overflow: "hidden",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    borderRadius: "20px",
    background: "#FFF",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "646px", // Each card width
    height: "320px",
    boxSizing: "border-box",
  },
  leftContainer: {
    flex: "0 0 150px",
    marginRight: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  rightContainer: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  photo: {
    width: "100%",
    height: "auto",
    borderRadius: "20px",
    marginBottom: "10px",
  },
  stars: {
    display: "flex",
    marginBottom: "10px",
  },
  starIcon: {
    width: "20px",
    height: "20px",
    marginRight: "5px",
    fill: "#E63F31",
  },
  testimonialText: {
    color: "#090914",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "24px",
    marginBottom: "10px",
  },
  user: {
    fontWeight: "bold",
    fontStyle: "italic",
  },
};

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      photo,
      text: `"We love Iwayplus! Our designers were using it for their projects, so we already knew what kind of design they want."`,
      user: "User A",
    },
    {
      photo,
      text: `"The features are amazing! It has streamlined our workflow and improved efficiency."`,
      user: "User B",
    },
    {
      photo,
      text: `"This tool has been a game-changer for our team. Highly recommended!"`,
      user: "User C",
    },
  ];

  // React Spring Animation for Sliding Effect
  const slide = useSpring({
    opacity: 1,
    transform: `translateX(-${currentIndex * (646 + 20)}px)`, // Move two cards at a time (646px width + 20px gap)
    from: { opacity: 0, transform: "translateX(100%)" },
    config: { tension: 150, friction: 26 }, // Smoother transition
  });

  // Change the slide every 2 seconds (adjustable)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length); // Loop through all testimonials
    }, 2000); // Change every 2 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [testimonials.length]);

  // Loop testimonials by adjusting index for 2 visible cards at a time
  const displayTestimonials = [
    testimonials[(currentIndex) % testimonials.length],  // Show current testimonial
    testimonials[(currentIndex + 1) % testimonials.length], // Show next testimonial
  ];

  return (
    <main style={styles.mainContainer}>
      <h1 style={styles.heading}>What Our Clients Say</h1>
      <animated.div style={{ ...styles.testimonialsContainer, ...slide }}>
        {displayTestimonials.map((testimonial, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.leftContainer}>
              <img src={testimonial.photo} alt={testimonial.user} style={styles.photo} />
            </div>
            <div style={styles.rightContainer}>
              <div style={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={styles.starIcon}>
                    {StarIcon}
                  </span>
                ))}
              </div>
              <p style={styles.testimonialText}>{testimonial.text}</p>
              <p style={styles.user}>- {testimonial.user}</p>
            </div>
          </div>
        ))}
      </animated.div>
    </main>
  );
};

export default Testimonial;
