import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
    palette: {
        color4: {
            contrastText: '#ffffff',
            main: '#ed4913',
        },
        primary: {
            contrastText: '#ffffff',
            dark: '#980000',
            main: '#d12526',
            light: '#ff5f50'
        },
        secondary: {
            contrastText: '#000000',
            dark: '#ba000d',
            main: '#f44336',
            light: '#ff7961'
        },
        text: {
            secondary: '#777777',
        }
    },
    typography: {
        body1: {
            fontSize: '0.9rem'
        }
    }
});
export default function Theme(props) {
    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    );
}