import React from 'react';
import Links from '../Links';
import axios from 'axios';
import { SERVER_URL } from '../../Constants';
import { Typography } from 'antd';
const { Title } = Typography;

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
                <Title>Apps</Title>
                <Links icon="mobile" data={this.state.data} />
            </div>
        )
    }
}

export default Apps;