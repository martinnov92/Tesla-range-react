import React, {Component} from 'react';
import logo from '../assets/logo.svg';

class Header extends Component {
    render () {
        return (
            <header>
                <img src={logo} width="100px"alt="logo" />
            </header>
        )
    }
}

export default Header;