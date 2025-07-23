import React from "react";
import { ChefHat, Utensils, Star, Heart, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn } = useAuth();

  // Determine active item based on current path
  const getActiveItem = () => {
    const path = location.pathname;
    if (path === "/" || path === "/dashboard") return "dashboard";
    if (path === "/categories" || path.startsWith("/category/"))
      return "categories";
    if (path === "/popular") return "popular";
    if (path === "/saved") return "saved";
    if (path === "/signup" || path === "/signin") return "signup";
    return "dashboard"; // default
  };

  const activeItem = getActiveItem();

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <ChefHat className="w-5 h-5" />,
      path: "/dashboard",
    },
    {
      id: "categories",
      label: "Categories",
      icon: <Utensils className="w-5 h-5" />,
      path: "/categories",
    },
    {
      id: "popular",
      label: "Popular",
      icon: <Star className="w-5 h-5" />,
      path: "/popular",
    },
    {
      id: "saved",
      label: "Saved",
      icon: <Heart className="w-5 h-5" />,
      path: "/saved",
    },
    {
      id: "signup",
      label: isLoggedIn ? "Profile" : "Sign Up",
      icon: <User className="w-5 h-5" />,
      path: "/signup",
    },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    onClose?.(); // Close sidebar on mobile
  };

  return (
    // Sidebar container - Fixed position
    <aside
      className={`
        bg-white shadow-md h-[calc(100vh-64px)] fixed top-[64px] left-0 z-50
        w-64 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static lg:block
      `}
    >
      {/* Close button for mobile */}
      <div className="flex justify-between items-center px-4 py-4 lg:hidden">
        <h1 className="text-2xl font-bold text-slate-800">Menu</h1>
        <button onClick={onClose} className="text-slate-600 text-xl">
          &times;
        </button>
      </div>

      {/* Sidebar Title (desktop) */}
      <h1 className="hidden lg:block text-3xl font-bold text-slate-800 mb-8 text-center pt-4">
        Welcome
      </h1>

      <nav className="p-4 overflow-y-auto h-full">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavigation(item.path)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeItem === item.id
                    ? "bg-orange-50 text-orange-600 border-r-4 border-orange-300"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
