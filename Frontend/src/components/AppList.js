import React from 'react';
import { Link } from 'react-router-dom';

const apps = [ 
  "speja",
  "accessibleashoka",
  "rgcinavgation",
  "aiimsjammunavigation",
  "empower",
  "purplefest",
  "rninavigation"
];

const AppList = () => {
  return (
    <div style={{marginTop: '5%'}}>
        <h3>Apps availabe for filling UAT Form</h3>
    
    <div style={{
        
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '20px',
      padding: '40px',
      background: 'linear-gradient(to right, #f8fafc, #edf2f7)',
      
      fontFamily: 'Segoe UI, sans-serif'
    }}>
        
      {apps.map((app, index) => (
        <Link
          key={index}
          to={`/uat/${app}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            background: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '16px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
            backdropFilter: 'blur(8px)',
            color: '#2b6cb0',
            padding: '30px 20px',
            fontWeight: '600',
            fontSize: '18px',
            textTransform: 'capitalize',
            transition: 'transform 0.25s ease, box-shadow 0.25s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.12)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
          }}
        >
          {app}
        </Link>
      ))}
    </div>
    </div>
  );
};

export default AppList;
