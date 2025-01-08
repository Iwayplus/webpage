import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import simple from "../assets/images/image 1 (5).png"
import { height } from "@mui/system";




const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/privacy");
  };

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Email is required");
      return;
    }

    try {
      const response = await axios.post("/subscribe", { email });
      setMessage(response.data.message);
      setEmail("");
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.error);
      } else {
        setMessage("An error occurred. Please try again.");
      }
    }
  };

  const mainContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px',
    
  };

  const second = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '20px',
    gap: '50px',
    flexWrap: 'wrap',
    width: '100%',
  };

  const logo = {
  
    alignItems: 'flex-start',
  };

  const text = {
    color: 'var(--gray-500, #71717A)',
    fontFamily: "Plus Jakarta Sans",
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '26px', /* 162.5% */
  };

  const kt = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    flex: '1 1 200px',
  };

  const social = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '20px',
    flexWrap: 'wrap',
    marginTop:'20px',
  };

  const com = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    color: '#8195B1',
    fontFamily: '"Plus Jakarta Sans"',
    fontSize: '13px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '18px', /* 138.462% */
    letterSpacing: '1px',
    // textTransform: 'uppercase',
    gap: '10px',
    flex: '1 1 150px',
  };

  const prod = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    color: 'var(--Text_Blue, #213757)',
    fontFamily: '"Plus Jakarta Sans"',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '500',
    // textTransform: 'lowercase',
    lineHeight: '24px', /* 150% */
    gap: '10px',
  };

  const space = {
    borderRadius: '10px',
    border: '1px solid var(--gray-200, #E4E4E7)',
    background: 'var(--base-white, #FFF)',
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box',
  };

  const button = {
    display: 'flex',
    padding: '16px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    flexShrink: 0,
    borderRadius: '9px',
    background: 'var(--Gubbins, #E63F31)',
  };

  const buttonText = {
    color: 'var(--base-white, #FFF)',
    textAlign: 'center',
    fontFamily: "Plus Jakarta Sans",
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '24px', /* 150% */
  };
  const bottomText = {
    color: 'rgba(0, 0, 0, 0.40)',
    textAlign: 'center',
    fontFamily: "Plus Jakarta Sans",
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '150.6%', /* 21.084px */
    letterSpacing: '0.14px',
    marginTop: '20px',
  };

 

  return (
    <div style={mainContainer}>
      <div style={second}>
        <div style={kt}>
          <div style={logo}>
            <img src={simple} alt="img" />
          </div>
          <div style={text}>
            Providing Digital Access to Urban Public Spaces - Compact and Scalable Solution
          </div>
          <div style={social}>
            {/* SVG icons here */}
            <a href="https://www.linkedin.com/company/iwayplus/">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
  <rect x="2.125" y="2.125" width="29.75" height="29.75" rx="14.875" fill="#1275B1"/>
  <path d="M13.4072 10.2979C13.4072 11.2909 12.5465 12.0958 11.4849 12.0958C10.4232 12.0958 9.5625 11.2909 9.5625 10.2979C9.5625 9.30495 10.4232 8.5 11.4849 8.5C12.5465 8.5 13.4072 9.30495 13.4072 10.2979Z" fill="white"/>
  <path d="M9.82539 13.4174H13.1115V23.375H9.82539V13.4174Z" fill="white"/>
  <path d="M18.4021 13.4174H15.116V23.375H18.4021C18.4021 23.375 18.4021 20.2402 18.4021 18.2802C18.4021 17.1037 18.8038 15.9221 20.4066 15.9221C22.218 15.9221 22.2071 17.4617 22.1986 18.6544C22.1876 20.2135 22.2139 21.8045 22.2139 23.375H25.5V18.1196C25.4722 14.7638 24.5977 13.2176 21.721 13.2176C20.0126 13.2176 18.9536 13.9932 18.4021 14.6949V13.4174Z" fill="white"/>
</svg>
</a>
<a href="https://www.facebook.com/profile.php?id=61558509115544">
<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
  <circle cx="17" cy="17" r="14.875" fill="url(#paint0_linear_901_46)"/>
  <path d="M22.5396 21.5492L23.2003 17.3507H19.0668V14.6274C19.0668 13.4786 19.6431 12.358 21.4945 12.358H23.375V8.78368C23.375 8.78368 21.6692 8.5 20.039 8.5C16.6333 8.5 14.4093 10.5112 14.4093 14.1508V17.3507H10.625V21.5492H14.4093V31.6991C15.169 31.8155 15.9463 31.875 16.738 31.875C17.5298 31.875 18.3071 31.8155 19.0668 31.6991V21.5492H22.5396Z" fill="white"/>
  <defs>
    <linearGradient id="paint0_linear_901_46" x1="17" y1="2.125" x2="17" y2="31.7868" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18ACFE"/>
      <stop offset="1" stop-color="#0163E0"/>
    </linearGradient>
  </defs>
</svg>
</a>

<a href="https://www.instagram.com/_iwayplus__/">
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint0_radial_901_49)"/>
  <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint1_radial_901_49)"/>
  <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint2_radial_901_49)"/>
  <path d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z" fill="white"/>
  <defs>
    <radialGradient id="paint0_radial_901_49" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)">
      <stop stop-color="#B13589"/>
      <stop offset="0.79309" stop-color="#C62F94"/>
      <stop offset="1" stop-color="#8A3AC8"/>
    </radialGradient>
    <radialGradient id="paint1_radial_901_49" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)">
      <stop stop-color="#E0E8B7"/>
      <stop offset="0.444662" stop-color="#FB8A2E"/>
      <stop offset="0.71474" stop-color="#E2425C"/>
      <stop offset="1" stop-color="#E2425C" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="paint2_radial_901_49" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)">
      <stop offset="0.156701" stop-color="#406ADC"/>
      <stop offset="0.467799" stop-color="#6A45BE"/>
      <stop offset="1" stop-color="#6A45BE" stop-opacity="0"/>
    </radialGradient>
  </defs>
</svg>
</a>
<a href="https://twitter.com/Iwayplusmaps">
<svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M26.6903 26L16.2527 10.8467L16.2705 10.8609L25.6815 0H22.5366L14.8701 8.84L8.78201 0H0.534034L10.2785 14.1476L10.2774 14.1464L0 26H3.14492L11.6682 16.1649L18.4423 26H26.6903ZM7.53592 2.36363L22.1806 23.6364H19.6884L5.0319 2.36363H7.53592Z" fill="black"/>
</svg>
</a>
<a href="https://www.youtube.com/@Iwayplus">
<svg xmlns="http://www.w3.org/2000/svg" width="34" height="26" viewBox="0 0 34 26" fill="none">
  <path d="M17.3378 0C18.2057 0.0048753 20.3768 0.0260016 22.6844 0.118632L23.5035 0.154384C25.8258 0.263266 28.1464 0.451778 29.2986 0.771923C30.8343 1.2042 32.0401 2.46203 32.448 4.05788C33.0981 6.59304 33.1793 11.5366 33.1891 12.7343L33.1907 12.9813V13.2641C33.1793 14.4618 33.0981 19.407 32.448 21.9405C32.0353 23.5412 30.8278 24.8007 29.2986 25.2265C28.1464 25.5466 25.8258 25.7351 23.5035 25.844L22.6844 25.8814C20.3768 25.9724 18.2057 25.9951 17.3378 25.9984L16.9559 26H16.5415C14.7052 25.9886 7.02495 25.9057 4.5808 25.2265C3.0467 24.7942 1.83925 23.5363 1.43135 21.9405C0.781313 19.4053 0.700058 14.4618 0.690308 13.2641V12.7343C0.700058 11.5366 0.781313 6.59141 1.43135 4.05788C1.84413 2.45715 3.05158 1.1977 4.58243 0.773548C7.02495 0.0926305 14.7068 0.00975061 16.5432 0H17.3378ZM13.6895 7.31296V18.6887L23.4401 13.0008L13.6895 7.31296Z" fill="#FF0000"/>
</svg>
</a>
          </div>
        </div>

        <div style={com}>
          <span style={{ fontWeight: '600', fontSize: '13px' }}>COMPANY</span>
          <div style={prod}>
            <span >Products</span>
            <span>Blog</span>
            <span>Our Work</span>
            <span>Career</span>
            <span>Team</span>
          </div>
        </div>

        <div style={com}>
          <span style={{ fontWeight: '600', fontSize: '13px' }}>HELP</span>
          <div style={prod}>
            <span>Customer Support</span>
            <span>Terms & Conditions</span>
            <span    onClick={handleButtonClick}   style={{  cursor: 'pointer' }}>Privacy Policy</span>
          </div>
        </div>

        <div style={com}>
          <span style={{ fontWeight: '600', fontSize: '13px' }}>NEWSLETTER</span>
          
          <div style={space}>
            <input type="text" placeholder="Enter your email address" style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
          </div>
          <div style={button}>
            <div style={buttonText}   onClick={handleSubscribe}>Subscribe Now</div>
          </div>
        </div>
      </div>
      <div style={bottomText}>
        Iwayplus Private Limited, 2024 © All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
