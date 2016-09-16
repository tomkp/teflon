import React, {Component, PropTypes} from 'react';
import Sidebar from '../../layout/sidebar/Sidebar';

import './repo.scss';

class Repo extends Component {
    render() {
        console.log(`Repo.render`, this.props);
        const { params } = this.props;
        return (
            <div className="Repo">
                <Sidebar />
                {params.repoName}
            </div>
        );
    }
}

Repo.propTypes = {
};

export default Repo;