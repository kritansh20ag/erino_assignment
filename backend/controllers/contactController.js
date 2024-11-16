const Contact = require('../models/Contact');

// Get all contacts
const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving contacts' });
    }
};

// Create new contact
const createContact = async (req, res) => {
    const { firstName, lastName, email, phoneNumber, company, jobTitle } = req.body;
    try {
        const contact = new Contact({ firstName, lastName, email, phoneNumber, company, jobTitle });
        await contact.save();
        res.status(201).json(contact);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a contact
const updateContact = async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, phoneNumber, company, jobTitle } = req.body;

    try {
        const contact = await Contact.findByIdAndUpdate(id, { firstName, lastName, email, phoneNumber, company, jobTitle }, { new: true });
        if (!contact) return res.status(404).json({ message: 'Contact not found' });
        res.status(200).json(contact);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a contact
const deleteContact = async (req, res) => {
    const { id } = req.params;

    try {
        const contact = await Contact.findByIdAndDelete(id);
        if (!contact) return res.status(404).json({ message: 'Contact not found' });
        res.status(200).json({ message: 'Contact deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getContacts,
    createContact,
    updateContact,
    deleteContact,
};
