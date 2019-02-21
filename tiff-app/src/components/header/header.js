import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import logo from '../../logo-black.png';

import './header.scss';

class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand navbar-light">
                    <a className="navbar-brand" href="https://www.tiff.net/"><img src={logo} className="logo" alt="logo" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Movies</Link>
                            </li>

                            {/* <li className="nav-item active">
                                <Link className="nav-link" to="/movie">Movie</Link>
                            </li> */}
                        </ul>
                    </div>
                    </nav>
            </header>
        );
    }
}

export default Header;