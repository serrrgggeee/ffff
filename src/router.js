import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  IndexRoute
} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom'


import Header from './components/header/Header';
import Auth from './components/auth/Auth';


const Routes = () => {
  return (
  	<Router>
    	<Route path="/" component={Auth} />
	</Router>
  );
};

export default Routes;