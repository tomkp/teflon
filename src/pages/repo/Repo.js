import React, {Component, PropTypes} from 'react';
import './repo.scss';

class Repo extends Component {
    render() {
        console.log(`Repo.render`, this.props);
        const { params } = this.props;
        return (
            <div className="Repo">
                {params.repoName}
            </div>
        );
    }
}

Repo.propTypes = {
};

export default Repo;