import React from 'react';
import { Layout } from 'antd';

const {Content} = Layout;

const Projects = () => {
    return (
        <Content style={{margin: "24px 0"}}>
            <h3 style={{textAlign: "center"}}>There are no projects to display at this time.</h3>
            <p style={{textAlign: "center"}}>If you have a creation you would like featured on this site, email Mr. Buckley at <a href="mailto:david.buckley@meritacademy.org">david.buckley@meritacademy.org</a>.</p>
        </Content>
    )
}

export default Projects;