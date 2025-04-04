// frontend/src/services/auth.js
// This file will handle all authentication-related API calls and token management

const API_URL = "http://localhost:8000/api";

// Store JWT token in localStorage
const setTokens = (tokens) => {
  localStorage.setItem("accessToken", tokens.access);
  localStorage.setItem("refreshToken", tokens.refresh);
  localStorage.setItem("user", JSON.stringify(tokens.user));
};

// Remove tokens on logout
const removeTokens = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("user");
};

// Get current user from localStorage
const getCurrentUser = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);
  return null;
};

// Login user
const login = async (username, password) => {
  try {
    const response = await fetch(`${API_URL}/users/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error("Invalid username or password");
      }
      throw new Error("Login failed");
    }

    const data = await response.json();
    setTokens(data);
    return data;
  } catch (error) {
    throw error;
  }
};

// Register new user
const register = async (username, email, password) => {
  try {
    const response = await fetch(`${API_URL}/users/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      // Format error messages from Django
      const errorMessage = Object.entries(errorData)
        .map(([key, value]) => `${key}: ${value.join(", ")}`)
        .join("; ");
      throw new Error(errorMessage || "Registration failed");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

// Logout user
const logout = () => {
  removeTokens();
};

// Check if user is logged in
const isAuthenticated = () => {
  return !!localStorage.getItem("accessToken");
};

// Get auth header
const authHeader = () => {
  const token = localStorage.getItem("accessToken");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const AuthService = {
  login,
  register,
  logout,
  getCurrentUser,
  isAuthenticated,
  authHeader,
};

export default AuthService;