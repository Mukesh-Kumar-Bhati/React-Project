import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppComponent from './first-component';
import Practice from './Practice';
import Layout from './Layout';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Layout />, document.getElementById('root'));


registerServiceWorker();
