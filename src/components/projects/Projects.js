import React from 'react';
import {
    Button, Layout, Menu, Breadcrumb, Icon
} from 'antd';
import { BOOTSTRAP_MAX } from '../../Constants';
// import Iframe from 'react-iframe';
import "./Projects.css";

const { Content, Sider } = Layout;
  
const MenuItems = [
    {
        title: "Games",
        icon: "play-circle"
    },
    {
        title: "Sites",
        icon: "link"
    },
    {
        title: "Mobile Apps",
        icon: "mobile"
    }
]

class Projects extends React.Component {
    state = {
        collapsible: true,
        collapsed: false,
        openKeys: [],
    };
    
    onCollapse = () => {
        this.setState({ collapsed: !this.state.collapsed });
    }

    onOpenChange = (openKeys) => {
        // Only allow for one submenu to be open at a time
        this.state.openKeys.forEach((val, i, arr) => {
            openKeys = openKeys.filter(e => e !== val); 
        });
        
        this.setState({openKeys: openKeys});
    }

    onResize = () => {
        let windowWidth = window.innerWidth;
        if (windowWidth < BOOTSTRAP_MAX.md) {
            // Collapse menu
            this.setState({collapsible: false});
            this.setState({collapsed: true});
        } else if (!this.state.collapsible) {
            // Only expand the menu once onResize
            this.setState({collapsible: true});
            this.setState({collapsed: false});
        }
    }

    onSelect = (key) => {
        this.setState({
            view: MenuItems[parseInt(key.key) - 1].title
        });
    }    

    componentDidMount() {
        let frames = Array.from(document.getElementsByTagName("iframe"));
        frames.forEach((val, i) => {
            val.setAttribute("scrolling", "no");
        });
    }
    
    render() {
        return (
            <Layout className="scroll-x-container">
                <Layout className="scroll-x">
                    <Sider collapsible={this.state.collapsible} collapsed={this.state.collapsed} trigger={null} width={200} style={{ background: '#fff' }}>
                    {this.state.collapsible ? <Button disabled={!this.state.collapsible} onClick={this.onCollapse} block icon={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} style={{border: "none"}} /> : null}
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        openKeys={this.state.openKeys}
                        onOpenChange={this.onOpenChange}
                        onSelect={this.onSelect}
                        style={{ height: '90%', borderRight: 0 }}
                    >
                        {
                            MenuItems.map((item, i) => (
                                <Menu.Item key={"" + (i + 1)} title={item.title}>{this.state.collapsed ? <Icon type={item.icon} /> : item.title}</Menu.Item>
                            ))
                        }
                    </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Projects</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content style={{
                        background: '#fff', padding: 24, margin: 0, minHeight: 280
                    }}
                    >
                    <h3 style={{textAlign: "center"}}>There are no projects to display at this time.</h3>
                    <p style={{textAlign: "center"}}>If you have a creation you would like featured on this site, email Mr. Buckley at <a href="mailto:david.buckley@meritacademy.org">david.buckley@meritacademy.org</a>.</p>
                    {/* <Iframe url="http://scratch.mit.edu/projects/embed/260481630"
                        width="700px"
                        height="500px"
                        className="scratch"
                        display="initial"
                        position="relative"
                        allowFullScreen/> */}
                    
                    
                    </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default Projects;