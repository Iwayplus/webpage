import React, { useState, useEffect } from "react";
import axios from "axios"; // Make sure to install axios or use fetch API

const TeamSection = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    // Fetch team members from the API
    axios
      .get("https://dev.iwayplus.in/webapi/employees")
      .then((response) => {
        setTeamMembers(response.data); // Assuming the API returns an array of team members
      })
      .catch((error) => {
        console.error("Error fetching team members:", error);
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      {teamMembers.map((member, index) => (
        <TeamCard
          key={index}
          image={member.image} // Assuming 'image' is a URL
          name={member.name}
          designation={member.designation}
          description={member.description}
        />
      ))}
    </div>
  );
};

const TeamCard = ({ image, name, designation, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div
      style={{
        width: "280px",
        height: "369px",
        flexShrink: 0,
        background: `url(${image}) lightgray 50% / cover no-repeat`,
        position: "relative",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "24px 20px",
          gap: "16px",
          alignSelf: "stretch",
          border: "1px solid rgba(255, 255, 255, 0.5)",
          background: "rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(12px)",
          borderRadius: "12px",
          position: "absolute",
          bottom: "17px",
          width: "90%",
          height: isOpen ? "50%" : "120px", // Name and designation always visible
          transition: "height 0.3s ease",
        }}
      >
        {/* Upper Container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <h3
              style={{
                color: "var(--White, #FFF)",
                fontFamily: '"Plus Jakarta Sans"',
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "28px",
              }}
            >
              {name}
            </h3>
            <button
              onClick={togglePanel}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d={
                    isOpen
                      ? "M17 7L7 17M7 17H17M7 17V7" // Arrow for expanded state
                      : "M7 17L17 7M17 7H7M17 7V17" // Arrow for collapsed state
                  }
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <p
            style={{
              color: "var(--White, #FFF)",
              fontFamily: '"Plus Jakarta Sans"',
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "28px",
            }}
          >
            {designation}
          </p>
          {isOpen && (
            <p
              style={{
                fontSize: "14px",
                fontWeight: "400",
                color: "#FFF",
                fontFamily: "Plus Jakarta Sans",
              }}
            >
              {description}
            </p>
          )}
        </div>
        {/* Lower Container */}
        {isOpen && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <i style={{ fontSize: "24px", color: "#FFF" }}>⭐</i>
            <i style={{ fontSize: "24px", color: "#FFF" }}>📞</i>
            <i style={{ fontSize: "24px", color: "#FFF" }}>📧</i>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamSection;
