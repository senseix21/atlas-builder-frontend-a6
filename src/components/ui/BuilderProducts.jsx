import { addToPcBuilder } from '@/redux/features/pc-builder/pcBuilderSlice';
import { Button, Card, message } from 'antd';
import Link from 'next/link';
import { Router, useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';

const { Meta } = Card;

const BuilderProducts = ({ data }) => {
    const navigate = useRouter();
    const dispatch = useDispatch();
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.success('Component added successfully!');
    };

    const handleAddToBuilder = async (data, category) => {
        dispatch(addToPcBuilder({ category: category, component: data }));
        success();
        await navigate.push('/pc-builder')
    };



    return (
        <div>
            <Card
                style={{
                    width: 300,
                }}
                cover={
                    <img className='p-5'
                        alt={data?.name}
                        src={data?.imageUrl}
                        height={300}
                    />
                }

            >
                <Meta
                    title={data.name}
                    description={`Category: ${data?.category}
                    \nPrice: $${data?.price}
                    \nStatus: ${data?.status}
                    \nRating: ${data?.averageRating} Stars`}
                />
                {contextHolder}
                <Button onClick={() => handleAddToBuilder(data, data.category
                )} type="default" block className='bg-orange-600 text-white my-2'>
                    Add to builder
                </Button>
            </Card>

        </div>
    );
};

export default BuilderProducts;