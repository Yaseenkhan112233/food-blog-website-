// App.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/common/Layout";

// Import contexts
import { AuthProvider } from "./context/AuthContext";
import { RecipeProvider } from "./context/RecipeContext";
import LoginModal from "./components/common/LoginModal";
import SplashScreen from "./components/common/SplashScreen";

// Import all pages
import Dashboard from "./pages/DashboardPage";
import CategoriesPage from "./pages/CategoriesPage";
import PopularPage from "./pages/PopularPage";
import SavedPage from "./pages/SavedPage";
import SignupPage from "./pages/SignupPage";
import SignInPage from "./pages/SignInPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import CategoryPage from "./pages/CategoryPage";
import RecipeGenerator from "./pages/RecipeGenerator";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  // Check if this is the first load using local storage
  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisitedBefore");
    if (hasVisited) {
      // Skip splash screen for returning users
      setShowSplash(false);
    } else {
      // Mark as visited for future loads
      localStorage.setItem("hasVisitedBefore", "true");
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <AuthProvider>
      <RecipeProvider>
        {showSplash ? (
          <SplashScreen onComplete={handleSplashComplete} />
        ) : (
          <Layout>
            <LoginModal />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/category/:category" element={<CategoryPage />} />
              <Route path="/popular" element={<PopularPage />} />
              <Route path="/saved" element={<SavedPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/recipe/:id" element={<RecipeDetailPage />} />
              <Route path="/generate" element={<RecipeGenerator />} />
            </Routes>
          </Layout>
        )}
      </RecipeProvider>
    </AuthProvider>
  );
};

export default App;
