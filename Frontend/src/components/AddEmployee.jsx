import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import './Add.css';

const AddEmployee = ({ onAdd }) => {
    const [employee, setEmployee] = useState({
        name: '',
        position: '',
        department: '',
        image: null, // For the image file
    });

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
        try {
            // Prepare form data for the image upload
            const formData = new FormData();
            formData.append('name', employee.name);
            formData.append('position', employee.position);
            formData.append('department', employee.department);
            if (employee.image) {
                formData.append('image', employee.image);
            }

            // Define the base URL depending on the environment
            const baseUrl = process.env.NODE_ENV === "development"
                ? process.env.REACT_APP_LOCAL_URL
                : process.env.REACT_APP_REMOTE_URL;

            const apiClient = axios.create({
                baseURL: baseUrl, 
            });

            // Post the form data to the server
            await apiClient.post('/webapi/employee', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Reset form fields
            setEmployee({
                name: '',
                position: '',
                department: '',
                image: null,
            });
            onAdd(); // Notify parent component that an employee was added
        } catch (error) {
            console.error('Error adding employee:', error);
        }
    };

    return (
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
            <button type="submit">Add Employee</button>
        </form>
    );
};

export default AddEmployee;
