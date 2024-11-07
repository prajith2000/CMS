
import React, { useState } from 'react';

const ContactForm = ({ addContact }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [phoneError, setPhoneError] = useState('');

    const handlePhoneChange = (e) => {
        const value = e.target.value;

        
        if (/^\d{0,10}$/.test(value)) {
            setPhone(value);
            setPhoneError('');
        } else if (value.length > 10) {
            setPhoneError('Phone number must be exactly 10 digits.');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !phone || !email) return;
        
        
        if (phone.length !== 10) {
            setPhoneError('Phone number must be exactly 10 digits.');
            return;
        }

        addContact({ name, phone, email });
        setName('');
        setPhone('');
        setEmail('');
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <input
                type="text"
                placeholder="Name"
                className="contact-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Phone Number"
                className="contact-input"
                value={phone}
                onChange={handlePhoneChange}
                required
            />
            {phoneError && <p className="error-message">{phoneError}</p>}
            <input
                type="email"
                placeholder="Email"
                className="contact-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button type="submit" className="submit-button">Save Contact</button>
        </form>
    );
};

export default ContactForm;
