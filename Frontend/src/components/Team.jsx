import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Team = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch the employee data from your CMS
    axios.get('https://your-cms-api-endpoint/employees')
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the employee data!", error);
      });
  }, []);

  return (
    <div style={{
      display: 'flex',
      padding: '96px 0px',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%'
    }}>
      <h1 style={{
        fontSize: '2rem',
        textAlign: 'center'
      }}>Meet our team</h1>
      <p style={{
        color: 'var(--Gray-600, #475467)',
        textAlign: 'center',
        fontFamily: '"Plus Jakarta Sans"',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '30px',
        maxWidth: '800px',
        padding: '0 20px'
      }}>
        Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.
      </p>
      <div style={{
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <button style={{
          display: 'flex',
          padding: '12px 20px',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          borderRadius: '8px',
          border: '1px solid var(--Gray-300, #D0D5DD)',
          background: 'var(--White, #FFF)',
          boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
          flex: '1 1 auto',
          maxWidth: '200px'
        }}>
          About Us
        </button>
        <button style={{
          display: 'flex',
          padding: '12px 20px',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          borderRadius: '8px',
          border: '1px solid #F3544F',
          background: '#F3544F',
          boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
          color: '#FFF',
          flex: '1 1 auto',
          maxWidth: '200px'
        }}>
          Open Positions
        </button>
      </div>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '32px',
        marginTop: '64px'
      }}>
        {employees.map((employee, index) => (
          <div key={index} style={{
            display: 'flex',
            width: '280px',
            height: '369px',
            padding: '24px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            flexShrink: 0,
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            backgroundColor: '#FFF'
          }}>
            <div style={{
              display: 'flex',
              width: '256px',
              height: '332px',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20px',
              flexShrink: 0
            }}>
              <img src={employee.photo} alt={employee.name} style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%'
              }} />
              <h3 style={{
                fontSize: '1.25rem',
                margin: '0'
              }}>{employee.name}</h3>
              <p style={{
                margin: '0',
                fontSize: '1rem',
                color: '#F3544F',
              }}>{employee.designation}</p>
              <p style={{
                textAlign: 'center',
                fontSize: '0.875rem',
                color: 'var(--Gray-600, #475467)',
                padding: '0 10px'
              }}>{employee.description}</p>
              <div style={{
                display: 'flex',
                gap: '10px'
              }}>
                <a href={employee.socialMedia?.linkedIn} target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.2879 19.8705L8.66337 13.279L2.87405 19.8705H0.424805L7.57674 11.7298L0.424805 1.5372H6.71309L11.0717 7.74972L16.5327 1.5372H18.982L12.1619 9.30093L19.5762 19.8705H13.2879ZM16.0154 18.0122H14.3665L3.93176 3.39553H5.58092L9.7601 9.24817L10.4828 10.2638L16.0154 18.0122Z" fill="#98A2B3" />
                  </svg>
                </a>
                <a href={employee.socialMedia?.twitter} target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path d="M18.5195 0.703857H1.47656C0.660156 0.703857 0 1.34839 0 2.14526V19.2585C0 20.0554 0.660156 20.7039 1.47656 20.7039H18.5195C19.3359 20.7039 20 20.0554 20 19.2625V2.14526C20 1.34839 19.3359 0.703857 18.5195 0.703857ZM5.93359 17.7468H2.96484V8.19995H5.93359V17.7468ZM4.44922 6.89917C3.49609 6.89917 2.72656 6.12964 2.72656 5.18042C2.72656 4.2312 3.49609 3.46167 4.44922 3.46167C5.39844 3.46167 6.16797 4.2312 6.16797 5.18042C6.16797 6.12573 5.39844 6.89917 4.44922 6.89917ZM17.043 17.7468H14.0781V13.1062C14.0781 12.0007 14.0586 10.575 12.5352 10.575C10.9922 10.575 10.7578 11.782 10.7578 13.0281V17.7468H7.79688V8.19995H10.6406V9.50464H10.6797C11.0742 8.75464 12.043 7.96167 13.4844 7.96167C16.4883 7.96167 17.043 9.93823 17.043 12.5085V17.7468Z" fill="#98A2B3" />
                  </svg>
                </a>
                <a href={employee.socialMedia?.facebook} target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10 0.703857C4.47939 0.703857 0 5.18325 0 10.7039C0 16.2245 4.47939 20.7039 10 20.7039C15.5098 20.7039 20 16.2245 20 10.7039C20 5.18325 15.5098 0.703857 10 0.703857ZM16.6052 5.3134C17.7983 6.76676 18.5141 8.62142 18.5358 10.6279C18.2538 10.5737 15.4338 9.99886 12.5922 10.3568C12.5271 10.2158 12.4729 10.0639 12.4078 9.91211C12.2343 9.49998 12.0391 9.07698 11.8438 8.67567C14.9891 7.39586 16.4208 5.55201 16.6052 5.3134ZM10 2.17891C12.1692 2.17891 14.154 2.99236 15.6616 4.32642C15.5097 4.54334 14.2191 6.26785 11.1822 7.40667C9.78306 4.83618 8.23213 2.73206 7.9935 2.40668C8.63338 2.25483 9.30587 2.17891 10 2.17891ZM6.36662 2.98151C6.59437 3.2852 8.11281 5.40017 9.53363 7.91642C5.5423 8.97936 2.01736 8.95767 1.63774 8.95767C2.19089 6.31123 3.98047 4.10949 6.36662 2.98151ZM1.45336 10.7147C1.45336 10.6279 1.45336 10.5412 1.45336 10.4544C1.82213 10.4652 5.96529 10.5195 10.2278 9.23967C10.4773 9.71686 10.705 10.2049 10.9219 10.693C10.8134 10.7255 10.6941 10.7581 10.5857 10.7906C6.18221 12.2114 3.83948 16.0943 3.64425 16.4197C2.2885 14.9121 1.45336 12.9056 1.45336 10.7147ZM10 19.2505C8.026 19.2505 6.20391 18.578 4.76139 17.45C4.91323 17.1355 6.64856 13.795 11.4642 12.1139C11.4859 12.103 11.4968 12.103 11.5184 12.0922C12.7223 15.2049 13.2104 17.8188 13.3406 18.5672C12.3102 19.0119 11.1822 19.2505 10 19.2505ZM14.7614 17.7863C14.6746 17.2657 14.2191 14.7711 13.1019 11.7017C15.7809 11.2787 18.1236 11.9729 18.4165 12.0705C18.0478 14.4457 16.6811 16.4956 14.7614 17.7863Z" fill="#98A2B3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>
        {`
          @media (max-width: 768px) {
            h1 {
              font-size: 1.5rem;
            }
            p {
              font-size: 18px;
              line-height: 28px;
            }
            button {
              padding: 10px 15px;
              font-size: 16px;
            }
            .employee-card {
              width: 100%;
              max-width: 280px;
              margin: 16px 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Team;
