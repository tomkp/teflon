import React, {Component, PropTypes, cloneElement} from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import './application.scss';

class Application extends Component {
    render() {
        console.log(`Application.render`, this.props);
        const { children } = this.props;
        return (
            <div className="Application">
                <Header />
                <div className="content">

                    {
                        children &&
                        cloneElement(children, {})
                    }
                </div>
                <Footer />
            </div>
        );
    }
}

Application.propTypes = {
};

export default Application;