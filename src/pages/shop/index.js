import React from 'react';
import Products from '@/components/ui/Products';
import RootLayout from '@/components/layouts/RootLayout';

const Shop = ({ data }) => {
    return (
        <div className='grid lg:grid-cols-4 gap-5'>
            {
                data.map(product =>
                    <Products key={product._id} data={product} />
                )
            }
        </div>
    );
};

export default Shop;

Shop.getLayout = function (page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://atlas-builder-backend-a6.vercel.app/products')
    const data = await res.json()

    return {
        props: {
            data: data,
        },
    }
}

