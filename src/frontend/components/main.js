import React from 'react'
import { Link } from 'react-router'
import SignUp from './signUp'

class Main extends React.Component {


   render() {
      return (
         <div className='container'>
	         <h4>
	         <Link to='login'>Login</Link> &ensp;<Link to='signUp'>SignUp</Link>
	         </h4>
         
         			<h1>ReactJs</h1>
	         	
				<p>    Internally, React uses several clever techniques to minimize the number of 
					   costly DOM operations required to update the UI. For many applications,
					   using React will lead Hi i am Puranto a fast user interface without doing much work to 
					   specifically optimize for performance. Nevertheless, there are several ways you 
					   can speed up your React application.
					   specifically optimize for performance. Nevertheless, there are several ways you 
					   can speed up your React application.
				  	<br />
				   	<br />
					   If you're benchmarking or experiencing performance problems 
					   in your React apps, make sure you're testing with the minified 
					   production build.

						By default, React includes many helpful warnings. 
						These warnings are very useful in development. However,
						they make React larger and
						slower so you should make sure to use the production 
						version when you deploy the app..
					<br /><br/>
						 Internally, React uses several clever techniques to minimize the number of 
					  costly DOM operations required to update the UI. For many applications,
					   using React will lead to a fast user interface without doing much work to 
					   specifically optimize for performance. Nevertheless, there are several ways you 
					   can speed up your React application.
				    <br />
				    <br />
					    If you're benchmarking or experiencing performance problems 
					    in your React apps, make sure you're testing with the minified 
					    production build.

						By default, React includes many helpful warnings. 
						These warnings are very useful in development. However,
						they make React larger and
						slower so you should make sure to use the production 
						version when you deploy the app..skdlakl
				</p>   
									


         </div>
      )
   }
}

export default Main;