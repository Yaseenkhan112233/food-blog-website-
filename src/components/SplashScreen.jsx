import { useEffect, useState } from "react";

const SplashScreen = ({ onFinish }) => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
      setTimeout(onFinish, 500);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-yellow-100 transition-transform duration-500 ${
        hide ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <h1 className="text-3xl sm:text-5xl font-bold text-orange-600 animate-pulse px-4 text-center">
        Smart Recipes, Instantly.
      </h1>
    </div>
  );
};

export default SplashScreen;
