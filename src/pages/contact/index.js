import RootLayout from '@/components/layouts/RootLayout';
import React from 'react';

const Contact = () => {
    return (
        <div className='lg:flex justify-between items-center lg:mx-20 my-10'>
            <img className='mx-auto w-1/2' src='https://i.ibb.co/tB95Vcw/OIG-m-Q5-J05-W1m-removebg-preview.png' />
            <div>
                <h1 className='text-5xl'>Welcome to
                    <br /> <span className='text-orange-600'>  Our Story</span></h1>
                <p className='text-xl my-5'>
                    At Atlas builder, we are passionate about delivering high-quality products and exceptional services to our valued customers.
                    With years of experience in the industry, we have built a reputation for excellence and innovation.
                </p>
            </div>
        </div>
    );
};

export default Contact;

Contact.getLayout = function (page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}