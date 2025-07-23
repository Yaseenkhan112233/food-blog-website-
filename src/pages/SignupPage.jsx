import React, { useState, useEffect, useRef } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth, googleProvider, storage } from "../firebase/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  User,
  LogOut,
  Camera,
  Upload,
  Mail,
  UserCircle,
  CheckCircle,
  AlertCircle,
  Calendar,
} from "lucide-react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const SignupPage = () => {
  const { isLoggedIn, currentUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [activeTab, setActiveTab] = useState("profile");
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  // Set initial profile data when user is logged in
  useEffect(() => {
    if (currentUser) {
      setUsername(currentUser.displayName || "");
      setEmail(currentUser.email || "");
      setProfileImageUrl(currentUser.photoURL || "");
    }
  }, [currentUser]);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Password validation
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password should be at least 6 characters");
      setLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Update profile with username
      if (username) {
        await updateProfile(userCredential.user, {
          displayName: username,
        });
      }

      setSuccessMessage("Account created successfully!");
      navigate("/");
    } catch (err) {
      setError(err.message);
      console.error("Registration error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await signInWithPopup(auth, googleProvider);
      // The user's Google profile is available in result.user
      // We already update the state through the useEffect when currentUser changes
      navigate("/");
    } catch (err) {
      setError(err.message);
      console.error("Google sign-in error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Clear form fields
      setUsername("");
      setEmail("");
      setProfileImageUrl("");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      console.error("Logout error:", err);
      setError(err.message);
    }
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    if (!currentUser) return;

    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      await updateProfile(currentUser, {
        displayName: username,
      });
      setSuccessMessage("Profile updated successfully!");
    } catch (err) {
      setError(err.message);
      console.error("Profile update error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = async (e) => {
    if (!e.target.files[0] || !currentUser) return;

    const file = e.target.files[0];
    setLoading(true);
    setError(null);

    try {
      // Create a storage reference
      const storageRef = ref(storage, `profile_images/${currentUser.uid}`);

      // Upload the file
      await uploadBytes(storageRef, file);

      // Get the download URL
      const downloadURL = await getDownloadURL(storageRef);

      // Update profile
      await updateProfile(currentUser, {
        photoURL: downloadURL,
      });

      setProfileImageUrl(downloadURL);
      setSuccessMessage("Profile image updated successfully!");
    } catch (err) {
      setError("Failed to upload image: " + err.message);
      console.error("Image upload error:", err);
    } finally {
      setLoading(false);
    }
  };

  // If user is logged in, show profile information
  if (isLoggedIn) {
    return (
      <div className="flex items-start justify-center min-h-[80vh] p-4 bg-gray-50">
        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="md:flex">
            {/* Sidebar/Navigation */}
            <div className="md:w-64 bg-orange-50 md:min-h-[600px] p-6">
              <div className="flex flex-col items-center mb-8">
                <div
                  className="w-24 h-24 rounded-full border-4 border-white overflow-hidden cursor-pointer relative mb-4 bg-white"
                  onClick={handleImageClick}
                >
                  {profileImageUrl ? (
                    <img
                      src={profileImageUrl}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-full h-full p-2 text-orange-400" />
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>
                <h2 className="text-xl font-bold text-slate-800">
                  {username || "User"}
                </h2>
                <p className="text-sm text-slate-600 truncate max-w-[180px]">
                  {email}
                </p>
              </div>

              {/* Navigation menu */}
              <nav className="mt-8">
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setActiveTab("profile")}
                      className={`w-full text-left px-4 py-3 rounded-lg flex items-center transition-colors ${
                        activeTab === "profile"
                          ? "bg-white text-orange-500 shadow-sm"
                          : "text-slate-700 hover:bg-orange-100"
                      }`}
                    >
                      <UserCircle className="w-5 h-5 mr-3" />
                      <span>Profile Information</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab("account")}
                      className={`w-full text-left px-4 py-3 rounded-lg flex items-center transition-colors ${
                        activeTab === "account"
                          ? "bg-white text-orange-500 shadow-sm"
                          : "text-slate-700 hover:bg-orange-100"
                      }`}
                    >
                      <Mail className="w-5 h-5 mr-3" />
                      <span>Account Settings</span>
                    </button>
                  </li>
                </ul>
              </nav>

              <div className="mt-auto pt-6">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center px-4 py-2 mt-10 bg-red-100 text-red-600 hover:bg-red-200 rounded-lg transition-colors"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </button>
              </div>
            </div>

            {/* Main content area */}
            <div className="flex-1 p-6 md:p-8">
              {/* Notification messages */}
              {error && (
                <div className="flex items-center bg-red-50 text-red-700 p-4 rounded-lg mb-6 text-sm">
                  <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {successMessage && (
                <div className="flex items-center bg-green-50 text-green-700 p-4 rounded-lg mb-6 text-sm">
                  <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span>{successMessage}</span>
                </div>
              )}

              {activeTab === "profile" && (
                <>
                  <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    Profile Information
                  </h1>

                  <div className="bg-gray-50 p-6 rounded-xl mb-8 border border-gray-100">
                    <div className="flex flex-wrap items-center">
                      <div className="w-full md:w-1/4">
                        <span className="text-sm font-medium text-gray-500">
                          MEMBER SINCE
                        </span>
                      </div>
                      <div className="w-full md:w-3/4 mt-2 md:mt-0">
                        <span className="flex items-center text-gray-800">
                          <Calendar className="w-4 h-4 mr-2 text-orange-400" />
                          {currentUser?.metadata?.creationTime
                            ? new Date(
                                currentUser.metadata.creationTime
                              ).toLocaleDateString()
                            : "N/A"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleProfileUpdate} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="username"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Username
                        </label>
                        <input
                          type="text"
                          id="username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all"
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="profile-email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="profile-email"
                          value={email}
                          readOnly
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-100 text-gray-500"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Email cannot be changed
                        </p>
                      </div>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={loading}
                        className="px-6 py-3 bg-orange-100 text-orange-700 hover:bg-orange-200 rounded-lg transition-colors disabled:opacity-70 flex items-center justify-center"
                      >
                        {loading ? (
                          <span className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-orange-700"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Updating...
                          </span>
                        ) : (
                          "Update Profile"
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}

              {activeTab === "account" && (
                <>
                  <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    Account Settings
                  </h1>

                  <div className="bg-gray-50 p-6 rounded-xl mb-6 border border-gray-100">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">
                      Email Address
                    </h3>
                    <p className="text-gray-600 mb-3">
                      Your current email address is <strong>{email}</strong>
                    </p>
                    <p className="text-sm text-gray-500">
                      This email is used for login and notifications.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">
                      Password
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Password changes are not available directly from this
                      page. If you need to reset your password, please use the
                      login page's "Forgot Password" option.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Otherwise show signup form
  return (
    <div className="flex items-center justify-center min-h-[80vh] p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-md p-8">
        <h1 className="text-2xl font-bold text-center mb-6">
          Create an Account
        </h1>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm">
            {error}
          </div>
        )}

        {successMessage && (
          <div className="bg-green-50 text-green-600 p-3 rounded-lg mb-4 text-sm">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
              required
              minLength={6}
            />
          </div>

          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
              required
              minLength={6}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-100 text-orange-700 hover:bg-orange-200 py-2 rounded-md transition-colors disabled:opacity-70"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <div className="mt-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <button
            onClick={handleGoogleSignUp}
            disabled={loading}
            className="mt-4 w-full flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-md py-2 px-4 text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-70"
          >
            <svg
              width="18"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            Sign up with Google
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/signin" className="text-orange-600 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
