import React from 'react';
import axios from 'axios';
import { List, Card } from 'antd';
import Loading from '../Loading';

import { SERVER_URL } from '../../Constants';

const styles = {
    fade: {
        position: "absolute", 
        bottom: 0, 
        left: 0,
        width: "100%", 
        textAlign: "center", 
        margin: 0,
        padding: "18px 0", 
        backgroundImage: "linear-gradient(to bottom, transparent, white)"
    }
}

class Courses extends React.Component {
    state = {
        courses: [],
        loaded: false
    }

    componentDidMount() {
        axios.get(SERVER_URL + '/api/courses')
            .then(res => {
                let sortAZbyName = res.data.slice(0);
                sortAZbyName.sort((a, b) => {
                    var x = a.name.toLowerCase();
                    var y = b.name.toLowerCase();
                    return x < y ? -1 : x > y ? 1 : 0;
                })
                this.setState({
                    courses: sortAZbyName,
                    loaded: true
                });
                // console.log(this.state.courses);
            });
    }

    render() {
        return (
            <>
                <h1 style={{textAlign: "center", margin: "24px 0 0"}}>Courses</h1>
                {!this.state.loaded ? <div style={{marginTop: "24px"}}><Loading /></div> :
                <List
                    className="card-list"
                    grid={{
                        gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 4,
                    }}
                    dataSource={this.state.courses}
                    renderItem={item => (
                        <List.Item> 
                            <a href={"/courses/" + item.name.replace(/\s+/g, '-').toLowerCase()} className="card-link">
                                <Card>
                                    <Card.Meta
                                        title={item.name} 
                                        description={<div><p>{item.description}</p><p>{item.teacher2 == null ? "Teacher: " + item.teacher : "Teachers: " + item.teacher + " & " + item.teacher2}</p></div>}
                                    />
                                    <div style={styles.fade}></div>
                                </Card>
                            </a>
                        </List.Item>
                    )}
                />
                }
            </>
        );
    }
}

export default Courses;