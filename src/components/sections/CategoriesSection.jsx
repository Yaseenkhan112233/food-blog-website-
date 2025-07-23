// // components/sections/Categories.jsx
// import React from 'react';
// import CategoryCard from '../cards/CategoryCard';
// import GenerateRecipeCard from '../cards/GenerateRecipeCard';

// const Categories = ({ onCategoryClick, onGenerateClick }) => {
//   const categories = [
//     { image: '🍜', title: 'Chinese', bgColor: 'bg-red-50' },
//     { image: '🍝', title: 'Italian', bgColor: 'bg-orange-50' },
//     { image: '🍔', title: 'Fast Food', bgColor: 'bg-yellow-50' },
//     { image: '🥗', title: 'Healthy', bgColor: 'bg-green-50' },
//     { image: '🍹', title: 'Bar', bgColor: 'bg-pink-50' },
//     { image: '🍛', title: 'Desi Cuisine', bgColor: 'bg-amber-50' },
//   ];

//   return (
//     <section className="mb-12">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {categories.map((category, index) => (
//           <CategoryCard
//             key={index}
//             image={category.image}
//             title={category.title}
//             bgColor={category.bgColor}
//             onClick={() => onCategoryClick?.(category)}
//           />
//         ))}
//         <GenerateRecipeCard onClick={onGenerateClick} />
//       </div>
//     </section>
//   );
// };

// export default Categories;

import React from "react";
import CategoryCard from "../cards/CategoryCard";
import MultiImageCategoryCard from "../cards/MultiImageCategoryCard";
import GenerateRecipeCard from "../cards/GenerateRecipeCard";

const Categories = ({ onGenerateClick }) => {
  const categories = [
    {
      categoryId: "chinese",
      image:
        "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=2060&auto=format&fit=crop",
      title: "Chinese",
      bgColor: "bg-red-50",
    },
    {
      categoryId: "italian",
      image:
        "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=2080&auto=format&fit=crop",
      title: "Italian",
      bgColor: "bg-orange-50",
    },
    {
      categoryId: "fastFood",
      image:
        "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=2071&auto=format&fit=crop",
      title: "Fast Food",
      bgColor: "bg-yellow-50",
    },
    {
      categoryId: "healthy",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop",
      title: "Healthy",
      bgColor: "bg-green-50",
    },
    {
      categoryId: "bar",
      image:
        "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
      title: "Bar",
      bgColor: "bg-pink-50",
    },
  ];

  // Separate the desi cuisine with multiple images
  const desiCuisineCategory = {
    categoryId: "desi",
    images: [
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVzaSUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1630851840633-f96999247032?q=80&w=2070&auto=format&fit=crop",
    ],
    title: "Desi Cuisine",
    bgColor: "bg-amber-50",
  };

  return (
    <section className="mb-12">
      {/* <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center md:text-left">
        Categories
      </h2> */}

      {/* First row - 4 categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        {categories.slice(0, 4).map((category) => (
          <CategoryCard
            key={category.categoryId}
            image={category.image}
            title={category.title}
            bgColor={category.bgColor}
            categoryId={category.categoryId}
          />
        ))}
      </div>

      {/* Second row - Bar, Desi Cuisine with images, and Generate */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Bar category */}
        <CategoryCard
          key={categories[4].categoryId}
          image={categories[4].image}
          title={categories[4].title}
          bgColor={categories[4].bgColor}
          categoryId={categories[4].categoryId}
        />

        {/* Desi cuisine with multiple images */}
        <MultiImageCategoryCard
          key={desiCuisineCategory.categoryId}
          images={desiCuisineCategory.images}
          title={desiCuisineCategory.title}
          bgColor={desiCuisineCategory.bgColor}
          categoryId={desiCuisineCategory.categoryId}
        />

        {/* Special Generate Button */}
        <GenerateRecipeCard onClick={onGenerateClick} />
      </div>
    </section>
  );
};

export default Categories;
