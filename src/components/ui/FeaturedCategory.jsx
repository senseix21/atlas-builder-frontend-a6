import React from 'react';

const FeaturedCategory = () => {

    const categories = [
        {
            title: 'Processor/CPU',
            img: 'https://i.ibb.co/LPBFJt0/cpu.png'
        },
        {
            title: 'Motherboard',
            img: 'https://i.ibb.co/RQ6ppPV/motherboard.png'
        },
        {
            title: 'RAM',
            img: 'https://i.ibb.co/5vZD82g/ram.png'
        },
        {
            title: 'Monitor',
            img: 'https://i.ibb.co/z4r4csK/monitor.png'
        },
        {
            title: 'Power Supply Unit',
            img: 'https://i.ibb.co/DW49SxF/power.png'
        },

        {
            title: 'Storage Device',
            img: 'https://i.ibb.co/YBJk2pn/ssd.png'
        },
        {
            title: 'Others',
            img: 'https://i.ibb.co/2gGh5Dx/others.png'
        },
    ];


    return (
        <>
            <h2 className='text-4xl text-bold text-left my-3'>
                Our Featured <span className='text-orange-600'>Categories</span>
            </h2>
            <div className='grid grid-cols-3 gap-5 border-r-2'>
                {
                    categories.map(category =>
                        <div className='flex items-center bg-orange-600 text-white '>
                            <img src={category.img} alt="" width={60} />
                            <p>{category.title}</p>
                        </div>)
                }
            </div>
        </>
    );
};

export default FeaturedCategory;