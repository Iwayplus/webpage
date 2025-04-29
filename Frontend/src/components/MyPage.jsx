import React from 'react';
import './MyPage.css'; // External CSS file for styling and animations
import { motion } from 'framer-motion'; // For smooth animations

const MyPage = () => {
    return (
        <motion.div 
            className="my-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <header className="header-section">
                <motion.h1 
                    className="company-title"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    Welcome to IWAYPLUS
                </motion.h1>
                <motion.p 
                    className="subtitle"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    Your Comprehensive Indoor Navigation Solution
                </motion.p>
            </header>

            <motion.section 
                className="content-section"
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 60 }}
            >
                <h2>About Us</h2>
                <p>
                    Our company, IWAYPLUS, provides a comprehensive navigation system for multi-floor buildings i.e.,
                    Hospitals, Academic Campuses, Airports, Metro stations, Museums, Sports Arenas, IT parks, etc.
                </p>
                <p>
                    Our system provides an interactive wayfinding experience to your employees, visitors, and customers.
                    Our app-based solution is accessible via touchscreen kiosks and mobile devices, and it is easy to use
                    for people with varying levels of technical proficiency and sensory ability.
                </p>
            </motion.section>

            <motion.section 
                className="features-section"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <h2>Features</h2>
                <ul>
                    <li>Provide directions to specific locations within the building.</li>
                    <li>Display real-time information on the availability of resources.</li>
                    <li>Provide accessibility information for entrances, elevators, and restrooms.</li>
                    <li>Display building amenities like hours of operation and parking info.</li>
                    <li>Integrate with your existing technology infrastructure.</li>
                </ul>
            </motion.section>

            <motion.section 
                className="form-section"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
            >
                <h2>Contact Us</h2>
                <p>
                    We appreciate that you are reaching out to us. Through this form, we would like to know more about
                    your indoor navigation requirements such as target space, total area, type of services, and visitors.
                    Based on your inputs we can provide you with a detailed proposal that outlines the cost, timeline,
                    and any other relevant information for this project.
                </p>
                <p>
                    Additionally, if you have any queries or if you want to see the pilot projects we have completed, we
                    will be happy to demonstrate them.
                </p>
                <button className="contact-button">Get in Touch</button>
            </motion.section>

            <footer className="footer-section">
                <p>
                    Sincerely,<br />
                    <strong>Vikas Upadhyay</strong><br />
                    Founder, IWAYPLUS
                </p>
            </footer>
        </motion.div>
    );
};

export default MyPage;
