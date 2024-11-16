import  { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button, Box, Card, CardContent, Typography, Grid } from '@mui/material';

const ContactForm = ({ onSubmit, contactToEdit }) => {
    const [contact, setContact] = useState(
        contactToEdit || { firstName: '', lastName: '', email: '', phoneNumber: '', company: '', jobTitle: '' }
    );

    const [errors, setErrors] = useState({ email: '', phoneNumber: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });

        // Validate fields on change
        if (name === 'email') {
            setErrors({
                ...errors,
                email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email format',
            });
        }
        if (name === 'phoneNumber') {
            setErrors({
                ...errors,
                phoneNumber: /^[0-9]{10}$/.test(value) ? '' : 'Phone number must be 10 digits',
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Final validation before submission
        if (!errors.email && !errors.phoneNumber) {
            onSubmit(contact);
            setContact({ firstName: '', lastName: '', email: '', phoneNumber: '', company: '', jobTitle: '' });
        }
    };

    const renderLabel = (label, isRequired) => (
        <>
            {label} {isRequired && <span style={{ color: 'red' }}>*</span>}
        </>
    );

    return (
        <Card
            sx={{
                maxWidth: 600,
                mx: 'auto',
                mt: 4,
                p: 2,
                zIndex: 10,
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                backgroundColor: (theme) => theme.palette.background.paper,
            }}
        >
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    {contactToEdit ? 'Edit Contact' : 'Add New Contact'}
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                label={renderLabel('First Name', true)}
                                name="firstName"
                                value={contact.firstName}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label={renderLabel('Last Name', true)}
                                name="lastName"
                                value={contact.lastName}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label={renderLabel('Email', true)}
                                name="email"
                                value={contact.email}
                                onChange={handleChange}
                                error={!!errors.email}
                                helperText={errors.email}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label={renderLabel('Phone Number', true)}
                                name="phoneNumber"
                                value={contact.phoneNumber}
                                onChange={handleChange}
                                error={!!errors.phoneNumber}
                                helperText={errors.phoneNumber}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label={renderLabel('Company', false)}
                                name="company"
                                value={contact.company}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label={renderLabel('Job Title', false)}
                                name="jobTitle"
                                value={contact.jobTitle}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                    <Box sx={{ textAlign: 'right', mt: 2 }}>
                        <Button variant="contained" color="primary" type="submit" disabled={!!errors.email || !!errors.phoneNumber}>
                            {contactToEdit ? 'Update Contact' : 'Add Contact'}
                        </Button>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    contactToEdit: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        email: PropTypes.string,
        phoneNumber: PropTypes.string,
        company: PropTypes.string,
        jobTitle: PropTypes.string,
    }),
};

ContactForm.defaultProps = {
    contactToEdit: null,
};

export default ContactForm;
