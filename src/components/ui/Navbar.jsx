import React, { useState } from 'react';
import { Menu, Dropdown, Button, Drawer } from 'antd';
import { HomeOutlined, ShoppingCartOutlined, UserOutlined, MailOutlined, DownOutlined, MenuOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '@/firebase/firebase.auth';
import { useRouter } from 'next/router';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const { data } = useSession();

    const [user] = useAuthState(auth);
    console.log(user?.email);
    console.log(data)

    const categories = [
        { title: 'CPU / Processor', key: 'cpu', link: '/shop/processor' },
        { title: 'Motherboard', key: 'motherboard', link: '/shop/motherboard' },
        { title: 'RAM', key: 'ram', link: '/shop/ram' },
        { title: 'Power Supply Unit', key: 'psu', link: '/shop/power' },
        { title: 'Storage Device', key: 'storage', link: '/shop/storage' },
        { title: 'Monitor', key: 'monitor', link: '/shop/monitor' },
        { title: 'Others', key: 'others', link: '/shop/others' },
    ];

    const menu = (
        <Menu>
            {categories.map((category) => (
                <Menu.Item key={category.key}>
                    <Link href={category.link}>{category.title}</Link>
                </Menu.Item>
            ))}
        </Menu>
    );

    return (
        <>
            <Menu theme="dark" mode="horizontal" className="bg-black hidden md:flex">
                <Menu.Item key="home" icon={<HomeOutlined />} className="text-white">
                    <Link href={'/'}>Home</Link>
                </Menu.Item>
                <Menu.Item key="shop" icon={<ShoppingCartOutlined />} className="text-white">
                    <Link href={'/shop'}>Shop</Link>
                </Menu.Item>
                <Menu.Item key="about" icon={<UserOutlined />} className="text-white">
                    <Link href={'about'}>About</Link>
                </Menu.Item>
                <Menu.Item key="contact" icon={<MailOutlined />} className="text-white">
                    <Link href={'/contact'}>Contact</Link>
                </Menu.Item>
                <Menu.Item key="categories" className="text-white bg-black">
                    <Dropdown overlay={menu} trigger={['click']}>
                        <Button color='black'>
                            Categories <DownOutlined />
                        </Button>
                    </Dropdown>
                </Menu.Item>
                <Menu.Item key="pcBuilder" className="text-white">
                    <Link href={'/pc-builder'}>
                        <Button color='black' type='primary' danger>PC Builder</Button>
                    </Link>
                </Menu.Item>
                {data?.user || user?.email ? (
                    <Menu.Item key="user" className="text-white">
                        <p>{data?.user?.name || user?.email}</p>
                    </Menu.Item>
                ) : null}
                <Menu.Item key="auth" className="text-white">
                    {data?.user || user?.email ? (
                        <Button onClick={() => signOut()} type="primary" danger>
                            Logout
                        </Button>
                    ) : (
                        <Link href="/login">
                            <>Login</>
                        </Link>
                    )}
                </Menu.Item>
            </Menu>

            {/* Mobile menu */}
            <div className="md:hidden flex justify-between items-center  bg-black">
                <Button icon={<MenuOutlined />} onClick={toggleMobileMenu} className="" />
                <h1 className="text-white">Atlas</h1>
            </div>
            <Drawer
                placement="right"
                closable={false}
                onClose={toggleMobileMenu}
                visible={isMobileMenuOpen}
                className='bg-black text-white'


            >
                <Menu mode="vertical" theme="dark" className=''>
                    <Menu.Item key="home" icon={<HomeOutlined />} className="text-white">
                        <Link href={'/'}>Home</Link>
                    </Menu.Item>
                    <Menu.Item key="shop" icon={<ShoppingCartOutlined />} className="text-white">
                        <Link href={'/shop'}>Shop</Link>
                    </Menu.Item>
                    <Menu.Item key="about" icon={<UserOutlined />} className="text-white">
                        <Link href={'/about'}>About</Link>
                    </Menu.Item>
                    <Menu.Item key="contact" icon={<MailOutlined />} className="text-white">
                        <Link href={'/contact'}>Contact</Link>
                    </Menu.Item>
                    <Menu.Item key="categories" className="text-white">
                        <Dropdown overlay={menu} trigger={['click']}>
                            <Button>
                                Categories <DownOutlined />
                            </Button>
                        </Dropdown>
                    </Menu.Item>
                    <Menu.Item key="pcBuilder" className="text-white">
                        <Link href={'/pc-builder'}>
                            <Button>PC Builder</Button>
                        </Link>
                    </Menu.Item>
                    {data?.user || user?.email ? (
                        <Menu.Item key="user" className="text-white">
                            <p>{data?.user?.name || user?.email}</p>
                        </Menu.Item>
                    ) : null}
                    <Menu.Item key="auth" className="text-white">
                        {data?.user || user?.email ? (
                            <Button onClick={() => signOut()} type="primary" danger>
                                Logout
                            </Button>
                        ) : (
                            <Link href="/login">
                                <>Login</>
                            </Link>
                        )}
                    </Menu.Item>
                </Menu>
            </Drawer>
        </>
    );
};



export default Navbar;
