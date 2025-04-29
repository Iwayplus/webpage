
import React from "react";
import "./party.css";
import ashoka from "../assets/images/Org-4.png"
import who from "../assets/images/Org.png"
import rgci from "../assets/images/Org-1.png"
import iit from "../assets/images/image 22.png"
import aiims from "../assets/images/Org-6.png"
import ipfg from "../assets/images/Org-3.png"
import research from "../assets/images/Org-2.png"
import jammu from "../assets/images/jammu.png"
import speja from "../assets/images/speja.png"



const Party = () => {
  return (
    <div className="party-container">
      <h1 className="party-heading">Trusted by prestigious organisations</h1>
      <p className="party-description">
      "Empowering prestigious organizations worldwide with cutting-edge mapping and navigation solutions."
      </p>
      <div className="party-stats">
        <div className="stat-container">
          <span className="stat">100,000+</span>
          <p className="stat-subtext">m2 Coverage</p>
        </div>
        <div className="stat-container">
          <span className="stat">5,000+</span>
          <p className="stat-subtext">Indoor Landmarks</p>
        </div>
        <div className="stat-container">
          <span className="stat">8+</span>
          <p className="stat-subtext">Buildings Mapped</p>
        </div>
      </div>
      <div className="party-logos">
        <img src={aiims} alt="Logo 1" className="party-logo" />
        <img src={who} alt="Logo 2" className="party-logo" />
        <img src={iit} alt="Logo 3" className="party-logo" />
        <img src={ipfg} alt="Logo 3" className="party-logo" />
        <img src={research} alt="Logo 3" className="party-logo" />
        <img src={ashoka} alt="Logo 3" className="party-logo" />
        <img src={jammu} alt="Logo 3" className="party-logo" />
        <img src={speja} alt="Logo 3" className="party-logo" />
      </div>
    </div>
  );
};

export default Party;
