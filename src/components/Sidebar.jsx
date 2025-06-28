import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase"; // adjust path if needed

const Sidebar = ({ isOpen }) => {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      window.location.href = "/login"; // redirect after logout
    } catch (error) {
      console.error("Sign-out error:", error);
    }
  };

  return (
    <aside
      className={`${
        isOpen ? "block" : "hidden"
      } sm:block fixed sm:static w-64 z-40 bg-gray-800 text-white p-4 space-y-6`}
    >
      <div className="text-2xl font-bold">🍲 FoodyAI</div>
      <nav className="flex flex-col space-y-4">
        <a href="/" className="hover:text-orange-300">
          🏠 Home
        </a>
        <a href="/search" className="hover:text-orange-300">
          🔍 Search
        </a>
        <a href="/saved" className="hover:text-orange-300">
          💾 Save
        </a>
        <button
          onClick={handleSignOut}
          className="text-left hover:text-orange-300"
        >
          🔓 Sign Out
        </button>
        <a href="/support" className="hover:text-orange-300">
          🛠️ Support
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
