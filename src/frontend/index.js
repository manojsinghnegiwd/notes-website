import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import Main from './components/main.js'
import Login from './components/login.js'
import App from './components/App.js'



class Notes extends React.Component{
	render() {
		return(
			<div>

			<Router history = {browserHistory}>
		      <Route path = "/" component = {App} >
		         <IndexRoute component = {Main} />
		         <Route path = "main" component = {Main} />
		         <Route path = "login" component = {Login} />
		         
		      </Route>
		   </Router>
			
			</div>
			)
	}
}

ReactDOM.render(<Notes />, document.getElementById('app'))