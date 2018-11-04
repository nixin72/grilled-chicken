import React, {Component} from 'react';
import './Join.css';

class Join extends Component {
    render() {
        return (
          <form name="signup" method="POST" netlify>
            <p>
              <input type="text" name="name" placeholder="Full name"/>
            </p>
            <p>
              <input type="text" name="email" placeholder="Email"/>
            </p>
            <p>
              <input type="password" name="password" placeholder="password"></input>
            </p>
              <div data-netlify-recaptcha></div>
            <p>
              <input className="send" type="submit" value="Submit"/>
            </p>
          </form>
        );
    }
}

export default Join;