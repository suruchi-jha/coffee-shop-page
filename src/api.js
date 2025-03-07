const API_URL = process.env.REACT_APP_API_URL || "https://coffee-shop-page.onrender.com"; 

export const login = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    return await response.json();
  } catch (error) {
    return { success: false, message: "Server error. Please try again." };
  }
};

export const signup = async (name, email, password) => {
  try {
    const response = await fetch(`${API_URL}/api/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    return await response.json();
  } catch (error) {
    return { success: false, message: "Server error. Please try again." };
  }
};
