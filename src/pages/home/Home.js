import React, {Component} from 'react';

import './home.scss';

class Home extends Component {
    render() {
        console.log(`Home.render`, this.props);
        return <div className="Home">home</div>;
    }
}

export default Home;
