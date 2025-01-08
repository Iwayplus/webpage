import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './QuoteList.css';  // Import the CSS file

const QuoteList = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://dev.iwayplus.in/webapi/quotes')
      .then(response => {
        setQuotes(response.data);
        setLoading(false);
        
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="loading-message">Loading...</p>;
  }

  if (error) {
    return <p className="error-message">Error: {error}</p>;
  }

  return (
    <div className="quote-list-container">
      <h1>Quotes</h1>
      <ul>
        {quotes.map((quote) => (
          <li key={quote._id} className="quote-list-item">
            <h3>{quote.name}</h3>
            <p><span>Phone:</span> {quote.phone}</p>
            <p><span>Email:</span> {quote.email}</p>
            <p><span>Organization:</span> {quote.organization}</p>
            <p><span>Core Functionality:</span> {quote.coreFunctionality}</p>
            {quote.otherCoreFunctionality && (
              <p><span>Other Core Functionality:</span> {quote.otherCoreFunctionality}</p>
            )}
            <p><span>Timeline:</span> {quote.timeline}</p>
            {quote.otherTimeline && (
              <p><span>Other Timeline:</span> {quote.otherTimeline}</p>
            )}
            <p><span>Service:</span> {quote.service}</p>
            <p><span>Area:</span> {quote.area}</p>
            <p><span>Source:</span> {quote.source}</p>
            {quote.otherSource && (
              <p><span>Other Source:</span> {quote.otherSource}</p>
            )}
            {quote.additionalDetails && (
              <p><span>Additional Details:</span> {quote.additionalDetails}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuoteList;
