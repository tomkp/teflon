import React, {Component, PropTypes} from 'react';

import './about.scss';

class About extends Component {
    render() {
        console.log(`About.render`, this.props);
        return <div className="About">about</div>;
    }
}

About.propTypes = {

};

export default About;