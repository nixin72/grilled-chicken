import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
        <div className="Home jumbotron container-home">
            <div className="container">
                <div className="row">
                    <div className="col-6 col-sm-6">
                        <div className="jumbotron placeHome">
                            <div className="container text-right">
                                <p className="text-center">Dogs looking for a new home?</p>
                                <button className="btn btn-outline-alert my-2 my-sm-0 " type="submit"><h1
                                    className="text-center bold-text">Place</h1></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6">
                        <div className="jumbotron findDog">
                            <div className="container text-right">
                                <p className="text-center">Are you looking to adopt a dog?</p>
                                <button className="btn btn-outline-alert my-2 my-sm-0 " type="submit"><h1
                                    className="text-center bold-text">Adopt</h1></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Home;
