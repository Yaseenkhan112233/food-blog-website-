import React, { useState, useRef, useEffect } from "react";
import { Search, User, ShoppingCart, Menu, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

const Header = ({ onMenuClick }) => {
  const navigate = useNavigate();
  const { isLoggedIn, currentUser, openLoginModal } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleAuthAction = () => {
    if (isLoggedIn) {
      // Toggle dropdown
      setDropdownOpen(!dropdownOpen);
    } else {
      // If not logged in, navigate to signup page
      navigate("/signup");
    }
  };

  const handleSignIn = () => {
    navigate("/signin");
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setDropdownOpen(false);
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleCartClick = () => {
    if (!isLoggedIn) {
      openLoginModal();
    } else {
      // Navigate to cart or show cart modal
      navigate("/saved");
    }
  };

  return (
    <header className="bg-[#DADBE0]  py-4 fixed top-0 left-0 right-0 z-50 h-16">
      <div className="flex items-center justify-between max-w-7xl mx-auto gap-4">
        {/* Left: Logo + Mobile Menu */}
        <div className="flex items-center space-x-2">
          {/* Mobile menu button (hidden on large screens) */}
          <button
            onClick={onMenuClick}
            className="lg:hidden text-slate-700 mr-2"
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          <img
            src="/images/1.png"
            alt="Logo"
            className="w-8 h-8 cursor-pointer"
            onClick={() => navigate("/")}
          />
          <span
            className="text-xl font-bold text-slate-800 cursor-pointer"
            onClick={() => navigate("/")}
          >
            ReciGen
          </span>
        </div>

        {/* Center: Search bar (hidden on very small screens) */}
        <div className="flex-1 max-w-md mx-4 hidden sm:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search recipes..."
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={handleAuthAction}
                className="flex items-center space-x-2 text-slate-600 hover:text-slate-800 transition-colors"
              >
                <User className="w-6 h-6" />
                <span className="hidden sm:inline text-sm">
                  {currentUser?.email?.split("@")[0] || "Account"}
                </span>
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <button
                onClick={handleSignIn}
                className="text-slate-600 hover:text-slate-800 transition-colors text-sm"
              >
                Sign In
              </button>
              <button
                onClick={handleAuthAction}
                className="text-slate-600 hover:text-slate-800 transition-colors text-sm"
              >
                Register
              </button>
            </div>
          )}

          <ShoppingCart
            onClick={handleCartClick}
            className="w-6 h-6 text-slate-600 hover:text-slate-800 cursor-pointer transition-colors"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
