import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import Main from './components/main'
import Login from './components/login'
import App from './components/App'
import SignUp from './components/signUp';



class Notes extends React.Component{
	render() {
		return(
			<div>

			<Router history = {browserHistory}>
		      <Route path = "/" component = {App} >
		         <IndexRoute component = {Main} />
		         <Route path = "main" component = {Main} />
		         <Route path = "login" component = {Login} />
		         <Route path ="signUp" component = {SignUp} />
		         
		      </Route>
		   </Router>
			
			</div>
			)
	}
}

ReactDOM.render(<Notes />, document.getElementById('app'))