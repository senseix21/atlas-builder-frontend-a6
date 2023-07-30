import { Button, Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Meta } = Card;
const Featureddatas = ({ data }) => {
    console.log(data, 'Featured');
    return (
        <Link href={`/shop/${data._id}`}>
            <Card
                style={{
                    width: 300,
                }}
                cover={
                    <img className='p-5'
                        alt={data.name}
                        src={data.imageUrl}
                        // width={300}
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
    );
};

export default Featureddatas;


