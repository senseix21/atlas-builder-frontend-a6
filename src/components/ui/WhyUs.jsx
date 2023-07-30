import React from 'react';


const WhyUs = () => {
    return (
        <div className='lg:flex justify-between items-center my-10'>
            <img className='mx-auto' src='https://i.ibb.co/tbntQPg/bc21dc2c-4c84-40d0-8b1a-ed5904cc41a5-removebg-preview.png' width={350} />
            <div>
                <h1 className='text-5xl'>Why choose Atlas Builder <br /> <span className='text-orange-600'> for your dream PC</span></h1>
                <p className='text-xl my-5'>
                    At Atlas, we are your trusted partner in providing top-quality products and services that exceed your expectations.
                    With a team of passionate experts, a wide selection of premium offerings,
                    and a customer-centric approach, we stand out as your best choice.
                    Enjoy the convenience of fast and reliable shipping, secure shopping,
                    and transparent policies.
                </p>
            </div>
        </div>
    );
};

export default WhyUs;