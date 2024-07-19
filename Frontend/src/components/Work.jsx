import React, { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import ashoka from "../assets/images/Org-4.png"

import who from "../assets/images/Org.png"
import rgci from "../assets/images/Org-1.png"
import iit from "../assets/images/image 22.png"
import aiims from "../assets/images/Org-6.png"
import ipfg from "../assets/images/Org-3.png"
import research from "../assets/images/Org-2.png"



const OrganizationContainer = styled('div')({
  width: '100%',
  flexShrink: 0,
  background: 'rgba(244, 247, 255, 0.60)',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  marginTop: '100px',   // 50 tha pehle just for checking purpose
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    marginTop: '200px',
  },
});

const Content = styled('div')({
  color: '#ED455D',
  fontFamily: 'Plus Jakarta Sans',
  fontSize: '45px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
  letterSpacing: '0.9px',
  textAlign: 'center',
  '@media (max-width: 768px)': {
    fontSize: '35px',
  },
});

const AdditionalText = styled('div')({
  width: '451px',
  color: 'var(--Text_Blue, #213757)',
  fontFamily: 'Plus Jakarta Sans',
  fontSize: '25px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  letterSpacing: '0.5px',
  textAlign: 'center',
  marginTop: '20px',
  '@media (max-width: 768px)': {
    width: '100%',
    fontSize: '20px',
  },
});

const CoverageText = styled('div')({
  color: 'var(--Text_Blue, #213757)',
  fontFamily: 'Plus Jakarta Sans',
  fontSize: '20px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  letterSpacing: '0.4px',
  textAlign: 'center',
});

const LandmarksText = styled('div')({
  color: 'var(--Text_Blue, #213757)',
  fontFamily: 'Plus Jakarta Sans',
  fontSize: '20px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  letterSpacing: '0.4px',
  textAlign: 'center',
});

const BuildingsText = styled('div')({
  color: 'var(--Text_Blue, #213757)',
  fontFamily: 'Plus Jakarta Sans',
  fontSize: '20px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  letterSpacing: '0.4px',
  textAlign: 'center',
});


const LogoTextContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '20px',
  transition: 'opacity 0.5s ease-in-out',
  opacity: 1,
  '@media (max-width: 768px)': {
    flexDirection: 'column',
  },
});

const Logo = styled('img')({
  width: '50px',
  height: '50px',
  marginRight: '10px',
});

const LogoText = styled('div')({
  color: 'var(--Text_Blue, #213757)',
  fontFamily: '"Plus Jakarta Sans"',
  fontSize: '21px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: '28px', /* 133.333% */
});

const Organization = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const logosAndTexts = [
    { logo: who, text: 'WHO-SEARO' },
    { logo: rgci, text: 'RGCI' },
    { logo: research, text: 'IITM Research Park' },
    { logo: ipfg, text: 'INTERNATIONAL PURPLE FEST GOA' },
    { logo: ashoka, text: 'Ashoka University' },
    { logo: iit, text: 'IIT Delhi' },
    { logo: aiims, text: 'AIIMS Delhi, AIIMS Jammu' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logosAndTexts.length);
    }, 1800);
    return () => clearInterval(interval);
  }, [logosAndTexts.length]);
  return (
    <OrganizationContainer>
      <Content>
        100,000+
        <CoverageText>
        m2 Coverage
      </CoverageText>
      </Content>
  
      <Content>
        5,000+
        <LandmarksText>
        Indoor Landmarks
      </LandmarksText>
      </Content>
     
      <Content>
        8+
        <BuildingsText>
        Buildings Mapped
      </BuildingsText>
      </Content>
    
      <svg xmlns="http://www.w3.org/2000/svg" width="4" height="174" viewBox="0 0 4 174" fill="none">
        <path d="M2 2L1.99999 172" stroke="#7A9EFF" strokeOpacity="0.6" strokeWidth="3" strokeLinecap="round"/>
      </svg>
      <AdditionalText>
        Trusted by prestigious organisations
        <LogoTextContainer>
        <Logo src={logosAndTexts[currentIndex].logo} alt="logo" />
        <LogoText>{logosAndTexts[currentIndex].text}</LogoText>
      </LogoTextContainer>
      </AdditionalText>
    </OrganizationContainer>
  );
};

export default Organization;
