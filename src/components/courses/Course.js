import React from "react";
import axios from 'axios';
import {
    Button, Layout, Menu, Breadcrumb, Icon
} from 'antd';
import Dashboard from './course/Dashboard';
import About from './course/About';
import Loading from '../Loading';

import { SERVER_URL, BOOTSTRAP_MAX } from '../../Constants';

const { Content, Sider } = Layout;
  
const MenuItems = [
    {
        title: "Dashboard",
        icon: "home"
    },
    {
        title: "About",
        icon: "info-circle"
    }
]

class Course extends React.Component {
    state = {
        course: {},
        view: "Loading",

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
        // Get the course data
        var courses = []
        axios.get(SERVER_URL + '/api/courses')
            .then(res => {
                courses = res.data;
                console.log(courses);    
                
                // The path needs to be the exact name of the course
                let path = this.props.location.pathname.split('/');
                path[path.length - 1] = path[path.length - 1].replace(/-/g, ' ');
                courses.forEach((val, i) => {
                    console.log(val.name);
                    if (val.name.toLowerCase() === path[path.length - 1]) {
                        path[path.length - 1] = val.name;
                    }
                })

                let pathStr = "";
                path.forEach((val, i, arr) => {
                    pathStr += val;
                    if (i < arr.length - 1) {
                        pathStr += '/';
                    }
                });
                axios.get(SERVER_URL + '/api' + pathStr)
                    .then(res => {
                        this.setState({
                            course: res.data
                        });
                        // console.log(this.state.course);
                    });

                // Get the events
                let pathStrCourse = pathStr.split('/')
                pathStrCourse = pathStrCourse[pathStrCourse.length - 1]
                axios.get(SERVER_URL + '/api/events/course/' + pathStrCourse)
                    .then(res => {
                        let sortedByDate = res.data.sort((a, b) => {
                            a = new Date(a.date);
                            b = new Date(b.date);
                            return a>b ? -1 : a<b ? 1 : 0;
                        });
                        this.setState(prevState => ({
                            course: {...prevState.course, events: sortedByDate}
                        }));
                        
                        // Set the view
                        this.setState({
                            view: "Dashboard"
                        });
                    });
            });

        // Window resize, collapsing menu
        window.onresize = this.onResize;
        this.onResize();
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
                        
                        <Menu.Item key="1" title={MenuItems[0].title}>{this.state.collapsed ? <Icon type={MenuItems[0].icon} /> : MenuItems[0].title}</Menu.Item>
                        <Menu.Item key="2" title={MenuItems[1].title}>{this.state.collapsed ? <Icon type={MenuItems[1].icon} /> : MenuItems[1].title}</Menu.Item>
                    </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Courses</Breadcrumb.Item>
                        <Breadcrumb.Item>{this.state.course.name}</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content style={{
                        background: '#fff', padding: 24, margin: 0, minHeight: 280
                    }}
                    >
                        
                        {this.state.view === "Loading" ? <Loading /> : <h1>{this.state.course.name}</h1> }
                        <Dashboard course={this.state.course} visible={this.state.view === "Dashboard"} />
                        <About course={this.state.course} visible={this.state.view === "About"} />
                    </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
    
}

export default Course;