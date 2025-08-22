

// import React from "react";
// import CategoryCard from "../cards/CategoryCard";
// import GenerateRecipeCard from "../cards/GenerateRecipeCard";

// const Categories = ({ onGenerateClick }) => {
//   const categories = [
//     {
//       categoryId: "chineses",
//       image: "/images/Chineses.png",
//       title: "Chinese",
//       bgColor: "bg-white/27",
//     },
//     {
//       categoryId: "italian",
//       image: "/images/Italian.png",
//       title: "Italian",
//       bgColor: "bg-white/27",
//     },
//     {
//       categoryId: "fastFood",
//       image: "/images/FastFood.png",
//       title: "Fast Food",
//       bgColor: "bg-white/27",
//     },
//     {
//       categoryId: "healthy",
//       image: "/images/Healthy.png",
//       title: "Healthy",
//       bgColor: "bg-white/27",
//     },
//     {
//       categoryId: "bar",
//       image: "/images/Bar.png",
//       title: "Bar",
//       bgColor: "bg-white/27",
//     },
//     {
//       categoryId: "desi",
//       image: "/images/Desi.png",
//       title: "Desi Cuisine",
//       bgColor: "bg-white/27",
//     },
//   ];

//   return (
//     <section className="mb-12">
//       {/* Uncommented and updated section heading */}
//       <h2 className="font-neue font-medium text-2xl text-slate-800 mb-6 text-center md:text-left">
//         Categories
//       </h2>

//       {/* First row - 4 categories */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
//         {categories.slice(0, 4).map((category) => (
//           <CategoryCard
//             key={category.categoryId}
//             image={category.image}
//             title={category.title}
//             bgColor={category.bgColor}
//             categoryId={category.categoryId}
//           />
//         ))}
//       </div>

//       {/* Second row - Bar, Desi Cuisine, and Generate */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {/* Bar category */}
//         <CategoryCard
//           key={categories[4].categoryId}
//           image={categories[4].image}
//           title={categories[4].title}
//           bgColor={categories[4].bgColor}
//           categoryId={categories[4].categoryId}
//         />

//         {/* Desi cuisine - now single image */}
//         <CategoryCard
//           key={categories[5].categoryId}
//           image={categories[5].image}
//           title={categories[5].title}
//           bgColor={categories[5].bgColor}
//           categoryId={categories[5].categoryId}
//         />

//         {/* Special Generate Button */}
//         <GenerateRecipeCard onClick={onGenerateClick} />
//       </div>
//     </section>
//   );
// };

// export default Categories;
import React from "react";
import CategoryCard from "../cards/CategoryCard";
import GenerateRecipeCard from "../cards/GenerateRecipeCard";

const Categories = ({ onGenerateClick }) => {
  const categories = [
    { categoryId: "chinese", image: "/images/Chineses.png", title: "Chinese", bgColor: "bg-white/27" },
    { categoryId: "italian", image: "/images/Italian.png", title: "Italian", bgColor: "bg-white/27" },
    { categoryId: "fastFood", image: "/images/FastFood.png", title: "Fast Food", bgColor: "bg-white/27" },
    { categoryId: "healthy", image: "/images/Healthy.png", title: "Healthy", bgColor: "bg-white/27" },
    { categoryId: "bar", image: "/images/Bar.png", title: "Bar", bgColor: "bg-white/27" },
    { categoryId: "desi", image: "/images/Desi.png", title: "Desi Cuisine", bgColor: "bg-white/27" },
  ];

  return (
    <section className="mb-12">
      <h2 className="font-neue font-medium text-2xl text-slate-800 mb-6 text-center md:text-left">
        Categories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-fr">
        {/* First 4 cards */}
        {categories.slice(0, 4).map((cat) => (
          <CategoryCard key={cat.categoryId} {...cat} />
        ))}

        {/* Card 5 */}
        <CategoryCard {...categories[4]} />

        {/* Card 6 - make it stretch properly */}
        <div className="md:col-span-2 h-full">
          <CategoryCard {...categories[5]} className="h-full" />
        </div>

        {/* Card 7 */}
        <div className="h-full">
          <GenerateRecipeCard onClick={onGenerateClick} />
        </div>
      </div>
    </section>
  );
};

export default Categories;
