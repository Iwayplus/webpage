import React from 'react';

const styles = {
  careerContainer: {
    display: 'flex',
    
    padding: '96px 0px',
   paddingLeft:'120px',
   paddingRight:'120px',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '64px'
  },
  upperContainer: {
    display: 'flex',
    
    padding: '0px 32px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '32px'
  },
  firstContainer: {
    textAlign: 'center'
  },
  heading: {
    color: 'var(--Gray-900, #101828)',
    fontFamily: '"Plus Jakarta Sans"',
    fontSize: '36px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '44px', /* 122.222% */
    letterSpacing: '-0.72px',
    marginBottom: '20px'
  },
  textContainer: {
    color: 'var(--Gray-600, #475467)',
    fontFamily: '"Plus Jakarta Sans"',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '30px', /* 150% */
    textAlign: 'center'
  },
  lowerContainer: {
    display: 'flex',
    
    padding: '0px 32px',
    flexDirection: 'column',
    alignItems: 'center',
    // gap: '64px'
  },
  box: {
    display: 'flex',
    
    padding: '24px 24px 28px 24px',
    flexDirection: 'column',
    alignItems: 'center',
    // gap: '24px'
  },
  softwareDevHeading: {
    color: 'var(--IwayPlus-RED, #E63F31)',
    fontFamily: '"Plus Jakarta Sans"',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '20px', /* 142.857% */
  },
  jobTitleHeading: {
    color: 'var(--Gray-900, #101828)',
    fontFamily: '"Plus Jakarta Sans"',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '28px', /* 155.556% */
  }
};

const Career = () => {
  return (
    <div style={styles.careerContainer}>
      <div style={styles.upperContainer}>
        <div style={styles.firstContainer}>
          <h1 style={styles.heading}>
            We're committed to bringing world-class, passionate professionals together to push new boundaries and grow
          </h1>
          <p style={styles.textContainer}>
            We believe in building teams where unique perspectives and talents can thrive and everyone has what they need to excel in their role, career, and at home.
          </p>
        </div>
      </div>
      <div style={styles.lowerContainer}>
        <div style={styles.box}>
          <h2 style={styles.softwareDevHeading}>Software Development</h2>
          <h3 style={styles.jobTitleHeading}>React Native Developer</h3>
        </div>
        {/* Add more boxes here if needed */}
                   
      </div>
    </div>
  );
};

export default Career;
