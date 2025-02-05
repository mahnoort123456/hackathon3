"use client";
import React from 'react'
import { FaTruck } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { IoFileTrayOutline } from "react-icons/io5";
import { BiSolidLeaf } from "react-icons/bi";
import Image from "next/image";

const Aboutpage = () => {
    return (
      <div className="bg-white" id="about">
       
<div className="bg-white">
  <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center bg-white mt-16 md:mt-32 px-4">
      <div className="w-full md:w-[650px] h-auto md:h-[478px] bg-[#007580] p-6 flex flex-col justify-start items-start text-left text-white">
        <h1 className="text-[24px] md:text-[32px] font-bold pl-4 md:pl-6 pt-8 md:pt-12">
          About Us - Comforty
        </h1>
        <p className="text-[16px] md:text-[18px] font-normal pt-4 pl-4 md:pl-6 pb-12 md:pb-40">
          At Comforty, we believe that the right chair can transform your space
          and elevate your comfort. Specializing in ergonomic design, premium
          materials, and modern aesthetics, we craft chairs that seamlessly
          blend style with functionality.
        </p>
        <div className="pl-4 md:pl-6">
          <button className="bg-[#2e6a6d] text-white px-6 md:px-8 py-3 md:py-4 text-[14px] md:text-[16px] font-normal">
            View collection
          </button>
        </div>
      </div>
      <div className="w-full md:w-[619px] h-auto md:h-[478px] mt-6 md:mt-0 md:ml-6">
        <Image
          src={require('../../../public/image/Image Block (1).png')}
          alt="Comforty Image"
          width={619}
          height={478}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
       
<div className="max-w-screen-xl mx-auto mt-32 px-6">
      <h2 className="text-[32px] font-semibold text-center mb-12">
        What makes our Brand Different
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-[#F9F9F9] p-6 text-center">
          <h3 className="text-[20px] font-normal text-[#007580] flex items-center justify-center pt-5">
            <FaTruck className="text-[#007580] mb-2" />
            Next day as standard
          </h3>
          <p className="text-[16px] font-normal text-[#007580]  mt-4">
            Order before 3pm and get your order the next day as standard
          </p>
        </div>

        <div className="bg-[#F9F9F9] p-6 text-center">
          <h3 className="text-[20px] font-normal text-[#007580] flex items-center justify-center pt-5">
            <FaCheck className="text-[#007580] mr-2" />
            Made by true artisans
          </h3>
          <p className="text-[16px] font-normal text-[#007580] mt-4 text-left">
            Handmade crafted goods made with real passion and craftsmanship
          </p>
        </div>

        <div className="bg-[#F9F9F9] p-6 text-center">
          <h3 className="text-[20px] font-normal text-[#007580] flex items-center justify-center pt-5">
            <IoFileTrayOutline className="text-[#007580] mr-3" />
            Unbeatable prices
          </h3>
          <p className="text-[16px] font-normal text-[#007580] mt-4">
            For our materials and quality you won’t find better prices anywhere
          </p>
        </div>

        <div className="bg-[#F9F9F9] p-6 text-center">
          <h3 className="text-[20px] font-normal text-[#007580] flex items-center justify-center pt-5">
            <BiSolidLeaf className="text-[#007580] mr-3" />
            Recycled packaging
          </h3>
          <p className="text-[16px] font-normal text-[#007580] mt-4">
            We use 100% recycled material to ensure our footprint is more
            manageable
          </p>
        </div>
      </div>
    </div>

 <div className="max-w-screen-xl mx-auto mt-32 px-6">
      <h2 className="text-[32px] font-semibold text-left mb-12">
        Our Popular Products
      </h2>
      <div className="flex flex-col sm:flex-row lg:flex-row justify-between gap-8">
        <div className="text-center">
          <Image
            src={require("../../../public/image/Large.png")}
            alt="1"
            width={590}
            height={375}
            className="object-cover mx-auto"
          />
          <p className="pt-5 text-black text-[20px] font-normal text-left ">The Poplar Suede Sofa</p>
          <p className="pt-2 text-black text-[18px] font-normal mb-32 text-left ">$99.00</p>
        </div>
        <div className="text-center">
          <Image
            src={require('../../../public/image/Parent.png')}
            alt="2"
            width={305}
            height={375}
            className="object-cover mx-auto"
          />
          <p className="pt-5 text-black text-[20px] font-normal text-left ">The Dandy Chair</p>
          <p className="pt-2 text-black text-[18px] font-normal mb-32 text-left ">$99.00</p>
        </div>
        <div className="text-center">
          <Image
            src={require("../../../public/image/Photo.png")}
            alt="3"
            width={305}
            height={375}
            className="object-cover mx-auto"
          />
          <p className="pt-5 text-black text-[20px] font-normal text-left ">The Dandy Chair</p>
          <p className="pt-2 text-black text-[18px] font-normal mb-32 text-left ">$99.00</p>
        </div>
      </div>
    </div>
    </div>
          
      </div>
    );
}

export default Aboutpage