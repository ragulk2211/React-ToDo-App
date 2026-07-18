import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL || "";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// serviceWorker.register();
