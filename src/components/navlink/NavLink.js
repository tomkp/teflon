import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router'
import './nav-link.scss';

class NavLink extends Component {
    render() {
        console.log(`NavLink.render`, this.props);
        return <Link className="NavLink" {...this.props} activeClassName="active" />;
    }
}

NavLink.propTypes = {

};

export default NavLink;