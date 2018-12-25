import React from 'react';

const Dashboard = props => {
    if (props.visible) {
        if (props.course !== {}) {
            return (
                <div>
                    <p>{props.course.teacher2 == null ? "Teacher: " + props.course.teacher : "Teachers: " + props.course.teacher + " & " + props.course.teacher2}</p>
                    <p>{props.course.description}</p>
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

export default Dashboard;