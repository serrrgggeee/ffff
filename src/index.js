import React from 'react';
import ReactDOM , { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import rootReducer from './rootReducer';

const store = createStore(
	rootReducer, 
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension(): f => f
	)
);

render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
