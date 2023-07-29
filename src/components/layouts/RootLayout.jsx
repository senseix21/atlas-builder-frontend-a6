import React from 'react';
import { Layout, theme } from 'antd';
import Navbar from '../ui/Navbar';
import FooterComponent from '../ui/FooterComponent';

const { Header, Content, Footer } = Layout;

const RootLayout = ({ children }) => {

    return (
        <Layout className="layout" style={{ minHeight: '100vh' }}>
            <Header style={{ alignItems: 'center' }}>
                <Navbar />
            </Header>

            <Content style={{ padding: '0 50px' }}>
                {children}
            </Content>

            <Footer style={{ textAlign: 'center' }}>
                <FooterComponent />
            </Footer>
        </Layout >
    );
};

export default RootLayout;
