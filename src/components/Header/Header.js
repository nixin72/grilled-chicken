import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
          <button className="btn btn-link"><Link to={'/'}>Home</Link></button>
          <button className="btn btn-link"><Link to={'/search'}>Search</Link></button>
          <button className="btn btn-link"><Link to={'/post'}>Post</Link></button>
      </div>
    );
  }
}

export default Header;
