import React from 'react';
import Links from '../Links';
import axios from 'axios';
import { SERVER_URL } from '../../Constants';

class Apps extends React.Component {
    state = {}

    componentDidMount() {
        // Get sites
        axios.get(SERVER_URL + "/api/links/StudentMobile")
            .then(res => {
                this.setState({data: res.data});
            })
    }

    render() {
        return (
            <div>
                <h1>Apps</h1>
                <Links icon="mobile" data={this.state.data} />
            </div>
        )
    }
}

export default Apps;