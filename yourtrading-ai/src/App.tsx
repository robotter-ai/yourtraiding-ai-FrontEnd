import React from 'react';
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';
import { styled } from '@mui/styles';
import { Paper } from '@mui/material';
import CoinSelectionDrawer from './CoinSelectionDrawer';

Amplify.configure(awsExports);

const Background = styled(Paper)(() => ({
    width: '100vw',
    height: '100vh',
}));

function App() {
    return (
        <Background style={{ borderRadius: 0, backgroundColor: '#303030' }}>
            <CoinSelectionDrawer />
        </Background>
    );
}

export default React.memo(App);
