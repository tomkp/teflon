import React, {Component, PropTypes} from 'react';

import NavLink from '../../components/navlink/NavLink';

import './header.scss';

class Header extends Component {
    render() {
        console.log(`Header.render`, this.props);
        return (
            <div className="Header">
                <ul className="nav">
                    <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/repos">Repos</NavLink></li>
                </ul>
            </div>
        );
    }
}

Header.propTypes = {

};

export default Header;