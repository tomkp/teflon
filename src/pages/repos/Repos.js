import React, {Component, PropTypes} from 'react';
import NavLink from '../../components/navlink/NavLink';

import './repos.scss';

class Repos extends Component {
    render() {
        console.log(`Repos.render`, this.props);
        const { children } = this.props;
        return (
            <div className="Repos">

                <ul className="nav">
                    <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
                    <li><NavLink to="/repos/facebook/react">React</NavLink></li>
                </ul>

                {children}
            </div>
        );
    }
}

Repos.propTypes = {
};

export default Repos;