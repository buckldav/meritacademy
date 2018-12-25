import React from "react";
import axios from 'axios';
import {
    Button, Layout, Menu, Breadcrumb, Icon
} from 'antd';
import Calendar from './course/Calendar';
import Dashboard from './course/Dashboard';

import SERVER_URL from '../../server';

const { Content, Sider } = Layout;
  
class Course extends React.Component {
    state = {
        course: {},
        view: "",

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

    onSelect = (key) => {
        this.setState({
            view: key.item.props.children
        });
    }    

    componentDidMount() {
        // Get the course data
        let path = this.props.location.pathname.split('/');
        path[path.length - 1] = path[path.length - 1].replace(/-/g, ' ').replace(/\w\S*/g, (txt) => {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
        let pathStr = "";
        path.forEach((val, i, arr) => {
            pathStr += val;
            if (i < arr.length - 1) {
                pathStr += '/';
            }
        })
        // console.log(pathStr);
        axios.get(SERVER_URL + '/api' + pathStr)
            .then(res => {
                this.setState({
                    course: res.data
                });
                console.log(this.state.course);
            });

        // Set the view
        this.setState({
            view: "Dashboard"
        });
    }

    render() {
        return (
            <Layout>
                <Layout>
                    <Sider collapsible collapsed={this.state.collapsed} trigger={null} width={200} style={{ background: '#fff' }}>
                    <Button onClick={this.onCollapse} block icon={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} style={{border: "none"}} />
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        openKeys={this.state.openKeys}
                        onOpenChange={this.onOpenChange}
                        onSelect={this.onSelect}
                        style={{ height: '90%', borderRight: 0 }}
                    >
                        
                        <Menu.Item key="1" title="Dashboard">{this.state.collapsed ? <Icon type="home" /> : 'Dashboard'}</Menu.Item>
                        <Menu.Item key="2" title="Calendar">{this.state.collapsed ? <Icon type="calendar" /> : 'Calendar'}</Menu.Item>
                    </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Courses</Breadcrumb.Item>
                        <Breadcrumb.Item>{this.state.course.name}</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content style={{
                        background: '#fff', padding: 24, margin: 0, minHeight: 280,
                    }}
                    >
                        <h1>{this.state.course.name}</h1>
                        <Dashboard course={this.state.course} visible={this.state.view === "Dashboard"} />
                        <Calendar course={this.state.course} visible={this.state.view === "Calendar"} />
                    </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
    
}

export default Course;