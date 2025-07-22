import React, { createContext, useContext, useState, useEffect } from "react";
import { db, auth } from "../firebase/firebase";
import {
  collection,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

// Sample recipe data organized by category
const initialRecipes = {
  chinese: [
    {
      id: 1,
      category: "chinese",
      title: "Chinese",
      subtitle: "Shrimp Noodles",
      rating: 4.8,
      cookTime: "30 min",
      servings: 4,
      image: "🍜",
      isPopular: true,
      images: [
        "/images/chinese-shrimp-noodles-1.jpg",
        "/images/chinese-shrimp-noodles-2.jpg",
      ],
      description:
        "A delicious stir-fry noodle dish with succulent shrimp, crisp vegetables, and a savory sauce.",
      ingredients: [
        "Egg",
        "Shrimp",
        "Noodles",
        "Soy Sauce",
        "Sugar",
        "Onion",
        "Carrot",
        "Bell Pepper",
        "Clove",
        "Vegetable Oil",
      ],
      instructions: [
        "Boil noodles in water for 3-4 minutes (or as per package). Drain, rinse with cold water and set aside with a little oil to prevent sticking.",
        "Mix the sauce in a small bowl: soy sauce, oyster sauce, dark soy sauce, and sugar.",
        "Heat oil in a wok or large pan over high heat. Stir-fry the shrimp for 1-2 minutes until pink. Remove and set aside.",
        "In the same pan, add garlic, onion, carrot, and bell pepper. Stir-fry for 2-3 minutes.",
        "Add the noodles and sauce. Toss everything together well.",
        "Return the shrimp to the pan. Add green onions. Stir-fry for 1-2 more minutes until evenly heated.",
        "Serve hot, garnish with sesame seeds or chili oil if desired.",
      ],
    },
    {
      id: 2,
      category: "chinese",
      title: "Kung Pao",
      subtitle: "Chicken",
      rating: 4.9,
      cookTime: "25 min",
      servings: 4,
      image: "🍗",
      isPopular: true,
      description:
        "A spicy, stir-fried Chinese dish made with chicken, peanuts, vegetables, and chili peppers.",
      ingredients: [
        "Chicken Breast",
        "Peanuts",
        "Dried Chili Peppers",
        "Green Onions",
        "Garlic",
        "Ginger",
        "Soy Sauce",
        "Rice Vinegar",
        "Cornstarch",
        "Vegetable Oil",
      ],
      instructions: [
        "Cut chicken into small cubes and marinate with soy sauce and cornstarch for 15 minutes.",
        "In a small bowl, prepare sauce by mixing soy sauce, rice vinegar, sugar, and cornstarch.",
        "Heat oil in a wok over high heat. Add dried chilies and stir-fry until fragrant.",
        "Add chicken and stir-fry until nearly cooked through.",
        "Add garlic, ginger, and continue stir-frying.",
        "Pour in the sauce and add peanuts. Stir until sauce thickens.",
        "Garnish with chopped green onions and serve with rice.",
      ],
    },
    {
      id: 3,
      category: "chinese",
      title: "Sweet and Sour",
      subtitle: "Pork",
      rating: 4.7,
      cookTime: "40 min",
      servings: 3,
      image: "🥢",
      isPopular: false,
      description:
        "Crispy pieces of pork coated in a tangy, sweet and sour sauce with bell peppers, onions, and pineapple.",
      ingredients: [
        "Pork Loin",
        "Bell Peppers",
        "Onion",
        "Pineapple Chunks",
        "Ketchup",
        "Rice Vinegar",
        "Brown Sugar",
        "Soy Sauce",
        "Cornstarch",
        "Vegetable Oil",
      ],
      instructions: [
        "Cut pork into 1-inch cubes and coat with salt, pepper, and cornstarch.",
        "Deep fry the pork until golden brown and crispy. Set aside.",
        "In a separate pan, sauté onions and bell peppers until slightly softened.",
        "Add pineapple chunks and stir-fry for 1 minute.",
        "Mix ketchup, rice vinegar, brown sugar, and soy sauce in a bowl.",
        "Pour sauce into the pan and bring to a simmer.",
        "Add the fried pork, toss to coat with sauce, and serve hot.",
      ],
    },
  ],
  italian: [
    {
      id: 4,
      category: "italian",
      title: "Spaghetti",
      subtitle: "Carbonara",
      rating: 4.9,
      cookTime: "20 min",
      servings: 2,
      image: "🍝",
      isPopular: true,
      description:
        "A classic Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
      ingredients: [
        "Spaghetti",
        "Eggs",
        "Pecorino Romano Cheese",
        "Pancetta",
        "Black Pepper",
        "Salt",
      ],
      instructions: [
        "Bring a large pot of salted water to boil. Cook spaghetti according to package directions.",
        "While pasta cooks, dice pancetta and cook in a skillet until crispy.",
        "In a bowl, whisk together eggs, grated cheese, and black pepper.",
        "Drain pasta, reserving some pasta water.",
        "Working quickly, add hot pasta to the pancetta, remove from heat, and pour in egg mixture. Toss rapidly to coat the pasta.",
        "If needed, add a splash of pasta water to create a creamy sauce.",
        "Serve immediately with additional cheese and black pepper.",
      ],
    },
    {
      id: 5,
      category: "italian",
      title: "Margherita",
      subtitle: "Pizza",
      rating: 4.8,
      cookTime: "30 min",
      servings: 4,
      image: "🍕",
      isPopular: true,
      description:
        "A simple yet delicious pizza topped with tomatoes, mozzarella cheese, fresh basil, and olive oil.",
      ingredients: [
        "Pizza Dough",
        "San Marzano Tomatoes",
        "Fresh Mozzarella",
        "Fresh Basil",
        "Olive Oil",
        "Salt",
      ],
      instructions: [
        "Preheat oven to 500°F (260°C) with a pizza stone if available.",
        "Stretch the pizza dough into a 12-inch circle on a floured surface.",
        "Spread crushed San Marzano tomatoes over the dough, leaving a border for the crust.",
        "Tear fresh mozzarella into pieces and distribute evenly over the pizza.",
        "Drizzle with olive oil and sprinkle with salt.",
        "Bake for 8-10 minutes until crust is golden and cheese is bubbling.",
        "Remove from oven, top with fresh basil leaves, and serve.",
      ],
    },
  ],
  fastFood: [
    {
      id: 6,
      category: "fastFood",
      title: "Classic",
      subtitle: "Cheeseburger",
      rating: 4.7,
      cookTime: "15 min",
      servings: 1,
      image: "🍔",
      isPopular: true,
      description:
        "A juicy beef patty topped with melted cheese, lettuce, tomato, and special sauce, served in a soft bun.",
      ingredients: [
        "Ground Beef",
        "Cheese Slice",
        "Burger Bun",
        "Lettuce",
        "Tomato",
        "Onion",
        "Pickles",
        "Ketchup",
        "Mustard",
        "Mayonnaise",
      ],
      instructions: [
        "Form ground beef into a patty, season with salt and pepper.",
        "Cook the patty on medium-high heat for 3-4 minutes per side.",
        "Add cheese slice on top during the last minute of cooking.",
        "Toast the burger bun lightly.",
        "Spread sauce on the bottom bun (mix of ketchup, mustard, and mayo).",
        "Layer lettuce, tomato, burger patty with cheese, onion, and pickles.",
        "Add the top bun and serve immediately.",
      ],
    },
    {
      id: 7,
      category: "fastFood",
      title: "Crispy",
      subtitle: "Fried Chicken",
      rating: 4.8,
      cookTime: "45 min",
      servings: 4,
      image: "🍗",
      isPopular: true,
      description:
        "Juicy chicken pieces coated in a seasoned breading and deep-fried until golden and crispy.",
      ingredients: [
        "Chicken Pieces",
        "Buttermilk",
        "Flour",
        "Paprika",
        "Garlic Powder",
        "Onion Powder",
        "Salt",
        "Black Pepper",
        "Cayenne Pepper",
        "Vegetable Oil",
      ],
      instructions: [
        "Marinate chicken pieces in buttermilk for at least 4 hours or overnight.",
        "Mix flour with all spices in a large bowl.",
        "Remove chicken from buttermilk, allowing excess to drip off.",
        "Dredge chicken in seasoned flour mixture, shaking off excess.",
        "Heat oil to 350°F (175°C) in a deep fryer or large pot.",
        "Fry chicken in batches for 12-15 minutes until golden brown and internal temperature reaches 165°F (74°C).",
        "Drain on paper towels and serve hot.",
      ],
    },
  ],
  healthy: [
    {
      id: 8,
      category: "healthy",
      title: "Mediterranean",
      subtitle: "Quinoa Bowl",
      rating: 4.6,
      cookTime: "25 min",
      servings: 2,
      image: "🥗",
      isPopular: true,
      description:
        "A nutritious bowl with quinoa, fresh vegetables, feta cheese, olives, and a light lemon dressing.",
      ingredients: [
        "Quinoa",
        "Cucumber",
        "Cherry Tomatoes",
        "Red Onion",
        "Kalamata Olives",
        "Feta Cheese",
        "Fresh Parsley",
        "Lemon Juice",
        "Olive Oil",
        "Salt",
      ],
      instructions: [
        "Rinse quinoa and cook according to package directions. Let cool slightly.",
        "Dice cucumber, halve cherry tomatoes, and thinly slice red onion.",
        "In a large bowl, combine cooked quinoa with all vegetables.",
        "Add crumbled feta cheese and chopped Kalamata olives.",
        "In a small bowl, whisk together lemon juice, olive oil, salt, and pepper.",
        "Pour dressing over the quinoa mixture and toss to combine.",
        "Garnish with fresh parsley and serve at room temperature or chilled.",
      ],
    },
  ],
  bar: [
    {
      id: 9,
      category: "bar",
      title: "Classic",
      subtitle: "Nachos",
      rating: 4.5,
      cookTime: "20 min",
      servings: 4,
      image: "🧀",
      isPopular: true,
      description:
        "Crispy tortilla chips topped with melted cheese, jalapeños, and served with salsa, guacamole, and sour cream.",
      ingredients: [
        "Tortilla Chips",
        "Cheddar Cheese",
        "Monterey Jack Cheese",
        "Black Beans",
        "Jalapeños",
        "Salsa",
        "Guacamole",
        "Sour Cream",
        "Green Onions",
        "Cilantro",
      ],
      instructions: [
        "Preheat oven to 400°F (200°C).",
        "Arrange tortilla chips in an even layer on a baking sheet.",
        "Sprinkle shredded cheeses over chips.",
        "Add black beans and jalapeño slices on top.",
        "Bake for 5-7 minutes until cheese is melted and bubbly.",
        "Remove from oven and top with dollops of salsa, guacamole, and sour cream.",
        "Garnish with chopped green onions and cilantro before serving.",
      ],
    },
  ],
  desi: [
    {
      id: 10,
      category: "desi",
      title: "Chicken",
      subtitle: "Biryani",
      rating: 4.9,
      cookTime: "1 hr 30 min",
      servings: 6,
      image: "🍚",
      isPopular: true,
      description:
        "A fragrant Indian rice dish with tender chicken pieces, aromatic spices, and caramelized onions.",
      ingredients: [
        "Basmati Rice",
        "Chicken Thighs",
        "Yogurt",
        "Onions",
        "Tomatoes",
        "Ginger Paste",
        "Garlic Paste",
        "Biryani Masala",
        "Fresh Mint",
        "Fresh Cilantro",
        "Ghee",
      ],
      instructions: [
        "Marinate chicken with yogurt, ginger-garlic paste, and biryani masala for at least 1 hour.",
        "Soak basmati rice for 30 minutes, then parboil with whole spices until 70% cooked.",
        "In a separate pot, caramelize sliced onions until golden brown.",
        "Add marinated chicken to the pot and cook until sealed on all sides.",
        "Layer partially cooked rice over the chicken.",
        "Sprinkle with fresh herbs, saffron-infused milk, and ghee.",
        "Cover tightly and cook on low heat for 25-30 minutes.",
        "Mix gently before serving, ensuring each serving has rice and chicken.",
      ],
    },
  ],
};

// Flatten the recipes for easy lookup by ID
const flattenRecipes = (recipesByCategory) => {
  let flattenedRecipes = [];
  for (const category in recipesByCategory) {
    flattenedRecipes = [...flattenedRecipes, ...recipesByCategory[category]];
  }
  return flattenedRecipes;
};

const RecipeContext = createContext();

export const useRecipes = () => {
  return useContext(RecipeContext);
};

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState(initialRecipes);
  const [allRecipes, setAllRecipes] = useState(flattenRecipes(initialRecipes));
  const [savedRecipeIds, setSavedRecipeIds] = useState(new Set());
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  // Listen to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
        // Fetch user's saved recipes from Firestore
        fetchSavedRecipes(user.uid);
      } else {
        setUserId(null);
        setSavedRecipeIds(new Set());
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Fetch saved recipes from Firestore
  const fetchSavedRecipes = async (uid) => {
    try {
      const userDocRef = doc(db, "users", uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists() && userDoc.data().savedRecipes) {
        const savedRecipes = userDoc.data().savedRecipes;
        setSavedRecipeIds(new Set(savedRecipes.map((id) => parseInt(id, 10))));
      }
    } catch (error) {
      console.error("Error fetching saved recipes:", error);
    }
  };

  // Update saved recipes in Firestore
  const updateFirestoreSavedRecipes = async (recipeId, isSaving) => {
    if (!userId) return;

    try {
      const userDocRef = doc(db, "users", userId);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        // Update existing document
        await updateDoc(userDocRef, {
          savedRecipes: isSaving
            ? arrayUnion(recipeId.toString())
            : arrayRemove(recipeId.toString()),
        });
      } else {
        // Create new document
        await setDoc(userDocRef, {
          savedRecipes: [recipeId.toString()],
        });
      }
    } catch (error) {
      console.error("Error updating saved recipes:", error);
    }
  };

  // Get all saved recipes
  const getSavedRecipes = () => {
    return allRecipes.filter((recipe) => savedRecipeIds.has(recipe.id));
  };

  // Toggle save status of a recipe
  const toggleSaveRecipe = (recipeId) => {
    setSavedRecipeIds((prev) => {
      const newSaved = new Set(prev);
      const isSaving = !newSaved.has(recipeId);

      if (isSaving) {
        newSaved.add(recipeId);
      } else {
        newSaved.delete(recipeId);
      }

      // Update Firestore
      updateFirestoreSavedRecipes(recipeId, isSaving);

      return newSaved;
    });
  };

  // Get a specific recipe by ID
  const getRecipeById = (id) => {
    return allRecipes.find((recipe) => recipe.id === id);
  };

  // Get recipes by category
  const getRecipesByCategory = (category) => {
    return recipes[category] || [];
  };

  // Get categories
  const getCategories = () => {
    return Object.keys(recipes);
  };

  // Get popular recipes by category
  const getPopularRecipesByCategory = (category) => {
    return recipes[category]?.filter((recipe) => recipe.isPopular) || [];
  };

  // Get all popular recipes
  const getAllPopularRecipes = () => {
    return allRecipes.filter((recipe) => recipe.isPopular);
  };

  const value = {
    recipes,
    allRecipes,
    savedRecipeIds,
    getSavedRecipes,
    toggleSaveRecipe,
    getRecipeById,
    isRecipeSaved: (id) => savedRecipeIds.has(id),
    getRecipesByCategory,
    getCategories,
    getPopularRecipesByCategory,
    getAllPopularRecipes,
    loading,
  };

  return (
    <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
  );
};
