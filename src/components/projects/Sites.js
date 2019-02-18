import React from 'react';
import Links from '../Links';
import axios from 'axios';
import { SERVER_URL } from '../../Constants';

class Sites extends React.Component {
    state = {}

    componentDidMount() {
        // Get sites
        axios.get(SERVER_URL + "/api/links/Student")
            .then(res => {
                this.setState({data: res.data});
            })
    }

    render() {
        return (
            <div>
                <h1>Sites</h1>
                <Links data={this.state.data} />
            </div>
        )
    }
}

export default Sites;