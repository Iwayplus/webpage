import React, { useState } from 'react';
import axios from 'axios';
import './Work.css';

const Work = () => {
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('heading', heading);
    formData.append('description', description);
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:5000/api/works', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      setSubmitted(true);
      setIsEditing(false);
    } catch (error) {
      console.error('There was an error submitting the work!', error);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    setHeading('');
    setDescription('');
    setImage(null);
    setSubmitted(false);
  };

  return (
    <div className="work-container">
      {!submitted || isEditing ? (
        <form onSubmit={handleSubmit} className="work-form">
          <div>
            <label>
              Heading:
              <input
                type="text"
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Description:
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Image:
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="work-post">
          <h1>{heading}</h1>
          <img src={URL.createObjectURL(image)} alt={heading} />
          <p>{description}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete} className="delete">Delete</button>
        </div>
      )}
    </div>
  );
};

export default Work;
