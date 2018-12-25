import React from 'react';
import { Layout } from 'antd';
import MainHeader from '../components/layout/MainHeader';
import MainFooter from '../components/layout/MainFooter';

const MainLayout = props => {
    const getSelectedRoute = () => {
        if (window.location.pathname.match("/courses.*")) {
            return ['2'];
        } else if (window.location.pathname.match("/projects.*")) {
            return ['3'];
        } else {
            return ['1'];
        }
    }

    return (
        <Layout className="layout">
            <MainHeader selected={getSelectedRoute()} />
            {props.children}
            <MainFooter />
        </Layout>
    );
}

export default MainLayout;