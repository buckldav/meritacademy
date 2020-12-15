import React from 'react';
import Links from '../Links';
import axios from 'axios';
import { SERVER_URL } from '../../Constants';
import { Typography } from 'antd';
const { Title } = Typography;

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
                <Title>Sites</Title>
                <Links data={this.state.data} />
            </div>
        )
    }
}

export default Sites;