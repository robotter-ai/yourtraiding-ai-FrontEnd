import React, { ReactNode } from 'react';
import { darkTheme } from './styles/theme';
import { ThemeProvider } from './styles/ThemeProvider';

export interface SetupProps {
    children: ReactNode;
}

function Setup({ children }: SetupProps): JSX.Element {
    return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
}

export default Setup;
