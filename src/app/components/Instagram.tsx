


// import React, { useState } from 'react';

// const Newslatter = () => {
//   const [email, setEmail] = useState('');

//   // Array of image objects
//   const images = [
//     { id: 1, src: '/chiar1.png' },
//     { id: 2, src: '/chiar2.png' },
//     { id: 3, src: '/chiar3.png' },
//     { id: 4, src: '/white-cheir.png' },
//     { id: 5, src: '/white-cheir.png' },
//   ];

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (email) {
//       console.log('Email Submitted:', email);
//       // Handle email submission (e.g., API call or form submission)
//     } else {
//       alert('Please enter a valid email');
//     }
//   };

//   return (
//     <div>
//       {/* Newsletter Section */}
//       <div className="w-full px-6 md:px-12 lg:px-24 xl:px-48 py-12 gap-6 bg-gray-200">
//         {/* Centered heading */}
//         <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-12 text-center">
//           Or Subscribe To The Newsletter
//         </h1>

//         {/* Form */}
//         <form
//           onSubmit={handleSubmit}
//           className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full max-w-lg mx-auto"
//         >
//           {/* Email Input */}
//           <input
//             type="email"
//             name="email"
//             id="email"
//             placeholder="Enter your email"
//             className="flex-grow px-4 py-2 bg-transparent border-0 border-b-2 border-gray-500 focus:border-green-500 focus:outline-none text-base md:text-lg placeholder-gray-400"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />

//           {/* Transparent Submit Button */}
//           <button
//             type="submit"
//             className="px-4 py-2 bg-transparent border-0 border-b-2 border-gray-500 text-base md:text-lg text-gray-700 hover:text-green-500 focus:border-blue-500 focus:outline-none transition"
//           >
//             SUBMIT
//           </button>
//         </form>

//         {/* Instagram Follow Section */}
//         <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mt-12 text-center py-8">
//           Follow Products And Discounts On Instagram
//         </h2>

//         {/* Image Flex Container */}
//         <div className="flex flex-wrap justify-center md:justify-between gap-4 mx-auto mt-8">
//           {images.map((image) => (
//             <div
//               key={image.id}
//               className="w-[150px] h-[100px] md:w-[200px] md:h-[150px] lg:w-[300px] lg:h-[200px] bg-gray-400 bg-center bg-cover rounded-lg"
//               style={{
//                 backgroundImage: `url('${image.src}')`,
//               }}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Newslatter;



// 'use client';
// import React, { useState, useEffect } from 'react';
// import { client } from '@/sanity/lib/client'; // Assuming you've set up your Sanity client

// type Image = {
//   _id: string;
//   src: string;
// };

// const Newslatter = () => {
//   const [email, setEmail] = useState('');
//   const [images, setImages] = useState<Image[]>([]);

//   // Fetch images from Sanity
//   useEffect(() => {
//     const fetchImages = async () => {
//       const query = `*[_type == "image" && _id in ['imageId1', 'imageId2', 'imageId3', 'imageId4', 'imageId5']]{
//         _id,
//         "src": image.asset->url
//       }`;
//       try {
//         const result = await client.fetch(query);
//         setImages(result);
//       } catch (error) {
//         console.error('Error fetching images:', error);
//       }
//     };

//     fetchImages();
//   }, []);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (email) {
//       console.log('Email Submitted:', email);
//       // Handle email submission (e.g., API call or form submission)
//     } else {
//       alert('Please enter a valid email');
//     }
//   };

//   return (
//     <div>
//       {/* Newsletter Section */}
//       <div className="w-full px-6 md:px-12 lg:px-24 xl:px-48 py-12 gap-6 bg-gray-200">
//         {/* Centered heading */}
//         <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-12 text-center">
//           Or Subscribe To The Newsletter
//         </h1>

//         {/* Form */}
//         <form
//           onSubmit={handleSubmit}
//           className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full max-w-lg mx-auto"
//         >
//           {/* Email Input */}
//           <input
//             type="email"
//             name="email"
//             id="email"
//             placeholder="Enter your email"
//             className="flex-grow px-4 py-2 bg-transparent border-0 border-b-2 border-gray-500 focus:border-green-500 focus:outline-none text-base md:text-lg placeholder-gray-400"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />

//           {/* Transparent Submit Button */}
//           <button
//             type="submit"
//             className="px-4 py-2 bg-transparent border-0 border-b-2 border-gray-500 text-base md:text-lg text-gray-700 hover:text-green-500 focus:border-blue-500 focus:outline-none transition"
//           >
//             SUBMIT
//           </button>
//         </form>

//         {/* Instagram Follow Section */}
//         <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mt-12 text-center py-8">
//           Follow Products And Discounts On Instagram
//         </h2>

//         {/* Image Flex Container */}
//         <div className="flex flex-wrap justify-center md:justify-between gap-4 mx-auto mt-8">
//           {images.length > 0 ? (
//             images.map((image) => (
//               <div
//                 key={image._id}
//                 className="w-[150px] h-[100px] md:w-[200px] md:h-[150px] lg:w-[300px] lg:h-[200px] bg-gray-400 bg-center bg-cover rounded-lg"
//                 style={{
//                   backgroundImage: `url('${image.src}')`,
//                 }}
//               />
//             ))
//           ) : (
//             <p className="text-center text-gray-500">No images found.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Newslatter;



'use client';
import React, { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client'; // Your Sanity client

type Image = {
  _id: string;
  src: string;
};

const Instagram = () => {
  const [email, setEmail] = useState('');
  const [images, setImages] = useState<Image[]>([]);

  // Fetch 5 images of products tagged with "instagram"
  useEffect(() => {
    const fetchImages = async () => {
      const query = `*[_type == "products" && "instagram" in tags][0...4] {
        _id,
        "src": image.asset->url
      }`;

      try {
        const result = await client.fetch(query);
        setImages(result);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Email Submitted:', email);
      // Handle email submission (e.g., API call or form submission)
    } else {
      alert('Please enter a valid email');
    }
  };

  return (
    <div>
      {/* Newsletter Section */}
      <div className="w-full px-6 md:px-12 lg:px-24 xl:px-48 py-12 gap-6 bg-gray-200">
        {/* Centered heading */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-12 text-center">
          Or Subscribe To The Newsletter
        </h1>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full max-w-lg mx-auto"
        >
          {/* Email Input */}
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="flex-grow px-4 py-2 bg-transparent border-0 border-b-2 border-gray-500 focus:border-green-500 focus:outline-none text-base md:text-lg placeholder-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Transparent Submit Button */}
          <button
            type="submit"
            className="px-4 py-2 bg-transparent border-0 border-b-2 border-gray-500 text-base md:text-lg text-gray-700 hover:text-green-500 focus:border-blue-500 focus:outline-none transition"
          >
            SUBMIT
          </button>
        </form>

        {/* Instagram Follow Section */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mt-12 text-center py-8">
          Follow Products And Discounts On Instagram
        </h2>

        {/* Image Flex Container */}
        <div className="flex flex-wrap justify-center md:justify-between gap-4 mx-auto mt-8">
          {images.length > 0 ? (
            images.map((image) => (
              <div
                key={image._id}
                className="w-[150px] h-[100px] md:w-[200px] md:h-[150px] lg:w-[300px] lg:h-[200px] bg-gray-400 bg-center bg-cover rounded-lg"
                style={{
                  backgroundImage: `url('${image.src}')`,
                }}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">No Instagram images found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Instagram;