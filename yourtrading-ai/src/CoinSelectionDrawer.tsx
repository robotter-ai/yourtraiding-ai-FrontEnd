import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SVG from './SVG';

const drawerWidth = 367;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 2),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
    gap: theme.spacing(2),
}));

function PersistentDrawerLeft() {
    const theme = useTheme();

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={true}
            >
                <DrawerHeader>
                    <SVG src="/assets/logo.svg" />
                    <Typography variant="h5" component="h1">
                        youtrading.ai
                    </Typography>
                </DrawerHeader>
                <Divider />

                <List>
                    {['BTC', 'ETH', 'LTC', 'XRP', 'USDT'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                <SVG src="/assets/logo.svg" />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Main open={true}></Main>
        </Box>
    );
}

export default React.memo(PersistentDrawerLeft);
