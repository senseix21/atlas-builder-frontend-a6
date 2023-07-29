import { Layout, Menu } from 'antd';
import Link from 'next/link';

const { Footer } = Layout;

const footerNavItems = [
    { title: 'Home', key: 'home', link: '/' },
    { title: 'Shop', key: 'shop', link: '/shop' },
    { title: 'About', key: 'about', link: '/about' },
    { title: 'Contact', key: 'contact', link: '/contact' },
];

const FooterComponent = () => {
    return (
        <Footer style={{
            textAlign: 'center',
            display: "flex",
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'white',
        }}>
            <Menu theme="light" mode="horizontal" >
                {footerNavItems.map((item) => (
                    <Menu.Item key={item.key}>
                        <Link href={item.link}>{item.title}</Link>
                    </Menu.Item>
                ))}
            </Menu>
            Atlas Builder ©2023 Created by senseiX
        </Footer>
    );
};

export default FooterComponent;
