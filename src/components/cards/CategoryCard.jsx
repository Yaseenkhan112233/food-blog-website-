
// import React from "react";
// import { useNavigate } from "react-router-dom";

// const CategoryCard = ({
//   image,
//   title,
//   bgColor = "bg-red",
//   categoryId,
// }) => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate(`/category/${categoryId}`);
//   };

//   // Check if the image is a URL or an emoji
//   const isImageUrl =
//     typeof image === "string" &&
//     (image.startsWith("http") || image.startsWith("/"));

//   return (
//     <div
//       onClick={handleClick}
//       className={`${bgColor} rounded-2xl p-6 cursor-pointer hover:shadow-md transition-all duration-300 hover:scale-105`}
//     >
//       <div className="flex flex-col items-center text-center">
//         {isImageUrl ? (
//           <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm overflow-hidden">
//             <img
//               src={image}
//               alt={title}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         ) : (
//           <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
//             <span className="text-2xl sm:text-3xl">{image}</span>
//           </div>
//         )}
//         <h3 className="font-semibold text-sm sm:text-base text-slate-800">
//           {title}
//         </h3>
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
  bgColor = "bg-red",
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
          <div className={`${categoryId ==='desi'? 'w-66':'w-40'} h-44 flex items-center justify-center mb-4  overflow-hidden`}>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-4 ">
            <span className="text-2xl sm:text-3xl">{image}</span>
          </div>
        )}
        <h3 className="font-neue font-medium text-sm sm:text-base text-slate-800">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default CategoryCard;