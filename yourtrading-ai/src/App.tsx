import React from 'react';
import Amplify from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';
import { styled } from '@mui/styles';
import { Paper } from '@mui/material';

Amplify.configure(awsExports);

const Background = styled(Paper)(() => ({
    width: '100vw',
    height: '100vh',
}));

function App() {
    return <Background style={{ borderRadius: 0, backgroundColor: '#303030' }}></Background>;
}

export default withAuthenticator(App);
