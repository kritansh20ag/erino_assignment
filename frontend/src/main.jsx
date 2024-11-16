import  { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Header from './components/Header';

export const Main = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const theme = createTheme({
        palette: {
            mode: isDarkMode ? 'dark' : 'light',
            primary: {
                main: '#1976d2',
            },
            secondary: {
                main: '#19857b',
            },
            background: {
                default: isDarkMode ? '#121212' : '#f4f6f8',
                paper: isDarkMode ? '#1d1d1d' : '#ffffff',
            },
        },
    });

    const toggleTheme = () => setIsDarkMode((prev) => !prev);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            <App />
        </ThemeProvider>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
