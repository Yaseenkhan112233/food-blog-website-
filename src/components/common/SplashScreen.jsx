import React, { useState, useEffect } from "react";

const SplashScreen = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Show splash screen for 2.5 seconds, then start fade out
    const splashTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    // Complete the transition after fade out
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3200); // 2.5s display + 0.7s fade out

    return () => {
      clearTimeout(splashTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-blue-50 transition-opacity duration-700 ease-in-out ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center space-y-2">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800">
          Smart Recipes,
        </h1>
        <h2 className="text-5xl md:text-7xl font-bold text-blue-900 italic">
          Instantly
        </h2>
      </div>

      <div className="mt-24 animate-bounce">
        <svg
          width="80"
          height="60"
          viewBox="0 0 100 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-gray-800"
        >
          <path
            d="M10,30 Q50,60 90,30"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M72,15 L80,5"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};

export default SplashScreen;
