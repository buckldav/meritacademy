import React from 'react';
import axios from 'axios';
import { SERVER_URL } from '../../../Constants';
import Links from '../../Links';

class CourseLinks extends React.Component {
    state = {}

    componentDidMount() {
        // Get links
        var courses = []
        axios.get(SERVER_URL + '/api/courses')
            .then(res => {
                courses = res.data;
                let path = window.location.pathname.split("/");

                // The path needs to be the exact name of the course
                let pathStrCourse = path[path.indexOf("courses") + 1].replace(/-/g, ' ');
                courses.forEach((val, i) => {
                    if (val.name.toLowerCase() === pathStrCourse) {
                        pathStrCourse = val.name;
                    }
                });

                axios.get(SERVER_URL + "/api/links/" + pathStrCourse)
                    .then(res => {
                        this.setState({data: res.data});
                    })

            })
        
    }

    render() {
        return <Links data={this.state.data} />
    }
}

export default CourseLinks;