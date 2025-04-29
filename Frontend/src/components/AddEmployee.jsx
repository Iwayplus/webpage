import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import './Add.css';

const baseUrl = process.env.NODE_ENV === "development" ? process.env.REACT_APP_LOCAL_URL : process.env.REACT_APP_REMOTE_URL;

const apiClient = axios.create({
    baseURL: baseUrl 
});

const AddEmployee = ({ onAdd }) => {
    const [employee, setEmployee] = useState({
        name: '',
        position: '',
        department: '',
        image: null, 
    });

    const [error, setError] = useState(''); // State to hold error message
    const [loading, setLoading] = useState(false); // State to indicate loading

    const handleChange = (e) => {
        if (e.target.name === 'image') {
            // Handle file input
            setEmployee({
                ...employee,
                image: e.target.files[0], // Store the selected image file
            });
        } else {
            setEmployee({
                ...employee,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Reset error state
        setLoading(true); // Set loading state to true

        try {
            // Prepare form data for the image upload
            const formData = new FormData();
            formData.append('name', employee.name);
            formData.append('position', employee.position);
            formData.append('department', employee.department);
            if (employee.image) {
                formData.append('image', employee.image);
            }

            const response = await apiClient.post('/webapi/employee', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Reset form fields after successful submission
            setEmployee({
                name: '',
                position: '',
                department: '',
                image: null,
            });

            if (typeof onAdd === 'function') {
                onAdd(); // Notify parent component that an employee was added
            }

            setLoading(false); // Reset loading state
        } catch (error) {
            setLoading(false); // Reset loading state
            // Log and display the error message
            console.error('Error adding employee:', error);
            setError('Failed to add employee. Please try again later.');
        }
    };

    return (
        <div className="section-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={employee.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                />
                <input
                    type="text"
                    name="position"
                    value={employee.position}
                    onChange={handleChange}
                    placeholder="Position"
                    required
                />
                <input
                    type="text"
                    name="department"
                    value={employee.department}
                    onChange={handleChange}
                    placeholder="Department"
                    required
                />
                <input
                    type="file"
                    name="image"
                    onChange={handleChange}
                    accept="image/*"
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Adding...' : 'Add Employee'}
                </button>
            </form>
            {error && <div className="error-message">{error}</div>}
        </div>
    );
};

export default AddEmployee;
