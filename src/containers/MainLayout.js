import React from 'react';
import { Layout } from 'antd';
import MainHeader from '../components/layout/MainHeader';
import MainFooter from '../components/layout/MainFooter';

const MainLayout = props => {
    return (
        <Layout className="layout">
            <MainHeader selected={['1']} />
            {props.children}
            <MainFooter />
        </Layout>
    );
}

export default MainLayout;