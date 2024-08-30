import React, { useEffect, useState } from "react";
import "./Data.css"; // Import the CSS file

const Data = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch("https://dev.iwayplus.in/webapi/contacts");
        if (!response.ok) {
          throw new Error("Failed to fetch contacts");
        }
        const data = await response.json();
        setContacts(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  if (loading) {
    return <div className="loading">Loading contacts...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="contacts-container">
      <h2>Contacts</h2>
      <ul className="contacts-list">
        {contacts.map((contact) => (
          <li key={contact.id} className="contact-item">
            <div className="contact-header">
              <h3 className="contact-name">{contact.name}</h3>
              <span className="contact-email">{contact.email}</span>
            </div>
            <p className="contact-phone">📞 {contact.phone}</p>
            <p className="contact-message">💬 {contact.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Data;
