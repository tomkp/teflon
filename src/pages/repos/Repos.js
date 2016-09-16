import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router'

import './repos.scss';

class Repos extends Component {
    render() {
        console.log(`Repos.render`, this.props);
        const { children } = this.props;
        return (
            <div className="Repos">
                <h2>Repos</h2>
                <ul>
                    <li><Link to="/repos/reactjs/react-router">React Router</Link></li>
                    <li><Link to="/repos/facebook/react">React</Link></li>
                </ul>

                {children}
            </div>
        );
    }
}

Repos.propTypes = {
};

export default Repos;