import React, {Component, PropTypes} from 'react';

import './footer.scss';

class Footer extends Component {
    render() {
        console.log(`Footer.render`, this.props);
        return <div className="Footer"></div>;
    }
}

Footer.propTypes = {

};

export default Footer;