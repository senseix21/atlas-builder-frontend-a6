import RootLayout from '@/components/layouts/RootLayout';
import React from 'react';

const Home = () => {
  return (
    <div className='min-h-screen'>
      <h1 className="text-4xl">
        Hello from Atlas builder
      </h1>
    </div>
  );
};

export default Home;

Home.getLayout = function layout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}