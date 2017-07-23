import React from 'react'
import { Link } from 'react-router'


export default class Login extends React.Component{


   render() {
      return (
         <div >
         <Link to='main'> Home</Link>
         <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" isRequired/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" isRequired/>
  </div>
 
 
  <button type="submit" className="btn btn-default">Submit</button>
</form>


         </div>
      )
   }
}

