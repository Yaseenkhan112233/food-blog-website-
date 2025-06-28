import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

const Login = () => {
  const [mode, setMode] = useState("login"); // login | signup | reset
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const { loginWithEmail, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const isLogin = mode === "login";
  const isSignup = mode === "signup";
  const isReset = mode === "reset";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      if (isLogin) {
        await loginWithEmail(email, password);
        navigate("/");
      }

      if (isSignup) {
        if (password !== confirmPassword) {
          return setError("Passwords do not match.");
        }
        const userCred = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(userCred.user, {
          displayName: username,
        });
        setMessage("Account created! You can now log in.");
        setMode("login");
        setUsername("");
        setPassword("");
        setConfirmPassword("");
        setEmail("");
      }

      if (isReset) {
        await sendPasswordResetEmail(auth, email);
        setMessage("Password reset link sent to your email.");
        setMode("login");
      }
    } catch (err) {
      setError(err.message || "Something went wrong.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (err) {
      setError("Google Sign-In Failed.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-4">
        <h2 className="text-xl font-bold text-center">
          {isLogin && "Login to FoodyAI"}
          {isSignup && "Create your FoodyAI Account"}
          {isReset && "Reset your Password"}
        </h2>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        {message && (
          <p className="text-green-500 text-sm text-center">{message}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          {isSignup && (
            <input
              type="text"
              placeholder="Username"
              className="w-full border p-2 rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {!isReset && (
            <>
              <input
                type="password"
                placeholder="Password"
                className="w-full border p-2 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {isSignup && (
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full border p-2 rounded"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              )}
            </>
          )}

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
          >
            {isLogin && "Sign In"}
            {isSignup && "Sign Up"}
            {isReset && "Send Reset Email"}
          </button>
        </form>

        {isLogin && (
          <>
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <button
                className="hover:underline"
                onClick={() => setMode("signup")}
              >
                Create account
              </button>
              <button
                className="hover:underline"
                onClick={() => setMode("reset")}
              >
                Forgot password?
              </button>
            </div>

            <div className="text-center text-sm text-gray-500">or</div>

            <button
              onClick={handleGoogleLogin}
              className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
            >
              Sign in with Google
            </button>
          </>
        )}

        {(isSignup || isReset) && (
          <div className="text-center text-sm">
            <button
              onClick={() => setMode("login")}
              className="text-blue-600 hover:underline mt-2"
            >
              Back to Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
