import RootLayout from '@/components/layouts/RootLayout';
import Products from '@/components/ui/Products';
import React from 'react';

const Motherboard = ({ data }) => {
    console.log(data?.length);
    return (
        <div className='grid lg:grid-cols-3 gap-5'>
            {
                data.map(product =>
                    <Products key={product?._id} data={product}></Products>
                )
            }
        </div>
    );
};

export default Motherboard;

Motherboard.getLayout = function (page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://atlas-builder-backend-a6.vercel.app/products');
    const data = await res.json();

    // Filter the data with "Motherboard" category
    const motherboardProducts = data.filter((product) => product.category === 'Motherboard');

    return {
        props: {
            data: motherboardProducts,
        },
    };
}
