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
import SVG from './SVG';
import { Checkbox, Fab } from '@mui/material';

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

    const coins = [
        {
            name: 'BTC',
            value: 123,
            checked: ['min', 'max', 'mean', 'count', 'max', 'mean', 'count'],
        },
        {
            name: 'ETH',
            value: 123,
            checked: ['min', 'max'],
        },
        {
            name: 'LTC',
            value: 123,
            checked: ['min'],
        },
        {
            name: 'XRP',
            value: 123,
            checked: ['min'],
        },
        {
            name: 'USDT',
            value: 123,
            checked: ['min'],
        },
    ];
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
                    {coins.map(({ name, value, checked }, index) => (
                        <ListItem button key={name}>
                            <Checkbox inputProps={{ 'aria-label': `${name} checkbox` }} />
                            <ListItemIcon>
                                <SVG src="/assets/logo.svg" />
                            </ListItemIcon>
                            <Box
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: theme.spacing(0, 2),
                                    width: '100%',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Typography>{name}</Typography>
                                <Typography align="right">{value}</Typography>
                                <Box
                                    style={{
                                        gridColumnEnd: 'end',
                                        gridColumnStart: 1,
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: theme.spacing(0, 2),
                                    }}
                                >
                                    {checked.map((c) => (
                                        <Typography variant="caption">{c}</Typography>
                                    ))}
                                </Box>
                            </Box>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Main open={true}>
                <Fab
                    color="primary"
                    aria-label="download"
                    style={{ position: 'fixed', right: theme.spacing(3), bottom: theme.spacing(3) }}
                >
                    <SVG src="/assets/cloud_download.svg" />
                </Fab>
            </Main>
        </Box>
    );
}

export default React.memo(PersistentDrawerLeft);
