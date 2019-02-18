import React from 'react';
import { Link } from 'react-router-dom';
import {
    Button, Layout, Menu, Breadcrumb, Icon
} from 'antd';
import { BOOTSTRAP_MAX } from '../../Constants';
import Games from './Games';
import Sites from './Sites';

const { Content, Sider } = Layout;
  
const MenuItems = [
    {
        title: "Games",
        icon: "play-circle",
        path: "/projects/games",
        component: Games
    },
    {
        title: "Sites",
        icon: "link",
        path: "/projects/sites",
        component: Sites
    },
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

    onFrameLoad = (e) => {
        let frame = e.target;
        let canvas = Array.from(frame.contentDocument.getElementsByTagName("canvas"))[0];
        canvas.onResize = e => {
            console.log(e.target.height);
        }
        frame.setAttribute("height", canvas.height);
        frame.style.height = canvas.height;
        console.log(frame);
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
                                <Menu.Item key={"" + (i + 1)} title={item.title}><Link to={`${item.path}`}>{this.state.collapsed ? <Icon type={item.icon} /> : item.title}</Link></Menu.Item>
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
                        {this.props.children}   
                    </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default Projects;