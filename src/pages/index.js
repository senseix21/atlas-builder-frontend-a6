import RootLayout from '@/components/layouts/RootLayout';
import FeaturedCategory from '@/components/ui/FeaturedCategory';
import FeaturedProducts from '@/components/ui/FeaturedProducts';
import Hero from '@/components/ui/Hero';
import WhyUs from '@/components/ui/WhyUs';
import React from 'react';

const Home = ({ data }) => {
  console.log(data, 'home');

  return (
    <div className='min-h-screen'>
      <Hero />

      <div className=' w-full my-10'>
        <h2 className='text-4xl text-bold text-left my-3'>
          Our Featured <span className='text-orange-600'>Computer Products</span>
        </h2>
        <div className='grid lg:grid-cols-3 gap-3'>
          {
            data?.map((item) =>
              <FeaturedProducts key={item._id} data={item}></FeaturedProducts>
            )
          }
        </div>
      </div>

      <FeaturedCategory />
      <WhyUs />


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

export async function getStaticProps() {
  const res = await fetch('https://atlas-builder-backend-a6.vercel.app/products')
  const data = await res.json()

  // Shuffle the array of products to get random order
  const shuffledProducts = data.sort(() => 0.5 - Math.random());

  // Select the first 6 products from the shuffled array
  const randomProducts = shuffledProducts.slice(0, 6);

  return {
    props: {
      data: randomProducts,
    },
  }
}