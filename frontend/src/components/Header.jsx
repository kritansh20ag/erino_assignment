
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, Box, IconButton, Switch } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import Logo from '../assets/Final-logo.svg';

const Header = ({ isDarkMode, toggleTheme }) => {
    return (
        <AppBar position="static" elevation={2} sx={{ backgroundColor: isDarkMode ? '#121212' : 'white' }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                {/* Logo */}
                <Box component="img" src={Logo} alt="Logo" sx={{ height: 40 }} />

                {/* Title */}
                <Typography
                    variant="h4"
                    component="div"
                    sx={{
                        flexGrow: 1,
                        textAlign: 'center',
                        color: isDarkMode ? '#ffffff' : '#1976d2',
                        fontWeight: 'bold',
                    }}
                >
                    Contact Management
                </Typography>

                {/* Theme Toggle */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton color="inherit">{isDarkMode ? <Brightness2Icon /> : <WbSunnyIcon />}</IconButton>
                    <Switch checked={isDarkMode} onChange={toggleTheme} />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

// **Prop Validation**
Header.propTypes = {
    isDarkMode: PropTypes.bool.isRequired, // Must be a boolean
    toggleTheme: PropTypes.func.isRequired, // Must be a function
};

export default Header;
