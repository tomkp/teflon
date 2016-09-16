import React, { Component, PropTypes } from 'react';

import './order.scss';

class Order extends Component {
    render() {
        console.log(`Order.render`, this.props);
        const { xxx } = this.props;
        return <div className="Order">{xxx}</div>;
    }
}

Order.propTypes = {
    xxx: PropTypes.string.isRequired
};

export default Order;