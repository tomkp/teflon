import React, { Component, PropTypes } from 'react';

import './details.scss';

class Details extends Component {
    render() {
        console.log(`Details.render`, this.props);
        const { xxx } = this.props;
        return <div className="Details">{xxx}</div>;
    }
}

Details.propTypes = {
    xxx: PropTypes.string.isRequired
};

export default Details;