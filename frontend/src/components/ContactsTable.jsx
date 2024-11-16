
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Button,
    TableContainer,
    Paper,
    Typography,
    Box,
} from '@mui/material';

const ContactsTable = ({ contacts, onEdit, onDelete }) => {
    const theme = useTheme(); // Access the current theme

    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', color: theme.palette.text.primary }}>
                Contacts List
            </Typography>
            <TableContainer
                component={Paper}
                sx={{
                    maxWidth: 900,
                    mx: 'auto',
                    backgroundColor: theme.palette.background.paper,
                    boxShadow: theme.shadows[3],
                }}
            >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ color: theme.palette.text.primary }}>First Name</TableCell>
                            <TableCell sx={{ color: theme.palette.text.primary }}>Last Name</TableCell>
                            <TableCell sx={{ color: theme.palette.text.primary }}>Email</TableCell>
                            <TableCell sx={{ color: theme.palette.text.primary }}>Phone Number</TableCell>
                            <TableCell sx={{ color: theme.palette.text.primary }}>Company</TableCell>
                            <TableCell sx={{ color: theme.palette.text.primary }}>Job Title</TableCell>
                            <TableCell sx={{ color: theme.palette.text.primary }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {contacts.map((contact) => (
                            <TableRow
                                key={contact._id}
                                sx={{
                                    '&:nth-of-type(odd)': { backgroundColor: theme.palette.action.hover },
                                    '&:hover': { backgroundColor: theme.palette.action.selected },
                                }}
                            >
                                <TableCell sx={{ color: theme.palette.text.secondary }}>{contact.firstName}</TableCell>
                                <TableCell sx={{ color: theme.palette.text.secondary }}>{contact.lastName}</TableCell>
                                <TableCell sx={{ color: theme.palette.text.secondary }}>{contact.email}</TableCell>
                                <TableCell sx={{ color: theme.palette.text.secondary }}>{contact.phoneNumber}</TableCell>
                                <TableCell sx={{ color: theme.palette.text.secondary }}>{contact.company}</TableCell>
                                <TableCell sx={{ color: theme.palette.text.secondary }}>{contact.jobTitle}</TableCell>
                                <TableCell
                sx={{
                    display: 'flex', // Enable flexbox
                    flexDirection: 'row', // Arrange children in a row
                    gap: 2, // Space between buttons
                }}
            >
                <Button
                    onClick={() => onEdit(contact)}
                    variant="outlined"
                    size="small"
                >
                    Edit
                </Button>
                <Button
                    onClick={() => onDelete(contact._id)}
                    variant="outlined"
                    color="error"
                    size="small"
                >
                    Delete
                </Button>
            </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

// **Prop Validation**
ContactsTable.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            phoneNumber: PropTypes.string.isRequired,
            company: PropTypes.string,
            jobTitle: PropTypes.string,
        })
    ).isRequired,
    onEdit: PropTypes.func.isRequired, // Must be a function to handle editing a contact
    onDelete: PropTypes.func.isRequired, // Must be a function to handle deleting a contact
};

export default ContactsTable;
