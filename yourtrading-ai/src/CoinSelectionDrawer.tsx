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
import {
    Card,
    CardContent,
    Checkbox,
    Fab,
    FormControl,
    FormControlLabel,
    FormGroup,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from '@mui/material';
import Chart from './Chart';
import ytAIlogo from './assets/logo.svg';
import cloudDownload from './assets/cloud_download.svg';

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
const sources = ['Yahoo', 'Google'];
const intervals = ['Hourly', 'Daily'];
const volume = [
    { id: 'min', value: 1 },
    { id: 'max', value: 1 },
    { id: 'avg', value: 1 },
    { id: 'count', value: 1 },
];

function PersistentDrawerLeft() {
    const theme = useTheme();

    const [source, setSource] = React.useState(sources[0]);
    const handleChangeSource = (event: SelectChangeEvent) => {
        setSource(event.target.value);
    };

    const [interval, setInterval] = React.useState(intervals[0]);
    const handleChangeInterval = (event: SelectChangeEvent) => {
        // eslint-disable-next-line @typescript-eslint/no-implied-eval
        setInterval(event.target.value);
    };

    const coins = [
        {
            id: 'ETH',
            name: 'Ethereum',
            logo: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880',
            value: '$3,895.33',
            checked: [
                { id: 'min', isChecked: true },
                { id: 'max', isChecked: false },
                { id: 'mean', isChecked: true },
                { id: 'count', isChecked: false },
            ],
        },
        {
            id: 'LTC',
            name: 'Litecoin',
            logo: 'https://assets.coingecko.com/coins/images/2/small/litecoin.png?1547033580',
            value: '$192.48',
            checked: [
                { id: 'min', isChecked: true },
                { id: 'max', isChecked: true },
            ],
        },
        {
            id: 'BNB',
            name: 'Binance Coin',
            logo: 'https://assets.coingecko.com/coins/images/825/small/binance-coin-logo.png?1547034615',
            value: '$477.19',
            checked: [{ id: 'min', isChecked: true }],
        },
        {
            id: 'ADA',
            name: 'Cardano',
            logo: 'https://assets.coingecko.com/coins/images/975/small/cardano.png?1547034860',
            value: '$2.24',
            checked: [{ id: 'min', isChecked: true }],
        },
        {
            id: 'LINK',
            name: 'Chainlink',
            logo: 'https://assets.coingecko.com/coins/images/877/small/chainlink-new-logo.png?1547034700',
            value: '$27.26',
            checked: [{ id: 'min', isChecked: true }],
        },
        {
            id: 'ETC',
            name: 'Ethereum Classic',
            logo: 'https://assets.coingecko.com/coins/images/453/small/ethereum-classic-logo.png?1547034169',
            value: '$55.54',
            checked: [{ id: 'min', isChecked: true }],
        },
        {
            id: 'BTC',
            name: 'Bitcoin',
            logo: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579',
            value: '$62,410.92',
            checked: [{ id: 'min', isChecked: true }],
        },
    ];
    const minWidthSX = { minWidth: 200 };
    const selectedCoinIndex = 0;
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
                    <SVG src={ytAIlogo} />
                    <Typography variant="h5" component="h1">
                        youtrading.ai
                    </Typography>
                </DrawerHeader>
                <Divider />

                <List>
                    {coins.map(({ id, logo, value, checked }, index) => (
                        <ListItem button key={id}>
                            <Checkbox inputProps={{ 'aria-label': `${id} checkbox` }} />
                            <ListItemIcon>
                                <img src={logo} />
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
                                <Typography>{id}</Typography>
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
                                    {checked
                                        .filter((c) => c.isChecked)
                                        .map((c) => (
                                            <Typography variant="caption" key={c.id}>
                                                {c.id}
                                            </Typography>
                                        ))}
                                </Box>
                            </Box>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Main
                open={true}
                style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
                <Box
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: theme.spacing(2),
                    }}
                >
                    <Box>
                        <Typography variant="h5" component="h2">
                            {coins[selectedCoinIndex].name}
                        </Typography>
                        <Typography variant="h3" component="h3">
                            {coins[selectedCoinIndex].value}
                        </Typography>
                    </Box>

                    <Card sx={minWidthSX}>
                        <CardContent>
                            <Typography color="text.secondary">Volume:</Typography>
                            {volume.map(({ id, value }) => (
                                <Box
                                    key={id}
                                    display="flex"
                                    style={{ justifyContent: 'space-between', gap: theme.spacing(2) }}
                                >
                                    <Typography variant="body2">{id}</Typography>
                                    <Typography variant="body2" align="right">
                                        {value}
                                    </Typography>
                                </Box>
                            ))}
                        </CardContent>
                    </Card>

                    <Box display="flex" style={{ flexDirection: 'column', gap: theme.spacing(2) }}>
                        <FormControl sx={minWidthSX}>
                            <InputLabel id="select-interval">Interval</InputLabel>
                            <Select
                                labelId="select-interval"
                                value={interval}
                                label="interval"
                                onChange={handleChangeInterval}
                            >
                                {intervals.map((i) => (
                                    <MenuItem value={i} key={i}>
                                        {i}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl sx={minWidthSX}>
                            <InputLabel id="select-source">Source</InputLabel>
                            <Select labelId="select-source" value={source} label="source" onChange={handleChangeSource}>
                                {sources.map((s) => (
                                    <MenuItem value={s} key={s}>
                                        {s}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                </Box>

                <Chart />

                <FormGroup style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: theme.spacing(2) }}>
                    {coins[selectedCoinIndex].checked.map(({ id, isChecked }) => (
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={isChecked}
                                    key={id}
                                    inputProps={{ 'aria-label': `${id} checkbox` }}
                                />
                            }
                            label={id}
                        />
                    ))}
                </FormGroup>
            </Main>
            <Fab
                color="primary"
                aria-label="download"
                style={{ position: 'fixed', right: theme.spacing(3), bottom: theme.spacing(3) }}
            >
                <SVG src={cloudDownload} />
            </Fab>
        </Box>
    );
}

export default React.memo(PersistentDrawerLeft);
