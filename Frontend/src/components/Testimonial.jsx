import React, { useState, useEffect } from "react";
import Bom from "../assets/images/image 22.png";
import du from "../assets/images/du.jpg";
import aiims from "../assets/images/Org-6.png";
import pranav from "../assets/images/pranav.jpg";

const StarIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
    <path d="M9.87056 0.231874L12.5682 5.71603L18.5987 6.59566C18.6752 6.60704 18.747 6.63957 18.8061 6.68957C18.8652 6.73957 18.9091 6.80506 18.9329 6.87868C18.9568 6.95229 18.9596 7.0311 18.941 7.10622C18.9225 7.18135 18.8834 7.24981 18.828 7.30389L14.4652 11.5718L15.4953 17.5993C15.5086 17.6755 15.5002 17.7539 15.4712 17.8256C15.4422 17.8973 15.3937 17.9594 15.3312 18.005C15.2687 18.0505 15.1946 18.0776 15.1175 18.0832C15.0404 18.0888 14.9632 18.0727 14.8948 18.0367L9.50062 15.1914L4.10648 18.0375C4.03808 18.0736 3.96092 18.0899 3.88376 18.0844C3.80659 18.0788 3.73252 18.0518 3.66997 18.0063C3.60741 17.9608 3.55888 17.8986 3.52989 17.8269C3.50089 17.7552 3.4926 17.6768 3.50594 17.6006L4.53602 11.5718L0.171962 7.30389C0.116628 7.24981 0.0774933 7.18135 0.058965 7.10622C0.0404366 7.0311 0.0432508 6.95229 0.0670906 6.87868C0.0909304 6.80506 0.134849 6.73957 0.1939 6.68957C0.252951 6.63957 0.32479 6.60704 0.401325 6.59566L6.43176 5.71603L9.13068 0.231874C9.16434 0.162379 9.21689 0.103769 9.28232 0.0627598C9.34774 0.0217505 9.4234 0 9.50062 0C9.57783 0 9.65349 0.0217505 9.71892 0.0627598C9.78434 0.103769 9.8369 0.162379 9.87056 0.231874Z" fill="#E63F31" />
  </svg>
);

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px 20px",
    backgroundColor: "#f9f9f9",
    overflow: "hidden",
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
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    width: "100%",
  },
  card: {
    flexShrink: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    borderRadius: "20px",
    background: "#FFF",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "600px",
    height: "auto",
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
  const [currentIndices, setCurrentIndices] = useState([0, 1]);
  const testimonials = [
    { photo: pranav, text: `"I was looking for a solution, AR markers are cool, i would love to use them to locate entrance of my house."`, user: "Pranav Lal" },
    { photo: du, text: `"Route preview are useful since its available offline, i can plan my journey ahead but only if all the venue maps are annotated"`, user: "Dr. Naresh, KNC" },
    { photo: Bom, text: `"I can share my location with routes, i love this feature. I need not to guide my sighted friend who want to meet me"`, user: "Deepak, IIT Delhi" },
    { photo: aiims, text: `"It tell me going away from path when i crossed the room no. 8. This is really useful i always face similar issue without actually knowing i have passed my destination"`, user: "Allaudeen, RPC Visitors" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndices(([first, second]) => {
        const nextFirst = (first + 1) % testimonials.length;
        const nextSecond = (second + 1) % testimonials.length;
        return [nextFirst, nextSecond];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <main style={styles.mainContainer}>
      <h1 style={styles.heading}>What Our Clients Say</h1>
      <div style={styles.testimonialsContainer}>
        {currentIndices.map((index) => (
          <div key={index} style={styles.card}>
            <div style={styles.leftContainer}>
              <img src={testimonials[index].photo} alt={testimonials[index].user} style={styles.photo} />
            </div>
            <div style={styles.rightContainer}>
              <div style={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={styles.starIcon}>
                    {StarIcon}
                  </span>
                ))}
              </div>
              <p style={styles.testimonialText}>{testimonials[index].text}</p>
              <p style={styles.user}>- {testimonials[index].user}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Testimonial;
