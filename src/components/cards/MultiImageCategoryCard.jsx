import React from "react";
import { useNavigate } from "react-router-dom";

const MultiImageCategoryCard = ({
  images,
  title,
  bgColor = "bg-slate-100",
  categoryId,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <div
      onClick={handleClick}
      className={`${bgColor} rounded-2xl p-4 cursor-pointer hover:shadow-md transition-all duration-300 hover:scale-105 flex flex-col`}
    >
      <div className="grid grid-cols-3 gap-2 mb-3">
        {images.map((image, index) => (
          <div
            key={index}
            className={`rounded-lg overflow-hidden ${
              index === 0 ? "col-span-2 row-span-2" : ""
            }`}
          >
            <img
              src={image}
              alt={`${title} ${index + 1}`}
              className="w-full h-full object-cover"
              style={{ aspectRatio: index === 0 ? "1/1" : "1/1" }}
            />
          </div>
        ))}
      </div>
      <h3 className="font-semibold text-center text-slate-800">{title}</h3>
    </div>
  );
};

export default MultiImageCategoryCard;
