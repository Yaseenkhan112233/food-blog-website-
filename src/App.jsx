import { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import Home from "./pages/Home";
import { RecipeProvider } from "./context/RecipeContext";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <RecipeProvider>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <Home />
      )}
    </RecipeProvider>
  );
}

export default App;
