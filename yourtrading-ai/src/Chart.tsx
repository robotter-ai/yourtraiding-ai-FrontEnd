import React from 'react';
import { Label, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { useTheme } from '@mui/material/styles';

function createData(time: string, amount: number) {
    return {
        time,
        amount: amount + Math.round(amount * Math.random() * 0.5),
        amount2: amount + Math.round(amount * Math.random() * 0.8),
        amount3: amount + Math.round(amount * Math.random() * 1.1),
    };
}

function Chart({ value = 1 }: { value?: number }) {
    const theme = useTheme();

    const data = [
        createData('00:00', value * 0.8),
        createData('03:00', value * 0.9),
        createData('06:00', value * 0.7),
        createData('09:00', value * 1.2),
        createData('12:00', value * 0.8),
        createData('15:00', value * 1),
        createData('18:00', value * 1.1),
        createData('21:00', value * 0.9),
        createData('24:00', value * 1),
    ];

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
