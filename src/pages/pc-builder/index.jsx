import RootLayout from '@/components/layouts/RootLayout';
import { isAllComponentsAddedSelector } from '@/redux/features/pc-builder/pcBuilderSlice';
import { Button, Card, message } from 'antd';
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


const PcBuilder = () => {
    const pcBuilder = useSelector((state) => state.PCBuilder);
    const cpu = pcBuilder?.Processor[0]
    const motherboard = pcBuilder?.Motherboard[0]
    const monitor = pcBuilder?.Monitor[0]
    const ram = pcBuilder?.RAM[0]
    const power = pcBuilder?.PowerSupplyUnit[0]
    const storage = pcBuilder?.Storage[0]
    const others = pcBuilder?.Others[0]

    const dispatch = useDispatch();
    const isAllComponentsAdded = useSelector(isAllComponentsAddedSelector);

    console.log(pcBuilder)
    const isAnyArrayEmpty = Object.values(pcBuilder).some((arr) => arr.length === 0);
    console.log(isAnyArrayEmpty)


    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.success('Hoorayy! You have successfully built your dream pc.');
    };

    return (
        <div>
            <h1 className='text-4xl text-center '>Build your <span className='text-orange-600'>dream pc toady.</span></h1>
            <div>
                <Card title="Atlas PC Builder " className='lg:w-3/4 mx-auto w-full'>
                    <div className='lg:flex justify-between'>
                        <div className='flex'>
                            <img src='https://i.ibb.co/LPBFJt0/cpu.png' width={80} alt="" />
                            <div>
                                <h3>Processor/CPU</h3>
                                <div className='flex'>
                                    <img src={cpu?.imageUrl} alt="" width={30} />
                                    <p className='text-md font-bold mx-2'>{cpu?.name}</p>
                                </div>
                            </div>

                        </div>
                        <div className='flex items-center'>
                            <h4>Price: {cpu?.price}</h4>
                            <Button ><Link href={'/pc-builder/processor'}>Choose</Link></Button>
                        </div>
                    </div>
                    <div className='lg:flex justify-between'>
                        <div className='flex'>
                            <img src='https://i.ibb.co/RQ6ppPV/motherboard.png' width={80} alt="" />
                            <div>
                                <h3>Motherboard</h3>
                                <div className='flex'>
                                    <img src={motherboard?.imageUrl} alt="" width={30} />
                                    <p className='font-bold'>{motherboard?.name}</p>
                                </div>
                            </div>

                        </div>
                        <div className='flex items-center justify-between'>
                            <h4>Price: ${motherboard?.price}</h4>
                            <Button ><Link href={'/pc-builder/motherboard'}>Choose</Link></Button>
                        </div>
                    </div>
                    <div className='lg:flex justify-between'>
                        <div className='flex'>
                            <img src='https://i.ibb.co/DW49SxF/power.png' width={80} alt="" />
                            <div>
                                <h3>Power Supply Unit</h3>
                                <div className='flex'>
                                    <img src={power?.imageUrl} alt="" width={30} />
                                    <p className='font-bold'>{power?.name}</p>
                                </div>
                            </div>

                        </div>
                        <div className='flex items-center justify-between'>
                            <h4>Price: ${power?.price}</h4>
                            <Button ><Link href={'/pc-builder/power'}>Choose</Link></Button>
                        </div>
                    </div>
                    <div className='lg:flex justify-between'>
                        <div className='flex'>
                            <img src='https://i.ibb.co/z4r4csK/monitor.png' width={80} alt="" />
                            <div>
                                <h3>Monitor</h3>
                                <div className='flex'>
                                    <img src={monitor?.imageUrl} alt="" width={30} />
                                    <p className='font-bold'>{monitor?.name}</p>
                                </div>
                            </div>

                        </div>
                        <div className='flex items-center justify-between'>
                            <h4>Price: ${monitor?.price}</h4>
                            <Button ><Link href={'/pc-builder/monitor'}>Choose</Link></Button>
                        </div>
                    </div>
                    <div className='lg:flex justify-between'>
                        <div className='flex'>
                            <img src='https://i.ibb.co/5vZD82g/ram.png' width={80} alt="" />
                            <div>
                                <h3>RAM</h3>
                                <div className='flex'>
                                    <img src={ram?.imageUrl} alt="" width={30} />
                                    <p className='font-bold'>{ram?.name}</p>
                                </div>
                            </div>

                        </div>
                        <div className='flex items-center justify-between'>
                            <h4>Price: ${ram?.price}</h4>
                            <Button ><Link href={'/pc-builder/ram'}>Choose</Link></Button>
                        </div>
                    </div>
                    <div className='lg:flex justify-between'>
                        <div className='flex'>
                            <img src='https://i.ibb.co/YBJk2pn/ssd.png' width={80} alt="" />
                            <div>
                                <h3>Storage Device</h3>
                                <div className='flex'>
                                    <img src={storage?.imageUrl} alt="" width={30} />
                                    <p className='font-bold'>{storage?.name}</p>
                                </div>
                            </div>

                        </div>
                        <div className='flex items-center justify-between'>
                            <h4>Price: ${storage?.price}</h4>
                            <Button ><Link href={'/pc-builder/storage'}>Choose</Link></Button>
                        </div>
                    </div>
                    <div className='lg:flex justify-between'>
                        <div className='flex'>
                            <img src='https://i.ibb.co/2gGh5Dx/others.png' width={80} alt="" />
                            <div>
                                <h3>Others</h3>
                                <div className='flex'>
                                    <img src={others?.imageUrl} alt="" width={30} />
                                    <p className='font-bold'>{others?.name}</p>
                                </div>
                            </div>

                        </div>
                        <div className='flex items-center justify-between'>
                            <h4>Price: ${others?.price}</h4>
                            <Button ><Link href={'/pc-builder/others'}>Choose</Link></Button>
                        </div>
                    </div>

                    {contextHolder}
                    <Button className='bg-orange-600' disabled={isAnyArrayEmpty} type="primary" onClick={success} block  >
                        COMPLETE BUILD
                    </Button>
                </Card>
            </div>
        </div>
    );
};

export default PcBuilder;

PcBuilder.getLayout = (page) => {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}