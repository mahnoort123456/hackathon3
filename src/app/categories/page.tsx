// 'use client'

// import React from 'react';
// import Image from 'next/image'; // Import Image component from Next.js

// interface ImageData {
//   src: string;
//   alt: string;
//   title: string;
//   price: string;
// }

// const images: ImageData[] = [
//   {
//     src: '/chiar1.png',
//     alt: 'Shooting Stars',
//     title: 'Shooting Stars',
//     price: '$99.99'
//   },
//   {
//     src: '/chiar2.png',
//     alt: 'The Catalyzer',
//     title: 'The Catalyzer',
//     price: '$199.99'
//   },
//   {
//     src: '/chiar3.png',
//     alt: 'The Chair',
//     title: 'Comfortable Chair',
//     price: '$149.99'
//   }
//   // Add more images as needed
// ];

// const Catagory = () => {
//   return (
//     <section className="text-gray-600 body-font">
//       <div className="container mx-auto px-5 py-24">
//         {/* Section Header */}
//         <div className="flex flex-col">
//           <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
//             <h1 className="sm:w-2/5 text-gray-900 font-bold title-font text-3xl mb-2 sm:mb-0">
//               CATEGORY
//             </h1>
//           </div>
//         </div>

//         {/* Cards Container */}
//         <div className="flex flex-wrap justify-center sm:justify-start -mx-4">
//           {images.map((image, index) => (
//             <div
//               key={index}
//               className="p-4 w-full sm:w-1/2 md:w-1/2 lg:w-1/3"
//             >
//               <div className="relative group">
//                 {/* Image */}
//                 <div className="rounded-lg overflow-hidden">
//                   <Image
//                     alt={image.alt}
//                     className="object-cover object-center w-full h-full"
//                     src={image.src}
//                     width={640} // Increased width
//                     height={640} // Increased height
//                     style={{
//                       borderRadius: '10px 0px 0px 0px',
//                       transition: 'opacity 0.3s ease',
//                     }}
//                   />
//                 </div>

//                 {/* Hover Overlay */}
//                 <div className="absolute bottom-0 left-0 right-0 w-full h-1/4 bg-gray-700 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center pl-4">
//                   <p className="text-white text-xl font-semibold">{image.price}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Catagory;



'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image'; // Import Image component from Next.js
import { client } from '@/sanity/lib/client'; // Import your configured Sanity client

interface CategoryData {
  _id: string;
  title: string;
  image: string;
}

const Category = () => {
  const [categories, setCategories] = useState<CategoryData[]>([]);

  // GROQ Query for Fetching Categories
  const categoryQuery = `
    *[_type == "categories"] {
      _id,
      title,
      "image": image.asset->url
    }
  `;

  // Fetch Categories from Sanity
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const result = await client.fetch(categoryQuery);
        setCategories(result);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, [categoryQuery]);

  return (
    <section id="categories" className="text-gray-600 body-font">
      <div className="container mx-auto px-5 py-24">
        {/* Section Header */}
        <div className="flex flex-col">
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-gray-900 font-bold title-font text-3xl mb-2 sm:mb-0">
              CATEGORY
            </h1>
          </div>
        </div>

        {/* Cards Container */}
        <div className="flex flex-wrap justify-center sm:justify-start -mx-4">
          {categories.map((category) => (
            <div
              key={category._id}
              className="p-4 w-full sm:w-1/2 md:w-1/2 lg:w-1/3"
            >
              <div className="relative group">
                {/* Image */}
                <div className="rounded-lg overflow-hidden">
                  <Image
                    alt={category.title}
                    className="object-cover object-center w-full h-full"
                    src={category.image}
                    width={640} // Adjust width
                    height={640} // Adjust height
                    style={{
                      borderRadius: '10px 0px 0px 0px',
                      transition: 'opacity 0.3s ease',
                    }}
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute bottom-0 left-0 right-0 w-full h-1/4 bg-gray-700 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center pl-4">
                  <p className="text-white text-xl font-semibold">{category.title}</p>
                  
                </div>
                
              </div>
           
            </div>

            
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;