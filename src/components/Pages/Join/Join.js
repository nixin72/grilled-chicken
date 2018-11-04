import React, {Component} from 'react';
import './Join.css';

class Join extends Component {




    render() {
        return (
          <form name="contact" method="POST" netlify>
  <p>
    <label>Email: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Password: <input type="password" name="message"></input></label>
  </p>
  <div data-netlify-recaptcha></div>
  <p>
    <input type="submit" value="Submit"/>
  </p>
</form>
        );
    }
}

export default Join;