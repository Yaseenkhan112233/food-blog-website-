const Sidebar = ({ isOpen }) => {
  return (
    <aside
      className={`${
        isOpen ? "block" : "hidden"
      } sm:block fixed sm:static w-64 z-40 bg-gray-800 text-white p-4 space-y-6`}
    >
      <div className="text-2xl font-bold">🍲 FoodyAI</div>
      <nav className="flex flex-col space-y-4">
        <a href="#" className="hover:text-orange-300">
          🏠 Home
        </a>
        <a href="#" className="hover:text-orange-300">
          🔍 Search
        </a>
        <a href="#" className="hover:text-orange-300">
          💾 Save
        </a>
        <a href="#" className="hover:text-orange-300">
          🔓 Sign Out
        </a>
        <a href="#" className="hover:text-orange-300">
          🛠️ Support
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
