'use client';
import Image from 'next/image'
import React from 'react'

const HeroPage = () => {
  return (
    <div className='bg-white'>
        
        <section className="bg-gray-100 text-gray-600 body-font">
       
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    <p className='text-[#272343]'>WELCOME TO CHAIRY</p>
    <br/>
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-[#272343]">
        Best Furniture
        <br/>
        Collection For Your<br/>
        Interior.
      </h1>
      
      <br/>
      <div className="flex w-full md:justify-start justify-center items-end">
        
        <button className="inline-flex text-white bg-[#029FAE] border-0 py-2 px-6 focus:outline-none hover:bg-[#029FAE] rounded text-lg">
          Shop Now -&gt;
        </button>
      </div>
      
     </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        src={require('../../../public/image/Product Image (1).png')}
      />
    </div>
  </div>
</section>

<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
<Image
src={require('../../../public/image/Company Logo.png')}
alt=''
className='bg-white justify-center items-center'
/>
</div>
</div>
              
    </div>








  )
}

export default HeroPage