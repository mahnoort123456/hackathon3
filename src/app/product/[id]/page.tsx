"use client"; // Ensure this is a client-side component
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import React, { useContext } from "react";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast"; // Import toast and Toaster
import { client } from "@/sanity/lib/client";
import { CartContext } from "@/app/context/CartContext"; // Corrected the import path
import Featured from "@/app/components/featured";
import { urlFor } from "@/sanity/lib/image";
import ReviewSection from "@/app/components/reviewSection";

type Product = {
  _id: string;
  title: string;
  price: number;
  priceWithoutDiscount?: number;
  description: string;
  image: string;
  inventory?: number;
  tags?: string[];
};

interface PageProps {
  params: { id: string }; // Directly destructure the `id` from params
}

const ProductPage = ({ params }: PageProps) => {
  const { id } = params; // Directly extract the `id` from `params`
  const { cartItems, addProduct, qty, decQty, incQty, addToWishlist, wishlistItems }: any = useContext(CartContext);

  // GROQ Query to fetch a specific product by ID
  const query = `
    *[_type == "products" && _id == $id][0] {
      _id,
      title,
      "image": image.asset->url,
      price,
      priceWithoutDiscount,
      description,
      inventory,
      tags
    }
  `;

  const [product, setProduct] = React.useState<Product | null>(null);

  React.useEffect(() => {
    const fetchProduct = async () => {
      const productData: Product = await client.fetch(query, { id });
      setProduct(productData);
    };

    fetchProduct();
  }, [id, query]);

  if (!product) {
    return (
      <div className="container mx-auto text-center py-20">
        <h1 className="text-2xl font-bold text-gray-600">Product Not Found</h1>
      </div>
    );
  }

  const handleAddToCart = () => {
    addProduct(product, qty); // Add product to cart
    toast.success(`${product.title} added to cart!`, {
      position: "top-right",
    });
  };

  const handleAddToWishlist = () => {
    addToWishlist(product); // Add product to wishlist
    toast.success(`${product.title} added to wishlist!`, {
      position: "top-right",
    });
  };

  // Ensure wishlistItems is defined and fallback to an empty array if undefined
  const isProductInWishlist = (wishlistItems || []).some((item: Product) => item._id === product._id);

  return (
    <div className="container mx-auto p-6">
      {/* Toast Notifications */}
      <Toaster />

      {/* Main Product Display */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <Image
            src={product.image ? urlFor(product.image).width(400).url() : "/placeholder-image.png"}
            alt={product.title}
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold">{product.title}</h2>
          <p className="text-xl text-green-600">${product.price}</p>
          {product.priceWithoutDiscount && (
            <p className="text-gray-600 line-through">${product.priceWithoutDiscount}</p>
          )}
          <p className="text-gray-600">{product.description}</p>




          <div className='flex gap-2 items-center'>
                        <h3>Quantity</h3>
                        <p className='quantity-desc flex items-center border-black'>
                            <span className='minus'
                                onClick={decQty}
                            >
                                <AiOutlineMinus />
                            </span>
                            <span className='num'>{qty}</span>
                            <span className='plus' 
                                onClick={incQty}
                            >
                                <AiOutlinePlus />
                            </span>

                        </p>
                </div>
        


          <div className="flex space-x-4 mt-4">
            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="bg-[#029FAE] text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Add To Cart
            </button>

            {/* Add to Wishlist Button */}
            <button
              onClick={handleAddToWishlist}
              className={`bg-[#029FAE] text-white py-2 px-4 rounded hover:bg-blue-600 ${
                isProductInWishlist ? "bg-gray-500 cursor-not-allowed" : ""
              }`}
              disabled={isProductInWishlist}
            >
              {isProductInWishlist ? "In Wishlist" : "Add to Wishlist"}
            </button>
          </div>
        </div>
      </div>

<div className="min-h-screen flex items-center justify-center">
<ReviewSection/>
</div>
     

      {/* Featured Products Section (if applicable) */}
      <Featured />
    </div>
  );
};

export default ProductPage;
