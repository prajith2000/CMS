import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import './App.css';

const App = () => {
    const [contacts, setContacts] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    
    useEffect(() => {
        const storedContacts = JSON.parse(localStorage.getItem('contacts'));
        if (storedContacts) setContacts(storedContacts);
    }, []);

   
    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const addContact = (contact) => {
        if (editIndex !== null) {
            
            const updatedContacts = [...contacts];
            updatedContacts[editIndex] = contact;
            setContacts(updatedContacts);
            setEditIndex(null); 
        } else {
            
            setContacts([...contacts, contact]);
        }
    };

    const editContact = (index, updatedContact) => {
        const updatedContacts = [...contacts];
        updatedContacts[index] = updatedContact;
        setContacts(updatedContacts);
    };

    const deleteContact = (index) => {
        const updatedContacts = contacts.filter((_, i) => i !== index);
        setContacts(updatedContacts);
    };

    return (
        <div className="app">
            <h1>Contact Management</h1>
            <ContactForm addContact={addContact} />
            <ContactList
                contacts={contacts}
                editContact={editContact}
                deleteContact={deleteContact}
            />
        </div>
    );
};

export default App;
