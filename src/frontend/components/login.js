import React from 'react'
import { Link } from 'react-router'
import SignUp from './signUp'


export default class Login extends React.Component{


   render() {
      return (
        <div>
            <h2>Login Admin</h2>   
            <form>
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" isRequired/>
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" isRequired/>
                </div>
                  <button type="submit"  className="btn btn-success">Submit</button>
                  <br />
                  <Link to='signUp'><button type="submit" className="btn btn-info">Create new account</button></Link>
                
              </form>


         </div>
      )
   }
}

