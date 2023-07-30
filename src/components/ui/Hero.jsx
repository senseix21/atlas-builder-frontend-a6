import { Button } from 'antd';
import Link from 'next/link';
import React from 'react';


const Hero = () => {
    return (
        <div className='lg:flex justify-between items-center my-10'>
            <img className='items-center' src='https://i.ibb.co/sgvJvQp/OIG-removebg-preview.png' width={400} />
            <div>
                <h1 className='text-5xl'>Design, Customize, Dominate: <br /> <span className='text-orange-600'> The PC Builder's Haven</span></h1>
                <p className='text-xl my-5'>
                    Welcome to our PC Builder website,
                    where you have the power to bring your dream PC to life.
                    Whether you're a passionate gamer, a creative professional.
                </p>
                <Link href={'/pc-builder'}>
                    <Button type='primary' danger size='large' className=' text-xl'>Build Your Dream PC</Button>
                </Link>
            </div>
        </div>
    );
};

export default Hero;