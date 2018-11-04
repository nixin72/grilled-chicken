import React, { Component } from 'react';
import './Login.css';
import DbContext from './../../../store/db-context';

class Login extends Component {

  static contextType = DbContext;

  componentDidMount(){
      console.log(this.context);
  }

  render() {
    return (
      <div className="Login">
          {/*{this.context.auth[1].name}*/}
        Login
      </div>
    );
  }
}

export default Login;
