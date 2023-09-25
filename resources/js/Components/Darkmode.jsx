import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Switch from "@mui/material/Switch";

function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    // Toggle the dark mode state
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    // Create a Material-UI theme with dark mode
    const theme = createTheme({
        palette: {
            mode: darkMode ? "dark" : "light",
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Dark Mode Example
                    </Typography>
                    <IconButton color="inherit" onClick={toggleDarkMode}>
                        {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Container>
                <Typography variant="h4" component="div" sx={{ my: 4 }}>
                    Welcome to Dark Mode Example
                </Typography>
                <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam nec purus sed neque bibendum convallis.
                </Typography>
                {/* Add more content here */}
            </Container>
        </ThemeProvider>
    );
}

export default DarkModeToggle;
