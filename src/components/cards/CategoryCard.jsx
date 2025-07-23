// // components/cards/CategoryCard.jsx
// import React from 'react';

// const CategoryCard = ({ image, title, bgColor = "bg-slate-100", onClick }) => {
//   return (
//     <div
//       onClick={onClick}
//       className={`${bgColor} rounded-2xl p-6 cursor-pointer hover:shadow-md transition-all duration-300 hover:scale-105`}
//     >
//       <div className="flex flex-col items-center text-center">
//         <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
//           <span className="text-3xl">{image}</span>
//         </div>
//         <h3 className="font-semibold text-slate-800">{title}</h3>
//       </div>
//     </div>
//   );
// };

// export default CategoryCard;

import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({
  image,
  title,
  bgColor = "bg-slate-100",
  categoryId,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/category/${categoryId}`);
  };

  // Check if the image is a URL or an emoji
  const isImageUrl =
    typeof image === "string" &&
    (image.startsWith("http") || image.startsWith("/"));

  return (
    <div
      onClick={handleClick}
      className={`${bgColor} rounded-2xl p-6 cursor-pointer hover:shadow-md transition-all duration-300 hover:scale-105`}
    >
      <div className="flex flex-col items-center text-center">
        {isImageUrl ? (
          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
            <span className="text-2xl sm:text-3xl">{image}</span>
          </div>
        )}
        <h3 className="font-semibold text-sm sm:text-base text-slate-800">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default CategoryCard;
