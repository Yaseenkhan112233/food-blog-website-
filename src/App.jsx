// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/common/Layout";

// Import contexts
import { AuthProvider } from "./context/AuthContext";
import { RecipeProvider } from "./context/RecipeContext";
import LoginModal from "./components/common/LoginModal";

// Import all pages
import Dashboard from "./pages/DashboardPage";
import CategoriesPage from "./pages/CategoriesPage";
import PopularPage from "./pages/PopularPage";
import SavedPage from "./pages/SavedPage";
import SignupPage from "./pages/SignupPage";
import SignInPage from "./pages/SignInPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import CategoryPage from "./pages/CategoryPage";

const App = () => {
  return (
    <AuthProvider>
      <RecipeProvider>
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
          </Routes>
        </Layout>
      </RecipeProvider>
    </AuthProvider>
  );
};

export default App;
