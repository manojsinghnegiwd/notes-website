import React from 'react'
import { Link } from 'react-router'

import Login from './login'
import Main from './main'
import SignUp from './signUp'

class App extends React.Component {


   render() {
      return (
         <div>
 
         <ul>
         	{/*
               <Link to='main'> Home</Link>
               <Link to='signUp'>SignUp</Link>
	         	<Link to='login'><button type="button" class="btn btn-primary">Primary</button></Link>
         	*/}
         </ul>
          {this.props.children}
         </div>
      )
   }
}

export default App;