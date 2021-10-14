import React from 'react';
import { Label, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { useTheme } from '@mui/material/styles';

function createData(time: string, amount: number) {
    return {
        time,
        amount,
        amount2: amount + Math.round(Math.random() * 1000),
        amount3: amount + Math.round(Math.random() * 2000),
    };
}

const data = [
    createData('00:00', 0),
    createData('03:00', 300),
    createData('06:00', 600),
    createData('09:00', 800),
    createData('12:00', 1500),
    createData('15:00', 2000),
    createData('18:00', 2400),
    createData('21:00', 2400),
    createData('24:00', 2500),
];

function Chart() {
    const theme = useTheme();

    return (
        <React.Fragment>
            <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{
                        top: 16,
                        right: 16,
                        bottom: 0,
                        left: 24,
                    }}
                >
                    <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
                    <YAxis stroke={theme.palette.text.secondary} />
                    <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
                    <Line type="monotone" dataKey="amount2" stroke={theme.palette.primary.light} dot={false} />
                    <Line type="monotone" dataKey="amount3" stroke={theme.palette.primary.dark} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
}

export default React.memo(Chart);
