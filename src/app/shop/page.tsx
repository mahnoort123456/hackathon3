// 'use client';
// import React from 'react';
// export default function UniqueShopPage() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-10">
//       <h1 className="text-4xl font-bold text-blue-600">What Makes Our Shop Different?</h1>
//       <p className="text-gray-700 mt-4 text-lg text-center max-w-2xl">
//         We provide a unique shopping experience with high-quality products, excellent customer support, and fast delivery. 
//         Here’s why we stand out from the rest:
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-4xl">
//         {/* Feature 1 */}
//         <div className="bg-white p-6 shadow-lg rounded-xl text-center">
//           <h2 className="text-2xl font-semibold text-green-600">Quality Products</h2>
//           <p className="text-gray-600 mt-2">We offer only the best products, ensuring high standards and customer satisfaction.</p>
//         </div>

//         {/* Feature 2 */}
//         <div className="bg-white p-6 shadow-lg rounded-xl text-center">
//           <h2 className="text-2xl font-semibold text-blue-600">Fast & Secure Delivery</h2>
//           <p className="text-gray-600 mt-2">Our logistics network ensures quick and safe product deliveries.</p>
//         </div>

//         {/* Feature 3 */}
//         <div className="bg-white p-6 shadow-lg rounded-xl text-center">
//           <h2 className="text-2xl font-semibold text-purple-600">Customer Support</h2>
//           <p className="text-gray-600 mt-2">We provide 24/7 support to assist with your queries and concerns.</p>
//         </div>

//         {/* Feature 4 */}
//         <div className="bg-white p-6 shadow-lg rounded-xl text-center">
//           <h2 className="text-2xl font-semibold text-red-600">Exclusive Discounts</h2>
//           <p className="text-gray-600 mt-2">Enjoy seasonal discounts and member-only deals.</p>
//         </div>
//       </div>

//       <button
//         onClick={() => window.history.back()}
//         className="mt-8 bg-[#029FAE] text-white px-6 py-3 rounded-lg hover:bg-[#029FAE]"
//       >
//         Go Back
//       </button>
//     </div>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Truck, Headset, Tag } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Premium Quality Products",
    description: "We handpick the best products to ensure top-notch quality and customer satisfaction.",
    icon: <ShieldCheck className="h-12 w-12 text-yellow-500" />,
  },
  {
    id: 2,
    title: "Fast & Secure Delivery",
    description: "Our logistics network ensures quick and reliable deliveries straight to your doorstep.",
    icon: <Truck className="h-12 w-12 text-blue-500" />,
  },
  {
    id: 3,
    title: "24/7 Customer Support",
    description: "Need help? Our friendly support team is available anytime to assist you.",
    icon: <Headset className="h-12 w-12 text-green-500" />,
  },
  {
    id: 4,
    title: "Exclusive Discounts & Offers",
    description: "Enjoy amazing deals, seasonal discounts, and member-only benefits.",
    icon: <Tag className="h-12 w-12 text-red-500" />,
  },
];

export default function UniqueShopPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex flex-col items-center justify-center p-8">
      {/* Header */}
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className="text-5xl font-bold text-[#029FAE] text-center"
      >
        What Makes Our Shop Different?
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-gray-700 mt-4 text-lg text-center max-w-3xl"
      >
        Discover why customers love shopping with us! We prioritize quality, speed, and customer satisfaction.
      </motion.p>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-5xl">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white p-6 shadow-2xl rounded-xl flex flex-col items-center text-center transform transition duration-300 hover:scale-105"
          >
            {feature.icon}
            <h2 className="text-2xl font-semibold text-gray-800 mt-3">{feature.title}</h2>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        onClick={() => window.history.back()}
        className="mt-10 bg-[#029FAE] text-white px-6 py-3 rounded-lg hover:bg-[#029FAE] transition-all duration-300 shadow-lg"
      >
        Go Back
      </motion.button>
    </div>
  );
}
