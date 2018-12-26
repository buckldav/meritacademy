import React from 'react';
import axios from 'axios';
import { List, Card, Button } from 'antd';

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
    },
    card: {
        maxHeight: "165.6px", 
        overflow: "hidden",
    }
}

class Courses extends React.Component {
    state = {
        courses: []
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
                    courses: sortAZbyName
                });
                // console.log(this.state.courses);
            });
    }

    onArrowClick(e) {
        // let button = e.target;
        let card = e.target.parentElement.parentElement.parentElement.parentElement;
        
        if (card.style.maxHeight !== null && card.style.maxHeight !== '') {
            // Expand
            card.style.maxHeight = null;
        } else {
            // Retract
            card.style.maxHeight = styles.card.maxHeight;
        }
    }

    render() {
        return (
            <List
                grid={{
                    gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 6,
                }}
                dataSource={this.state.courses}
                renderItem={item => (
                    <List.Item> 
                        <Card 
                            title={<a href={"/courses/" + item.name.replace(/\s+/g, '-').toLowerCase()} style={{color: "rgba(0, 0, 0, 0.85)"}}>{item.name}</a>} 
                            extra={<Button icon="caret-down" style={{border: 0}} onClick={this.onArrowClick} />}
                            style={styles.card}
                        >
                            {item.description} 
                            <hr style={{borderWidth: 0}} />
                            {item.teacher2 == null ? "Teacher: " + item.teacher : "Teachers: " + item.teacher + " & " + item.teacher2}
                            <div style={styles.fade}></div>
                        </Card>
                    </List.Item>
                )}
                style={{
                    padding: "50px"
                }}
            />
        );
    }
}

export default Courses;