import axios from "axios";

const login = async (username, password) => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/login_admin/", {
      username,
      password,
    });
    const token = response.data.token; 
    localStorage.setItem("authToken", token); 
    console.log("Logged in successfully!");
    return token;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};