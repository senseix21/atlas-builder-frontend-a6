import RootLayout from '@/components/layouts/RootLayout';
import BuilderProducts from '@/components/ui/BuilderProducts';
import React from 'react';

const Monitor = ({ data }) => {
    console.log(data)
    return (
        <div className='grid lg:grid-cols-3 gap-5 '>
            {
                data.map(product =>
                    <BuilderProducts key={product._id} data={product} />)
            }
        </div>
    );
};

export default Monitor;

Monitor.getLayout = function (page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}

export const getServerSideProps = async (context) => {
    const res = await fetch(`https://atlas-builder-backend-a6.vercel.app/products`);
    const data = await res.json();
    // console.log(data);

    const products = data.filter((product) => product.category === 'Monitor');

    return {
        props: {
            data: products,
        },
    };
};