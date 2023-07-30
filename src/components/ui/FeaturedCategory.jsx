import Link from 'next/link';
import React from 'react';

const FeaturedCategory = () => {

    const categories = [
        {
            title: 'Processor/CPU',
            img: 'https://i.ibb.co/LPBFJt0/cpu.png',
            link: '/shop/processor'
        },
        {
            title: 'Motherboard',
            img: 'https://i.ibb.co/RQ6ppPV/motherboard.png',
            link: '/shop/motherboard'

        },
        {
            title: 'RAM',
            img: 'https://i.ibb.co/5vZD82g/ram.png',
            link: '/shop/ram'

        },
        {
            title: 'Monitor',
            img: 'https://i.ibb.co/z4r4csK/monitor.png',
            link: '/shop/monitor'

        },
        {
            title: 'Power Supply Unit',
            img: 'https://i.ibb.co/DW49SxF/power.png',
            link: '/shop/power'

        },

        {
            title: 'Storage Device',
            img: 'https://i.ibb.co/YBJk2pn/ssd.png',
            link: '/shop/storage'

        },

    ];


    return (
        <>
            <h2 className='text-4xl text-bold text-left my-3'>
                Our Featured <span className='text-orange-600'>Categories</span>
            </h2>
            <div className='grid lg:grid-cols-3 gap-5 border-r-2'>
                {
                    categories.map(category =>
                        <Link key={category.title} href={category.link} className='flex items-center bg-black text-white rounded-lg '>
                            <img src={category.img} alt="" width={80} />
                            <p>{category.title}</p>
                        </Link>)
                }
            </div>
        </>
    );
};

export default FeaturedCategory;