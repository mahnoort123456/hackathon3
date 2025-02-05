

'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client'; // Assuming this is your configured Sanity client

interface Product {
  _id: string;
  title: string;
  image: string;
}

const Explor = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // GROQ Query to Fetch the First 4 Products
  const productQuery = `
    *[_type == "products"] [0...4] {
      _id,
      title,
      "image": image.asset->url
    }
  `;

  // Fetch Products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await client.fetch(productQuery);
        setProducts(result);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [productQuery]);

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      {/* Main Container */}
      <div className="relative flex flex-col lg:flex-row gap-4">
        {/* Main Heading */}
        <h1 className="text-center text-lg md:text-2xl lg:text-4xl lg:absolute lg:top-[300px] lg:left-[-320px] lg:rotate-90 z-10">
          Explore new and popular cool styles
        </h1>

        {/* Main Image */}
        <div className="relative w-full h-[300px] sm:h-[400px] lg:w-[670px] lg:h-[670px]">
          <Image
            alt="Main Chair"
            src={require("../../../public/image/Image (2).png")}
            width={648}
            height={648}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Grid of 4 Smaller Images */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 lg:gap-4">
          {products.map((product, index) => (
            <div
              key={product._id}
              className="relative w-full h-[150px] sm:h-[200px] md:h-[250px] lg:w-[312px] lg:h-[312px] p-1"
            >
              <Image
                alt={`Product ${index + 1}`}
                src={product.image}
                width={312}
                height={312}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explor;