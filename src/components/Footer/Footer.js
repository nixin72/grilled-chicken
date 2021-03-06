import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
        <nav className="Footer navbar fixed-bottom navbar-light bg-light justify-content-center">
            <ul className="nav center">
                <li id="end" className="nav-item center">
                    <a
                        className={"mx-1"}
                        href="https://github.com/CSumm"
                        title="Carl Summers">
                        Carl Summers
                    </a>

                    <a
                        className={"mx-1"}
                        href="https://github.com/olegsmall"
                        title="Oleg Smolovyk">
                        Oleg Smolovyk
                    </a>

                    <a className={"mx-1"}
                       href="https://github.com/phdumaresq"
                       title="Philip Dumaresq">
                        Philip Dumaresq
                    </a>

                    <a
                        className={"mx-1"}
                        href="https://github.com/jessefuterman"
                        title="Jesse Futerman">
                        Jesse Futerman
                    </a>

                    <a
                        className={"mx-1"}
                        href="https://github.com/Michelle-Lefebvre"
                        title="Michelle Lefebvre">
                        Michelle Lefebvre
                    </a>

                    <h6 className="write">
                        ©&nbsp; 2018 JAM Stack Hackathon Team Grilled Chicken | All Rights Reserved 2018
                    </h6>
                </li>
            </ul>
        </nav>
    );
  }
}

export default Footer;
