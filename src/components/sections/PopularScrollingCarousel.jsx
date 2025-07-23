import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Star, Clock } from "lucide-react";

const PopularScrollingCarousel = ({ recipes }) => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current || !containerRef.current || recipes.length === 0)
      return;

    // Clone the items to create an infinite scrolling effect
    const items = scrollRef.current.children;
    const itemWidth = items[0].offsetWidth + 16; // 16px for margin
    let position = 0;

    const scroll = () => {
      if (!scrollRef.current || !containerRef.current) return;

      position -= 0.5; // Speed of scrolling

      // Reset position when enough items have scrolled past
      if (position <= -itemWidth) {
        position = 0;
        // Move first item to the end
        const firstItem = scrollRef.current.children[0];
        scrollRef.current.appendChild(firstItem.cloneNode(true));
        scrollRef.current.removeChild(firstItem);
      }

      scrollRef.current.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(scroll);
    };

    const animation = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animation);
  }, [recipes]);

  const handleCardClick = (recipeId) => {
    navigate(`/recipe/${recipeId}`);
  };

  return (
    <div className="overflow-hidden py-4" ref={containerRef}>
      <h2 className="text-2xl font-bold text-slate-800 mb-4 px-4">Popular</h2>
      <div
        className="flex space-x-4 pl-4 pr-16"
        ref={scrollRef}
        style={{ willChange: "transform" }}
      >
        {recipes.map((recipe) => (
          <div
            key={`${recipe.id}-${recipe.title}`}
            onClick={() => handleCardClick(recipe.id)}
            className="flex-shrink-0 w-48 cursor-pointer group"
          >
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-24 relative">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-2">
                <h3 className="font-semibold text-sm truncate">
                  {recipe.title}
                </h3>
                <p className="text-xs text-slate-500 truncate">
                  {recipe.subtitle}
                </p>
                <div className="flex justify-between items-center mt-1 text-xs">
                  <div className="flex items-center">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="ml-1">{recipe.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span className="ml-1">{recipe.cookTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularScrollingCarousel;
