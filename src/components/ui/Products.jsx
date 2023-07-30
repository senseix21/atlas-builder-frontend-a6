import { Button, Card } from 'antd';
import Link from 'next/link';
import React from 'react';

const { Meta } = Card;


const Products = ({ data }) => {
    console.log(data)
    return (
        <div>
            <Link href={`/shop/${data?._id}`}>
                <Card
                    style={{
                        width: 300,
                    }}
                    cover={
                        <img className='p-5'
                            alt={data.name}
                            src={data.imageUrl}
                            height={300}
                        />
                    }

                >
                    <Meta
                        title={data.name}
                        description={`Category: ${data.category}
                    \nPrice: $${data.price}
                    \nStatus: ${data.status}
                    \nRating: ${data.averageRating} Stars`}
                    />
                    <Button type="default" block className='bg-orange-600 text-white my-2'>
                        Buy Now
                    </Button>
                </Card>

            </Link>
        </div>
    );
};

export default Products;