import React from 'react';
import Iframe from 'react-iframe';

const About = props => {
    if (props.visible) {
        if (props.course !== {}) {
            return (
                <div>
                    <p>{props.course.teacher2 == null ? "Teacher: " + props.course.teacher : "Teachers: " + props.course.teacher + " & " + props.course.teacher2}</p>
                    <p>{props.course.description}</p>
                    {!props.course.disclosureURL ? null : 
                    <Iframe url={props.course.disclosureURL}
                    width="100%" 
                    height="480" 
                    display="initial"
                    position="relative" />}
                </div>
            );
        } else {
            return (
                <p>Loading</p>
            );
        }
    } else {
        return null;
    }
}

export default About;