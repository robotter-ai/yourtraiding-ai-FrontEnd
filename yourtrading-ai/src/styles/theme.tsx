import { createTheme, responsiveFontSizes, Theme, ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#00ffd0',
        },
        secondary: {
            main: '#db00ff',
        },
        error: {
            main: '#e50037',
        },
        background: {
            default: '#303030',
            paper: '#424242',
        },
    },
    typography: {
        fontFamily: 'Lexend',
    },
};

export const createGlobalTheme = (): Theme =>
    responsiveFontSizes(
        createTheme({
            ...themeOptions,
        }),
    );

export const darkTheme = createGlobalTheme();
