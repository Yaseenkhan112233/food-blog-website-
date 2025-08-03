// import React, { useState, useRef, useEffect } from "react";
// import {
//   Send,
//   ChefHat,
//   Clock,
//   Users,
//   Star,
//   Search,
//   BookOpen,
// } from "lucide-react";

// const RecipeGenerator = () => {
//   const [messages, setMessages] = useState([
//     {
//       type: "bot",
//       text: "Hi there! 👋 What delicious recipe would you like to generate today?",
//       timestamp: new Date(),
//       showSuggestions: true,
//     },
//   ]);
//   const [input, setInput] = useState("");
//   const [savedRecipes, setSavedRecipes] = useState([
//     {
//       id: 1,
//       name: "Classic Pasta Carbonara",
//       ingredients: ["pasta", "eggs", "bacon", "cheese", "pepper"],
//       cookTime: "20 mins",
//       servings: 4,
//       rating: 4.8,
//       description: "Creamy, rich pasta with crispy bacon and parmesan cheese",
//     },
//     {
//       id: 2,
//       name: "Chicken Stir Fry",
//       ingredients: ["chicken", "vegetables", "soy sauce", "garlic", "ginger"],
//       cookTime: "15 mins",
//       servings: 3,
//       rating: 4.6,
//       description: "Quick and healthy stir fry with fresh vegetables",
//     },
//   ]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showRecipes, setShowRecipes] = useState(false);
//   const messagesEndRef = useRef(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   // Generate mock recipe based on input with images
//   const generateRecipe = (ingredients) => {
//     const recipes = {
//       biryani: {
//         name: "Chicken Biryani",
//         ingredients: [
//           "basmati rice",
//           "chicken",
//           "yogurt",
//           "onions",
//           "spices",
//           "saffron",
//           "mint",
//         ],
//         cookTime: "45 mins",
//         servings: 4,
//         images: [
//           "https://images.unsplash.com/photo-1563379091339-03246963d771?w=400&h=300&fit=crop",
//           "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop",
//           "https://images.unsplash.com/photo-1642821373181-696a54913e93?w=400&h=300&fit=crop",
//         ],
//         instructions:
//           "1. Soak basmati rice for 30 minutes\n2. Marinate chicken in yogurt and spices\n3. Fry onions until golden brown\n4. Layer rice and chicken in pot\n5. Cook on dum for 45 minutes\n6. Garnish with fried onions and mint",
//       },
//       pizza: {
//         name: "Margherita Pizza",
//         ingredients: [
//           "pizza dough",
//           "tomato sauce",
//           "mozzarella",
//           "fresh basil",
//           "olive oil",
//         ],
//         cookTime: "25 mins",
//         servings: 2,
//         images: [
//           "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",
//           "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
//         ],
//         instructions:
//           "1. Preheat oven to 475°F\n2. Roll out pizza dough\n3. Spread tomato sauce evenly\n4. Add mozzarella cheese\n5. Bake for 12-15 minutes\n6. Top with fresh basil and olive oil",
//       },
//       pasta: {
//         name: "Creamy Garlic Pasta",
//         ingredients: ["pasta", "garlic", "cream", "parmesan", "parsley"],
//         cookTime: "18 mins",
//         servings: 3,
//         images: [
//           "https://images.unsplash.com/photo-1621996346565-e3dbc353d2d5?w=400&h=300&fit=crop",
//           "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=300&fit=crop",
//         ],
//         instructions:
//           "1. Cook pasta according to package\n2. Sauté garlic in butter\n3. Add cream and simmer\n4. Toss with pasta and cheese\n5. Garnish with parsley",
//       },
//       burger: {
//         name: "Classic Beef Burger",
//         ingredients: [
//           "ground beef",
//           "burger buns",
//           "lettuce",
//           "tomato",
//           "onion",
//           "cheese",
//         ],
//         cookTime: "20 mins",
//         servings: 2,
//         images: [
//           "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
//           "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop",
//         ],
//         instructions:
//           "1. Form beef into patties\n2. Season with salt and pepper\n3. Grill patties for 4-5 minutes each side\n4. Toast buns lightly\n5. Assemble with toppings",
//       },
//       sushi: {
//         name: "California Roll",
//         ingredients: [
//           "sushi rice",
//           "nori",
//           "crab meat",
//           "avocado",
//           "cucumber",
//           "sesame seeds",
//         ],
//         cookTime: "30 mins",
//         servings: 3,
//         images: [
//           "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
//           "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&h=300&fit=crop",
//         ],
//         instructions:
//           "1. Prepare sushi rice with vinegar\n2. Place nori on bamboo mat\n3. Spread rice evenly\n4. Add fillings in center\n5. Roll tightly and slice\n6. Sprinkle with sesame seeds",
//       },
//       curry: {
//         name: "Chicken Curry",
//         ingredients: [
//           "chicken",
//           "onions",
//           "tomatoes",
//           "ginger",
//           "garlic",
//           "curry spices",
//           "coconut milk",
//         ],
//         cookTime: "35 mins",
//         servings: 4,
//         images: [
//           "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
//           "https://images.unsplash.com/photo-1631452180539-96aca7d48617?w=400&h=300&fit=crop",
//         ],
//         instructions:
//           "1. Sauté onions until golden\n2. Add ginger-garlic paste\n3. Add tomatoes and spices\n4. Add chicken and cook\n5. Pour coconut milk and simmer\n6. Garnish with cilantro",
//       },
//       tacos: {
//         name: "Beef Tacos",
//         ingredients: [
//           "ground beef",
//           "taco shells",
//           "lettuce",
//           "cheese",
//           "tomatoes",
//           "onions",
//           "salsa",
//         ],
//         cookTime: "15 mins",
//         servings: 3,
//         images: [
//           "https://images.unsplash.com/photo-1565299585323-38174c6e3480?w=400&h=300&fit=crop",
//           "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=300&fit=crop",
//         ],
//         instructions:
//           "1. Brown ground beef with spices\n2. Warm taco shells\n3. Fill shells with beef\n4. Top with lettuce and cheese\n5. Add tomatoes and onions\n6. Serve with salsa",
//       },
//       chicken: {
//         name: "Herb-Crusted Chicken",
//         ingredients: [
//           "chicken breast",
//           "herbs",
//           "olive oil",
//           "garlic",
//           "lemon",
//         ],
//         cookTime: "25 mins",
//         servings: 2,
//         images: [
//           "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop",
//           "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop",
//         ],
//         instructions:
//           "1. Season chicken with herbs\n2. Heat olive oil in pan\n3. Cook chicken 6-7 mins each side\n4. Add garlic and lemon\n5. Rest for 5 minutes before serving",
//       },
//       rice: {
//         name: "Vegetable Fried Rice",
//         ingredients: [
//           "rice",
//           "mixed vegetables",
//           "soy sauce",
//           "eggs",
//           "green onions",
//         ],
//         cookTime: "12 mins",
//         servings: 4,
//         images: [
//           "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop",
//           "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop",
//         ],
//         instructions:
//           "1. Cook rice and let cool\n2. Scramble eggs, set aside\n3. Stir fry vegetables\n4. Add rice and soy sauce\n5. Mix in eggs and green onions",
//       },
//     };

//     const key = Object.keys(recipes).find((ingredient) =>
//       ingredients.toLowerCase().includes(ingredient)
//     );

//     return key
//       ? recipes[key]
//       : {
//           name: "Custom Recipe",
//           ingredients: ingredients.split(",").map((i) => i.trim()),
//           cookTime: "20 mins",
//           servings: 2,
//           images: [
//             "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
//             "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
//           ],
//           instructions: `Here's a delicious recipe using: ${ingredients}!\n\n1. Prep all ingredients\n2. Heat oil in a large pan\n3. Cook main ingredients first\n4. Add seasonings and aromatics\n5. Combine everything and serve hot`,
//         };
//   };

//   const handleSend = () => {
//     if (!input.trim()) return;

//     const userMessage = {
//       type: "user",
//       text: input,
//       timestamp: new Date(),
//     };

//     // Check for greeting messages
//     if (
//       input.toLowerCase().includes("hi") ||
//       input.toLowerCase().includes("hello") ||
//       input.toLowerCase().includes("hey")
//     ) {
//       const newMessages = [
//         ...messages,
//         userMessage,
//         {
//           type: "bot",
//           text: "Hello! 😊 What delicious recipe would you like me to generate for you today? I can help you create amazing dishes like biryani, pizza, pasta, curry, and much more!",
//           timestamp: new Date(),
//           showSuggestions: true,
//         },
//       ];
//       setMessages(newMessages);
//     }
//     // Check if user is asking for saved recipes
//     else if (
//       input.toLowerCase().includes("saved") ||
//       input.toLowerCase().includes("recipe book")
//     ) {
//       const newMessages = [
//         ...messages,
//         userMessage,
//         {
//           type: "bot",
//           text: "Here are your saved recipes! You can also search through them using the recipe panel.",
//           timestamp: new Date(),
//           showRecipePanel: true,
//         },
//       ];
//       setMessages(newMessages);
//       setShowRecipes(true);
//     } else {
//       // Generate recipe
//       const recipe = generateRecipe(input);
//       const recipeMessage = {
//         type: "bot",
//         text: "I've created a perfect recipe for you! 🍳",
//         timestamp: new Date(),
//         recipe: recipe,
//       };

//       const newMessages = [...messages, userMessage, recipeMessage];

//       setMessages(newMessages);
//     }
//     setInput("");
//   };

//   const saveRecipe = (recipe) => {
//     const newRecipe = {
//       ...recipe,
//       id: Date.now(),
//       rating: 4.5,
//       description: `Delicious ${recipe.name} made with fresh ingredients`,
//     };
//     setSavedRecipes([...savedRecipes, newRecipe]);
//   };

//   const filteredRecipes = savedRecipes.filter(
//     (recipe) =>
//       recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       recipe.ingredients.some((ingredient) =>
//         ingredient.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//   );

//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* Main Chat Area */}
//       <div className="flex-1 flex flex-col">
//         {/* Header */}
//         <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-3">
//           <div className="bg-blue-500 p-2 rounded-lg">
//             <ChefHat className="w-6 h-6 text-white" />
//           </div>
//           <div>
//             <h1 className="text-xl font-semibold text-gray-800">
//               AI Recipe Generator
//             </h1>
//             <p className="text-sm text-gray-500">
//               Your personal cooking assistant
//             </p>
//           </div>
//           <div className="ml-auto">
//             <button
//               onClick={() => setShowRecipes(!showRecipes)}
//               className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
//             >
//               <BookOpen className="w-4 h-4" />
//               Recipe Book
//             </button>
//           </div>
//         </div>

//         {/* Messages */}
//         <div className="flex-1 overflow-y-auto p-6 space-y-4">
//           {messages.map((msg, idx) => (
//             <div key={idx} className="flex">
//               <div
//                 className={`max-w-[70%] ${
//                   msg.type === "user" ? "ml-auto" : "mr-auto"
//                 }`}
//               >
//                 <div
//                   className={`px-4 py-3 rounded-2xl shadow-sm ${
//                     msg.type === "bot"
//                       ? "bg-white border border-gray-200"
//                       : "bg-blue-500 text-white"
//                   }`}
//                 >
//                   <p className="text-sm leading-relaxed">{msg.text}</p>

//                   {/* Popular Recipe Suggestions */}
//                   {msg.showSuggestions && (
//                     <div className="mt-4 space-y-3">
//                       <p className="text-xs font-medium text-gray-600 uppercase tracking-wide">
//                         Popular Recipes
//                       </p>
//                       <div className="grid grid-cols-2 gap-2">
//                         {[
//                           { name: "Biryani", emoji: "🍛", keyword: "biryani" },
//                           { name: "Pizza", emoji: "🍕", keyword: "pizza" },
//                           { name: "Pasta", emoji: "🍝", keyword: "pasta" },
//                           { name: "Curry", emoji: "🍛", keyword: "curry" },
//                           { name: "Tacos", emoji: "🌮", keyword: "tacos" },
//                           { name: "Sushi", emoji: "🍣", keyword: "sushi" },
//                         ].map((suggestion, i) => (
//                           <button
//                             key={i}
//                             onClick={() => {
//                               setInput(suggestion.keyword);
//                               setTimeout(() => handleSend(), 100);
//                             }}
//                             className="flex items-center gap-2 p-2 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-left"
//                           >
//                             <span className="text-lg">{suggestion.emoji}</span>
//                             <span className="text-sm font-medium text-gray-700">
//                               {suggestion.name}
//                             </span>
//                           </button>
//                         ))}
//                       </div>
//                     </div>
//                   )}

//                   {msg.recipe && (
//                     <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
//                       <div className="flex items-center justify-between mb-3">
//                         <h3 className="font-semibold text-gray-800 text-lg">
//                           {msg.recipe.name}
//                         </h3>
//                         <button
//                           onClick={() => saveRecipe(msg.recipe)}
//                           className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full hover:bg-blue-600 transition-colors"
//                         >
//                           Save Recipe
//                         </button>
//                       </div>

//                       {/* Recipe Images */}
//                       {msg.recipe.images && (
//                         <div className="mb-4">
//                           <div className="flex gap-2 overflow-x-auto pb-2">
//                             {msg.recipe.images.map((image, i) => (
//                               <img
//                                 key={i}
//                                 src={image}
//                                 alt={`${msg.recipe.name} ${i + 1}`}
//                                 className="w-32 h-24 object-cover rounded-lg flex-shrink-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
//                                 onError={(e) => {
//                                   e.target.src =
//                                     "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop";
//                                 }}
//                               />
//                             ))}
//                           </div>
//                         </div>
//                       )}

//                       <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
//                         <div className="flex items-center gap-1">
//                           <Clock className="w-4 h-4" />
//                           {msg.recipe.cookTime}
//                         </div>
//                         <div className="flex items-center gap-1">
//                           <Users className="w-4 h-4" />
//                           {msg.recipe.servings} servings
//                         </div>
//                       </div>

//                       <div className="mb-3">
//                         <h4 className="font-medium text-gray-700 mb-2">
//                           Ingredients:
//                         </h4>
//                         <div className="flex flex-wrap gap-2">
//                           {msg.recipe.ingredients.map((ingredient, i) => (
//                             <span
//                               key={i}
//                               className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
//                             >
//                               {ingredient}
//                             </span>
//                           ))}
//                         </div>
//                       </div>

//                       <div>
//                         <h4 className="font-medium text-gray-700 mb-2">
//                           Instructions:
//                         </h4>
//                         <p className="text-sm text-gray-600 whitespace-pre-line">
//                           {msg.recipe.instructions}
//                         </p>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//                 <div className="flex items-center gap-2 mt-1 px-2">
//                   <span className="text-xs text-gray-400">
//                     {msg.timestamp.toLocaleTimeString([], {
//                       hour: "2-digit",
//                       minute: "2-digit",
//                     })}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//           <div ref={messagesEndRef} />
//         </div>

//         {/* Input Area */}
//         <div className="bg-white border-t border-gray-200 p-4">
//           <div className="flex items-center gap-3 max-w-4xl mx-auto">
//             <div className="flex-1 relative">
//               <input
//                 className="w-full border border-gray-300 rounded-full px-6 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyDown={(e) => e.key === "Enter" && handleSend()}
//                 placeholder="Ask for recipes, ingredients, or cooking tips..."
//               />
//             </div>
//             <button
//               className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
//               onClick={handleSend}
//               disabled={!input.trim()}
//             >
//               <Send className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Recipe Panel */}
//       {showRecipes && (
//         <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
//           <div className="p-4 border-b border-gray-200">
//             <h2 className="text-lg font-semibold text-gray-800 mb-3">
//               Saved Recipes
//             </h2>
//             <div className="relative">
//               <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search recipes..."
//                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
//           </div>

//           <div className="flex-1 overflow-y-auto p-4 space-y-3">
//             {filteredRecipes.map((recipe) => (
//               <div
//                 key={recipe.id}
//                 className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow"
//               >
//                 <div className="flex items-start justify-between mb-2">
//                   <h3 className="font-medium text-gray-800 text-sm">
//                     {recipe.name}
//                   </h3>
//                   <div className="flex items-center gap-1">
//                     <Star className="w-3 h-3 text-yellow-400 fill-current" />
//                     <span className="text-xs text-gray-600">
//                       {recipe.rating}
//                     </span>
//                   </div>
//                 </div>

//                 <p className="text-xs text-gray-600 mb-2">
//                   {recipe.description}
//                 </p>

//                 <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
//                   <span className="flex items-center gap-1">
//                     <Clock className="w-3 h-3" />
//                     {recipe.cookTime}
//                   </span>
//                   <span className="flex items-center gap-1">
//                     <Users className="w-3 h-3" />
//                     {recipe.servings}
//                   </span>
//                 </div>

//                 <div className="flex flex-wrap gap-1">
//                   {recipe.ingredients.slice(0, 3).map((ingredient, i) => (
//                     <span
//                       key={i}
//                       className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
//                     >
//                       {ingredient}
//                     </span>
//                   ))}
//                   {recipe.ingredients.length > 3 && (
//                     <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
//                       +{recipe.ingredients.length - 3} more
//                     </span>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RecipeGenerator;

import React, { useState, useRef, useEffect } from "react";
import {
  Send,
  ChefHat,
  Clock,
  Users,
  Star,
  Search,
  BookOpen,
} from "lucide-react";

const RecipeGenerator = () => {
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi there! 👋 What delicious recipe would you like to generate today?",
      timestamp: new Date(),
      showSuggestions: true,
    },
  ]);
  const [input, setInput] = useState("");
  const [savedRecipes, setSavedRecipes] = useState([
    {
      id: 1,
      name: "Classic Pasta Carbonara",
      ingredients: ["pasta", "eggs", "bacon", "cheese", "pepper"],
      cookTime: "20 mins",
      servings: 4,
      rating: 4.8,
      description: "Creamy, rich pasta with crispy bacon and parmesan cheese",
    },
    {
      id: 2,
      name: "Chicken Stir Fry",
      ingredients: ["chicken", "vegetables", "soy sauce", "garlic", "ginger"],
      cookTime: "15 mins",
      servings: 3,
      rating: 4.6,
      description: "Quick and healthy stir fry with fresh vegetables",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showRecipes, setShowRecipes] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Generate mock recipe based on input with images
  const generateRecipe = (ingredients) => {
    const recipes = {
      biryani: {
        name: "Chicken Biryani",
        ingredients: [
          "basmati rice",
          "chicken",
          "yogurt",
          "onions",
          "spices",
          "saffron",
          "mint",
        ],
        cookTime: "45 mins",
        servings: 4,
        images: [
          "https://images.unsplash.com/photo-1563379091339-03246963d771?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1642821373181-696a54913e93?w=400&h=300&fit=crop",
        ],
        instructions:
          "1. Soak basmati rice for 30 minutes\n2. Marinate chicken in yogurt and spices\n3. Fry onions until golden brown\n4. Layer rice and chicken in pot\n5. Cook on dum for 45 minutes\n6. Garnish with fried onions and mint",
      },
      pizza: {
        name: "Margherita Pizza",
        ingredients: [
          "pizza dough",
          "tomato sauce",
          "mozzarella",
          "fresh basil",
          "olive oil",
        ],
        cookTime: "25 mins",
        servings: 2,
        images: [
          "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
        ],
        instructions:
          "1. Preheat oven to 475°F\n2. Roll out pizza dough\n3. Spread tomato sauce evenly\n4. Add mozzarella cheese\n5. Bake for 12-15 minutes\n6. Top with fresh basil and olive oil",
      },
      pasta: {
        name: "Creamy Garlic Pasta",
        ingredients: ["pasta", "garlic", "cream", "parmesan", "parsley"],
        cookTime: "18 mins",
        servings: 3,
        images: [
          "https://images.unsplash.com/photo-1621996346565-e3dbc353d2d5?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=300&fit=crop",
        ],
        instructions:
          "1. Cook pasta according to package\n2. Sauté garlic in butter\n3. Add cream and simmer\n4. Toss with pasta and cheese\n5. Garnish with parsley",
      },
      burger: {
        name: "Classic Beef Burger",
        ingredients: [
          "ground beef",
          "burger buns",
          "lettuce",
          "tomato",
          "onion",
          "cheese",
        ],
        cookTime: "20 mins",
        servings: 2,
        images: [
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop",
        ],
        instructions:
          "1. Form beef into patties\n2. Season with salt and pepper\n3. Grill patties for 4-5 minutes each side\n4. Toast buns lightly\n5. Assemble with toppings",
      },
      sushi: {
        name: "California Roll",
        ingredients: [
          "sushi rice",
          "nori",
          "crab meat",
          "avocado",
          "cucumber",
          "sesame seeds",
        ],
        cookTime: "30 mins",
        servings: 3,
        images: [
          "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&h=300&fit=crop",
        ],
        instructions:
          "1. Prepare sushi rice with vinegar\n2. Place nori on bamboo mat\n3. Spread rice evenly\n4. Add fillings in center\n5. Roll tightly and slice\n6. Sprinkle with sesame seeds",
      },
      curry: {
        name: "Chicken Curry",
        ingredients: [
          "chicken",
          "onions",
          "tomatoes",
          "ginger",
          "garlic",
          "curry spices",
          "coconut milk",
        ],
        cookTime: "35 mins",
        servings: 4,
        images: [
          "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1631452180539-96aca7d48617?w=400&h=300&fit=crop",
        ],
        instructions:
          "1. Sauté onions until golden\n2. Add ginger-garlic paste\n3. Add tomatoes and spices\n4. Add chicken and cook\n5. Pour coconut milk and simmer\n6. Garnish with cilantro",
      },
      tacos: {
        name: "Beef Tacos",
        ingredients: [
          "ground beef",
          "taco shells",
          "lettuce",
          "cheese",
          "tomatoes",
          "onions",
          "salsa",
        ],
        cookTime: "15 mins",
        servings: 3,
        images: [
          "https://images.unsplash.com/photo-1565299585323-38174c6e3480?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=300&fit=crop",
        ],
        instructions:
          "1. Brown ground beef with spices\n2. Warm taco shells\n3. Fill shells with beef\n4. Top with lettuce and cheese\n5. Add tomatoes and onions\n6. Serve with salsa",
      },
      chicken: {
        name: "Herb-Crusted Chicken",
        ingredients: [
          "chicken breast",
          "herbs",
          "olive oil",
          "garlic",
          "lemon",
        ],
        cookTime: "25 mins",
        servings: 2,
        images: [
          "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop",
        ],
        instructions:
          "1. Season chicken with herbs\n2. Heat olive oil in pan\n3. Cook chicken 6-7 mins each side\n4. Add garlic and lemon\n5. Rest for 5 minutes before serving",
      },
      rice: {
        name: "Vegetable Fried Rice",
        ingredients: [
          "rice",
          "mixed vegetables",
          "soy sauce",
          "eggs",
          "green onions",
        ],
        cookTime: "12 mins",
        servings: 4,
        images: [
          "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop",
        ],
        instructions:
          "1. Cook rice and let cool\n2. Scramble eggs, set aside\n3. Stir fry vegetables\n4. Add rice and soy sauce\n5. Mix in eggs and green onions",
      },
    };

    const key = Object.keys(recipes).find((ingredient) =>
      ingredients.toLowerCase().includes(ingredient)
    );

    return key
      ? recipes[key]
      : {
          name: "Custom Recipe",
          ingredients: ingredients.split(",").map((i) => i.trim()),
          cookTime: "20 mins",
          servings: 2,
          images: [
            "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
          ],
          instructions: `Here's a delicious recipe using: ${ingredients}!\n\n1. Prep all ingredients\n2. Heat oil in a large pan\n3. Cook main ingredients first\n4. Add seasonings and aromatics\n5. Combine everything and serve hot`,
        };
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      type: "user",
      text: input,
      timestamp: new Date(),
    };

    // Check for greeting messages
    if (
      input.toLowerCase().includes("hi") ||
      input.toLowerCase().includes("hello") ||
      input.toLowerCase().includes("hey")
    ) {
      const newMessages = [
        ...messages,
        userMessage,
        {
          type: "bot",
          text: "Hello! 😊 What delicious recipe would you like me to generate for you today? I can help you create amazing dishes like biryani, pizza, pasta, curry, and much more!",
          timestamp: new Date(),
          showSuggestions: true,
        },
      ];
      setMessages(newMessages);
    }
    // Check if user is asking for saved recipes
    else if (
      input.toLowerCase().includes("saved") ||
      input.toLowerCase().includes("recipe book")
    ) {
      const newMessages = [
        ...messages,
        userMessage,
        {
          type: "bot",
          text: "Here are your saved recipes! You can also search through them using the recipe panel.",
          timestamp: new Date(),
          showRecipePanel: true,
        },
      ];
      setMessages(newMessages);
      setShowRecipes(true);
    } else {
      // Generate recipe
      const recipe = generateRecipe(input);
      const recipeMessage = {
        type: "bot",
        text: "I've created a perfect recipe for you! 🍳",
        timestamp: new Date(),
        recipe: recipe,
      };

      const newMessages = [...messages, userMessage, recipeMessage];

      setMessages(newMessages);
    }
    setInput("");
  };

  const saveRecipe = (recipe) => {
    const newRecipe = {
      ...recipe,
      id: Date.now(),
      rating: 4.5,
      description: `Delicious ${recipe.name} made with fresh ingredients`,
    };
    setSavedRecipes([...savedRecipes, newRecipe]);
  };

  const filteredRecipes = savedRecipes.filter(
    (recipe) =>
      recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col min-h-0">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-3">
          <div className="bg-blue-500 p-2 rounded-lg">
            <ChefHat className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-800">
              AI Recipe Generator
            </h1>
            <p className="text-sm text-gray-500">
              Your personal cooking assistant
            </p>
          </div>
          <div className="ml-auto">
            <button
              onClick={() => setShowRecipes(!showRecipes)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              Recipe Book
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 min-h-0">
          {messages.map((msg, idx) => (
            <div key={idx} className="flex">
              <div
                className={`max-w-[70%] ${
                  msg.type === "user" ? "ml-auto" : "mr-auto"
                }`}
              >
                <div
                  className={`px-4 py-3 rounded-2xl shadow-sm ${
                    msg.type === "bot"
                      ? "bg-white border border-gray-200"
                      : "bg-blue-500 text-white"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{msg.text}</p>

                  {/* Popular Recipe Suggestions */}
                  {msg.showSuggestions && (
                    <div className="mt-4 space-y-3">
                      <p className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                        Popular Recipes
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { name: "Biryani", emoji: "🍛", keyword: "biryani" },
                          { name: "Pizza", emoji: "🍕", keyword: "pizza" },
                          { name: "Pasta", emoji: "🍝", keyword: "pasta" },
                          { name: "Curry", emoji: "🍛", keyword: "curry" },
                          { name: "Tacos", emoji: "🌮", keyword: "tacos" },
                          { name: "Sushi", emoji: "🍣", keyword: "sushi" },
                        ].map((suggestion, i) => (
                          <button
                            key={i}
                            onClick={() => {
                              setInput(suggestion.keyword);
                              setTimeout(() => handleSend(), 100);
                            }}
                            className="flex items-center gap-2 p-2 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-left"
                          >
                            <span className="text-lg">{suggestion.emoji}</span>
                            <span className="text-sm font-medium text-gray-700">
                              {suggestion.name}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {msg.recipe && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-gray-800 text-lg">
                          {msg.recipe.name}
                        </h3>
                        <button
                          onClick={() => saveRecipe(msg.recipe)}
                          className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full hover:bg-blue-600 transition-colors"
                        >
                          Save Recipe
                        </button>
                      </div>

                      {/* Recipe Images */}
                      {msg.recipe.images && (
                        <div className="mb-4">
                          <div className="flex gap-2 overflow-x-auto pb-2">
                            {msg.recipe.images.map((image, i) => (
                              <img
                                key={i}
                                src={image}
                                alt={`${msg.recipe.name} ${i + 1}`}
                                className="w-32 h-24 object-cover rounded-lg flex-shrink-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                                onError={(e) => {
                                  e.target.src =
                                    "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop";
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {msg.recipe.cookTime}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {msg.recipe.servings} servings
                        </div>
                      </div>

                      <div className="mb-3">
                        <h4 className="font-medium text-gray-700 mb-2">
                          Ingredients:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {msg.recipe.ingredients.map((ingredient, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                            >
                              {ingredient}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">
                          Instructions:
                        </h4>
                        <p className="text-sm text-gray-600 whitespace-pre-line">
                          {msg.recipe.instructions}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2 mt-1 px-2">
                  <span className="text-xs text-gray-400">
                    {msg.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="bg-white border-t border-gray-200 p-4 flex-shrink-0">
          <div className="flex items-center gap-3 max-w-4xl mx-auto">
            <div className="flex-1 relative">
              <input
                className="w-full border border-gray-300 rounded-full px-6 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask for recipes, ingredients, or cooking tips..."
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleSend}
              disabled={!input.trim()}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Recipe Panel */}
      {showRecipes && (
        <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              Saved Recipes
            </h2>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search recipes..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {filteredRecipes.map((recipe) => (
              <div
                key={recipe.id}
                className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-gray-800 text-sm">
                    {recipe.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-xs text-gray-600">
                      {recipe.rating}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-gray-600 mb-2">
                  {recipe.description}
                </p>

                <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {recipe.cookTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {recipe.servings}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1">
                  {recipe.ingredients.slice(0, 3).map((ingredient, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                    >
                      {ingredient}
                    </span>
                  ))}
                  {recipe.ingredients.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                      +{recipe.ingredients.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeGenerator;
