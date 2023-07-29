import { Button, Dropdown, Menu } from "antd";
import Link from 'next/link';
import {
    DownOutlined,
} from '@ant-design/icons';


const Navbar = () => {

    const navItems = [
        { title: 'Home', key: 'home', link: '/' },
        { title: 'Shop', key: 'shop', link: '/shop' },
        { title: 'About', key: 'about', link: '/about' },
        { title: 'Contact', key: 'contact', link: '/contact' },
        { title: 'PC Builder', key: 'pc-builder', link: '/pc-builder' },
    ];

    const categories = [
        { title: 'CPU / Processor', key: 'cpu', link: '/shop/processor' },
        { title: 'Motherboard', key: 'motherboard', link: '/shop/motherboard' },
        { title: 'RAM', key: 'ram', link: '/shop/ram' },
        { title: 'Power Supply Unit', key: 'psu', link: '/shop/power' },
        { title: 'Storage Device', key: 'storage', link: '/shop/storage' },
        { title: 'Monitor', key: 'monitor', link: '/shop/monitor' },
        { title: 'Others', key: 'others', link: '/shop/others' },
    ];

    return (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            {navItems.map((item) => (
                <Menu.Item key={item.key} icon={item.icon}>
                    <Link href={item.link} >
                        {/* Link content inside the <Link> component */}
                        <Button className="text-md text-white" type="link">{item.title}</Button>
                    </Link>
                </Menu.Item>
            ))}
            {/* Categories Dropdown */}
            <Menu.Item key="categories" >
                Categories
                <Dropdown
                    overlay={
                        <Menu>
                            {categories.map((category) => (
                                <Menu.Item key={category.key}>
                                    <Link href={category.link} className="text-xl text-white">
                                        <Button type="text" style={{ padding: 0 }}>
                                            {category.title}
                                        </Button>
                                    </Link>
                                </Menu.Item>
                            ))}
                        </Menu>
                    }
                >
                    <Button type="text" className="text-white">
                        <DownOutlined />
                    </Button>
                </Dropdown>
            </Menu.Item>
        </Menu>
    );
};

export default Navbar;