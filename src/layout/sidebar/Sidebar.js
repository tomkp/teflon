import React, {Component, PropTypes} from 'react';

import './sidebar.scss';

class Sidebar extends Component {
    render() {
        console.log(`Sidebar.render`, this.props);
        return <div className="Sidebar"></div>;
    }
}

Sidebar.propTypes = {

};

export default Sidebar;