import { Layout, Menu } from 'antd';
import Link from 'next/link';

const { Footer } = Layout;



const FooterComponent = () => {
    return (
        <Footer className="text-center bg-black text-white md:flex md:justify-between md:items-center">
            <Menu theme="dark" mode="vertical" className="mb-4 md:mb-0">
                <Menu.Item>
                    <Link href={'/'}>
                        <p className="text-white">Home</p>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href={'/shop'}>
                        <p className="text-white">Shop</p>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href={'/about'}>
                        <p className="text-white">About</p>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href={'/contact'}>
                        <p className="text-white">Contact</p>
                    </Link>
                </Menu.Item>

            </Menu>
            <div className="text-gray-500 mx-5">
                <h2 className="text-xl font-semibold mb-2">About Us</h2>
                <p className="text-sm ">
                    Atlas Builder is a leading online store for all your PC building needs.
                    We offer a wide range of high-quality components, including CPUs,
                    motherboards, RAM, power supply units, storage devices, monitors, and more.
                    Our mission is to provide our customers with the best products and services,
                    making it easy and enjoyable to build their dream PC.
                </p>
            </div>
            <div className="text-gray-500 mb-4 md:mb-0">
                <p>Subscribe to our newsletter:</p>
                <input
                    type="text"
                    placeholder="Enter your email"
                    className="bg-gray-300 px-2 py-1 rounded-md text-black"
                />
                <button className="bg-blue-600 text-white px-4 py-1 ml-2 rounded-md">
                    Subscribe
                </button>
                <p className="text-gray-500 my-10">
                    Atlas Builder ©2023 Created by senseiX
                </p>
            </div>

        </Footer>
    );
};

export default FooterComponent;
