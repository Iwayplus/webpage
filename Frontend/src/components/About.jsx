import React, { useState, useEffect, useRef } from 'react';
import Journey from "../assets/images/journey.png";
import Passion from "../assets/images/passion.png";
import Solution from "../assets/images/solution.png";
import MarketPotential from "../assets/images/market_potential.png";
import Achievements from "../assets/images/achievements.png";
import './About.css';  // Ensure this import is correct

const About = () => {
  const [flipped, setFlipped] = useState(Array(5).fill(false));
  const containerRef = useRef(null);
  const iwayplusRef = useRef(null);
  const cardRefs = useRef([]);

  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fadeInUp');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    if (iwayplusRef.current) {
      observer.observe(iwayplusRef.current);
    }

    cardRefs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }

      if (iwayplusRef.current) {
        observer.unobserve(iwayplusRef.current);
      }

      cardRefs.current.forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    textAlign: 'center',
    marginTop: '100px',
    color: '#213757',
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    fontSize: '42px',
    fontWeight: '700',
    lineHeight: '48px',
  };

  const lineStyle = {
    width: '20%',
    height: '2px',
    background: 'rgba(0, 0, 0, 0.30)',
  };

  const indoorWayfindingStyle = {
    color: '#E63F31',
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    fontSize: '42px',
    fontWeight: 700,
    lineHeight: '48px',
  };

  const iwayplusContainerStyle = {
    display: 'flex',
    padding: '30px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    color: '#213757',
    textAlign: 'center',
    fontFamily: '"Plus Jakarta Sans"',
    fontSize: '20px',
    fontWeight: '400',
    lineHeight: 'normal',
    letterSpacing: '0.6px',
  };

  const sectionStyle = {
    display: 'flex',
    // padding: '40px',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: '60px',
    flexWrap: 'wrap',
  };

  const cardContainerStyle = {
    perspective: '1000px',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
  };

  const cardStyle = {
    width: '345px',
    height: '450px',
    flexShrink: 0,
    border: '1px solid rgba(0, 0, 0, 0.20)',
    background: '#FFF',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.6s',
  };

  const cardStyleFlipped = {
    ...cardStyle,
    transform: 'rotateY(-180deg)',
  };

  const cardInnerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    transformStyle: 'preserve-3d',
    transition: 'transform 1s',
  };

  const cardFrontBackStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    borderRadius: '20px',
  };

  const cardFrontStyle = {
    ...cardFrontBackStyle,
    backgroundColor: '#FFF',
  };

  const cardBackStyle = {
    ...cardFrontBackStyle,
    backgroundColor: '#FFF',
    transform: 'rotateY(180deg)',
  };

  const imageStyle = {
    objectFit: 'cover',
    borderRadius: '10px',
    padding: '15px',
  };

  const cardHeadingStyle = {
    paddingLeft: '18px',
    color: '#213757',
    fontFamily: 'Cabin, sans-serif',
    fontSize: '24px',
    fontWeight: 600,
    lineHeight: 'normal',
    textTransform: 'capitalize',
  };

  const cardContentStyle = {
    paddingLeft: '10px',
    paddingRight: '10px',
    color: 'rgba(33, 55, 81, 0.70)',
    fontFamily: 'Cabin, sans-serif',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '163.15%',
  };

  const cardBackContentStyle = {
    padding: '10px',
    color: 'rgba(33, 55, 81, 0.70)',
    fontFamily: 'Cabin, sans-serif',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '163.15%',
  };

  const cardData = [
    {
      heading: 'Journey',
      content: 'We have successfully tested our mapping and navigation solution at 6+ buildings, with 20+ annotators. IWAYPLUS is ready to scale now.',
      backContent: 'We have successfully tested our mapping and navigation solution at 6+ buildings, with 20+ annotators. IWAYPLUS is ready to scale now. Our preliminary trials show that our wayfinding solution reduces 50% of navigation problems and saved 1000+ hours of patients and hospital staff. To date, IWAYPLUS has covered 5,00,000 sq. feet of overall area, and 3000+ geocoded indoor landmarks.',
      image: Journey,
    },
    {
      heading: 'Passion',
      content: 'The growing infrastructure and services result in a surge of information, causing difficulties in wayfinding, tracking, and delivering services.',
      backContent: 'The growing infrastructure and services resulted in a surge of information, causing difficulties in wayfinding, tracking, and delivering services. This is due to several reasons, including inadequate wayfinding signs, the absence of geocoded indoor maps, and the lack of positioning signatures to validate indoor landmarks as GPS is unreliable for indoors. People spend time searching for a desired location and feel stressed, as a result. In a fire evacuation scenario in a high-rise building, our solution can guide individuals to emergency exits and track their positioning inside the building.',
      image: Passion,
    },
    {
      heading: 'Solution',
      content: 'IWAYPLUS have developed a mapping tool and have three key differentiators, 1) Custom APIs for offers high resolution geocoded indoor',
      backContent: 'IWAYPLUS have developed a mapping tool and have three key differentiators, 1) Custom APIs for offers high resolution geocoded indoor maps, 2) Routing and captioning APIs to support wayfinding, 3) Positioning signature APIs for authentication of digital address. IWAYPLUS do not require global map subscription resulting in lower cost, and offers a seamless multi-floor/multi-building wayfinding to ensure seamless delivery of services.',
      image: Solution,
    },
    {
      heading: 'Market Potential',
      content: 'India\'s indoor mapping and wayfinding market are expected to grow at ~32% CAGR (Ref. MRFR), driven by structural changes and digital transformation.',
      backContent: 'India\'s indoor mapping and wayfinding market are expected to grow at ~32% CAGR (Ref. MRFR), driven by structural changes and digital transformation. IWAYPLUS has strategically identified the highest potential and application of mapping in public spaces (~ 70% of TAM size of indoor mapping business spectrum). IWAYPLUS offers a simple pricing model based on venue size. For a high resolution geocoded indoor maps and APIs, organization only pays for mapped area at INR 3 to 5/sq. feet. Although they can opt for a customized services at different price point.',
      image: MarketPotential,
    },
    {
      heading: 'Achievements',
      content: 'IWAYPLUS have received investment from AIIMS, WHO-SEARO to conduct pilots and generated more than 6 publications. Our IP position is under process.',
      backContent: 'IWAYPLUS have received investment from AIIMS, WHO-SEARO to conduct pilots and generated more than 6 publications. Our IP position is under process. Iwayplus also won the Inclusive city award from the ministry of housing and urban affairs. Recently, won an OCTANE challenge in the GIS category and got acknowledged for investment from STPI. IWAYPLUS is incubated at R & I part in IIT Delhi and have already received expressions of interest from AIIMS Delhi and Jammu for implementation.',
      image: Achievements,
    },
  ];

  return (
    <div>
      <div ref={containerRef} style={containerStyle} role="heading" aria-level="1">
        <div style={lineStyle}></div>
        ABOUT INDOOR WAYFINDING        <div style={lineStyle}></div>
      </div>
      <div ref={iwayplusRef} style={iwayplusContainerStyle}>
        IWAYPLUS, originating from the Assistech Lab at the Indian Institute of Technology Delhi, offers a solution to generate geocoded indoor maps and positioning signature for large indoor spaces such as Hospitals, Airports, Academic Campuses, Malls, etc. Our technology can help businesses in tracking and managing staff, assets, and crowds. For visitors, IWAYPLUS offers personalized wayfinding assistance to enhance their experience.
      </div>
      <section style={sectionStyle}>
        {cardData.map((card, index) => (
          <div
            key={index}
            ref={el => cardRefs.current[index] = el}
            style={cardContainerStyle}
            onClick={() => handleFlip(index)}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
            role="button"
            aria-expanded={flipped[index]}
            aria-controls={`card-back-${index}`}
            tabIndex="0"
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleFlip(index);
              }
            }}
          >
            <div style={flipped[index] ? cardStyleFlipped : cardStyle} id={`card-back-${index}`}>
              <div style={cardInnerStyle}>
                <div style={cardFrontStyle}>
                  <img src={card.image} alt={`${card.heading} Image`} style={imageStyle} />
                  <h2 style={cardHeadingStyle}>{card.heading}</h2>
                  <p style={cardContentStyle}>{card.content}</p>
                </div>
                <div style={cardBackStyle}>
                  <h2 style={cardHeadingStyle}>{card.heading}</h2>
                  <p style={cardBackContentStyle}>{card.backContent}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default About;

