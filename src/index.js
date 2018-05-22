import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import './styles/main.css'
import App from './App';
import { Provider } from 'react-redux';
import store from './reducer/store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<BrowserRouter>
<Provider store={store}>
<App />
</Provider>
</BrowserRouter>,
 document.getElementById('root'));
registerServiceWorker();
