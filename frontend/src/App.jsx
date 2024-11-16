import  { useEffect, useState } from 'react';

import ContactForm from './components/ContactForm';
import ContactsTable from './components/ContactsTable';
import { getContacts, addContact, updateContact, deleteContact } from './api/api';

const App = () => {
    const [contacts, setContacts] = useState([]);
    const [editingContact, setEditingContact] = useState(null);

    useEffect(() => {
        loadContacts();
    }, []);

    const loadContacts = async () => {
        const data = await getContacts();
        setContacts(data);
    };

    const handleAddOrUpdate = async (contact) => {
        if (editingContact) {
            await updateContact(editingContact._id, contact);
        } else {
            await addContact(contact);
        }
        setEditingContact(null);
        loadContacts();
    };

    const handleDelete = async (id) => {
        await deleteContact(id);
        loadContacts();
    };

    return (
        <>
           
            <ContactForm onSubmit={handleAddOrUpdate} contactToEdit={editingContact} />
            <ContactsTable contacts={contacts} onEdit={setEditingContact} onDelete={handleDelete} />
        </>
    );
};

export default App;
