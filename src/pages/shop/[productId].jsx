import RootLayout from '@/components/layouts/RootLayout';
import React from 'react';
import { Button, Card } from 'antd';
const { Meta } = Card;

import { StarOutlined } from '@ant-design/icons';

const ProductDetails = ({ data }) => {
    const renderFeatures = () => {
        return (
            <div>
                <h2>Features:</h2>
                <ul>
                    {Object.entries(data.keyFeatures).map(([key, value]) => (
                        <li key={key}>
                            {key}: {value}
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    const renderReviews = () => {
        return (
            <div>
                <h2>Reviews:</h2>
                {data.reviews.map((review) => (
                    <div key={review.username}>
                        <p>
                            <strong>{review.username}</strong> - Rating: {review.rating}{' '}
                            {renderRatingStars(review.rating)}
                        </p>
                        <p>{review.comment}</p>
                    </div>
                ))}
            </div>
        );
    };

    const renderRatingStars = (rating) => {
        const starCount = 5;
        const fullStars = Math.floor(rating);
        const halfStar = rating - fullStars >= 0.5;
        const emptyStars = starCount - fullStars - (halfStar ? 1 : 0);

        return (
            <>
                {[...Array(fullStars)].map((_, index) => (
                    <StarOutlined key={`full-${index}`} />
                ))}
                {halfStar && <StarOutlined />}
                {[...Array(emptyStars)].map((_, index) => (
                    <StarOutlined key={`empty-${index}`} />
                ))}
            </>
        );
    };

    return (
        <div className='lg:flex justify-around p-10'>
            <Card
                hoverable
                style={{
                    width: 600,
                }}
                cover={<img alt="example" src={data?.imageUrl} />}
            >
            </Card>
            <div className='text-xl mx-10'>
                <h1>{data.name}</h1>
                <p>Category: {data.category}</p>
                <p>Status: {data.status}</p>
                <p>Price: {data.price}</p>
                <p>Description: {data.description}</p>
                {renderFeatures()}
                {renderReviews()}
                <p>
                    Average Rating: {data.averageRating} {renderRatingStars(data.averageRating)}
                </p>
                <p>
                    Individual Rating: {data.individualRating}{' '}
                    {renderRatingStars(data.individualRating)}
                </p>
                <div>
                    <Button type="primary" size="large" block>
                        Buy Now
                    </Button>
                </div>
            </div>

        </div>
    );
};

export default ProductDetails;

ProductDetails.getLayout = function (page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}


export const getStaticPaths = async () => {
    // Fetch the list of product IDs from your API
    const res = await fetch('https://atlas-builder-backend-a6.vercel.app/products');
    const data = await res.json();

    // Get an array of all product IDs
    const productIds = data.map((product) => product._id);

    // Create an array of paths with the product IDs
    const paths = productIds.map((productId) => ({
        params: { productId: productId.toString() },
    }));

    return {
        paths,
        fallback: false, // or true if you want to enable fallback behavior
    };
};

export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`https://atlas-builder-backend-a6.vercel.app/products/${params.productId}`);
    const product = await res.json();

    return {
        props: {
            data: product,
        },
    };
};