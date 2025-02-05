'use client';
import Image from 'next/image';
import Link from 'next/link';
import {  SignInButton, UserButton } from "@clerk/nextjs";
import React, { useContext } from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { CartContext } from '../context/CartContext';
import { ComboboxDemo } from './searchButton';
import { FiUser } from "react-icons/fi";
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';

const HeaderPage = () => {
  const { user, isSignedIn } = useUser();
  const {totalQuantity, wishlistItems, showCart, setShowCart} : any = useContext(CartContext);
  
  const handleClick = () => {
    setShowCart(!showCart);
  }
 


  return (
    <div>
        <header className="bg-[#272343] text-white-600 body-font text-[13px]">
   <div className="container mx-auto text-white flex flex-wrap p-5 flex-col md:flex-row items-center">
   <span>
                 <Image
         src={require('../../../public/image/check 1.png')}
         alt=''
         width={16}
         className='mr-2'
         height={16}/>
         </span>
         <span>Free Shipping On All Orders Over $50</span>
     <nav className="md:ml-auto flex flex-wrap items-center text-base text-[13px] justify-center">

       <Link href={''} className="mr-5 hover:text-white-900 flex"><Image src={require('../../../public/image/ENG.png')} alt=''/></Link>
       {/* Eng<span><RiArrowDropDownLine className='mr-1' /></span> */}
       <Link href={'/faqs'} className="mr-5 hover:text-white-900"><Image src={require('../../../public/image/Faqs.png')} alt=''/></Link>
       <Link href={'/need-help'} className="mr-5 hover:text-white-900 flex">
       <Image src={require('../../../public/image/Need Help (1).png')} 
       alt=''
       /></Link>
       {/* <span><CiCircleAlert className='mr-1'/></span> */}
     </nav>
   </div>
 </header>


    


       

<header className="text-black-600 bg-gray-100 body-font text-[18px]">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image src={require('../../../public/image/Logo Icon.png')} alt='' />
      <span className="ml-3 text-2xl font-semibold">Comforty</span>
    </a>

    <div>
      <ComboboxDemo/>
    </div>

    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center text-[#000] font-medium space-x-6">
      
      <Link href={"/cart"} className='relative flex items-center gap-2 px-4 py-2 border rounded hover:bg-white transition' onClick={handleClick} >  {/** cart-icon */}
      <span> <FaCartShopping size={24} /></span>
      {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#007580] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalQuantity}
              </span>
            )}
            <span>Cart</span>
      </Link>
     
     
      <Link href={'/wishlist'} className="relative flex items-center gap-2 px-4 py-2 border rounded hover:bg-white transition">
        <FaRegHeart size={24} />
        {wishlistItems?.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#007580] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {wishlistItems.length}
              </span>
            )}
            <span>WishList</span>
        </Link>


      
      {isSignedIn ? (
              <div className="flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md hover:shadow-none">
                <UserButton />
                <div className="text-xs">
                  <p className="font-bold">{user?.fullName}</p>
                </div>
              </div>
            ) : (
              <SignInButton mode="modal">
                <div className="flex items-center text-sm gap-2 border border-gray-200 px-4 py-2 rounded-md shadow-md cursor-pointer hover:shadow-none">
                  <FaUserCircle className="text-2xl text-darkBlue" />  {/** FiUser */}
                  <span className='font-semibold'>Account</span>
                </div>
              </SignInButton>
            )}
      
     
    </nav>
  </div>
</header>




      <header className="text-black bg-white body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
     <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
       <Link href={'/'} className="mr-5 hover:text-[#007580]">Home</Link>
       <Link href={'/shop'} className="mr-5 hover:text-[#007580]">Shop</Link>
       <Link href={'/products'} className="mr-5 hover:text-[#007580]">Product</Link>
       <Link href={'/pages'} className="mr-5 hover:text-[#007580]">Pages</Link>
       <Link href={'/about'} className="mr-5 hover:text-[#007580]">About</Link>
     </nav>
    
     <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
     </a>
     <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
       <p className="inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
        
       <p className='text-gray-400'>Contact: <span className='text-black'>(808) 555-0111</span> </p> 
      </p>
   </div>
   </div>
</header>

      
    </div>
  );
};

export default HeaderPage;












