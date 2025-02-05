// // components/Featured.tsx
// 'use client'

// import React from 'react';
// import Card from './ProductsCard';

// interface ImageData {
//   src: string;
//   alt: string;
//   title: string;
//   price: string;
// }

// const images: ImageData[] = [
//   {
//     src: '/Image (1).png',
//     alt: 'Shooting Stars',
//     title: 'Shooting Stars',
//     price: '$99.99'
//   },
//   {
//     src: '/Image (2).png',
//     alt: 'The Catalyzer',
//     title: 'The Catalyzer',
//     price: '$199.99'
//   },
//   {
//     src: '/Image (3).png',
//     alt: 'The Chair',
//     title: 'Comfortable Chair',
//     price: '$149.99'
//   }
// ];

// const Featured: React.FC = () => {
//   return (
//     <section className="text-gray-600 body-font">
//       <div className="container px-5 py-24 mx-auto">
//         <div className="flex flex-col mb-12">
//           <div className="flex flex-wrap sm:flex-row flex-col py-6">
//             <h1 className="sm:w-2/5 text-gray-900 font-bold title-font text-3xl mb-2 sm:mb-0">
//               FEATURED PRODUCTS
//             </h1>
//           </div>
//         </div>
//         <div className="flex flex-wrap justify-center items-center sm:-m-4 -mx-4 -mb-10 -mt-4">
//           {images.map((image, index) => (
//             <Card 
//               key={index} 
//               src={image.src} 
//               alt={image.alt} 
//               title={image.title} 
//               price={image.price} 
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Featured;
// "use client"


// import { useEffect, useState } from "react";
// import {client} from "@/sanity/lib/client"; // Import your configured Sanity client
// import Card from "./ProductsCard";

// const Featured = () => {
//   const [products, setProducts] = useState([]);

//   // GROQ Query for Featured Products
//   const query = `
//     *[_type == "featured" in tags][0....4] {
//       _id,
//       title,
//       price,
//       "priceWithoutDiscount": priceWithoutDiscount,
//       "badge": badge,
//       "image": image.asset->url,
//       "category": category->title,
//       description,
//       inventory,
//       tags
//     }
//   `;

//   // Fetch Products on Component Mount
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const result = await client.fetch(query);
//         setProducts(result);
//       } catch (error) {
//         console.error("Error fetching featured products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       <section className="text-gray-600 bg-white body-font">
//         <div className="container px-5 py-24 mx-auto">
//           <div className="flex flex-wrap w-full mb-20">
//             <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//               <span>
//                 <h1 className="mr-5 text-black font-bold text-3xl border-l-8 pl-3 ml-1">
//                   FEATURED PRODUCTS
//                 </h1>
//               </span>
//               <nav className="md:ml-auto flex flex-wrap items-center text-xl font-semibold text-black justify-center"></nav>
//             </div>

//             <div className="container mx-auto px-4 py-20">
//               <div className="grid grid-cols gap-6 sm:grid-cols-1 lg:grid-cols-4">
//                 {products.length > 0 ? (
//                   products.map((product) => (
//                     <Card key={product._id} product={product} />
//                   ))
//                 ) : (
//                   <p className="text-center text-gray-500">
//                     No featured products found.
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Featured;



// 'use client';
// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { ShoppingCart } from 'lucide-react';
// import { Badge } from '@/components/ui/badge';
// import { client } from '@/sanity/lib/client'; // Import your configured Sanity client

// type Product = {
//   _id: string;
//   title: string;
//   price: number;
//   priceWithoutDiscount?: number;
//   badge?: string;
//   image: string;
//   description?: string;
//   inventory?: number;
//   tags?: string[];
// };

// const Featured = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   // GROQ Query for Featured Products
//   const query = `
//     *[_type == "products" && "featured" in tags][0...4] {
//       _id,
//       title,
//       price,
//       "priceWithoutDiscount": priceWithoutDiscount,
//       "badge": badge,
//       "image": image.asset->url,
//       description,
//       inventory,
//       tags
//     }
//   `;

//   // Fetch Products on Component Mount
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const result = await client.fetch(query);
//         setProducts(result);
//       } catch (error) {
//         console.error('Error fetching featured products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       <section className="text-gray-600 bg-white body-font">
//         <div className="container px-5 py-24 mx-auto">
//           <div className="flex flex-wrap w-full mb-20">
//             <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//               <span>
//                 <h1 className="mr-5 text-black font-bold text-3xl border-l-8 pl-3 ml-1">
//                   FEATURED PRODUCTS
//                 </h1>
//               </span>
//             </div>

//             <div className="container mx-auto px-4 py-20">
//               <div className="grid grid-cols gap-6 sm:grid-cols-1 lg:grid-cols-4">
//                 {products.length > 0 ? (
//                   products.map((product) => (
//                     <div
//                       key={product._id}
//                       className="group relative rounded-lg bg-white"
//                     >
//                       <div className="relative aspect-square overflow-hidden rounded-lg">
//                         {product.badge && (
//                           <Badge className="absolute left-3 top-3 bg-emerald-500 hover:bg-emerald-600">
//                             {product.badge}
//                           </Badge>
//                         )}
//                         <Link href={`/product/${product._id}`}>
//                           <Image
//                             src={product.image}
//                             alt={product.title}
//                             height={400}
//                             width={400}
//                             className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
//                             aria-label={`View details of ${product.title}`}
//                           />
//                         </Link>
//                       </div>
//                       <div className="mt-4 flex items-center justify-between">
//                         <div>
//                           <h3 className="text-sm text-[#1C1B1F]">{product.title}</h3>
//                           <div className="mt-1 flex items-center gap-2">
//                             <span className="text-lg font-medium text-[#1C1B1F]">
//                               ${product.price}
//                             </span>
//                             {product.priceWithoutDiscount && (
//                               <span className="text-sm text-gray-500 line-through">
//                                 ${product.priceWithoutDiscount}
//                               </span>
//                             )}
//                           </div>
//                         </div>
//                         <button
//                           className="rounded-full bg-[#00B5A5] p-2 text-white transition-colors hover:bg-[#00A294]"
//                           aria-label={`Add ${product.title} to cart`}
//                         >
//                           <ShoppingCart className="h-5 w-5" />
//                         </button>
//                       </div>
//                     </div>
//                   ))
//                 ) : (
//                   <p className="text-center text-gray-500">
//                     No featured products found.
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Featured;


'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import toast, { Toaster } from "react-hot-toast"; 
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
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

const Featured = () => {
  const [  products, setProducts] = useState<Product[]>([]);
 
  const {  addProduct, qty }: any = useContext(CartContext);

  // GROQ Query for Featured Products
  const query = `
    *[_type == "products" && "featured" in tags][0...4] {
      _id,
      title,
      price,
      "priceWithoutDiscount": priceWithoutDiscount,
      "badge": badge,
      "image": image.asset->url,
      description,
      inventory,
      tags
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
    <div id="featured">
      <section className="text-gray-600 bg-white body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
              <span>
                <h1 className="mr-5 text-black font-bold text-3xl border-l-8 pl-3 ml-1">
                  FEATURED PRODUCTS
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

export default Featured;