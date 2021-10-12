import React, { ReactElement, ReactNode } from 'react';
import { StylesOptions, StylesProvider } from '@mui/styles';
import { Theme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

const generateClassName: StylesOptions['generateClassName'] = (rule: { key: string }, sheet): string => {
    return `${sheet?.options.classNamePrefix ?? ''}-${rule.key}`;
};

export const ThemeProvider = ({ theme, children }: { theme: Theme; children: ReactNode }): ReactElement => {
    const isTesting = typeof jest !== 'undefined';
    return (
        <StylesProvider generateClassName={isTesting ? generateClassName : undefined}>
            <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
        </StylesProvider>
    );
};
