// import { useState } from "react";
// import SplashScreen from "./components/SplashScreen";
// import Home from "./pages/Home";
// import { RecipeProvider } from "./context/RecipeContext";

// function App() {
//   const [showSplash, setShowSplash] = useState(true);

//   return (
//     <RecipeProvider>
//       {showSplash ? (
//         <SplashScreen onFinish={() => setShowSplash(false)} />
//       ) : (
//         <Home />
//       )}
//     </RecipeProvider>
//   );
// }

// export default App;

// import { useState, useEffect } from "react";
// import SplashScreen from "./components/SplashScreen";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import { RecipeProvider } from "./context/RecipeContext";
// import { AuthProvider, useAuth } from "./context/AuthContext";

// function AppWrapper() {
//   return (
//     <AuthProvider>
//       <RecipeProvider>
//         <App />
//       </RecipeProvider>
//     </AuthProvider>
//   );
// }

// function App() {
//   const [showSplash, setShowSplash] = useState(true);
//   const { user, authLoading } = useAuth();

//   useEffect(() => {
//     const timer = setTimeout(() => setShowSplash(false), 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   if (showSplash) return <SplashScreen />;

//   if (authLoading) {
//     return (
//       <div className="flex items-center justify-center h-screen text-orange-500">
//         Checking authentication...
//       </div>
//     );
//   }

//   return user ? <Home /> : <Login />;
// }

// export default AppWrapper;

import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { RecipeProvider } from "./context/RecipeContext";
import { AuthProvider, useAuth } from "./context/AuthContext";

function AppWrapper() {
  return (
    <AuthProvider>
      <RecipeProvider>
        <App />
      </RecipeProvider>
    </AuthProvider>
  );
}

function App() {
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);
  const { user, authLoading } = useAuth();

  useEffect(() => {
    // Show splash screen only once at initial mount
    const timer = setTimeout(() => {
      setHasLoadedOnce(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!hasLoadedOnce) return <SplashScreen />;

  if (authLoading) {
    return (
      <div className="flex items-center justify-center h-screen text-orange-500">
        Checking authentication...
      </div>
    );
  }

  return user ? <Home /> : <Login />;
}

export default AppWrapper;
