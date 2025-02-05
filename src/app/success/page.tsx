'use client';
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link';

const page = () => {
  return (
    <div className='flex flex-col gap-4 items-center justify-center h-screen text-center'>
        <p className='text-[#4F46E5] font-bold'>SUCCESS</p>
        <h1 className='text-3xl sm:text-5xl font-bold text-gray-900'>Your order has been placed! 🎉</h1>
        <p className='text-gray-600'>Thank you for your purchase!</p>
        <a href='/' className='mt-10 flex items-center justify-center gap-2 bg-[#4F46E5] text-white px-3.5 py-2.5 rounded-md font-semibold'>
            Continue shopping <FaArrowRightLong />
        </a>
        <Link href={"/shipments"}>
          <button className="px-6 py-3 bg-[#029FAE] text-white font-medium rounded-lg hover:bg-[#02a0aebd] transition">
             Track Your Order
          </button>
        </Link>
    </div>
  )
}

export default page