import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style/materialize.css';

import Header from './components/header/Header';
import Routes from './router';

function App() {

	return (
		<div className="App">
			<Header />
			<Routes />
		</div>
	);
}

export default App;
