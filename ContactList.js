import React, { useState } from 'react';
import './ContactList.css';

const ContactList = ({ contacts, editContact, deleteContact }) => {
    const [isEditing, setIsEditing] = useState(null);
    const [editName, setEditName] = useState('');
    const [editPhone, setEditPhone] = useState('');
    const [editEmail, setEditEmail] = useState('');

    const handleEditClick = (index, contact) => {
        setIsEditing(index);
        setEditName(contact.name);
        setEditPhone(contact.phone);
        setEditEmail(contact.email);
    };

    const handleSaveClick = (index) => {
        const updatedContact = { name: editName, phone: editPhone, email: editEmail };
        editContact(index, updatedContact);
        setIsEditing(null); 
        alert("Contact details have been saved");
    };

    return (
        <div className="contact-list">
            <h1>Contact List</h1>
            <div className="contact-container">
                {contacts.map((contact, index) => (
                    <div key={index} className="contact-item">
                        {isEditing === index ? (
                            <>
                                <input
                                    type="text"
                                    value={editName}
                                    onChange={(e) => setEditName(e.target.value)}
                                    className="edit-input"
                                />
                                <input
                                    type="text"
                                    value={editPhone}
                                    onChange={(e) => setEditPhone(e.target.value)}
                                    className="edit-input"
                                />
                                <input
                                    type="text"
                                    value={editEmail}
                                    onChange={(e) => setEditEmail(e.target.value)}
                                    className="edit-input"
                                />
                                <button
                                    className="save-button"
                                    onClick={() => handleSaveClick(index)}
                                >
                                    Save
                                </button>
                            </>
                        ) : (
                            <>
                                <h3>{contact.name}</h3>
                                <p>{contact.phone}</p>
                                <p>{contact.email}</p>
                                <button
                                    className="edit-button"
                                    onClick={() => handleEditClick(index, contact)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="delete-button"
                                    onClick={() => deleteContact(index)}
                                >
                                    Delete
                                </button>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactList;

        