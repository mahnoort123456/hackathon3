// "use client"; // Ensure this is a client-side component

// import React, { useContext } from 'react';
// import { CartContext } from "@/app/context/CartContaxt"; // Correct import path
// import Image from 'next/image';
// import { urlFor } from '@/sanity/lib/image';

// const WishlistPage = () => {
//   const { wishlistItems, removeFromWishlist, addProduct, qty ,}: any = useContext(CartContext);

//   const handleRemoveFromWishlist = (product: any) => {
//     removeFromWishlist(product); // Remove product from wishlist
//   };

//   const handleAddToCart = (product: any) => {
//     addProduct(product, qty); // Add product to cart
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h2 className="text-3xl font-bold text-gray-800">Your Wishlist</h2>
      
//       {wishlistItems.length === 0 ? (
//         <p className="text-gray-600 mt-4">Your wishlist is empty.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
//           {wishlistItems.map((product: any) => (
//             <div key={product._id} className="border rounded-lg p-4 flex flex-col space-y-4">
//               <Image
//                 src={product.image ? urlFor(product.image).width(400).url() : '/placeholder-image.png'}
//                 alt={product.title}
//                 width={400}
//                 height={400}
//                 className="rounded-lg"
//               />
//               <h3 className="text-xl font-semibold">{product.title}</h3>
//               <p className="text-lg text-green-600">${product.price}</p>
//               {product.priceWithoutDiscount && (
//                 <p className="text-gray-600 line-through">
//                   ${product.priceWithoutDiscount}
//                 </p>
//               )}
//               <p className="text-gray-600">{product.description}</p>
              
//               <div className="flex space-x-4 mt-4">
//                 {/* Add to Cart Button */}
//                 <button
//                   onClick={() => handleAddToCart(product)}
//                   className="bg-[#029FAE] text-white py-2 px-4 rounded hover:bg-blue-600"
//                 >
//                   Add To Cart
//                 </button>

//                 {/* Remove from Wishlist Button */}
//                 <button
//                   onClick={() => handleRemoveFromWishlist(product)}
//                   className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
//                 >
//                   Remove 
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default WishlistPage;
"use client";

import React, { useContext } from "react";
import { CartContext } from "@/app/context/CartContext";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

// Define the type for product
interface Product {
  _id: string;
  title: string;
  price: number;
  priceWithoutDiscount?: number;
  description: string;
  image?: any; // Define the image type according to your image structure
}

const WishlistPage = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <p className="text-center text-red-500">Error: Cart context is not available.</p>;
  }

  const { wishlistItems = [], removeFromWishlist, addProduct, qty }: any = cartContext;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 text-center">Your Wishlist</h2>

      {wishlistItems.length === 0 ? (
        <p className="text-gray-600 mt-4 text-center">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {wishlistItems.map((product: Product) => (
            <div
              key={product._id}
              className="bg-white border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col space-y-4"
            >
              <div className="w-full h-64 rounded overflow-hidden flex justify-center items-center">
                <Image
                  src={product.image ? urlFor(product.image)?.width(400).url() || "/placeholder-image.png" : "/placeholder-image.png"}
                  alt={product.title}
                  width={300}
                  height={300}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{product.title}</h3>
              <p className="text-lg text-green-600">${product.price}</p>
              {product.priceWithoutDiscount && (
                <p className="text-gray-600 line-through text-sm">${product.priceWithoutDiscount}</p>
              )}
              <p className="text-gray-600 text-sm">{product.description}</p>

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => addProduct(product, qty || 1)}
                  className="bg-[#029FAE] text-white py-2 px-4 rounded-lg hover:bg-[#027c86] transition duration-300"
                >
                  Add To Cart
                </button>

                <button
                  onClick={() => removeFromWishlist(product)}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
