// "use client";

// import { useState } from "react";
// import { StarIcon, TrashIcon, PencilIcon } from "@heroicons/react/24/solid";

// interface Review {
//   id: number;
//   name: string;
//   rating: number;
//   comment: string;
// }

// const ReviewSection = () => {
//   const [reviews, setReviews] = useState<Review[]>([]);
//   const [name, setName] = useState("");
//   const [comment, setComment] = useState("");
//   const [rating, setRating] = useState(0);
//   const [editId, setEditId] = useState<number | null>(null);

//   // Handle Form Submit
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!name || !comment || rating === 0) return;

//     if (editId !== null) {
//       setReviews((prev) =>
//         prev.map((r) =>
//           r.id === editId ? { ...r, name, rating, comment } : r
//         )
//       );
//       setEditId(null);
//     } else {
//       setReviews([...reviews, { id: Date.now(), name, rating, comment }]);
//     }

//     setName("");
//     setComment("");
//     setRating(0);
//   };

//   // Handle Delete
//   const handleDelete = (id: number) => {
//     setReviews(reviews.filter((review) => review.id !== id));
//   };

//   // Handle Edit
//   const handleEdit = (review: Review) => {
//     setEditId(review.id);
//     setName(review.name);
//     setComment(review.comment);
//     setRating(review.rating);
//   };

//   return (
//     <div className="max-w-4xl w-full mx-auto ml-10 p-8 bg-white shadow-lg rounded-xl">
//       <h2 className="text-3xl font-bold mb-6">Customer Reviews</h2>

//       {/* Review Form */}
//       <form onSubmit={handleSubmit} className="mb-8">
//         <input
//           type="text"
//           placeholder="Your Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full p-3 border rounded mb-3"
//           required
//         />
//         <textarea
//           placeholder="Your Review"
//           value={comment}
//           onChange={(e) => setComment(e.target.value)}
//           className="w-full p-3 border rounded mb-3 h-28"
//           required
//         />

//         {/* Rating System */}
//         <div className="flex space-x-1 mb-4">
//           {[1, 2, 3, 4, 5].map((star) => (
//             <StarIcon
//               key={star}
//               className={`h-10 w-10 cursor-pointer ${
//                 star <= rating ? "text-yellow-500" : "text-gray-300"
//               }`}
//               onClick={() => setRating(star)}
//             />
//           ))}
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-[#029FAE] text-white p-3 rounded text-lg"
//         >
//           {editId !== null ? "Update Review" : "Submit Review"}
//         </button>
//       </form>

//       {/* Display Reviews */}
//       {reviews.length > 0 ? (
//         <div className="space-y-6">
//           {reviews.map((review) => (
//             <div key={review.id} className="p-6 border rounded-lg relative bg-gray-50">
//               <h3 className="text-xl font-semibold">{review.name}</h3>
//               <div className="flex">
//                 {[...Array(review.rating)].map((_, i) => (
//                   <StarIcon key={i} className="h-6 w-6 text-yellow-500" />
//                 ))}
//               </div>
//               <p className="text-gray-700 mt-2">{review.comment}</p>

//               {/* Edit & Delete Buttons */}
//               <div className="absolute top-2 right-2 flex space-x-3">
//                 <button onClick={() => handleEdit(review)}>
//                   <PencilIcon className="h-6 w-6 text-[#029FAE] hover:text-blue-700" />
//                 </button>
//                 <button onClick={() => handleDelete(review.id)}>
//                   <TrashIcon className="h-6 w-6 text-red-500 hover:text-red-700" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-gray-500 text-lg">No reviews yet.</p>
//       )}
//     </div>
//   );
// };

// export default ReviewSection;

"use client";

import { useState, useEffect } from "react";
import { StarIcon, TrashIcon, PencilIcon } from "@heroicons/react/24/solid";

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
}

const ReviewSection = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [editId, setEditId] = useState<number | null>(null);

  // Load reviews from localStorage on mount
  useEffect(() => {
    const storedReviews = localStorage.getItem("customerReviews");
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    }
  }, []);

  // Save reviews to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("customerReviews", JSON.stringify(reviews));
  }, [reviews]);

  // Handle Form Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !comment || rating === 0) return;

    if (editId !== null) {
      setReviews((prev) =>
        prev.map((r) =>
          r.id === editId ? { ...r, name, rating, comment } : r
        )
      );
      setEditId(null);
    } else {
      setReviews([...reviews, { id: Date.now(), name, rating, comment }]);
    }

    setName("");
    setComment("");
    setRating(0);
  };

  // Handle Delete (Manually Remove Review)
  const handleDelete = (id: number) => {
    const updatedReviews = reviews.filter((review) => review.id !== id);
    setReviews(updatedReviews);
  };

  // Handle Edit
  const handleEdit = (review: Review) => {
    setEditId(review.id);
    setName(review.name);
    setComment(review.comment);
    setRating(review.rating);
  };

  return (
    <div className="max-w-4xl w-full mx-auto ml-10 p-8 bg-white shadow-lg rounded-xl">
      <h2 className="text-3xl font-bold mb-6">Customer Reviews</h2>

      {/* Review Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border rounded mb-3"
          required
        />
        <textarea
          placeholder="Your Review"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-3 border rounded mb-3 h-28"
          required
        />

        {/* Rating System */}
        <div className="flex space-x-1 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <StarIcon
              key={star}
              className={`h-10 w-10 cursor-pointer ${
                star <= rating ? "text-yellow-500" : "text-gray-300"
              }`}
              onClick={() => setRating(star)}
            />
          ))}
        </div>

        <button
          type="submit"
          className="w-full bg-[#029FAE] text-white p-3 rounded text-lg"
        >
          {editId !== null ? "Update Review" : "Submit Review"}
        </button>
      </form>

      {/* Display Reviews */}
      {reviews.length > 0 ? (
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="p-6 border rounded-lg relative bg-gray-50">
              <h3 className="text-xl font-semibold">{review.name}</h3>
              <div className="flex">
                {[...Array(review.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-6 w-6 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 mt-2">{review.comment}</p>

              {/* Edit & Delete Buttons */}
              <div className="absolute top-2 right-2 flex space-x-3">
                <button onClick={() => handleEdit(review)}>
                  <PencilIcon className="h-6 w-6 text-[#029FAE] hover:text-blue-700" />
                </button>
                <button onClick={() => handleDelete(review.id)}>
                  <TrashIcon className="h-6 w-6 text-red-500 hover:text-red-700" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-lg">No reviews yet.</p>
      )}
    </div>
  );
};

export default ReviewSection;
