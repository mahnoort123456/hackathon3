

"use client";

import React, { useContext, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CartContext } from "../context/CartContext";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { urlFor } from "@/sanity/lib/image";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "@/components/ui/button";

import Link from "next/link";

const Cart = () => {
  const { onRemove, toggleCartItemQty, totalPrice, cartItems, addToWishlist }: any = useContext(CartContext);
  const [loading, setLoading] = useState(false);
 


  const handleCheckout = async () => {
    try {
      const response = await fetch("/api/checkout", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cartItems: [{ id: 1, price: 20, quantity: 2 }] }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error('API Error:', errorData.error);
        alert(errorData.error || 'Checkout failed.');
        return;
      }
  
      const data = await response.json();
      window.location.href = data.url; // Redirect to Stripe Checkout
    } catch (error) {
      console.error('Error during checkout:', error);
      alert('An error occurred. Please try again.');
    }
  };
  


  return (
    <div className="max-w-[1321px] mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-[22px] font-medium pl-3 mb-6">Cart</h2>
          {cartItems.length === 0 ? (
            <div className="text-center py-10">
              <h3 className="text-2xl font-semibold mb-4">Your cart is empty</h3>
              <p className="text-xl mb-4">Add some items to your cart to see them here.</p>
              <Link href="/products">
                <Button className="w-1/4 py-5 rounded-full bg-[#029FAE] text-white font-semibold hover:bg-[#027c86]">Continue Shopping</Button>
              </Link>
            </div>
          ) : (
            cartItems.map((product: any) => (
              <div key={product._id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4">
                <div className="flex items-center space-x-6">
                  <Image
                    src={product.image ? urlFor(product.image).width(500).url() : "/placeholder-image.png"}
                    alt={product.name}
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                  <div>
                    <h3 className="text-[16px] font-semibold">{product.name}</h3>
                    <p className="text-[15px] text-gray-600">{product.description || "No description available"}</p>
                    <div className="flex items-center gap-3 mt-3">
                      <CiHeart className="cursor-pointer text-gray-600 hover:text-red-500" size={30} onClick={() => addToWishlist(product)} />
                      <RiDeleteBin6Line className="cursor-pointer text-gray-600 hover:text-red-500" size={25} onClick={() => onRemove(product)} />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-[16px] font-medium">${product.price * product.quantity}</p>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button className={`px-2 py-1 ${product.quantity <= 1 ? "opacity-50" : ""}`} onClick={() => toggleCartItemQty(product._id, "minus")}>
                      <AiOutlineMinus />
                    </button>
                    <span className="px-4">{product.quantity}</span>
                    <button className={`px-2 py-1 ${product.quantity >= product.inventory ? "opacity-50" : ""}`} onClick={() => toggleCartItemQty(product._id, "plus")}>
                      <AiOutlinePlus />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div>
         <h2 className="text-2xl font-bold mb-6">Summary</h2>
         <div className="bg-white p-6 rounded-lg shadow-md">
           <div className="flex justify-between mb-4">
             <p className="text-lg">Subtotal</p>
             <p className="text-lg font-semibold">${totalPrice || 0}</p>
           </div>
           <div className="flex justify-between mb-4">
             <p className="text-lg">Estimated Delivery & Handling</p>
             <p className="text-lg font-semibold text-green-500">Free</p>
           </div>
           <hr className="mb-4" />
           <div className="flex justify-between mb-6">
             <p className="text-xl font-bold">Total</p>
             <p className="text-xl font-bold">${totalPrice || 0}</p>
           </div>
        
         <button
              onClick={handleCheckout} type="button" className="w-full py-3 rounded-lg bg-[#029FAE] text-white font-semibold hover:bg-[#027c86]">
          Checkout
          </button>
          

        
        </div>
           </div>
         </div>
    </div>
  );
};

export default Cart
