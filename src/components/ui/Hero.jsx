import React from 'react';
import heroImg from '../../assets/hero-removebg-preview.png'
import { Image } from 'antd';

const Hero = () => {
    return (
        <div className='lg:flex justify-between items-center'>
            <img className='mx-auto w-1/2' src='https://i.ibb.co/sgvJvQp/OIG-removebg-preview.png' />
            <div>
                <h1 className='text-5xl'>Design, Customize, Dominate: <br /> <span className='text-orange-600'> The PC Builder's Haven</span></h1>
                <p className='text-xl my-5'>
                    Welcome to our PC Builder website,
                    where you have the power to bring your dream PC to life.
                    Whether you're a passionate gamer, a creative professional.
                </p>
            </div>
        </div>
    );
};

export default Hero;