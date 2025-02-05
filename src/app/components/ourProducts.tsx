// 'use client'
// import Link from 'next/link';
// import React from 'react';
// import { FiShoppingCart } from 'react-icons/fi';
// import Image from 'next/image';  // Import Image from Next.js

// interface ImageData {
//   src: string;
//   alt: string;
//   title: string;
//   price: string;  // Added price property
// }

// const images: ImageData[] = [
//   {
//     src: '/Image (1).png',
//     alt: 'Shooting Stars',
//     title: 'Shooting Stars',
//     price: '$99.99'  // Added price
//   },
//   {
//     src: '/Image (2).png',
//     alt: 'The Catalyzer',
//     title: 'The Catalyzer',
//     price: '$199.99'  // Added price
//   },
//   {
//     src: '/Image (3).png',
//     alt: 'The Chair',
//     title: 'Comfortable Chair',
//     price: '$149.99'  // Added price
//   },
//   {
//     src: '/white-foam-chair.png',
//     alt: 'The Chair',
//     title: 'Comfortable Chair',
//     price: '$149.99'  // Added price
//   },
//   {
//     src: '/white-foam-chair.png',
//     alt: 'The Chair',
//     title: 'Comfortable Chair',
//     price: '$149.99'  // Added price
//   },
//   {
//     src: '/Image.png',
//     alt: 'The Chair',
//     title: 'Comfortable Chair',
//     price: '$149.99'  // Added price
//   }
//   // Add more images as needed
// ];

// const OurProducts = () => {
//   return (
//     <section className="text-gray-600 body-font">
//       <div className="container px-5 py-24 mx-auto">
//         <div className="flex flex-col">
//           <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12 justify-center">
//             <h1 className="text-center sm:w-2/5 text-gray-900 font-bold title-font text-3xl mb-2 sm:mb-0">
//               OUR PRODUCTS
//             </h1>
//           </div>
//         </div>
//         <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
//           {images.map((image, index) => (
//             <div key={index} className="p-4 md:w-1/3 sm:mb-0 mb-6 relative">
//               <div className="rounded-lg h-64 overflow-hidden relative">
//                 {/* Wrap the image with a Link component */}
//                 <Link href={`/product/${image.title}`} passHref>
//                   <Image
//                     alt={image.alt}
//                     className="object-cover object-center h-full w-full cursor-pointer"
//                     src={image.src}
//                     width={500} // Adjust width as per your needs
//                     height={400} // Adjust height as per your needs
//                   />
//                 </Link>
//               </div>

//               {/* Product Title */}
//               <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{image.title}</h2>

//               {/* Price */}
//               <p className="text-lg text-gray-800 mt-2">{image.price}</p>

//               {/* Cart Icon - Bottom Center */}
//               <div className="absolute bottom-2 right-2 text-black p-2 rounded-full">
//                 <Link
//                   href="/productdetails"
//                   className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-300 transition"
//                 >
//                   <FiShoppingCart />
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurProducts;


// OurProducts.tsx
// OurProducts.tsx
// import React from 'react';

// import Card from '../components/ProductsCard';

// interface ImageData {
//   src: string;
//   alt: string;
//   title: string;
//   price: string; // Added price property
// }

// const images: ImageData[] = [
//   {
//     src: '/Image (1).png',
//     alt: 'Shooting Stars',
//     title: 'Shooting Stars',
//     price: '$99.99',
//   },
//   {
//     src: '/Image (2).png',
//     alt: 'The Catalyzer',
//     title: 'The Catalyzer',
//     price: '$199.99',
//   },
//   {
//     src: '/Image (3).png',
//     alt: 'The Chair',
//     title: 'Comfortable Chair',
//     price: '$149.99',
//   },
//   {
//     src: '/white-foam-chair.png',
//     alt: 'The Chair',
//     title: 'Comfortable Chair',
//     price: '$149.99',
//   },
//   {
//     src: '/Image.png',
//     alt: 'The Chair',
//     title: 'Comfortable Chair',
//     price: '$149.99',
//   },
  
//   {
//     src: '/white-foam-chair.png',
//     alt: 'The Chair',
//     title: 'Comfortable Chair',
//     price: '$149.99',
//   }
// ];

// const OurProducts = () => {
//   return (
//     <section className="text-gray-600 body-font">
//       <div className="container px-5 py-24 mx-auto">
//         <div className="flex flex-col">
//           <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12 justify-center">
            // <h1 className="text-center sm:w-2/5 text-gray-900 font-bold title-font text-3xl mb-2 sm:mb-0">
            //   OUR PRODUCTS
            // </h1>
//           </div>
//         </div>
//         <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
//           {images.map((product, index) => (
//             <Card
//               key={index}
//               src={product.src}
//               alt={product.alt}
//               title={product.title}
//               price={product.price}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurProducts;

'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { client } from '@/sanity/lib/client'; // Import your configured Sanity client

type Product = {
  _id: string;
  title: string;
  price: number;
  priceWithoutDiscount?: number;
  badge?: string;
  image: string;
  description?: string;
  inventory?: number;
  tags?: string[];
};

const OurProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // GROQ Query for Featured Products
  const query = `
    *[_type == "products"] [4...12] {
      _id,
      title,
      "image": image.asset->url,
      price,
      originalPrice,
      isNew,
      isSale
    }
  `;

  // Fetch Products on Component Mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await client.fetch(query);
        setProducts(result);
      } catch (error) {
        console.error('Error fetching featured products:', error);
      }
    };

    fetchProducts();
  }, [query]);

  return (
    <div id="our-product">
      <section className="text-gray-600 bg-white body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
              <span>
                <h1 className="mr-5 text-black font-bold text-3xl border-l-8 pl-3 ml-1">
                  OUR PRODUCTS
                </h1>
              </span>
            </div>
            <div className="container mx-auto px-4 py-20">
              <div className="grid grid-cols gap-6 sm:grid-cols-1 lg:grid-cols-4">
                {products.length > 0 ? (
                  products.map((product) => (
                    <div key={product._id} className="group relative rounded-lg bg-white">
                      <div className="relative aspect-square overflow-hidden rounded-lg">
                        {product.badge && (
                          <Badge className="absolute left-3 top-3 bg-emerald-500 hover:bg-emerald-600">
                            {product.badge}
                          </Badge>
                        )}
                        <Link href={`/product/${product._id}`}>
                          <Image
                            src={product.image}
                            alt={product.title}
                            height={400}
                            width={400}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            aria-label={`View details of ${product.title}`}
                          />
                        </Link>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div>
                          <h3 className="text-sm text-[#1C1B1F]">{product.title}</h3>
                          <div className="mt-1 flex items-center gap-2">
                            <span className="text-lg font-medium text-[#1C1B1F]">
                              ${product.price}
                            </span>
                            {product.priceWithoutDiscount && (
                              <span className="text-sm text-gray-500 line-through">
                                ${product.priceWithoutDiscount}
                              </span>
                            )}
                          </div>
                        </div>
                        <button
                          className="rounded-full bg-[#00B5A5] p-2 text-white transition-colors hover:bg-[#00A294]"
                          aria-label={`Add ${product.title} to cart`}
                        >
                          <ShoppingCart className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500">
                    No featured products found.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurProducts;