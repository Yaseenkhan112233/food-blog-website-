// import React, { createContext, useContext, useState, useEffect } from "react";
// import { db, auth } from "../firebase/firebase";
// import {
//   collection,
//   doc,
//   setDoc,
//   getDoc,
//   updateDoc,
//   arrayUnion,
//   arrayRemove,
//   query,
//   where,
//   getDocs,
// } from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
// import allRecipes from "../data/allRecipes";

// // Use the imported recipes as our initial data
// const initialRecipes = allRecipes;

// // Flatten the recipes for easy lookup by ID
// const flattenRecipes = (recipesByCategory) => {
//   let flattenedRecipes = [];
//   for (const category in recipesByCategory) {
//     flattenedRecipes = [...flattenedRecipes, ...recipesByCategory[category]];
//   }
//   return flattenedRecipes;
// };

// const RecipeContext = createContext();

// export const useRecipes = () => {
//   return useContext(RecipeContext);
// };

// export const RecipeProvider = ({ children }) => {
//   const [recipes, setRecipes] = useState(initialRecipes);
//   const [allRecipesList, setAllRecipesList] = useState(
//     flattenRecipes(initialRecipes)
//   );
//   const [savedRecipeIds, setSavedRecipeIds] = useState(new Set());
//   const [userId, setUserId] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Listen to auth state changes
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUserId(user.uid);
//         // Fetch user's saved recipes from Firestore
//         fetchSavedRecipes(user.uid);
//       } else {
//         setUserId(null);
//         setSavedRecipeIds(new Set());
//       }
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   // Fetch saved recipes from Firestore
//   const fetchSavedRecipes = async (uid) => {
//     try {
//       const userDocRef = doc(db, "users", uid);
//       const userDoc = await getDoc(userDocRef);

//       if (userDoc.exists() && userDoc.data().savedRecipes) {
//         const savedRecipes = userDoc.data().savedRecipes;
//         setSavedRecipeIds(new Set(savedRecipes.map((id) => parseInt(id, 10))));
//       }
//     } catch (error) {
//       console.error("Error fetching saved recipes:", error);
//     }
//   };

//   // Update saved recipes in Firestore
//   const updateFirestoreSavedRecipes = async (recipeId, isSaving) => {
//     if (!userId) return;

//     try {
//       const userDocRef = doc(db, "users", userId);
//       const userDoc = await getDoc(userDocRef);

//       if (userDoc.exists()) {
//         // Update existing document
//         await updateDoc(userDocRef, {
//           savedRecipes: isSaving
//             ? arrayUnion(recipeId.toString())
//             : arrayRemove(recipeId.toString()),
//         });
//       } else {
//         // Create new document
//         await setDoc(userDocRef, {
//           savedRecipes: [recipeId.toString()],
//         });
//       }
//     } catch (error) {
//       console.error("Error updating saved recipes:", error);
//     }
//   };

//   // Get all saved recipes
//   const getSavedRecipes = () => {
//     return allRecipesList.filter((recipe) => savedRecipeIds.has(recipe.id));
//   };

//   // Toggle save status of a recipe
//   const toggleSaveRecipe = (recipeId) => {
//     setSavedRecipeIds((prev) => {
//       const newSaved = new Set(prev);
//       const isSaving = !newSaved.has(recipeId);

//       if (isSaving) {
//         newSaved.add(recipeId);
//       } else {
//         newSaved.delete(recipeId);
//       }

//       // Update Firestore
//       updateFirestoreSavedRecipes(recipeId, isSaving);

//       return newSaved;
//     });
//   };

//   // Get a specific recipe by ID
//   const getRecipeById = (id) => {
//     return allRecipesList.find((recipe) => recipe.id === id);
//   };

//   // Get recipes by category
//   const getRecipesByCategory = (category) => {
//     return recipes[category] || [];
//   };

//   // Get categories
//   const getCategories = () => {
//     return Object.keys(recipes);
//   };

//   // Get popular recipes by category
//   const getPopularRecipesByCategory = (category) => {
//     return recipes[category]?.filter((recipe) => recipe.isPopular) || [];
//   };

//   // Get all popular recipes
//   const getAllPopularRecipes = () => {
//     return allRecipesList.filter((recipe) => recipe.isPopular);
//   };

//   const value = {
//     recipes,
//     allRecipes: allRecipesList,
//     savedRecipeIds,
//     getSavedRecipes,
//     toggleSaveRecipe,
//     getRecipeById,
//     isRecipeSaved: (id) => savedRecipeIds.has(id),
//     getRecipesByCategory,
//     getCategories,
//     getPopularRecipesByCategory,
//     getAllPopularRecipes,
//     loading,
//   };

//   return (
//     <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
//   );
// };


import React, { createContext, useContext, useState, useEffect } from "react";
import allRecipes from "../data/allRecipes";

// Use the imported recipes as our initial data
const initialRecipes = allRecipes;

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
  const [allRecipesList, setAllRecipesList] = useState(
    flattenRecipes(initialRecipes)
  );
  const [savedRecipeIds, setSavedRecipeIds] = useState(new Set());
  const [loading, setLoading] = useState(false);

  // localStorage key for saved recipes
  const SAVED_RECIPES_KEY = "savedRecipes";

  // Load saved recipes from localStorage on component mount
  useEffect(() => {
    loadSavedRecipesFromStorage();
  }, []);

  // Load saved recipes from localStorage
  const loadSavedRecipesFromStorage = () => {
    try {
      const savedRecipes = localStorage.getItem(SAVED_RECIPES_KEY);
      if (savedRecipes) {
        const parsedRecipes = JSON.parse(savedRecipes);
        // Convert array to Set and ensure all IDs are integers
        setSavedRecipeIds(new Set(parsedRecipes.map((id) => parseInt(id, 10))));
      }
    } catch (error) {
      console.error("Error loading saved recipes from localStorage:", error);
      // If there's an error, clear the corrupted data
      localStorage.removeItem(SAVED_RECIPES_KEY);
    }
  };

  // Save recipes to localStorage
  const saveRecipesToStorage = (recipeIdsSet) => {
    try {
      // Convert Set to Array for JSON serialization
      const recipeIdsArray = Array.from(recipeIdsSet);
      localStorage.setItem(SAVED_RECIPES_KEY, JSON.stringify(recipeIdsArray));
    } catch (error) {
      console.error("Error saving recipes to localStorage:", error);
    }
  };

  // Get all saved recipes
  const getSavedRecipes = () => {
    return allRecipesList.filter((recipe) => savedRecipeIds.has(recipe.id));
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

      // Save to localStorage
      saveRecipesToStorage(newSaved);

      return newSaved;
    });
  };

  // Clear all saved recipes
  const clearAllSavedRecipes = () => {
    setSavedRecipeIds(new Set());
    localStorage.removeItem(SAVED_RECIPES_KEY);
  };

  // Get a specific recipe by ID
  const getRecipeById = (id) => {
    return allRecipesList.find((recipe) => recipe.id === id);
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
    return allRecipesList.filter((recipe) => recipe.isPopular);
  };

  // Export saved recipes (useful for backup)
  const exportSavedRecipes = () => {
    return Array.from(savedRecipeIds);
  };

  // Import saved recipes (useful for restore)
  const importSavedRecipes = (recipeIds) => {
    try {
      const validIds = recipeIds.filter(id => 
        allRecipesList.some(recipe => recipe.id === parseInt(id, 10))
      );
      const newSavedIds = new Set(validIds.map(id => parseInt(id, 10)));
      setSavedRecipeIds(newSavedIds);
      saveRecipesToStorage(newSavedIds);
    } catch (error) {
      console.error("Error importing saved recipes:", error);
    }
  };

  const value = {
    recipes,
    allRecipes: allRecipesList,
    savedRecipeIds,
    getSavedRecipes,
    toggleSaveRecipe,
    clearAllSavedRecipes,
    getRecipeById,
    isRecipeSaved: (id) => savedRecipeIds.has(id),
    getRecipesByCategory,
    getCategories,
    getPopularRecipesByCategory,
    getAllPopularRecipes,
    exportSavedRecipes,
    importSavedRecipes,
    loading,
  };

  return (
    <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
  );
};