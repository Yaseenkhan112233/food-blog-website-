import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // for mobile

  return (
    <div className="min-h-screen bg-[#EFF0F5] flex flex-col">
      {/* Header */}
      <Header onMenuClick={() => setSidebarOpen(true)} />

      {/* Add space for fixed header */}
      <div className="pt-16"></div>

      <div className="flex flex-1">
        {/* Sidebar (fixed) */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          {/* This is just a placeholder for sidebar space */}
        </div>

        {/* Actual sidebar that's fixed */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main content area - with its own scrollbar */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <div className="max-w-6xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
