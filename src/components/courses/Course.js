import React from "react";
import { Link } from 'react-router-dom';
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
        icon: "home",
        path: ""
    },
    {
        title: "About",
        icon: "info-circle",
        path: "/about"
    },
    {
        title: "Links",
        icon: "link",
        path: "/links"
    }
]

class Course extends React.Component {
    state = {
        course: {},
        view: "Loading",

        collapsible: true,
        collapsed: false,
    };

    onCollapse = () => {
        this.setState({ collapsed: !this.state.collapsed });
    }

    onModalOpen = (calEvent) => {
        let eventsCopy = [...this.state.course.events];  
        let index = eventsCopy.findIndex(el => el.id === calEvent.id);
        eventsCopy[index].visible = true;                  
        this.setState({ course: {...this.state.course, events: eventsCopy}}); 
    }

    onModalClose = (e, calEvent) => {
        let eventsCopy = [...this.state.course.events];  
        let index = eventsCopy.findIndex(el => el.id === calEvent.id);
        // This line is because the Modal is declared nested inside of something sometimes.
        e.stopPropagation();
        eventsCopy[index].visible = false;           
        this.setState({ course: {...this.state.course, events: eventsCopy}}); 
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
                
                // Current MenuItem
                let menuItemIndex = 0;
                // Set the base path for each MenuItem
                let path = window.location.href.split('/');
                MenuItems.forEach((val, i) => {
                    if (path.indexOf(val.path.substring(1)) !== -1) {
                        menuItemIndex = i;
                    }
                    val.path = "/courses/" + path[path.indexOf("courses") + 1] + val.path;
                });                

                // The path needs to be the exact name of the course
                let pathStrCourse = path[path.indexOf("courses") + 1].replace(/-/g, ' ');
                courses.forEach((val, i) => {
                    if (val.name.toLowerCase() === pathStrCourse) {
                        pathStrCourse = val.name;
                    }
                });

                // Get course info
                axios.get(SERVER_URL + '/api/courses/' + pathStrCourse)
                    .then(res => {
                        this.setState({
                            course: res.data
                        });
                        // console.log(this.state.course);
                    });

                // Get the events
                axios.get(SERVER_URL + '/api/events/course/' + pathStrCourse)
                    .then(res => {
                        let sortedByDate = res.data.sort((a, b) => {
                            a = new Date(a.date);
                            b = new Date(b.date);
                            return a>b ? -1 : a<b ? 1 : 0;
                        });

                        this.setState(prevState => ({
                            course: {...prevState.course, events: sortedByDate},
                            view: MenuItems[menuItemIndex].title,
                            selectedKey: (menuItemIndex + 1).toString()
                        }));
                    });

                // Get the disclosure
                axios.get(SERVER_URL + '/api/courses/disclosures/' + pathStrCourse)
                    .then(res => {
                        if (res.data.length === 1) {
                            this.setState(prevState => ({
                                course: {...prevState.course, disclosureURL: res.data[0].driveUrl}
                            }));
                        }
                    })
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
                    {this.state.view === "Loading" ? null :
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={[this.state.selectedKey]}
                        onOpenChange={this.onOpenChange}
                        onSelect={this.onSelect}
                        style={{ height: '90%', borderRight: 0 }}
                    >
                        {
                            MenuItems.map((item, i) => (
                                <Menu.Item key={(i + 1).toString()} title={item.title}><Link to={`${item.path}`}>{this.state.collapsed ? <Icon type={item.icon} /> : item.title}</Link></Menu.Item>
                            ))
                        }
                    </Menu>}
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
                        <Dashboard 
                            course={this.state.course} 
                            visible={this.state.view === "Dashboard"} 
                            onModalOpen={this.onModalOpen}
                            onModalClose={this.onModalClose}
                            />
                        <About course={this.state.course} visible={this.state.view === "About"} />
                        {this.props.children}
                    </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
    
}

export default Course;