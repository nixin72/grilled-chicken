import React, { Component } from 'react';
import './Login.css';
import DbContext from './../../../store/db-context'

class Login extends Component {

  static contextType = DbContext;

  componentDidMount(){
      console.log(this.context);
  }

  render() {
    return (
      <div className="Login">
        <h1>Sign in here!</h1>
        <div className="flex">
          <div>
            <label>Username: </label><br />
            <label>password: </label>
          </div>

          <div>
            <input type="text" /><br />
            <input type="password" />
          </div>  
        </div>

        <input type="submit" value="Log In" />
        
      </div>
    );
  }
}

export default Login;
