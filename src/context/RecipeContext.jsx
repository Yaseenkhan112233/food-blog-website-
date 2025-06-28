import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ loading state

  const dummyRecipes = [
    {
      title: "Grilled Chicken",
      description: "Juicy grilled chicken seasoned with herbs and garlic.",
      category: "American",
      image: "https://source.unsplash.com/400x300/?grilled-chicken",
    },
    {
      title: "Creamy Pasta",
      description: "Pasta in rich and creamy Alfredo sauce.",
      category: "Italian",
      image: "https://source.unsplash.com/400x300/?creamy-pasta",
    },
    {
      title: "Veggie Omelette",
      description: "A healthy omelette with fresh vegetables.",
      category: "American",
      image: "https://source.unsplash.com/400x300/?veggie-omelette",
    },
    {
      title: "Chicken Biryani",
      description: "Traditional spicy chicken biryani with basmati rice.",
      category: "Pakistani",
      image: "https://source.unsplash.com/400x300/?chicken-biryani",
    },
    {
      title: "Beef Burger",
      description: "A juicy grilled beef burger with cheese.",
      category: "American",
      image: "https://source.unsplash.com/400x300/?burger",
    },
    {
      title: "Fruit Salad",
      description: "Fresh seasonal fruits in a bowl with honey-lime dressing.",
      category: "Dessert",
      image: "https://source.unsplash.com/400x300/?fruit-salad",
    },
    {
      title: "Pancakes",
      description: "Fluffy pancakes served with syrup and butter.",
      category: "American",
      image: "https://source.unsplash.com/400x300/?pancakes",
    },
    {
      title: "Tandoori Chicken",
      description: "Spicy grilled chicken marinated in yogurt and spices.",
      category: "Indian",
      image: "https://source.unsplash.com/400x300/?tandoori-chicken",
    },
    {
      title: "Mango Smoothie",
      description: "Refreshing mango smoothie with yogurt and honey.",
      category: "Dessert",
      image: "https://source.unsplash.com/400x300/?mango-smoothie",
    },
    {
      title: "Spaghetti Bolognese",
      description: "Classic spaghetti with meat sauce.",
      category: "Italian",
      image: "https://source.unsplash.com/400x300/?spaghetti",
    },
    {
      title: "Chicken Karahi",
      description: "Pakistani-style spicy chicken cooked in a wok.",
      category: "Pakistani",
      image: "https://source.unsplash.com/400x300/?chicken-karahi",
    },
    {
      title: "Vegetable Soup",
      description: "Hot and healthy vegetable soup.",
      category: "Chinese",
      image: "https://source.unsplash.com/400x300/?vegetable-soup",
    },
    {
      title: "Egg Fried Rice",
      description: "Fried rice with egg, veggies, and soy sauce.",
      category: "Chinese",
      image: "https://source.unsplash.com/400x300/?egg-fried-rice",
    },
    {
      title: "Cheese Sandwich",
      description: "Grilled cheese sandwich with tomato.",
      category: "American",
      image: "https://source.unsplash.com/400x300/?cheese-sandwich",
    },
    {
      title: "Butter Chicken",
      description: "Rich and creamy Indian butter chicken curry.",
      category: "Indian",
      image: "https://source.unsplash.com/400x300/?butter-chicken",
    },
    {
      title: "French Toast",
      description: "Egg-coated toast fried until golden brown.",
      category: "American",
      image: "https://source.unsplash.com/400x300/?french-toast",
    },
    {
      title: "Club Sandwich",
      description: "Triple-layer sandwich with chicken, egg, and veggies.",
      category: "American",
      image: "https://source.unsplash.com/400x300/?club-sandwich",
    },
    {
      title: "Chocolate Cake",
      description: "Moist and rich chocolate layer cake.",
      category: "Dessert",
      image: "https://source.unsplash.com/400x300/?chocolate-cake",
    },
    {
      title: "Paratha Roll",
      description: "Stuffed paratha roll with spicy chicken.",
      category: "Pakistani",
      image: "https://source.unsplash.com/400x300/?paratha-roll",
    },
    {
      title: "Pizza Margherita",
      description: "Classic pizza with tomato, basil, and mozzarella.",
      category: "Italian",
      image: "https://source.unsplash.com/400x300/?pizza",
    },
  ];

  useEffect(() => {
    const uploadInitialRecipes = async () => {
      try {
        for (const recipe of dummyRecipes) {
          await addDoc(collection(db, "recipes"), {
            ...recipe,
            createdAt: new Date(),
          });
        }
        setRecipes(dummyRecipes);
      } catch (error) {
        console.error("Error saving recipes:", error);
      } finally {
        setLoading(false); // ✅ hide loader after fetch
      }
    };

    uploadInitialRecipes();
  }, []);

  return (
    <RecipeContext.Provider value={{ recipes, loading }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipes = () => useContext(RecipeContext);
