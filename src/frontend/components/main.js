import React from 'react'
import { Link } from 'react-router'

class Main extends React.Component {


   render() {
      return (
         <div className='container'>
         
         <Link to='login'>Login</Link>
         			<h1>HomePage</h1>
	         	<blockquote>
				  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
				  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
				  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
				  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
				  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
				  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
				  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
				  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
				  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
				</blockquote>


         </div>
      )
   }
}

export default Main;