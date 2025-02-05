

// 'use client';

// import Link from 'next/link';
// import { FiShoppingCart } from 'react-icons/fi';
// import Image from 'next/image';
// import React, { useEffect, useState } from 'react';
// import { groq } from 'next-sanity';
// import { client } from '@/sanity/lib/client';
// import { urlFor } from '@/sanity/lib/image';
// import Cards from '../components/card';

// const Card = () => {
//   const [products, setProducts] = useState<any[]>([]);

//   // Fetch products from Sanity
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const fetchedProducts = await client.fetch(groq`*[_type == "product"]`);
//         setProducts(fetchedProducts);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Check if no products are available
//   if (products.length === 0) {
//     return <p className="text-center text-gray-500">No products available.</p>;
//   }

//   // return (
//   //   <div
//   //     className={`grid ${
//   //       products.length === 1
//   //         ? 'grid-cols-1'
//   //         : products.length === 2
//   //         ? 'grid-cols-2'
//   //         : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
//   //     } gap-6 px-6 py-8`}
//   //   >
//   //     {products.map((product: any, index: number) => {
//   //       const imageUrl = product.image ? urlFor(product.image).url() : '/placeholder-image.png';

//   //       return (
//   //         <div
//   //           key={index}
//   //           className="border rounded-lg overflow-hidden shadow hover:shadow-xl transition transform hover:-translate-y-1 bg-white group"
//   //         >
//   //           {/* Product Image */}
//   //           <div className="relative h-64">
//   //             <Image
//   //               alt={product.name || 'Unnamed Product'}
//   //               className="object-cover object-center w-full h-full transition-transform duration-300 group-hover:scale-105"
//   //               src={imageUrl}
//   //               width={500}
//   //               height={400}
//   //             />
//   //           </div>

//   //           {/* Product Details */}
//   //           <div className="p-4">
//   //             <h2 className="text-lg font-medium text-gray-900 truncate">
//   //               {product.name || 'Unnamed Product'}
//   //             </h2>
//   //             <p className="text-gray-600 text-sm mb-4">
//   //               {product.description || 'No description available'}
//   //             </p>
//   //             <p className="text-lg font-bold text-gray-800">${product.price || 'N/A'}</p>
//   //           </div>

//   //           {/* Add to Cart */}
//   //           <div className="p-4 flex justify-end">
//   //             <Link
//   //               href={`/product/${product.slug?.current || ''}`}
//   //               className="flex items-center gap-2 px-4 py-2 bg-gray-100 border rounded-lg text-gray-700 hover:bg-gray-200 hover:text-black transition"
//   //             >
//   //               <FiShoppingCart />
//   //             </Link>
//   //           </div>
//   //         </div>
//   //       );
//   //     })}
//   //   </div>
//   //)

//   return(
//     <div>
//     <Cards/>
//   </div>
//   )




// };

// export default Card;



// 'use client';
// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { ShoppingCart } from 'lucide-react';
// import { Badge } from '@/components/ui/badge';
// import { client } from '@/sanity/lib/client'; // Import your configured Sanity client
// import Newslatter from '../components/Newslatter';

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
//   slug:string
// };

// const Cards = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   // GROQ Query for All Featured Products
//   const query = `
//     *[_type == "products" ] {
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
//                   ALL PRODUCTS
//                 </h1>
//               </span>
//             </div>
//             <div className="container mx-auto px-4 py-20">
//               <div className="grid grid-cols gap-6 sm:grid-cols-1 lg:grid-cols-4">
//                 {products.length > 0 ? (
//                   products.map((product) => (
//                     <div key={product._id} className="group relative rounded-lg bg-white">
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


// {/* <Link href={`/products/${product.slug}`}>
//   <Image
//     src={product.image}
//     alt={product.title}
//     height={400}
//     width={400}
//     className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
//     aria-label={`View details of ${product.title}`}
//   />
// </Link> */}



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
//         <Newslatter/>
//       </section>
//     </div>
//   );
// };

// export default Cards;


// 'use client';
// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { ShoppingCart } from 'lucide-react';
// import { Badge } from '@/components/ui/badge';
// import { client } from '@/sanity/lib/client'; // Import your configured Sanity client
// import Newslatter from '../components/Newslatter';

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
//   slug: string;
// };

// const Cards = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   // GROQ Query for All Featured Products
//   const query = `
//     *[_type == "products"] {
//       _id,
//       title,
//       price,
//       "priceWithoutDiscount": priceWithoutDiscount,
//       "badge": badge,
//       "image": image.asset->url,
//       description,
//       inventory,
//       tags,
//       slug
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
//                   ALL PRODUCTS
//                 </h1>
//               </span>
//             </div>
//             <div className="container mx-auto px-4 py-20">
//               <div className="grid grid-cols gap-6 sm:grid-cols-1 lg:grid-cols-4">
//                 {products.length > 0 ? (
//                   products.map((product) => (
//                     <div key={product._id} className="group relative rounded-lg bg-white">
//                       <div className="relative aspect-square overflow-hidden rounded-lg">
//                         {product.badge && (
//                           <Badge className="absolute left-3 top-3 bg-emerald-500 hover:bg-emerald-600">
//                             {product.badge}
//                           </Badge>
//                         )}
//                         <Link href={`/product/${product}`}>
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
//         <Newslatter />
//       </section>
//     </div>
//   );
// };

// export default Cards;



// 'use client';
// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { ShoppingCart } from 'lucide-react';
// import { Badge } from '@/components/ui/badge';
// import { client } from '@/sanity/lib/client'; // Import your configured Sanity client
// import Newslatter from '../components/Newslatter';

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
//   stock:number
// };

// const OurProducts = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   // GROQ Query for Featured Products
//   const query = `
//     *[_type == "products"] [0...16] {
//       _id,
//       title,
//       "image": image.asset->url,
//       price,
//       originalPrice,
//       isNew,
//       isSale
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
//                   OUR PRODUCTS
//                 </h1>
//               </span>
//             </div>
//             <div className="container mx-auto px-4 py-20">
//               <div className="grid grid-cols gap-6 sm:grid-cols-1 lg:grid-cols-4">
//                 {products.length > 0 ? (
//                   products.map((product) => (
//                     <div key={product._id} className="group relative rounded-lg bg-white">
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

// <p
//                     className={`text-sm font-medium mt-1 ${
//                       product.stock > 0
//                         ? "text-green-500"
//                         : "text-red-500 font-medium"
//                     }`}
//                   >
//                     {product.stock > 0
//                       ? `${product.stock} Available`
//                       : "Out of Stock"}
//                   </p>
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
//         <Newslatter/>
//       </section>
//     </div>
//   );
// };

// export default OurProducts;


'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { client } from '@/sanity/lib/client';
import Instagram from '../components/Instagram';

type Product = {
  _id: string;
  title: string;
  price: number;
  priceWithoutDiscount?: number;
  badge?: string;
  image: string;
  description?: string;
  inventory?: number;
};

const OurProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // GROQ Query for Products
  const query = `
    *[_type == "products"] [0...16] {
      _id,
      title,
      "image": image.asset->url,
      price,
      priceWithoutDiscount,
      badge,
      description,
      inventory // Include inventory in the query
    }
  `;

  // Fetch Products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await client.fetch(query);
        setProducts(result);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [query]);

  return (
    <div>
      <section className="text-gray-600 bg-white body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
              <span>
                <h1 className="mr-5 text-black font-bold text-3xl border-l-8 pl-3 ml-1">
                  ALL PRODUCTS
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
                          <p
                            className={`text-sm font-medium mt-1 ${
                              product.inventory && product.inventory > 0
                                ? "text-green-500"
                                : "text-red-500 font-medium"
                            }`}
                          >
                            {product.inventory && product.inventory > 0
                              ? `${product.inventory} Available`
                              : "Out of Stock"}
                          </p>
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
                    No products found.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <Instagram />
      </section>
    </div>
  );
};

export default OurProducts;