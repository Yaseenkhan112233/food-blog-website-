
// import React from "react";
// import { ChefHat, Sparkles } from "lucide-react";
// import { useAuth } from "../../context/AuthContext";

// const GenerateRecipeCard = ({ onClick }) => {
//   const { isLoggedIn, openLoginModal } = useAuth();

//   const handleClick = () => {
//     if (!isLoggedIn) {
//       openLoginModal();
//     } else {
//       onClick();
//     }
//   };
//   return (
//     <div
//       onClick={handleClick}
//       className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl px-6 py-8 sm:px-8 sm:py-10 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 group relative overflow-hidden"
//     >
//       {/* Animated background on hover */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//       <div className="relative z-10 flex flex-col items-center text-center">
//         {/* Icon inside circle */}
//         {/* <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md transition-all duration-300">
//           <ChefHat className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
//         </div> */}

//         {/* Headings */}
//         <div className="space-y-1">
//           <h3 className="font-bold text-base sm:text-lg text-slate-800 group-hover:text-blue-800 transition-colors">
//             Generate
//           </h3>
//           <h3 className="font-bold text-base sm:text-lg text-slate-800 group-hover:text-blue-800 transition-colors">
//             Your Own
//           </h3>
//           <h3 className="font-bold text-base sm:text-lg text-slate-800 group-hover:text-blue-800 transition-colors">
//             Recipe
//           </h3>
//         </div>

//         {/* Sparkle on hover */}
//         <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           <Sparkles className="w-5 h-5 text-blue-600" />
//           <img src="/images/GenerateIcon.png" alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GenerateRecipeCard;



import React from "react";
import { ChefHat, Sparkles } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const GenerateRecipeCard = ({ onClick }) => {
  const { isLoggedIn, openLoginModal } = useAuth();

  const handleClick = () => {
    if (!isLoggedIn) {
      openLoginModal();
    } else {
      onClick();
    }
  };
  return (
    <div
      onClick={handleClick}
      className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl px-6 py-8 sm:px-8 sm:py-10 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 group relative overflow-hidden"
    >
      {/* Animated background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Icon inside circle */}
        {/* <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md transition-all duration-300">
          <ChefHat className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
        </div> */}

        {/* Headings */}
        <div className="space-y-1">
          <h3 className="font-neue font-medium text-base sm:text-lg text-slate-800 group-hover:text-blue-800 transition-colors">
            Generate
          </h3>
          <h3 className="font-neue font-medium text-base sm:text-lg text-slate-800 group-hover:text-blue-800 transition-colors">
            Your Own
          </h3>
          <h3 className="font-neue font-medium text-base sm:text-lg text-slate-800 group-hover:text-blue-800 transition-colors">
            Recipe
          </h3>
        </div>

        {/* Sparkle on hover */}
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Sparkles className="w-5 h-5 text-blue-600" />
          <img src="/images/GenerateIcon.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default GenerateRecipeCard;