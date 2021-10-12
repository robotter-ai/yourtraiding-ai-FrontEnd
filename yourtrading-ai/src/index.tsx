import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import Amplify from 'aws-amplify';
import App from './App';
import reportWebVitals from './reportWebVitals';
import awsExports from './aws-exports';
import Setup from './Setup';

Amplify.configure(awsExports);

ReactDOM.render(
    <React.StrictMode>
        <Setup>
            <App />
        </Setup>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
