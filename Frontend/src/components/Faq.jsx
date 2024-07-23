import React, { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const styles = {
    container: {
      display: 'flex',
      
      padding: '96px 40px',
      flexDirection: 'column',
      alignItems: 'center',
      
      border: '1px solid rgba(0, 0, 0, 0.20)',
      background: 'var(--White, #FFF)'
    },
    heading: {
      color: 'var(--Gray-900, #101828)',
      textAlign: 'center',
      fontFamily: 'Inter, sans-serif',
      fontSize: '36px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '44px',
      letterSpacing: '-0.72px'
    },
    subheading: {
      color: 'var(--Gray-500, #667085)',
      textAlign: 'center',
      fontFamily: 'Inter, sans-serif',
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '30px'
    },
    questionContainer: {
      width: '100%',
      maxWidth: '800px',
      margin: '10px 0',
      padding: '20px',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
    //   background: '#f9f9f9'
    },
    question: {
      color: 'var(--Gray-900, #101828)',
      fontFamily: 'Inter, sans-serif',
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '28px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      cursor: 'pointer'
    },
    answer: {
      color: 'var(--Gray-500, #667085)',
      fontFamily: 'Inter, sans-serif',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '24px',
      marginTop: '10px'
    },

    list: {
      marginTop: '10px',
      paddingLeft: '20px',
    },
    listItem: {
      marginBottom: '5px',
    },
    icon: {
      width: '24px',
      height: '24px'
    }
  };

  const faqData = [
    {
      question: 'What is Iwayplus and what does it do?',
      answer:  (
        
        <ul style={styles.list}>
        Iwayplus helps people navigate complex indoor spaces with ease. We provide a comprehensive solution that includes:

          <li style={styles.listItem}>Indoor Mapping: We create high-resolution, customized digital maps of your building.</li>
          <li style={styles.listItem}>Wayfinding: Our user-friendly app guides users to their destination with turn-by-turn navigation.</li>
          <li style={styles.listItem}>Location-Based Services: Find relevant points of interest, access information, and even book amenities within the building (if integrated).</li>

        </ul>
      ),
    },
    {
      question: 'How does Iwayplus work?',
      answer:  (
        
        <ul style={styles.list}>
             Our system relies on a combination of technologies:

          <li style={styles.listItem}>BLE Beacons: These small, low-power devices transmit signals that our app uses to pinpoint your location within the building.</li>
          <li style={styles.listItem}>Custom Mapping Tool: We create detailed digital maps that integrate seamlessly with our navigation app.
</li>
          <li style={styles.listItem}>Navigation App: Our user-friendly app provides real-time directions, point-of-interest information, and accessibility features.
</li>

        </ul>
      ),
    },
    // Add more questions and answers here

    {
        question: 'Is Iwayplus safe?',
        answer: 'Absolutely! BLE beacons operate on a low-power frequency and do not interfere with medical equipment or other electronic devices. Additionally, we prioritize user privacy and security.'
      },
      {
        question: 'What are the benefits of using Iwayplus?',
        answer:  (
        
          <ul style={styles.list}>
           Iwayplus offers a range of benefits for both users and businesses:

  
            <li style={styles.listItem}>Improved User Experience: Easy navigation reduces stress and frustration, especially for first-time visitors.
</li>
            <li style={styles.listItem}>Increased Efficiency: Users can find their destinations and access information quickly.

  </li>
            <li style={styles.listItem}>Enhanced Accessibility: Features like text-to-speech navigation help users with disabilities navigate independently.
  </li>
  <li style={styles.listItem}>Data-Driven Insights: Businesses can gain valuable insights into user behavior within their space.

  </li>
          </ul>
        ),
      },
      {
        question: 'Can Iwayplus be customized for my Venue?',
        answer: 'Absolutely! Our solutions are designed to be adaptable to various building types and user needs. We work closely with you to create a customized indoor navigation system that meets your specific requirements.'


      },
      
      {
        question: 'How do I get started with Iwayplus?',
        answer: 'Contact us today for a free consultation! Well discuss your needs and provide a tailored proposal outlining the implementation process.'

      },

      {
        question: 'What kind of buildings can benefit from Iwayplus?',
        answer:  (
        
          <ul style={styles.list}>
              Iwayplus can be used in various indoor spaces, including:

           
  
            <li style={styles.listItem}>Hospitals & Healthcare Facilities

</li>
            <li style={styles.listItem}>Airports & Transportation Hubs


  </li>
            <li style={styles.listItem}>Shopping Malls & Retail Stores
  </li>
  <li style={styles.listItem}>Convention Centers & Event Venues

  </li>

  <li style={styles.listItem}>Educational Institutions & Corporate Offices

</li>
          </ul>
        ),

      },

      {
        question: ' Does the Iwayplus app require an internet connection?',
        answer: 'While an internet connection can enhance the experience (e.g., downloading updated maps), the core navigation functionality can operate offline after initial setup.'

      },

      {
        question: 'What if I have more questions?',
        answer: 'Visit our website or contact us directly. Our team is happy to answer any questions you may have about Iwayplus and its potential benefits for your indoor space.'

      },

      {
        question: 'How much does Iwayplus cost?',
        answer: 'The cost of an Iwayplus solution depends on several factors, including the size and complexity of your building, desired features, and implementation scope. We offer flexible pricing models to meet your budget.'

      },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Frequently asked questions</h1>
      {/* <p style={styles.subheading}>Everything you need to know about the product and billing.</p> */}

      {faqData.map((item, index) => (
        <div key={index} style={styles.questionContainer}>
          <div style={styles.question} onClick={() => toggleAnswer(index)}>
            {item.question}
            {activeIndex === index ? (
              <svg style={styles.icon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#E63F31" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg style={styles.icon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#E63F31" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
          {activeIndex === index && <p style={styles.answer}>{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default Faq;
