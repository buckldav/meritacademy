import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const MainHeader = props => {
    return (
        <Header>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={props.selected}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1"><a href="/">Home</a></Menu.Item>
                <Menu.Item key="2"><a href="/courses">Courses</a></Menu.Item>
                <Menu.Item key="3">Projects</Menu.Item>
            </Menu>
        </Header>
    )
}

export default MainHeader