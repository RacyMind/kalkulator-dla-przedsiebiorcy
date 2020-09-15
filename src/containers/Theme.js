import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

const mainTheme = createMuiTheme({
    palette: {
        primary: {
            contrastText: '#ffffff',
            dark: '#980000',
            main: '#d12526',
            light: '#ff5f50',
        },
        secondary: {
            contrastText: '#000000',
            dark: '#ba000d',
            main: '#f44336',
            light: '#ff7961',
        },
        text: {
            secondary: '#777777',
        },
    },
    typography: {
        body1: {
            fontSize: '0.9rem',
        },
    },
})

const theme4 = createMuiTheme({
    palette: {
        primary: {
            contrastText: '#ffffff',
            dark: '#b20100',
            main: '#ed4913',
            light: '#ff7c43',
        },
        secondary: {
            contrastText: '#000000',
            dark: '#ba000d',
            main: '#f44336',
            light: '#ff7961',
        },
        text: {
            secondary: '#777777',
        },
    },
    typography: {
        body1: {
            fontSize: '0.9rem',
        },
    },
})
const theme5 = createMuiTheme({
    palette: {
        primary: {
            contrastText: '#ffffff',
            dark: '#b43e00',
            main: '#ed6d13',
            light: '#ff9d47',
        },
        secondary: {
            contrastText: '#000000',
            dark: '#ba000d',
            main: '#f44336',
            light: '#ff7961',
        },
        text: {
            secondary: '#777777',
        },
    },
    typography: {
        body1: {
            fontSize: '0.9rem',
        },
    },
})
const theme6 = createMuiTheme({
    palette: {
        primary: {
            contrastText: '#ffffff',
            dark: '#b56300',
            main: '#ed9113',
            light: '#ffc24c',
        },
        secondary: {
            contrastText: '#000000',
            dark: '#ba000d',
            main: '#f44336',
            light: '#ff7961',
        },
        text: {
            secondary: '#777777',
        },
    },
    typography: {
        body1: {
            fontSize: '0.9rem',
        },
    },
})
export default function Theme(props) {
    let theme
    switch (props.customTheme) {
        case 'custom4':
            theme = theme4
            break
        case 'custom5':
            theme = theme5
            break
        case 'custom6':
            theme = theme6
            break
        default:
            theme = mainTheme
            break
    }
    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}
