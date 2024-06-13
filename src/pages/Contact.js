import React from 'react';
import ContactPage from '../components/ContactPage';
import '../style/Contact.css'

const Contact = () => {
    return (
        <>
            <div className="App">
                <div className="contact-container">
                    <ContactPage />
                </div>
            </div>
        </>
    )
}

export default Contact;
