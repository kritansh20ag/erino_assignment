import axios from 'axios';

const API_URL = '/api';

export const getContacts = async () => await axios.get(`${API_URL}/contacts`).then((res) => res.data);
export const addContact = async (contact) => await axios.post(`${API_URL}/contacts`, contact).then((res) => res.data);
export const updateContact = async (id, contact) => await axios.put(`${API_URL}/contacts/${id}`, contact).then((res) => res.data);
export const deleteContact = async (id) => await axios.delete(`${API_URL}/contacts/${id}`).then((res) => res.data);
