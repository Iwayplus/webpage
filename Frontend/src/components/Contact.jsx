import React, { useState } from 'react';
import axios from 'axios';
import contact from "../assets/images/032.png";
import confirm from "../assets/images/Confirm.gif";
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        company: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        phone: '',
        email: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const styles = {
        contactContainer: {
            display: 'flex',
            flexWrap:"wrap",
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            
            paddingLeft: '80px',
            paddingRight:'80px',
        },
        leftContainer: {
            flex: '1',
            padding: '20px',
            
        },
        rightContainer: {
            flex: '1',
            padding: '20px'
        },
        contactImage: {
            maxWidth: '100%',
            height: 'auto'
        },
        upperContainer: {
            marginBottom: '20px'
        },
        heading: {
            color: 'var(--Text_Blue, #213757)',
            fontFamily: '"Plus Jakarta Sans"',
            fontSize: '39.694px',
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: '50.279px', /* 126.667% */
            letterSpacing: '0.198px',
        },
        infoContainer: {
            display: 'flex',
            marginBottom: '20px',
            gap: '80px',
        },
        subheading: {
            display: 'flex',
            alignItems: 'center',
            fontSize: '18px',
            fontWeight: 'bold'
        },
        svgIcon: {
            marginRight: '10px'
        },
        textContainer: {
            
            marginBottom: '10px',
            color: 'rgba(33, 55, 87, 0.70)',
            fontFamily: '"Plus Jakarta Sans"',
            fontSize: '10px',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: '14.641px', /* 146.413% */
        },
        lowerContainer: {
            marginTop: '20px'
        },
        lowerHeading: {
            color: 'var(--Text_Blue, #213757)',
            fontFamily: '"Plus Jakarta Sans"',
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: '19.847px', /* 110.261% */
        },
        form: {
            display: 'flex',
            flexDirection: 'column'
        },
        formRow: {
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '10px'
        },
        input: {
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc'
        },
        textarea: {
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            height: '100px'
        },
        submitButton: {
            padding: '10px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#E63F31',
            color: 'white',
            cursor: 'pointer'
        },
        submitButtonHover: {
            padding: '10px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#cc372c',
            color: 'white',
            cursor: 'pointer'
        },
        errorText: {
            color: 'red',
            fontSize: '12px'
        },
        modal: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '463px',
            height: '240px',
            backgroundColor: '#FFF',
            borderRadius: '20px',
            zIndex: 1000,
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
        },
        modalOverlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999
        },
        modalImage: {
            width: '60px',
            height: '60px',
            // marginBottom: '20px'
        },
        modalHeading: {
            color: 'var(--Text_Blue, #213757)',
            fontFamily: '"Plus Jakarta Sans"',
            fontSize: '22px',
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: 'normal',
            // marginBottom: '20px'
        },
        modalButton: {
            display: 'flex',
            width: '132px',
            padding: '12px 20px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            borderRadius: '8px',
            backgroundColor: 'var(--Gubbins, #E63F31)',
            color: '#FFF',
            cursor: 'pointer',
            // boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)'
        },
        // Media queries for responsive design
        '@media (max-width: 768px)': {
            contactContainer: {
                flexDirection: 'column',
                paddingLeft: '20px',
                paddingRight: '20px',
            },
            infoContainer: {
                flexDirection: 'column',
                gap: '20px',
            },
        },
        '@media (max-width: 480px)': {
            heading: {
                fontSize: '28px',
                lineHeight: '35px',
            },
            lowerHeading: {
                fontSize: '16px',
                lineHeight: '20px',
            },
            input: {
                fontSize: '14px',
            },
            textarea: {
                fontSize: '14px',
            },
            submitButton: {
                fontSize: '14px',
            },
            submitButtonHover: {
                fontSize: '14px',
            },
        }
    };

    const validatePhone = (phone) => {
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone)) {
            return 'Invalid phone number. It should be 10 digits.';
        }
        return '';
    };

    const validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            return 'Invalid email address.';
        }
        return '';
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        let error = '';
        if (name === 'phone') {
            error = validatePhone(value);
        } else if (name === 'email') {
            error = validateEmail(value);
        }

        setErrors({
            ...errors,
            [name]: error,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (errors.phone || errors.email) {
            alert('Please fix the errors before submitting.');
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/contact', formData);
            // alert(response.data.message);
            setFormData({
                name: '',
                phone: '',
                email: '',
                company: '',
                message: ''
            });
            setIsModalOpen(true);
        } catch (error) {
            console.error('There was an error submitting the form:', error);
            alert('There was an error submitting the form. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div style={styles.contactContainer}>
            {isModalOpen && (
                <>
                    <div style={styles.modalOverlay} onClick={closeModal}></div>
                    <div style={styles.modal}>
                        <img src={confirm} alt="Success" style={styles.modalImage} />
                        <h2 style={styles.modalHeading}>Message Sent Successfully</h2>
                        <button onClick={closeModal} style={styles.modalButton}>Close</button>
                    </div>
                </>
            )}
            <div style={styles.leftContainer}>
                <img src={contact} alt="Contact" style={styles.contactImage} />
            </div>
            <div style={styles.rightContainer}>
                <div style={styles.upperContainer}>
                    <h1 style={styles.heading}>Get in touch with us & Let’s talk!</h1>
                    <div style={styles.infoContainer}>
                        <div>
                            <div style={styles.subheading}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="23"
                                    height="23"
                                    viewBox="0 0 23 23"
                                    fill="none"
                                    style={styles.svgIcon}
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M11.0293 20.0869C11.0293 20.0869 16.5293 14.3119 16.5293 9.08691C16.5293 6.04935 14.0669 3.58691 11.0293 3.58691C7.99173 3.58691 5.5293 6.04935 5.5293 9.08691C5.5293 14.3119 11.0293 20.0869 11.0293 20.0869Z"
                                        stroke="#E63F31"
                                        strokeWidth="1.32314"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M11.0293 10.0037C11.5355 10.0037 11.9459 9.59334 11.9459 9.08708C11.9459 8.58082 11.5355 8.17041 11.0293 8.17041C10.523 8.17041 10.1126 8.58082 10.1126 9.08708C10.1126 9.59334 10.523 10.003"
                                        fill="#E63F31"
                                        stroke="#E63F31"
                                        strokeWidth="2.32"
                                    />
                                </svg>
                                <span>Our Address</span>
                            </div>
                            <p style={styles.textContainer}>
                                iWayplus, 3A-2/B, R&I Park, IIT Delhi, <br></br>Hauz Khas, PIN - 110016
                            </p>
                        </div>
                        <div>
                        
                            <div style={styles.subheading}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="23"
                                    height="22"
                                    viewBox="0 0 23 22"
                                    fill="none"
                                    style={styles.svgIcon}
                                >
                                    <path
                                        d="M20.647 11.3056C20.647 16.2204 16.528 20.2402 11.4024 20.2402C6.27677 20.2402 2.15781 16.2204 2.15781 11.3056C2.15781 6.39085 6.27677 2.37104 11.4024 2.37104C16.528 2.37104 20.647 6.39085 20.647 11.3056Z"
                                        stroke="#E63F31"
                                        strokeWidth="1.32314"
                                    />
                                    <path
                                        d="M11.4024 5.19873V11.3054L15.0046 14.7949"
                                        stroke="#E63F31"
                                        strokeWidth="1.32314"
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <span>Office Hours</span>
                            </div>
                            <p style={styles.textContainer}>
                                Monday - Saturday <br />9:00AM - 6:00PM
                            </p>
                        </div>
                    </div>
                </div>
                <div style={styles.lowerContainer}>
                    <h2 style={styles.lowerHeading}>Our friendly team would love to hear from you.</h2>
                    <form style={styles.form} onSubmit={handleSubmit}>
                        <div style={styles.formRow}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name*"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                style={styles.input}
                            />
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone*"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                style={styles.input}
                            />
                            {errors.phone && <p style={styles.errorText}>{errors.phone}</p>}
                        </div>
                        <div style={styles.formRow}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email*"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={styles.input}
                            />
                            {errors.email && <p style={styles.errorText}>{errors.email}</p>}
                            <input
                                type="text"
                                name="company"
                                placeholder="Company"
                                value={formData.company}
                                onChange={handleChange}
                                style={styles.input}
                            />
                        </div>
                        <div style={styles.formRow}>
                            <textarea
                                name="message"
                                placeholder="Message*"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                style={styles.textarea}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            style={isSubmitting ? styles.submitButtonHover : styles.submitButton}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
